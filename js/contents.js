// ===================== MARKED CONFIG =====================
marked.setOptions({
  mangle: false,
  headerIds: true,
  gfm: true,
  breaks: true,
});

// ===================== CHAPTER ELEMENTS =====================

// Create clickable link for a chapter
function createLink(ch) {
  const a = document.createElement("a");
  a.href = "#chapter" + ch.number;

  const numberSpan = document.createElement("span");
  numberSpan.textContent = ch.number;

  const colonSpan = document.createElement("span");
  colonSpan.textContent = ":";

  const titleSpan = document.createElement("span");
  titleSpan.textContent = ch.name;

  a.append(numberSpan, colonSpan, titleSpan);
  return a;
}

// Create slider and return references to all its elements
function createSlider() {
  const slider = document.createElement("div");
  slider.className = "question-slider";
  slider.style.display = "none";

  // Exercise title
  const exerciseTitle = document.createElement("div");
  exerciseTitle.className = "exercise-title";

  // Question content
  const questionContent = document.createElement("div");
  questionContent.className = "question-content";

  // Page indicator
  const pageIndicator = document.createElement("div");
  pageIndicator.className = "page-indicator";

  // Buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "question-buttons";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.className = "prev-btn";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.className = "next-btn";

  buttonsContainer.append(prevBtn, nextBtn);
  slider.append(
    exerciseTitle,
    questionContent,
    pageIndicator,
    buttonsContainer
  );

  return {
    slider,
    exerciseTitle,
    questionContent,
    pageIndicator,
    prevBtn,
    nextBtn,
  };
}

// Create section for a chapter and attach slider references
function createSection(ch) {
  const section = document.createElement("section");
  section.id = "chapter" + ch.number;
  section.style.display = "none";

  const title = document.createElement("h2");
  title.textContent = `Chapter ${ch.number}: ${ch.name}`;

  const content = document.createElement("div");
  content.className = "chapter-content";

  const sliderElements = createSlider();
  section.append(title, content, sliderElements.slider);

  // Store slider elements for easy access later
  section.sliderElements = sliderElements;

  return section;
}

// Package chapter elements together
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
  if (chapter.abstract && !chapter.loaded) {
    fetch(baseFolder + chapter.abstract)
      .then((res) => res.text())
      .then((md) => {
        const contentDiv = getContentDiv(section);
        contentDiv.innerHTML = marked.parse(md);
        chapter.loaded = true;
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
  const { slider, exerciseTitle, questionContent, pageIndicator } =
    sliderElements;

  exerciseTitle.textContent = questions[index].name;

  questionContent.innerHTML = marked.parse(questions[index].question || "");
  pageIndicator.textContent = `Page: ${index + 1} / ${questions.length}`;

  slider.style.display = "flex";

  renderMath(questionContent);
}

function fetchQuestions(baseFolder, chapter) {
  if (!chapter.questions) return Promise.resolve([]);
  return fetch(baseFolder + chapter.questions)
    .then((res) => res.json())
    .then((data) => data.questions || []);
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
    initSlider(section.sliderElements, questions);
  });
}

// ===================== CHAPTER DISPLAY =====================
function showChapter(index, chaptersArr, baseFolder) {
  chaptersArr.forEach((c) => {
    c.section.style.display = "none";
    c.link.classList.remove("active");
  });

  const current = chaptersArr[index];
  current.section.style.display = "block";
  current.link.classList.add("active");

  loadChapterContent(current.section, current.chapter, baseFolder);
  loadQuestions(current.section, current.chapter, baseFolder);
}

// ===================== LOAD ABSTRACT JSON =====================
function fetchAbstract(jsonPath) {
  return fetch(jsonPath)
    .then((res) => res.json())
    .then((data) => {
      const baseFolder = jsonPath.substring(0, jsonPath.lastIndexOf("/") + 1);
      return { data, baseFolder };
    });
}

function renderAbstract(data, baseFolder) {
  const list = document.getElementById("chapter-list");
  const out = document.getElementById("summaries");
  list.innerHTML = "";
  out.innerHTML = "";

  const chaptersArr = [];

  data.chapters.forEach((ch, i) => {
    const elems = createChapterElements(ch);

    list.appendChild(document.createElement("li")).appendChild(elems.link);
    out.appendChild(elems.section);
    chaptersArr.push(elems);

    elems.link.addEventListener("click", (e) => {
      e.preventDefault();
      showChapter(i, chaptersArr, baseFolder);
    });
  });

  showChapter(0, chaptersArr, baseFolder);
}

function loadAbstract(jsonPath) {
  fetchAbstract(jsonPath).then(({ data, baseFolder }) => {
    renderAbstract(data, baseFolder);
  });
}
