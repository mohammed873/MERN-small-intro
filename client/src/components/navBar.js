import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class navBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to ="/" className="navbar-brand">Books</Link>
            </li>
            <li className="navbar-item">
              <Link to ="/add" className="navbar-brand">Add book</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}