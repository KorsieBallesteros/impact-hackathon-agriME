import React from "react";
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
//import { firebase } from "../../database/firebase";
import logo from "./AgriME.png";
import "./header.css";

class Header extends React.Component {

  render() {
    return (
      <header>
      <nav>
        
          <a href="#">
            <img src={logo} alt="Logo"/>
          </a>
          <ul>
            {
            this.props.isAuthenticated ? 
                <li>
              <Link to="/form">Supplier Form</Link>
                </li>
                : <li></li>
            }
            <li>
           <Link to="/">Home</Link>
            </li>


            {
            this.props.isAuthenticated ? 
                <li>
                  <Link onClick={this.props.logout}>Logout</Link>
                </li>
                : 
                <li>
                  <Link to="/login">Login</Link>
                </li>
            }
            {//<li><Link to="/signup">Sign Up</Link></li>
            }
          </ul>
        
      </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout())
  }
}

export default withRouter( connect(null, mapDispatchToProps)(Header));