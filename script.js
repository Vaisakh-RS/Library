const showDialogButton=document.getElementById("showBookDialog");
const submitButton=document.getElementById("submitButton");

showDialogButton.addEventListener("click",()=>{
    bookDialog.showModal();
});

submitButton.addEventListener("click",(e)=>{
    e.preventDefault(); //so that the form doesn't get submitted
    let isbn=document.getElementById("isbn").value;
    let bookName=document.getElementById("name").value;
    let author=document.getElementById("authorName").value;
    let readOrNot=document.getElementById("read").value;
    addBook(isbn,bookName,author,readOrNot);
    console.log(myLibrary);
});

const myLibrary=[];

//constructor
function Book(number,name,author,readOrNot){
    this.number=number;
    this.name=name;
    this.author=author;
    this.readOrNot=readOrNot;

};

//adds newly created book into the myLibrary array
function addBook(number,name,author,readOrNot){
   const book=new Book(number,name,author,readOrNot);
   myLibrary.push(book);
   return myLibrary
}

const booksDiv=document.getElementsByClassName("books")[0];

for(let i=0;i<myLibrary.length;i++)
{
    console.log(myLibrary[i]);
    let newDiv=document.createElement("div");
    newDiv.textContent=myLibrary[i].number+" "+myLibrary[i].name+" "+myLibrary[i].author+" "+myLibrary[i].readOrNot;
    booksDiv.appendChild(newDiv);
}

