var containerSearch = document.getElementById("container_search");
var containerCategories = document.getElementById("container_categories");
var containerCount = document.getElementById("container_count");
var containerBooks = document.getElementById("container_books");

function sortBooks(listBooks) {
  return listBooks.slice().sort(function (a, b) {
    return (a.author + a.title).localeCompare(b.author + b.title);
  });
}

function highlight(text, query) {
  if (!query) return text;
  var regex = new RegExp(
    "(" + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + ")",
    "gi"
  );
  return text.replace(regex, "<span class='highlight'>$1</span>");
}

function createListBooks(listCategories, categoryName) {
  var listBooks = [];

  if (categoryName) {
    for (var i = 0; i < listCategories.length; i++) {
      if (listCategories[i].category === categoryName) {
        listBooks = listCategories[i].books;
        break;
      }
    }
  } else {
    for (var i = 0; i < listCategories.length; i++) {
      listBooks = listBooks.concat(listCategories[i].books);
    }
    listBooks = sortBooks(listBooks);
  }

  return listBooks;
}

function createLink(item) {
  var link = document.createElement("a");
  link.href = item.url;
  link.className = "link";

  return link;
}

function filterListBooksByQuery(listBooks, query) {
  query = query.trim().toLowerCase();
  if (!query) return listBooks;

  var listBooksFiltered = [];
  for (var i = 0; i < listBooks.length; i++) {
    var book = listBooks[i];
    if (
      book.author.toLowerCase().includes(query) ||
      book.title.toLowerCase().includes(query)
    ) {
      listBooksFiltered.push(book);
    }
  }
  return listBooksFiltered;
}

function renderCategories(listCategories) {
  containerCategories.innerHTML = "";

  for (var i = 0; i < listCategories.length; i++) {
    var buttonCategory = document.createElement("button");
    buttonCategory.textContent = listCategories[i].category;
    buttonCategory.className = "button_category";

    buttonCategory.onclick = function () {
      var isActive = toggleButton(this, containerCategories, "button_category");
      var listBooks = [];

      if (isActive) {
        listBooks = createListBooks(listCategories, this.textContent);
      } else {
        listBooks = createListBooks(listCategories);
      }

      renderBooks(listBooks);
      containerSearch.value = "";
    };

    containerCategories.appendChild(buttonCategory);
  }
}

function renderCount(listBooks) {
  containerCount.textContent = listBooks.length + " books";
}

function renderBooks(listBooks, query) {
  containerBooks.innerHTML = "";

  for (var i = 0; i < listBooks.length; i++) {
    var book = listBooks[i];

    var divBook = document.createElement("div");
    divBook.innerHTML = highlight(book.author + " - " + book.title, query);
    divBook.className = "button_book";

    if (book.url) {
      var linkBook = createLink(book);
      linkBook.appendChild(divBook);
      containerBooks.appendChild(linkBook);
    } else {
      containerBooks.appendChild(divBook);
    }
  }

  renderCount(listBooks);
}

function renderSearchInput(listBooks) {
  containerSearch.addEventListener("input", function () {
    deactivateAllButtons(containerCategories, "button_category");

    var listBooksFiltered = filterListBooksByQuery(listBooks, this.value);
    renderBooks(listBooksFiltered, this.value);
  });
}
