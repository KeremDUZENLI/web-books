var libraryData = {
  "Category 1": [
    { title: "Book 1", author: "Author A" },
    { title: "Book 2", author: "Author B" },
  ],
  "Category 2": [
    { title: "Book 3", author: "Author C" },
    { title: "Book 4", author: "Author D" },
  ],
};

var booksEl = document.getElementById("books");
var countEl = document.getElementById("count");
var categoriesEl = document.getElementById("categories");
var currentCategory = null;

function renderBooks() {
  booksEl.innerHTML = "";
  var total = 0;

  for (var category in libraryData) {
    if (currentCategory !== null && category !== currentCategory) {
      continue;
    }

    var books = libraryData[category];
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var bookDiv = document.createElement("div");
      bookDiv.textContent = book.title + " — " + book.author;
      booksEl.appendChild(bookDiv);
      total++;
    }
  }

  countEl.textContent = total + " books";
}

function renderCategories() {
  categoriesEl.innerHTML = "";

  var allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.onclick = function () {
    currentCategory = null;
    renderBooks();
  };
  categoriesEl.appendChild(allBtn);

  for (let category in libraryData) {
    let btn = document.createElement("button");
    btn.textContent = category;
    btn.onclick = function () {
      currentCategory = category;
      renderBooks();
    };
    categoriesEl.appendChild(btn);
  }
}

renderCategories();
renderBooks();
