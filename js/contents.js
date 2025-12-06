// ===================== MARKED CONFIG =====================
marked.setOptions({
  mangle: false,
  headerIds: true,
  gfm: true,
  breaks: true,
});

// ===================== CHAPTER ELEMENTS =====================
function createLink(ch) {
  const a = document.createElement("a");
  a.href = "#chapter" + ch.order;

  const numberSpan = document.createElement("span");
  numberSpan.textContent = ch.order;

  const colonSpan = document.createElement("span");
  colonSpan.textContent = ":";

  const titleSpan = document.createElement("span");
  titleSpan.textContent = ch.title;

  a.append(numberSpan, colonSpan, titleSpan);
  return a;
}

function createSlider() {
  var slider = document.createElement("div");
  slider.className = "question-slider";
  slider.style.display = "none";

  // Question content
  var questionContent = document.createElement("div");
  questionContent.className = "question-content";

  // Page indicator
  var pageIndicator = document.createElement("div");
  pageIndicator.className = "page-indicator";

  // Buttons container
  var buttonsContainer = document.createElement("div");
  buttonsContainer.className = "question-buttons";

  var prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.className = "prev-btn";

  var nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.className = "next-btn";

  buttonsContainer.append(prevBtn, nextBtn);
  slider.append(questionContent, pageIndicator, buttonsContainer);

  return {
    slider: slider,
    questionContent: questionContent,
    pageIndicator: pageIndicator,
    prevBtn: prevBtn,
    nextBtn: nextBtn,
  };
}

function createSection(ch) {
  const section = document.createElement("section");
  section.id = "chapter" + ch.order;
  section.style.display = "none";

  const title = document.createElement("h2");
  title.textContent = `Chapter ${ch.order}: ${ch.title}`;

  const content = document.createElement("div");
  content.className = "chapter-content";

  const sliderElements = createSlider();
  section.append(title, content, sliderElements.slider);

  section.sliderElements = sliderElements;
  return section;
}

function createChapterElements(ch) {
  return {
    chapter: ch,
    link: createLink(ch),
    section: createSection(ch),
  };
}

// ===================== CONTENT & TYPESCRIPT =====================
function getContentDiv(section) {
  let content = section.querySelector(".chapter-content");
  if (!content) {
    content = document.createElement("div");
    content.className = "chapter-content";
    section.appendChild(content);
  }
  return content;
}

function typesetSection(section) {
  if (window.MathJax?.startup?.promise) {
    MathJax.startup.promise.then(() => MathJax.typesetPromise([section]));
  }
}

function loadChapterContent(section, chapter, baseFolder) {
  const contentDiv = section.querySelector(".chapter-content");

  if (chapter.abstract) {
    fetch(baseFolder + chapter.abstract)
      .then((res) => res.text())
      .then((md) => {
        const contentDiv = section.querySelector(".chapter-content");
        contentDiv.innerHTML = marked.parse(md);
        typesetSection(section);
      });
  } else {
    typesetSection(section);
  }
}

// ===================== QUESTIONS / SLIDER =====================
function goPrev(index) {
  return index > 0 ? index - 1 : index;
}

function goNext(index, questions) {
  return index < questions.length - 1 ? index + 1 : index;
}

function renderMath(contentDiv) {
  contentDiv.innerHTML = contentDiv.innerHTML.replace(/\\\\/g, "\\");
  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise([contentDiv]);
  }
}

function showQuestion(sliderElements, questions, index) {
  const { slider, questionContent, pageIndicator } = sliderElements;

  questionContent.innerHTML = marked.parse(questions[index].question);
  pageIndicator.textContent = `Page: ${index + 1} / ${questions.length}`;

  slider.style.display = "flex";

  renderMath(questionContent);
}

function fetchQuestions(baseFolder, chapter) {
  if (!chapter.exercise || chapter.exercise.length === 0)
    return Promise.resolve([]);

  var promises = chapter.exercise.map((e) =>
    fetch(baseFolder + e.question)
      .then((res) => res.text())
      .then((qText) =>
        fetch(baseFolder + e.response)
          .then((res) => res.text())
          .then((rText) => ({ question: qText, response: rText }))
      )
  );

  return Promise.all(promises);
}

function initSlider(sliderElements, questions) {
  if (!questions.length) {
    sliderElements.slider.style.display = "none";
    return;
  }

  let index = 0;
  const { prevBtn, nextBtn } = sliderElements;

  prevBtn.onclick = () => {
    index = goPrev(index);
    showQuestion(sliderElements, questions, index);
  };

  nextBtn.onclick = () => {
    index = goNext(index, questions);
    showQuestion(sliderElements, questions, index);
  };

  showQuestion(sliderElements, questions, index);
}

function loadQuestions(section, chapter, baseFolder) {
  fetchQuestions(baseFolder, chapter).then((questions) => {
    if (questions.length) {
      initSlider(section.sliderElements, questions);
    }
  });
}

// ===================== CHAPTER DISPLAY =====================
function showChapter(index, chaptersArr, baseFolder) {
  // hide all chapters and deactivate links
  for (var i = 0; i < chaptersArr.length; i++) {
    chaptersArr[i].section.style.display = "none";
    chaptersArr[i].link.classList.remove("active");
  }

  // show the selected chapter and activate its link
  var current = chaptersArr[index];
  current.section.style.display = "block";
  current.link.classList.add("active");

  // load chapter content and questions
  loadChapterContent(current.section, current.chapter, baseFolder);
  loadQuestions(current.section, current.chapter, baseFolder);
}

// ===================== LOAD ABSTRACT JSON =====================
function fetchAbstract(jsonPath) {
  return fetch(jsonPath)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var baseFolder = jsonPath.substring(0, jsonPath.lastIndexOf("/") + 1);
      return { data: data, baseFolder: baseFolder };
    });
}

function renderAbstract(data, baseFolder) {
  var list = document.getElementById("chapter-list");
  var out = document.getElementById("summaries");
  list.innerHTML = "";
  out.innerHTML = "";

  var chaptersArr = [];

  // data is an array, not object
  for (var i = 0; i < data.length; i++) {
    var ch = data[i];
    var elems = createChapterElements(ch);

    var li = document.createElement("li");
    li.appendChild(elems.link);
    list.appendChild(li);

    out.appendChild(elems.section);

    chaptersArr.push(elems);

    (function (iCopy) {
      elems.link.addEventListener("click", function (e) {
        e.preventDefault();
        showChapter(iCopy, chaptersArr, baseFolder);
      });
    })(i);
  }

  showChapter(0, chaptersArr, baseFolder);
}

function loadAbstract(jsonPath) {
  fetchAbstract(jsonPath).then(({ data, baseFolder }) => {
    renderAbstract(data, baseFolder);
  });
}
