var booksEl = document.getElementById("books");
var countEl = document.getElementById("count");
var categoriesEl = document.getElementById("categories");
var searchInput = document.getElementById("search");

var currentCategory = null;
var libraryData = {};

function _createButton(text, onClick) {
  var btn = document.createElement("button");
  btn.textContent = text;
  btn.className = "cat";
  btn.onclick = onClick;
  return btn;
}

function _highlight(text, query) {
  if (!query) return text;
  var re = new RegExp(
    "(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
    "gi"
  );
  return text.replace(re, "<mark>$1</mark>");
}

function _updatePressedState() {
  var buttons = categoriesEl.querySelectorAll(".cat");
  for (var i = 0; i < buttons.length; i++) {
    var cat = buttons[i].textContent;
    buttons[i].setAttribute(
      "aria-pressed",
      (currentCategory === null && cat === "ALL") || cat === currentCategory
        ? "true"
        : "false"
    );
  }
}

function renderCategories() {
  categoriesEl.innerHTML = "";

  categoriesEl.appendChild(
    _createButton("ALL", function () {
      currentCategory = null;
      _updatePressedState();
      renderBooks();
    })
  );

  categoriesEl.appendChild(
    _createButton("ACTIVE", function () {
      currentCategory = "ACTIVE";
      _updatePressedState();
      renderBooks();
    })
  );

  for (var category in libraryData) {
    categoriesEl.appendChild(
      _createButton(
        category,
        (function (cat) {
          return function () {
            currentCategory = cat;
            _updatePressedState();
            renderBooks();
          };
        })(category)
      )
    );
  }

  _updatePressedState();
}

function renderBooks() {
  booksEl.innerHTML = "";
  var total = 0;
  var query = (searchInput.value || "").toLowerCase();

  for (var category in libraryData) {
    if (
      currentCategory &&
      currentCategory !== "ACTIVE" &&
      category !== currentCategory
    ) {
      continue;
    }

    libraryData[category].forEach(function (book) {
      if (currentCategory === "ACTIVE" && !book.url) return;
      if (
        query &&
        !book.title.toLowerCase().includes(query) &&
        !book.author.toLowerCase().includes(query)
      )
        return;

      var div = document.createElement("div");
      div.className = "book";

      var text =
        _highlight(book.author, query) + " - " + _highlight(book.title, query);

      if (book.url) {
        var a = document.createElement("a");
        a.href = book.url;
        a.innerHTML = text;
        div.appendChild(a);
      } else {
        div.innerHTML = text;
      }

      booksEl.appendChild(div);
      total++;
    });
  }

  countEl.textContent = total + " books";
}

searchInput.addEventListener("input", renderBooks);

fetch("books/books.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    libraryData = data;
    renderCategories();
    renderBooks();
  });
