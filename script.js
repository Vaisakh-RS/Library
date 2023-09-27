const showDialogButton=document.getElementById("showBookDialog");
const submitButton=document.getElementById("submitButton");
const closeButton=document.getElementById("closeButton");
const bookDialog =document.getElementById("bookDialog");

showDialogButton.addEventListener("click",()=>{
    bookDialog.showModal();
});


submitButton.addEventListener("click",(e)=>{
    e.preventDefault(); //so that the form doesn't get submitted
    let isbn=document.getElementById("isbn").value;
    let bookName=document.getElementById("name").value;
    let author=document.getElementById("authorName").value;
    let year=document.getElementById("year").value;
    addBook(isbn,bookName,author,year);
    console.log(myLibrary);
    bookDialog.close();
    displayBooks();
});

const myLibrary=[];

//constructor
function Book(number,name,author,year){
    this.number=number;
    this.name=name;
    this.author=author;
    this.year=year;

};

//adds newly created book into the myLibrary array
function addBook(number,name,author,year){
   const book=new Book(number,name,author,year);
   myLibrary.push(book);
   return myLibrary
}

const booksDiv=document.getElementsByClassName("books")[0];

function displayBooks()
{
    booksDiv.innerHTML=" ";
    for(let i=0;i<myLibrary.length;i++)
    {  
        let newDiv=document.createElement("div");
        newDiv.textContent=myLibrary[i].number+" "+myLibrary[i].name+" "+myLibrary[i].author+" "+myLibrary[i].year;
        // newDiv.style.width="300px";
        // newDiv.style.height="250px";
        newDiv.style.border="1px solid black";
        newDiv.style.padding="40px";
        
        booksDiv.appendChild(newDiv);
        
       
    }
   

}


