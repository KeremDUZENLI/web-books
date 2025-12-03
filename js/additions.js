var script1 = document.createElement("script");
script1.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";

var script2 = document.createElement("script");
script2.id = "MathJax-script";
script2.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
script2.async = true;

document.head.appendChild(script1);
document.head.appendChild(script2);
