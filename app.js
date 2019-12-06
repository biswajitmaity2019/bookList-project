class Book{
constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
}
class UI{
    static displayBooks(){
        const storeBooks=[
        {
        title:'Book one',
        author:'John Deo',
        isbn:'34456'
        },
        {
            title:'Book two',
            author:'John Mick',
            isbn:'387856'
        }

    ];
    const books=storeBooks;
 //console.log(books);
    books.forEach((book)=>UI.addBookToList(book));
 }
 static addBookToList(book){
     const list=document.querySelector('#book-list');
     const row=document.createElement('tr');
     row.innerHTML=`
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>

     `;
     list.appendChild(row);
 }

 static deleteBook(e){
  if(e.classList.contains('delete'))
  {
      e.parentElement.parentElement.remove();
  }
 }
/*
 static showAlert(message,className){
     const div=document.createElement('div');
     div.className=`alert alert-${className}`;
     div.addendChild()
 }*/
     static clearfiled(){
        document.querySelector('#title').Value='';
        document.querySelector('#author').Value='';
        document.querySelector('#isbn').Value='';
     }
 }


document.addEventListener('DOMContentLoaded',UI.displayBooks);

document.querySelector('.book-form-1').addEventListener('submit',(e)=>{
   e.preventDefault();
   console.log("hello");
    let title1=document.querySelector('#title').Value;
    let author1=document.querySelector('#author').Value;
    let isbn1=document.querySelector('#isbn').Value;
   console.log("input data"+title1+author1+isbn1+document.querySelector('#isbn').Value);
    if(title1==(''||null)||author1==(''||null)||isbn1==(''||null))
    {
        alert('Please fill in all fields');

    }
    else
    {
        const book=new Book(title1,author1,isbn1);
        console.log("class book"+book);
        UI.addBookToList(book);
            
        UI.clearfiled();
    }
   
});
document.querySelector('#book-list').addEventListener('click',(e)=>{
   UI.deleteBook(e.target);
});
