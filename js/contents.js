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

// Create section container for a chapter
function createSection(ch) {
  const section = document.createElement("section");
  section.id = "chapter" + ch.number;
  section.style.display = "none";

  const title = document.createElement("h2");
  title.textContent = `Chapter ${ch.number}: ${ch.name}`;

  const content = document.createElement("div");
  content.className = "chapter-content";

  // Slider container
  const slider = document.createElement("div");
  slider.className = "question-slider";
  slider.style.display = "none";

  const display = document.createElement("div");
  display.className = "question-display";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.className = "prev-btn";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.className = "next-btn";

  slider.append(display, prevBtn, nextBtn);
  section.append(title, content, slider);

  return section;
}

// Package chapter info
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
  if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
    MathJax.startup.promise.then(() => MathJax.typesetPromise([section]));
  }
}

function loadChapterContent(section, chapter, baseFolder) {
  if (chapter.file && !chapter.loaded) {
    fetch(baseFolder + chapter.file)
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
function loadQuestions(section, chapter, baseFolder) {
  if (!chapter.fileQuestion) return;

  const slider = section.querySelector(".question-slider");
  const display = slider.querySelector(".question-display");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");

  fetch(baseFolder + chapter.fileQuestion)
    .then((res) => res.json())
    .then((data) => {
      const questions = data.questions || [];
      if (questions.length === 0) {
        slider.style.display = "none";
        return;
      }

      let index = 0;

      function showQuestion(i) {
        display.textContent = questions[i];
        slider.style.display = "flex";
      }

      prevBtn.onclick = () => {
        index = index > 0 ? index - 1 : questions.length - 1;
        showQuestion(index);
      };

      nextBtn.onclick = () => {
        index = index < questions.length - 1 ? index + 1 : 0;
        showQuestion(index);
      };

      showQuestion(index);
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

// ===================== LOAD SUMMARY JSON =====================
function loadSummary(jsonPath) {
  fetch(jsonPath)
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("chapter-list");
      const out = document.getElementById("summaries");
      list.innerHTML = "";
      out.innerHTML = "";

      const baseFolder = jsonPath.substring(0, jsonPath.lastIndexOf("/") + 1);
      const chaptersArr = [];

      for (let i = 0; i < data.chapters.length; i++) {
        const ch = data.chapters[i];
        const elems = createChapterElements(ch);

        list.appendChild(document.createElement("li")).appendChild(elems.link);
        out.appendChild(elems.section);
        chaptersArr.push(elems);

        elems.link.addEventListener("click", (e) => {
          e.preventDefault();
          showChapter(i, chaptersArr, baseFolder);
        });
      }

      showChapter(0, chaptersArr, baseFolder);
    });
}
