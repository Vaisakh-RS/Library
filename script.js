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
