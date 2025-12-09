function deactivateAllButtons(container, className) {
  var buttons = container.getElementsByClassName(className);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}

function toggleButton(item, container, className) {
  if (item.classList.contains("active")) {
    item.classList.remove("active");
    return false;
  } else {
    deactivateAllButtons(container, className);
    item.classList.add("active");
    return true;
  }
}

function loadMarked() {
  var scriptMarked = document.createElement("script");
  scriptMarked.src = "https://cdn.jsdelivr.net/npm/marked@2.0.0/marked.min.js";
  scriptMarked.onload = function () {
    marked.setOptions({
      breaks: true, // optional - keep if you want single-line breaks
      gfm: true, // enable GitHub Flavored Markdown (useful)
      headerIds: false, // keep false if you don't want auto ids
      mangle: false, // keep to avoid transformations that can affect backslashes
      sanitize: false, // keep false to allow HTML tags
      smartypants: false, // optional: avoid automatic typographic replacements
    });
  };
  document.head.appendChild(scriptMarked);
}

function loadMathJax() {
  window.MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [["$$", "$$"]],
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
    },
  };

  var scriptMathJax = document.createElement("script");
  scriptMathJax.src =
    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.head.appendChild(scriptMathJax);
}

function fetchJson(path, callback) {
  fetch(path)
    .then((response) => response.json())
    .then(callback);
}

function fetchText(path, callback) {
  fetch(path)
    .then((response) => response.text())
    .then(callback);
}
