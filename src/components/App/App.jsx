import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
//to use Dispatch must import it

import './App.css';

function App() {
  // for dispatch to work must create a 
  // var equal to the useDispatch() function call, ex below
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookList();
  },[]);

   // TODO - GET Book List from server
  const fetchBookList = () => {
    axios ({
      method: 'GET',
      url: '/books', // the url is from our server.js to access the db
    }).then(response => {
      console.log(response.data);
      dispatch({ 
        type: 'SET_BOOK_LIST', 
        payload: response.data,
      });
    })
  }

 

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;