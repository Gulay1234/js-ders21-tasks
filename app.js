// task1
function Book(bookName,bookAuthor,bookYear){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookYear = bookYear;
}
let book1 = new Book ("Herry Potter","J.K Rowling","1997");
console.log([book1]);
let book2 = new Book ("Little prince","Antoine de Saint-Exupéry","1943");
console.log([book2]);
let book3 = new Book ("The Selfish Gene","Richard Dawkins","1976");
console.log([book3]);


// task2
let obj ={
    money: 2358,
     moneyLimit: function() {
         if (this.money>2000) {
             console.log(`Siz limiti ${this.money-2000}$ qeder asmisiniz.`)
         } else {
             console.log(`Siz limiti asmamisiniz.`);
         }
     }
 }
 obj.moneyLimit()