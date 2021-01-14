import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Book = props =>{
  return(
    <tr>
      <td>{props.bookitem.bookname}</td>
      <td>{props.bookitem.description}</td>
      <td>{props.bookitem.author}</td>
      <td>{props.bookitem.date.substring(0,10)}</td>
      <td>
        <button className="btn btn-success">
         <Link to={"/update/"+props.bookitem._id}>edit</Link> 
        </button>
       | <button className="btn btn-danger " onClick={() =>{props.deleteBook(props.bookitem._id)}}>delete</button> 
      </td>
    </tr>
   )
}

class BookList extends Component {
  constructor(props){
    super(props);

    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
        books : []
    }
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/book/')
    .then(res =>{
      this.setState({books : res.data})
    })
    .catch((err) =>{
      console.log(err); 
    })
  }

  deleteBook(id){
    axios.delete('http://localhost:5000/book/delete/'+id)
    .then(res => console.log(res.data));
    this.setState({
      books:this.state.books.filter(el =>el._id !== id)
    })
  }

 booklist(){
   return this.state.books.map(currentbook =>{
     return <Book bookitem ={currentbook}  deleteBook ={this.deleteBook}  key ={currentbook._id} />
   })
 }

  render() {
    return (
      <div className="container col-md-8 m-auto">
        <h1 className="text-center">The book list</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book name</th>
              <th>description</th>
              <th>Author</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.booklist()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookList;