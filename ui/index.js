getAllBooks()


async function getAllBooks() {
    const response = await fetch("http://localhost:8080/api/book");
    const books = await response.json();
    const list = document.querySelector("#books-list");
    for(let i=0;i< books.length;i++){
       const newLI = document.createElement('li')
       newLI.appendChild(document.createTextNode(books[i].name));
       list.appendChild(newLI);
    }
  }