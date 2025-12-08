function resetPage() {
  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  containerExercises.innerHTML = `
    <div id="panel_questions"></div>
    <div id="panel_responses"></div>
  `;

  containerAbstract.innerHTML = "<h1>" + document.title + "</h1>";
}

function createLinkChapter(chapter) {
  var link = document.createElement("a");
  link.href = "#chapter" + chapter.order;
  link.className = "chapter_link";

  var number = document.createElement("span");
  number.textContent = chapter.order;

  var colon = document.createElement("span");
  colon.textContent = ":";

  var title = document.createElement("span");
  title.textContent = chapter.title;

  link.append(number, colon, title);
  return link;
}

function createElement(text, type, container, insertBefore) {
  var header = document.createElement(type);
  header.textContent = text;
  container.insertBefore(header, insertBefore);
}

function renderAbstract(abstract, containerAbstract) {
  fetchText(abstract, function (text) {
    containerAbstract.innerHTML = marked(text);
  });
}

function renderExercise(exercise, panelQuestions, panelResponses) {
  fetchText(exercise.question, function (text) {
    var divQuestion = document.createElement("div");
    divQuestion.innerHTML = marked(text);
    panelQuestions.appendChild(divQuestion);
  });
  fetchText(exercise.response, function (text) {
    var divResponse = document.createElement("div");
    divResponse.innerHTML = marked(text);
    panelResponses.appendChild(divResponse);
  });
}

function renderChapter(chapter) {
  var mainAbstract = document.getElementById("abstract");
  mainAbstract.innerHTML = `
  <div id="container_abstract"></div>
  
  <div id="container_exercises">
  <div id="panel_questions"></div>
  <div id="panel_responses"></div>
  </div>
  `;

  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  var panelQuestions = document.getElementById("panel_questions");
  var panelResponses = document.getElementById("panel_responses");

  if (!chapter.abstract) {
    return;
  } else {
    renderAbstract(chapter.abstract, containerAbstract);
  }

  if (!chapter.exercises) {
    return;
  } else {
    createElement("", "hr", containerExercises, panelQuestions);
    createElement("Exercises", "h2", containerExercises, panelQuestions);
    for (let i = 0; i < chapter.exercises.length; i++) {
      renderExercise(chapter.exercises[i], panelQuestions, panelResponses);
    }
  }
}

function renderChapters(listChapters) {
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
        resetPage();
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
