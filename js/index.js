let myLibrary = [];

function Book(title, author, pages, status) {
  this.id = myLibrary.length;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function render() {
  let tableRows = "";
  myLibrary.forEach(book => {
    tableRows += `<tr>
                    <th class="text-center">${book.id}</th>
                    <th>${book.title}</th>
                    <th>${book.author}</th>
                    <th class="text-center">${book.pages}</th>
                    <th class="text-center">
                      <button type="button" onclick="changeBookStatus(${
                        book.id
                      })">
                        ${book.status ? "Read" : "Not yet"}</th>
                      </button>
                    <th class="text-center">
                      <button type="button" onclick="deleteBookFromLibrary(${
                        book.id
                      })">
                        Delete
                      </button>
                    </th>
                  </tr>`;
  });
  document.getElementById("table-rows").innerHTML = tableRows;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("status").checked;

  if (title == "") {
    window.alert("Title can't be empty");
    title.focus();
    return false;
  }

  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
  render();

  closeModel();
}

function deleteBookFromLibrary(id) {
  console.log(id);
  myLibrary.forEach(book => {
    if (book.id == id) myLibrary.splice(myLibrary.indexOf(book), 1);
  });
  render();
}

function changeBookStatus(id) {
  console.log(id);
  myLibrary.forEach(book => {
    if (book.id == id) book.status = !book.status;
  });
  render();
}

function testAddBook() {
  if (myLibrary.length == 0) {
    myLibrary.push(
      new Book(
        "Cavaleiros do Zodiaco - Gigantomaquia",
        "Masami Kurumada",
        147,
        true
      )
    );
    myLibrary.push(
      new Book(
        "Cavaleiros do Zodiaco - Gigantomaquia vol 2",
        "Masami Kurumada",
        128,
        true
      )
    );
  }
  render();
}

testAddBook();

function openModel() {
  document.getElementById("model").style.display = "block";
}

function closeModel() {
  document.getElementById("model").style.display = "none";
}
