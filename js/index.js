let myLibrary = [];

function Book(title, author, pages, status){
  this.id = myLibrary.length;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

function render() {
  let tableRows = '';
  myLibrary.forEach(book => {
    tableRows += `<tr>
                  <th class="text-center">${book.id}</th>
                  <th>${book.title}</th>
                  <th>${book.author}</th>
                  <th class="text-center">${book.pages}</th>
                  <th class="text-center">${book.status ? 'Read' : 'Not yet'}</th>
                  <th class="text-center">Delete</th>
                  </tr>`;
  });
  document.getElementById('table-rows').innerHTML = tableRows;
}

function addBookToLibrary(){

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("status").checked;

  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
  render();
}

function testAddBook(){
  if (myLibrary.length == 0) {
    myLibrary.push(new Book("Cavaleiros do Zodiaco - Gigantomaquia", "Masami Kurumada", 147, true));
    myLibrary.push(new Book("Cavaleiros do Zodiaco - Gigantomaquia vol 2", "Masami Kurumada", 128, true));
  }
  render()
}

testAddBook();



