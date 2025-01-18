// library
const library=[];
numBook=1
addBooks=(Name,Author,ISBN,isBorrowed=false)=>{
    library.push({Name,Author,isBorrowed,ISBN});
    console.log("books added!!");
}
addBooks("The Way Of The Superior Man","David Deida",6666)
addBooks("Medidations","Marcus Aurelius",5555)
//Add books

const showbooks=()=>{
    console.log("the books in the library are:");
    for (book of library){
        console.log(`${numBook}.${book.Name} by ${book.Author}-${book.isBorrowed?"(Borrowed)":"(Availabe)"}---${book.ISBN}`)
        numBook++
    }
}
// showBooks()

//borrow a book //goota understand this shit sooner or later

const borrowBook=(ISBN)=>{
    const book=library.find(b=>b.ISBN===ISBN);
    if (book && !book.isBorrowed){
        book.isBorrowed=true;
        console.log(`${book.Name} has been borrowed;` );
    }else if(book){
        console.log(`${book.Name} has been already borrowed`);
    }else{
        console.log(`Book with ISBNN no-${ISBN} is not currently present at our library`);
    }
}
//to return the book we just changed the value of is boorrowed to falsy
let returnBook=(ISBN)=>{
    const book=library.find(b=>b.ISBN===ISBN);
    if (book && book.isBorrowed===true){
        book.isBorrowed=false;
        console.log(`${book} has been return`);
    }else if (book){
        console.log(`${book.Name}-${book.ISNB} has never been borrowed`);
    }else{
        console.log(`Book with ${ISBN} no is never found`);
    }
}
// returnBook(6666)

// console.log(book);
// let fruit=[1,2,3,4,5,6,7,8]z

// const retun=fruit.find(f=>f>7)
// console.log(retun);
const searchBook=(Name)=>{
    const book=library.find(b=>b.Name===Name);
    if (book && book.isBorrowed===true){
        console.log(`${book.name} is present but you cannot take it because it is borrowed`);
    }else if(book && book.isBorrowed===false){
        console.log(`${book.Name} is present you can take it by borrowing book with its ISBN No -${book.ISBN}`);
    }else{
        console.log("We are really sorry to inform you that your desired book is not present at out library");
    }
}
searchBook("Medidations")
