import React from 'react';
import { BrowserRouter as Router , Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import MainNavbar from './components/navBar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';


function App() {
  return (
    <div className="App">
       <Router>
         <MainNavbar />
           <br/>
           <Route path="/" exact component={BookList}/>
           <Route path="/add" exact component={AddBook}/>
           <Route path="/update/:id" exact component={UpdateBook}/>
       </Router>
    </div>
  );
}

export default App;
