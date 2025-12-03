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

  const display = document.createElement("div");
  display.className = "question-display";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.className = "prev-btn";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.className = "next-btn";

  slider.append(display, prevBtn, nextBtn);

  return { slider, display, prevBtn, nextBtn };
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
function goPrev(index) {
  return index > 0 ? index - 1 : index;
}

function goNext(index, questions) {
  return index < questions.length - 1 ? index + 1 : index;
}

function showQuestion(display, slider, questions, index) {
  display.textContent = questions[index];
  slider.style.display = "flex";
}

function loadQuestions(section, chapter, baseFolder) {
  if (!chapter.fileQuestion) return;

  const { slider, display, prevBtn, nextBtn } = section.sliderElements;

  fetch(baseFolder + chapter.fileQuestion)
    .then((res) => res.json())
    .then((data) => {
      const questions = data.questions || [];
      if (!questions.length) {
        slider.style.display = "none";
        return;
      }

      let index = 0;

      prevBtn.onclick = () => {
        index = goPrev(index);
        showQuestion(display, slider, questions, index);
      };

      nextBtn.onclick = () => {
        index = goNext(index, questions);
        showQuestion(display, slider, questions, index);
      };

      showQuestion(display, slider, questions, index);
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
    });
}
