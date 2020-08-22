import React, {Component} from 'react';
//import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './pages/routes';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth'

import CustomLayout from './containers/Layout';
import { connect } from 'react-redux';
  
  
//function App() {
class App extends Component {
  componentDidMount() {
    //let uid = localStorage.getItem("uid");
    //console.log(uid);
    this.props.onTryAutoSignup();
  }
  render(){
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
