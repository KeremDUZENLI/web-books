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
  container.insertBefore(item, container.firstChild);
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
  var cleanText = text
    // 1. Fix New Lines (\\ -> \\\\)
    .replace(/\\\\/g, "\\\\\\\\")

    // 2. Fix Subscripts (_ -> \_)
    .replace(/_/g, "\\_")

    // 3. Fix Vertical Bars (| -> \|)
    .replace(/\|/g, "\\|")

    // 4. THE NEW FIX: Fix "Bullet Point" Dashes in Matrices
    .replace(/- (&)/g, "\\- $1");

  container.innerHTML = marked(cleanText);
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
  }

  if (chapter.exercises) {
    createItem(titleExercises, "hr");
    createItem(titleExercises, "h2", "Exercises");
    runExercises(chapter.exercises);
    sliderExercises.classList.add("visible");
  }
}

function runChapters(listChapters) {
  containerChapters.innerHTML = "";

  for (let i = 0; i < listChapters.length; i++) {
    var liChapter = document.createElement("li");
    var linkChapter = createLinkChapter(listChapters[i]);

    linkChapter.onclick = function (e) {
      e.preventDefault();
      var isActive = toggleButton(this, containerChapters, "chapter_link");

      if (isActive) {
        renderChapter(listChapters[i]);
      } else {
        resetPage(document.title);
      }
    };

    liChapter.appendChild(linkChapter);
    containerChapters.appendChild(liChapter);
  }
}
