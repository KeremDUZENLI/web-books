function _createLink(ch) {
  var a = document.createElement("a");
  a.href = "#chapter" + ch.number;
  a.textContent = "Chapter " + ch.number + ": " + ch.name;
  return a;
}

function _createSection(ch) {
  var section = document.createElement("section");
  section.id = "chapter" + ch.number;

  var title = document.createElement("h3");
  title.textContent = "Chapter " + ch.number + ": " + ch.name;

  var content = document.createElement("div");
  content.innerHTML = ch.summary || "";

  section.appendChild(title);
  section.appendChild(content);
  return section;
}

function _attachClickEvents(links) {
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      var id = this.getAttribute("href").slice(1);

      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });

      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}

function _attachScrollHighlight(links, sections) {
  window.addEventListener("scroll", function () {
    var current = "";

    for (var i = 0; i < sections.length; i++) {
      if (window.scrollY >= sections[i].offsetTop - 10) {
        current = sections[i].id;
      }
    }

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    if (current) {
      var active = document.querySelector(
        '#contents a[href="#' + current + '"]'
      );
      if (active) active.classList.add("active");
    }
  });
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

      // Build left + right panels
      for (var i = 0; i < data.chapters.length; i++) {
        var ch = data.chapters[i];

        var li = document.createElement("li");
        li.appendChild(_createLink(ch));
        list.appendChild(li);

        out.appendChild(_createSection(ch));
      }

      var links = document.querySelectorAll("#contents a");
      var sections = document.querySelectorAll("#summaries section");

      _attachClickEvents(links);
      _attachScrollHighlight(links, sections);
    });
}
