import {useSelector} from 'react-redux'

function BookList() {
  const bookList = useSelector(store => store.bookList);
// short hand for just pulling bookList out of the store

  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {bookList.map((book, index) => 
          <li key={index}>{book.title} by {book.author}</li>  
        )}
      </ul>
    </section>
  );
}

export default BookList;