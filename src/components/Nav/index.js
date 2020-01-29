import React from 'react';
import { Link } from "react-router-dom";
import './styling.css'

export default class NavBar extends React.Component {  
  render() {
    const lightBar = "navbar navbar-expand-lg navbar-light nav-style fixed-top"
    // const darkBar = "navbar navbar-expand-lg navbar-dark nav-style fixed-top"
    return (
      <nav 
        className={lightBar} 
        style={{backgroundColor:'#128997',borderBottomColor:'#128997'}}
        // style={this.props.bgcolor ? {backgroundColor: "black"} : {backgroundColor: "white"}}
      >
        <div className='container'>
          <a className="navbar-brand myName" href="#"
          style={{color:'black'}}> 
          Alex Clemetine
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse flex-row-reverse">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link"
                style={{color:'black'}}>
                  Episodes
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/Blog" className="nav-link"
                    style={{color:'black'}}>
                  Blog
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link"
                    style={{color:'black'}}>
                  About
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/Contact" className="nav-link"
                    style={{color:'black'}}>
                  Contact
                </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}

