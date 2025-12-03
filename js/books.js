// ===================== UTILITY FUNCTIONS =====================
function compareText(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function highlight(text, query) {
  if (!query) return text;
  var safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re = new RegExp("(" + safe + ")", "gi");
  return text.replace(re, "<mark>$1</mark>");
}

// ===================== BUTTON HELPERS =====================
function createButton(text, onClick) {
  var btn = document.createElement("button");
  btn.textContent = text;
  btn.className = "cat";
  btn.onclick = onClick;
  return btn;
}

// Creates a button for a specific category with closure
function createCategoryButton(category, currentCategory, onSelect) {
  var btn = createButton(category, function () {
    onSelect(category);
  });
  if (category === currentCategory) {
    btn.setAttribute("aria-pressed", "true");
  }
  return btn;
}

// ===================== CATEGORY DISPLAY =====================
function renderCategories(data, container, onSelect, currentCategory) {
  container.innerHTML = "";

  // Special buttons
  var allBtn = createButton("ALL", function () {
    onSelect(null);
  });
  var activeBtn = createButton("ACTIVE", function () {
    onSelect("ACTIVE");
  });

  if (!currentCategory) allBtn.setAttribute("aria-pressed", "true");
  if (currentCategory === "ACTIVE")
    activeBtn.setAttribute("aria-pressed", "true");

  container.appendChild(allBtn);
  container.appendChild(activeBtn);

  // Category buttons
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var cat = keys[i];
    var btn = createCategoryButton(cat, currentCategory, onSelect);
    container.appendChild(btn);
  }
}

// ===================== BOOK FILTER & SORT =====================
function filterBooks(data, query, currentCategory) {
  var q = (query || "").toLowerCase();
  var result = [];

  var categories = Object.keys(data);
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];
    if (
      currentCategory &&
      currentCategory !== "ACTIVE" &&
      cat !== currentCategory
    )
      continue;

    var books = data[cat];
    for (var j = 0; j < books.length; j++) {
      var book = books[j];
      if (currentCategory === "ACTIVE" && !book.url) continue;

      var author = book.author.toLowerCase();
      var title = book.title.toLowerCase();
      if (q && author.indexOf(q) === -1 && title.indexOf(q) === -1) continue;

      result.push(book);
    }
  }

  return result;
}

function sortBooks(books) {
  books.sort(function (a, b) {
    var cmp = compareText(a.author, b.author);
    if (cmp !== 0) return cmp;
    return compareText(a.title, b.title);
  });
}

// ===================== BOOK DISPLAY =====================
function displayBooks(books, container, query) {
  container.innerHTML = "";

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var div = document.createElement("div");
    div.className = "book";

    var content =
      highlight(book.author, query) + " - " + highlight(book.title, query);

    if (book.url) {
      var a = document.createElement("a");
      a.href = book.url;
      a.innerHTML = content;
      div.appendChild(a);
    } else {
      div.innerHTML = content;
    }

    container.appendChild(div);
  }

  return books.length;
}

// ===================== RENDER BOOKS =====================
function renderBooks(data, container, query, currentCategory) {
  var books = filterBooks(data, query, currentCategory);

  if (!currentCategory || currentCategory === "ACTIVE") {
    sortBooks(books);
  }

  return displayBooks(books, container, query);
}

// ===================== FETCH =====================
function fetchBooks(url, callback) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      callback(data);
    })
    .catch(function (err) {
      console.error("Failed to load books.json:", err);
    });
}

// ===================== HANDLERS =====================
function updateBooks(data, booksEl, searchEl, currentCategory, countEl) {
  var total = renderBooks(data, booksEl, searchEl.value, currentCategory);
  countEl.textContent = total + (total === 1 ? " book" : " books");
}

function handleCategorySelection(category) {
  currentCategory = category;
  renderCategories(
    libraryData,
    categoriesEl,
    handleCategorySelection,
    currentCategory
  );
  updateBooks(libraryData, booksEl, searchEl, currentCategory, countEl);
}

// ===================== MAIN =====================
var currentCategory = null;
var libraryData = {};
var searchEl, categoriesEl, booksEl, countEl;

document.addEventListener("DOMContentLoaded", function () {
  searchEl = document.getElementById("search");
  categoriesEl = document.getElementById("categories");
  booksEl = document.getElementById("books");
  countEl = document.getElementById("count");

  fetchBooks("books.json", function (data) {
    libraryData = data;
    renderCategories(
      libraryData,
      categoriesEl,
      handleCategorySelection,
      currentCategory
    );
    updateBooks(libraryData, booksEl, searchEl, currentCategory, countEl);
  });

  searchEl.addEventListener("input", function () {
    updateBooks(libraryData, booksEl, searchEl, currentCategory, countEl);
  });
});
