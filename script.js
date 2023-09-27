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

function toggleReadStatus(divElement){
    const readStatus=divElement.querySelector(".read-status");
    if (readStatus.textContent === "Read") {
        readStatus.textContent = "Not Read";
    } else {
        readStatus.textContent = "Read";
    }
}

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
        let numberParagraph = document.createElement("p");
        numberParagraph.textContent = "Number: " + myLibrary[i].number;

        let nameParagraph = document.createElement("p");
        nameParagraph.textContent = "Name: " + myLibrary[i].name;

        let authorParagraph = document.createElement("p");
        authorParagraph.textContent = "Author: " + myLibrary[i].author;

        let yearParagraph = document.createElement("p");
        yearParagraph.textContent = "Year: " + myLibrary[i].year;
        newDiv.appendChild(numberParagraph);
        newDiv.appendChild(nameParagraph);
        newDiv.appendChild(authorParagraph);
        newDiv.appendChild(yearParagraph);

        newDiv.style.padding="40px";
        newDiv.style.width="200px";
        newDiv.style.margin="30px";
        newDiv.style.borderRadius="5px";
        newDiv.style.boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";
        newDiv.style.display="flex";
        newDiv.style.flexDirection="column";
        newDiv.style.fontSize="16px";


        booksDiv.appendChild(newDiv);
        
       
    }
   

}


