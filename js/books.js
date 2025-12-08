function createItem(container, type, text) {
  var item = document.createElement(type);
  item.textContent = text;
  container.insertBefore(item, container.firstChild);
}

function resetPage(title) {
  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  var containerTemplate = document.getElementById("container_template");

  containerAbstract.innerHTML = "";
  createItem(containerAbstract, "h1", title);

  containerExercises.innerHTML = "";
  containerExercises.appendChild(containerTemplate.content.cloneNode(true));
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
  var containerAbstract = document.getElementById("container_abstract");

  fetchText(abstract, function (text) {
    containerAbstract.innerHTML = marked(text);
  });
}

function renderExercise(exercise) {
  var areaQuestion = document.getElementById("area_question");
  var areaResponse = document.getElementById("area_response");

  fetchText(exercise.question, function (text) {
    areaQuestion.innerHTML = marked(text);
  });
  fetchText(exercise.response, function (text) {
    areaResponse.innerHTML = marked(text);
  });
}

function runExercises(listExercises) {
  currentIndex = 0;
  var buttonPrev = document.getElementById("button_prev");
  var buttonNext = document.getElementById("button_next");

  buttonPrev.onclick = function () {
    goPrev(listExercises);
  };
  buttonNext.onclick = function () {
    goNext(listExercises);
  };

  renderExercise(listExercises[currentIndex]);
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

function renderChapter(chapter) {
  resetPage();

  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  var slider_controls = document.getElementById("slider_controls");

  if (chapter.abstract) {
    renderAbstract(chapter.abstract);
  } else {
    createItem(containerAbstract, "h1", "Not Available Yet");
  }

  if (chapter.exercises && chapter.exercises.length) {
    createItem(containerExercises, "hr");
    createItem(containerExercises, "h2", "Exercises");
    runExercises(chapter.exercises);
    slider_controls.classList.add("visible");
  } else {
    slider_controls.classList.remove("visible");
  }
}

function runChapters(listChapters) {
  var containerChapters = document.getElementById("chapters");
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
