function createLink(ch) {
  var a = document.createElement("a");
  a.href = "#chapter" + ch.number;

  var numberSpan = document.createElement("span");
  numberSpan.textContent = ch.number;

  var colonSpan = document.createElement("span");
  colonSpan.textContent = ":";

  var titleSpan = document.createElement("span");
  titleSpan.textContent = ch.name;

  a.appendChild(numberSpan);
  a.appendChild(colonSpan);
  a.appendChild(titleSpan);

  return a;
}

function createSection(ch) {
  var section = document.createElement("section");
  section.id = "chapter" + ch.number;

  var title = document.createElement("h3");
  title.textContent = "Chapter " + ch.number + ": " + ch.name;

  var content = document.createElement("div");
  content.innerHTML = ch.summary || "";

  section.appendChild(title);
  section.appendChild(content);

  section.style.display = "none";

  return section;
}

function createChapterElements(ch) {
  return {
    chapter: ch,
    link: createLink(ch),
    section: createSection(ch),
  };
}

function loadChapterContent(section, chapter, baseFolder) {
  if (chapter.file && !chapter.loaded) {
    fetch(baseFolder + chapter.file)
      .then(function (res) {
        return res.text();
      })
      .then(function (md) {
        section.innerHTML += marked.parse(md);
        chapter.loaded = true;
        if (window.MathJax) MathJax.typesetPromise([section]);
      });
  } else if (window.MathJax) {
    MathJax.typesetPromise([section]);
  }
}

function showChapter(index, chaptersArr, baseFolder) {
  for (var i = 0; i < chaptersArr.length; i++) {
    chaptersArr[i].section.style.display = "none";
    chaptersArr[i].link.classList.remove("active");
  }

  chaptersArr[index].section.style.display = "block";
  chaptersArr[index].link.classList.add("active");

  loadChapterContent(
    chaptersArr[index].section,
    chaptersArr[index].chapter,
    baseFolder
  );
}

function loadSummary(jsonPath) {
  fetch(jsonPath)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var list = document.getElementById("chapter-list");
      var out = document.getElementById("summaries");
      list.innerHTML = "";
      out.innerHTML = "";

      var baseFolder = jsonPath.replace(/\/0\.json$/, "/");
      var chaptersArr = [];

      for (let i = 0; i < data.chapters.length; i++) {
        let ch = data.chapters[i];
        let elems = createChapterElements(ch);

        list.appendChild(document.createElement("li")).appendChild(elems.link);
        out.appendChild(elems.section);
        chaptersArr.push(elems);

        elems.link.addEventListener("click", function (e) {
          e.preventDefault();
          showChapter(i, chaptersArr, baseFolder);
        });
      }

      showChapter(0, chaptersArr, baseFolder);
    });
}
