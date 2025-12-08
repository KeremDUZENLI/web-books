function resetPage(title) {
  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  containerExercises.innerHTML = `
    <div id="panel_questions"></div>
    <div id="panel_responses"></div>
  `;

  containerAbstract.innerHTML = "";
  if (title) {
    createEl("h1", title, containerAbstract);
  }
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

function createEl(type, text, container, insertBefore) {
  var header = document.createElement(type);
  header.textContent = text;
  if (insertBefore) {
    container.insertBefore(header, insertBefore);
  } else {
    container.appendChild(header);
  }
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
  resetPage();

  var containerAbstract = document.getElementById("container_abstract");
  var containerExercises = document.getElementById("container_exercises");
  var panelQuestions = document.getElementById("panel_questions");
  var panelResponses = document.getElementById("panel_responses");

  if (chapter.abstract) {
    renderAbstract(chapter.abstract, containerAbstract);
  } else {
    createEl("h1", "Not Available Yet", containerAbstract);
  }
  if (chapter.exercises && chapter.exercises.length > 0) {
    createEl("hr", "", containerExercises, panelQuestions);
    createEl("h2", "Exercises", containerExercises, panelQuestions);
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
        resetPage("Choose a Chapter");
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
