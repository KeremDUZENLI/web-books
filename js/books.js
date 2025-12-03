function alpha(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function createButton(text, onClick) {
  var btn = document.createElement("button");
  btn.textContent = text;
  btn.className = "cat";
  btn.onclick = onClick;
  return btn;
}

function highlight(text, query) {
  if (!query) return text;
  var safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re = new RegExp("(" + safe + ")", "gi");
  return text.replace(re, "<mark>$1</mark>");
}

function renderCategories(
  libraryData,
  categoriesEl,
  onSelect,
  currentCategory
) {
  categoriesEl.innerHTML = "";

  var allBtn = createButton("ALL", function () {
    onSelect(null);
  });
  var activeBtn = createButton("ACTIVE", function () {
    onSelect("ACTIVE");
  });

  if (!currentCategory) allBtn.setAttribute("aria-pressed", "true");
  if (currentCategory === "ACTIVE")
    activeBtn.setAttribute("aria-pressed", "true");

  categoriesEl.appendChild(allBtn);
  categoriesEl.appendChild(activeBtn);

  var cats = Object.keys(libraryData);
  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    var btn = createButton(
      cat,
      (function (c) {
        return function () {
          onSelect(c);
        };
      })(cat)
    );
    if (cat === currentCategory) btn.setAttribute("aria-pressed", "true");
    categoriesEl.appendChild(btn);
  }
}

function renderBooks(libraryData, booksEl, query, currentCategory) {
  booksEl.innerHTML = "";
  var q = (query || "").toLowerCase();
  var total = 0;

  var booksToShow = [];

  Object.keys(libraryData).forEach((category) => {
    if (
      currentCategory &&
      currentCategory !== "ACTIVE" &&
      category !== currentCategory
    )
      return;

    libraryData[category].forEach((book) => {
      // Skip books without URL in ACTIVE
      if (currentCategory === "ACTIVE" && !book.url) return;

      var authorLower = book.author.toLowerCase();
      var titleLower = book.title.toLowerCase();
      if (q && !authorLower.includes(q) && !titleLower.includes(q)) return;

      booksToShow.push(book);
    });
  });

  // Sort alphabetically by author, then title (for ALL or ACTIVE)
  if (!currentCategory || currentCategory === "ACTIVE") {
    booksToShow.sort((a, b) => {
      var authorCompare = alpha(a.author, b.author);
      return authorCompare !== 0 ? authorCompare : alpha(a.title, b.title);
    });
  }

  booksToShow.forEach((book) => {
    var div = document.createElement("div");
    div.className = "book";

    var html = highlight(book.author, q) + " - " + highlight(book.title, q);

    if (book.url) {
      var a = document.createElement("a");
      a.href = book.url;
      a.innerHTML = html;
      div.appendChild(a);
    } else {
      div.innerHTML = html;
    }

    booksEl.appendChild(div);
    total++;
  });

  return total;
}

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search");
  var categoriesEl = document.getElementById("categories");
  var booksEl = document.getElementById("books");
  var countEl = document.getElementById("count");

  var libraryData = {};
  var currentCategory = null;

  function update() {
    var total = renderBooks(
      libraryData,
      booksEl,
      searchInput.value,
      currentCategory
    );
    countEl.textContent = total + (total === 1 ? " book" : " books");
  }

  function onSelectCategory(cat) {
    currentCategory = cat;
    renderCategories(
      libraryData,
      categoriesEl,
      onSelectCategory,
      currentCategory
    );
    update();
  }

  fetch("books/books.json")
    .then((res) => res.json())
    .then((data) => {
      libraryData = data;
      renderCategories(libraryData, categoriesEl, onSelectCategory);
      update();
    })
    .catch((err) => console.error("Failed to load books.json:", err));

  searchInput.addEventListener("input", update);
});
