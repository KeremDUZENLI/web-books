function firstPageChapter() {
  document.getElementById("container_abstract").innerHTML =
    "<h1>" + document.title + "</h1>";
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

function renderChapters(listChapters) {
  var containerChapters = document.getElementById("chapters");
  containerChapters.innerHTML = "";

  for (let i = 0; i < listChapters.length; i++) {
    let chapter = listChapters[i];

    var liChapter = document.createElement("li");
    var linkChapter = createLinkChapter(chapter);

    linkChapter.onclick = function (e) {
      e.preventDefault();
      var isActive = toggleButton(this, containerChapters, "chapter_link");

      if (isActive) {
        renderAbstract(chapter);
      } else {
        firstPageChapter();
      }
    };

    liChapter.appendChild(linkChapter);
    containerChapters.appendChild(liChapter);
  }
}

function renderAbstract(chapter) {
  var containerAbstract = document.getElementById("container_abstract");

  if (!chapter.abstract) {
    containerAbstract.innerHTML = "<h2>Not Available Yet</h2>";
    return;
  }

  fetchText(chapter.abstract, function (text) {
    containerAbstract.innerHTML = marked(text);
  });
  renderExercises(chapter.exercises);
}

function renderExercises(exercises) {
  var containerExercises = document.getElementById("container_exercises");
  var panelQuestions = document.getElementById("panel_questions");
  var panelResponses = document.getElementById("panel_responses");

  containerExercises.innerHTML = "";
  panelQuestions.innerHTML = "";
  panelResponses.innerHTML = "";

  if (!exercises) {
    containerExercises.innerHTML = "";
    return;
  }

  var titleExercises = document.createElement("h2");
  titleExercises.textContent = "Exercises";
  containerExercises.appendChild(titleExercises);
  containerExercises.appendChild(panelQuestions);
  containerExercises.appendChild(panelResponses);

  for (var i = 0; i < exercises.length; i++) {
    fetchText(exercises[i].question, function (text) {
      var divQuestion = document.createElement("div");
      divQuestion.innerHTML = marked(text);
      panelQuestions.appendChild(divQuestion);
    });
    fetchText(exercises[i].response, function (text) {
      var divResponse = document.createElement("div");
      divResponse.innerHTML = marked(text);
      panelResponses.appendChild(divResponse);
    });
  }
}

function fetchText(path, callback) {
  fetch(path)
    .then((response) => response.text())
    .then((data) => callback(data));
}
