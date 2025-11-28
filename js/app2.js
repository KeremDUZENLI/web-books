var categoriesEl = document.getElementById("categories");
var booksEl = document.getElementById("books");
var searchEl = document.getElementById("search");
var countEl = document.getElementById("count");

var libraryData = {};
var currentCategory = null;
var allBooks = [];

function loadLibrary(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/library.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          libraryData = JSON.parse(xhr.responseText);
        } catch (e) {
          libraryData = window.LIBRARY || {};
        }
      } else {
        libraryData = window.LIBRARY || {};
      }
      callback();
    }
  };
  xhr.send(null);
}

function renderCategories(lib) {
  categoriesEl.innerHTML = "";
  categoriesEl.appendChild(createCategoryButton("All", true));
  for (var k in lib) {
    if (Object.prototype.hasOwnProperty.call(lib, k)) {
      categoriesEl.appendChild(createCategoryButton(k));
    }
  }
}

function createCategoryButton(name, active) {
  var btn = document.createElement("button");
  btn.className = "cat";
  btn.type = "button";
  btn.textContent = name;
  btn.setAttribute("aria-pressed", active ? "true" : "false");
  btn.onclick = function () {
    var children = categoriesEl.children;
    for (var i = 0; i < children.length; i++) {
      children[i].setAttribute("aria-pressed", "false");
    }
    btn.setAttribute("aria-pressed", "true");
    currentCategory = name === "All" ? null : name;
    updateView();
  };
  return btn;
}

function renderBooks(list) {
  booksEl.innerHTML = "";
  if (!list || list.length === 0) {
    booksEl.innerHTML = '<div class="muted">No books</div>';
    countEl.textContent = "0 books";
    return;
  }
  countEl.textContent = String(list.length) + " books";
  for (var i = 0; i < list.length; i++) {
    var b = list[i];
    var el = document.createElement("article");
    el.className = "card";
    var title = escapeHtml(b.title || "");
    var author = escapeHtml(b.author || "");
    var filename = escapeHtml((b.file || "").split("/").pop());
    el.innerHTML =
      "<h4>" +
      title +
      "</h4><p>" +
      author +
      '</p><div class="meta">' +
      filename +
      "</div>";

    (function (filePath) {
      el.onclick = function () {
        if (filePath) {
          window.open(filePath, "_blank");
        }
      };
    })(b.file);
    booksEl.appendChild(el);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

function flatten(lib) {
  var arr = [];
  for (var k in lib) {
    if (Object.prototype.hasOwnProperty.call(lib, k)) {
      var list = lib[k];
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var copy = {
          id: item.id,
          title: item.title,
          author: item.author,
          file: item.file,
          category: k,
        };
        arr.push(copy);
      }
    }
  }
  return arr;
}

function updateView() {
  var q = searchEl.value.trim().toLowerCase();
  var list = allBooks.slice(0); // shallow copy
  if (currentCategory) {
    var filtered = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].category === currentCategory) filtered.push(list[i]);
    }
    list = filtered;
  }
  if (q) {
    var filtered2 = [];
    for (var j = 0; j < list.length; j++) {
      var t = (list[j].title || "").toLowerCase();
      var a = (list[j].author || "").toLowerCase();
      if (t.indexOf(q) !== -1 || a.indexOf(q) !== -1) {
        filtered2.push(list[j]);
      }
    }
    list = filtered2;
  }
  renderBooks(list);
}

function init() {
  loadLibrary(function () {
    renderCategories(libraryData);
    allBooks = flatten(libraryData);
    renderBooks(allBooks);
    searchEl.addEventListener("input", updateView);
  });
}

init();
