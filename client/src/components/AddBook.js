import React, { Component  } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import '../App.css';

class AddBook extends Component {
  constructor(props){
    super(props);

    this.onChangeBookname =this.onChangeBookname.bind(this);
    this.onChangeDescription =this.onChangeDescription.bind(this);
    this.onChangeAuthor =this.onChangeAuthor.bind(this);
    this.onChangeDate =this.onChangeDate.bind(this);
    this.OnSubmitHandler =this.OnSubmitHandler.bind(this);


     this.state = {
        bookname : "",
        description : "",
        author : "",
        date : new Date(),
        books : []
     }
  }

  onChangeBookname(e){
     this.setState({
       bookname : e.target.value
     });
  }

  onChangeDescription(e){
    this.setState({
      description : e.target.value
    });
 }

 onChangeAuthor(e){
  this.setState({
    author : e.target.value
  });
}

onChangeDate(date){
  this.setState({
    date : date
  });
}

OnSubmitHandler(e){
  e.preventDefault()
  const book = {
    bookname : this.state.bookname,
    description : this.state.description,
    author : this.state.author,
    date : this.state.date
  }

  axios.post('http://localhost:5000/book/add' , book)
  .then(res => console.log(res.data));

  window.location ='/';
}


  render() {
    return (
      <div className="container col-md-6 m-auto p-4 bg-dark text-white containerS" >
        <form onSubmit = {this.OnSubmitHandler} >

          <div className="form-group">
            <label>Book name</label>
            <input className="form-control" type='text' placeholder="enter book name" value ={this.state.bookname}  onChange={this.onChangeBookname} required/>
          </div>
          <div className="form-group">
            <label>Book description</label>
            <input  className="form-control" type='text' placeholder="enter book description" value ={this.state.description}  onChange={this.onChangeDescription} required/>
          </div>
          <div className="form-group">
            <label>Book autor</label>
            <input className="form-control" type='text' placeholder="enter book name" value ={this.state.author}  onChange={this.onChangeAuthor} required/>
          </div>
           <div className="form-group">
             <label>choose date</label><br/>
              <DatePicker 
                selected = {this.state.date} onChange={this.onChangeDate}
              /> 
           </div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </form>
     </div>
    );
  }
}

export default AddBook;