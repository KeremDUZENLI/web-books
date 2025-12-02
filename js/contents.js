function createLink(ch) {
  var a = document.createElement("a");
  a.href = "#chapter" + ch.number;
  a.textContent = ch.number + ": " + ch.name;
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

  // Initially hide all sections
  section.style.display = "none";

  return section;
}

// Add click events to links for showing only the selected chapter
function attachClickEvents(links, sections) {
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      var id = this.getAttribute("href").slice(1);

      // Hide all sections
      for (var j = 0; j < sections.length; j++) {
        sections[j].style.display = "none";
      }

      // Show the selected section
      var section = document.getElementById(id);
      if (section) section.style.display = "block";

      // Highlight the selected link
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}

function loadSummary(path) {
  fetch(path)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var list = document.getElementById("chapter-list");
      var out = document.getElementById("summaries");

      list.innerHTML = "";
      out.innerHTML = "";

      var links = [];
      var sections = [];

      for (var i = 0; i < data.chapters.length; i++) {
        var ch = data.chapters[i];

        var li = document.createElement("li");
        var link = createLink(ch);
        li.appendChild(link);
        list.appendChild(li);
        links.push(link);

        var section = createSection(ch);
        out.appendChild(section);
        sections.push(section);
      }

      attachClickEvents(links, sections);

      // Show the first chapter by default
      if (sections.length > 0) {
        sections[0].style.display = "block";
        links[0].classList.add("active");
      }
    });
}
