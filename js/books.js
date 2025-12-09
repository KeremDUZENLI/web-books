var containerChapters = document.getElementById("container_chapters");
var containerAbstract = document.getElementById("container_abstract");

var titleExercises = document.getElementById("title_exercises");
var areaQuestion = document.getElementById("area_question");
var areaResponse = document.getElementById("area_response");
var slider_controls = document.getElementById("slider_controls");
var buttonPrev = document.getElementById("button_prev");
var buttonNext = document.getElementById("button_next");

var currentIndex = 0;

function resetPage(title) {
  containerAbstract.innerHTML = "";
  createItem(containerAbstract, "h1", title);

  titleExercises.innerHTML = "";
  areaQuestion.innerHTML = "";
  areaResponse.innerHTML = "";
  slider_controls.classList.remove("visible");
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

function renderAbstract(abstract) {
  fetchText(abstract, function (text) {
    containerAbstract.innerHTML = marked(text);
  });
}

function renderExercise(exercise) {
  fetchText(exercise.question, function (text) {
    areaQuestion.innerHTML = marked(text);
  });
  fetchText(exercise.response, function (text) {
    areaResponse.innerHTML = marked(text);
  });
}

function goPrev(listExercises) {
  if (currentIndex > 0) {
    currentIndex--;
    renderExercise(listExercises[currentIndex]);
  }
}
function goNext(listExercises) {
  if (currentIndex < listExercises.length - 1) {
    currentIndex++;
    renderExercise(listExercises[currentIndex]);
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
}

function renderChapter(chapter) {
  resetPage("Abstract not available yet");

  if (chapter.abstract) {
    renderAbstract(chapter.abstract);
  }

  if (chapter.exercises && chapter.exercises.length) {
    createItem(titleExercises, "hr");
    createItem(titleExercises, "h2", "Exercises");
    runExercises(chapter.exercises);
    slider_controls.classList.add("visible");
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

function fetchText(path, callback) {
  fetch(path)
    .then((response) => response.text())
    .then((data) => callback(data));
}
