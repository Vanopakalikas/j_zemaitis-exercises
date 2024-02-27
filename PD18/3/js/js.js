let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    numberOfPages: 180
  };
  
  function printBookDetails() {
    console.log(`The book "${book.title}" was written by ${book.author} and has ${book.numberOfPages} pages.`);
  }
  
  printBookDetails();