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

// addBook(20,"a","b",true);
// addBook(40,"c","d",true);

const booksDiv=document.getElementsByClassName("books")[0];

for(let i=0;i<myLibrary.length;i++)
{
    console.log(myLibrary[i]);
    let newDiv=document.createElement("div");
    newDiv.textContent=myLibrary[i].number+" "+myLibrary[i].name+" "+myLibrary[i].author+" "+myLibrary[i].readOrNot;
    booksDiv.appendChild(newDiv);
}