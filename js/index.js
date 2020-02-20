let myLibrary = [];

function Book(title, author, pages, status){
  this.id = myLibrary.length;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};



function addBookToLibrary(){

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("status").value;

  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function testAddBook(){
  if (myLibrary.length == 0) {
    myLibrary.push(new Book("title", "author", "pages", "status"));
  }
  
}
testAddBook();

console.log(myLibrary);