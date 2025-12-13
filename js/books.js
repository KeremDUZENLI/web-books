var containerChapters = document.getElementById("container_chapters");
var containerAbstract = document.getElementById("container_abstract");

var titleExercises = document.getElementById("title_exercises");
var sliderExercises = document.getElementById("slider_exercises");
var sliderQuestion = document.getElementById("slider_question");
var sliderResponse = document.getElementById("slider_response");
var buttonPrev = document.getElementById("button_prev");
var buttonNext = document.getElementById("button_next");
var indicatorExercises = document.getElementById("indicator_exercises");

var currentIndex = 0;

function resetPage(title) {
  containerAbstract.innerHTML = "";
  createItem(containerAbstract, "h1", title);

  titleExercises.innerHTML = "";
  sliderQuestion.innerHTML = "";
  sliderResponse.innerHTML = "";
  sliderExercises.classList.remove("visible");
}

function createItem(container, type, text) {
  var item = document.createElement(type);
  item.textContent = text;
  container.appendChild(item);
}

function createLinkChapter(chapter) {
  var link = document.createElement("a");
  link.href = "#chapter" + chapter.chapter;
  link.className = "chapter_link";

  var number = document.createElement("span");
  number.textContent = chapter.chapter;

  var colon = document.createElement("span");
  colon.textContent = ":";

  var title = document.createElement("span");
  title.textContent = chapter.title;

  link.append(number, colon, title);
  return link;
}

function renderMarkdown(container, text) {
  var correctText = text
    // 1. Fix Indentation (Your working "1 space" trick)
    .replace(/^[\t ]+(\$\$)/gm, " $1")

    // 2. Fix New Lines
    .replace(/\\\\/g, "\\\\\\\\")

    // 3. This Regex finds Math blocks ($$...$$) OR ($...$)
    .replace(/(\$\$[\s\S]+?\$\$)|(\$[^$\n]+?\$)/gm, function (match) {
      return match
        .replace(/_/g, "\\_") // Fix Subscript
        .replace(/\|/g, "\\|"); // Fix Vertical Bar
    })

    // 4. Fix "Bullet Point" Dashes in Matrices
    .replace(/- (&)/g, "\\- $1")

    // 5. Fix Fractions
    .replace(/\\frac/g, "\\dfrac");

  container.innerHTML = marked(correctText);

  if (window.MathJax) {
    MathJax.typesetPromise([container]);
  }
}

function renderAbstract(abstract) {
  fetchText(abstract, function (text) {
    renderMarkdown(containerAbstract, text);
  });
}

function renderExercise(exercise) {
  sliderQuestion.innerHTML = "";
  sliderResponse.innerHTML = "";

  if (exercise.question) {
    fetchText(exercise.question, function (text) {
      renderMarkdown(sliderQuestion, text);
    });
  }
  if (exercise.response) {
    fetchText(exercise.response, function (text) {
      renderMarkdown(sliderResponse, text);
    });
  }
}

function updateIndicator(listExercises) {
  indicatorExercises.textContent =
    currentIndex + 1 + " / " + listExercises.length;
}
function updateButtons(listExercises) {
  buttonPrev.disabled = currentIndex === 0;
  buttonNext.disabled = currentIndex === listExercises.length - 1;
}
function goPrev(listExercises) {
  if (currentIndex > 0) {
    currentIndex--;
    renderExercise(listExercises[currentIndex]);
    updateButtons(listExercises);
    updateIndicator(listExercises);
  }
}
function goNext(listExercises) {
  if (currentIndex < listExercises.length - 1) {
    currentIndex++;
    renderExercise(listExercises[currentIndex]);
    updateButtons(listExercises);
    updateIndicator(listExercises);
  }
}

function runExercises(listExercises) {
  currentIndex = 0;

  buttonPrev.onclick = function () {
    goPrev(listExercises);
  };
  buttonNext.onclick = function () {
    goNext(listExercises);
  };

  renderExercise(listExercises[currentIndex]);
  updateButtons(listExercises);
  updateIndicator(listExercises);
}

function renderChapter(chapter) {
  resetPage();

  if (chapter.abstract) {
    renderAbstract(chapter.abstract);
  } else if (chapter.subchapters && chapter.subchapters.length > 0) {
    createItem(containerAbstract, "h2", chapter.chapter + ": " + chapter.title);

    var listSubchapters = document.createElement("ul");
    listSubchapters.className = "list_subchapters";

    for (var i = 0; i < chapter.subchapters.length; i++) {
      var sub = chapter.subchapters[i];

      createItem(listSubchapters, "li", sub.chapter + ": " + sub.title);
    }
    containerAbstract.appendChild(listSubchapters);
  } else {
    createItem(containerAbstract, "h2", chapter.chapter + ": " + chapter.title);
  }

  if (chapter.exercises && chapter.exercises.length > 0) {
    createItem(titleExercises, "hr");
    createItem(titleExercises, "h2", "Exercises");
    runExercises(chapter.exercises);
    sliderExercises.classList.add("visible");
  }
}

function createButtonShowHide(liChapter, linkChapter, containerChaptersSub) {
  let chapterRow = document.createElement("div");
  chapterRow.className = "chapter_row";

  let toggleButton = document.createElement("span");

  if (containerChaptersSub) {
    toggleButton.className = "toggle_button";
    toggleButton.textContent = "▶";

    toggleButton.onclick = function () {
      let isOpen = containerChaptersSub.classList.toggle("open");

      if (isOpen) {
        this.textContent = "▼";
      } else {
        this.textContent = "▶";
      }
    };
  } else {
    toggleButton.className = "toggle_placeholder";
  }

  chapterRow.appendChild(toggleButton);
  chapterRow.appendChild(linkChapter);
  liChapter.appendChild(chapterRow);
}

function runChapters(listChapters, containerParent) {
  for (let i = 0; i < listChapters.length; i++) {
    let liChapter = document.createElement("li");
    let linkChapter = createLinkChapter(listChapters[i]);

    linkChapter.onclick = function (e) {
      e.preventDefault();
      var isActive = toggleButton(this, containerChapters, "chapter_link");

      if (isActive) {
        renderChapter(listChapters[i]);
      } else {
        resetPage(document.title);
      }
    };

    if (listChapters[i].subchapters && listChapters[i].subchapters.length > 0) {
      let containerChaptersSub = document.createElement("ul");
      containerChaptersSub.className = "container_subchapters";

      createButtonShowHide(liChapter, linkChapter, containerChaptersSub);

      runChapters(listChapters[i].subchapters, containerChaptersSub);
      liChapter.appendChild(containerChaptersSub);
    } else {
      createButtonShowHide(liChapter, linkChapter);
    }

    containerParent.appendChild(liChapter);
  }
}

function runAllChapters(listChapters) {
  containerChapters.innerHTML = "";
  runChapters(listChapters, containerChapters);
}
