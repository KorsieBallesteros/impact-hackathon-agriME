import { Layout} from 'antd';
import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import CustomForm from '../pages/form/form'
import Header from '../components/header/header'
import './layout.css'

const { Headerant, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render () {
    return (
      <Layout className="layout">
      <Header {...this.props}>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 10px' }} >
        <div >
            {//<PriceWatchList isAuth={this.props.isAuthenticated} />}
              this.props.isAuthenticated ?  
                <div>
                  <h2>Enter market prices</h2>
                  <CustomForm requestType="post" articleID={null} /> 
                </div>
                : 
                  <div>
                    {this.props.children}
                  </div>
            }
            
            
        </div>
      </Content>
      <Footer >
        <div className = "bottom">
        {//2020 Agriculture Mobility and Efficiency PSME-UPSU AgriME
      }
          </div> </Footer>
    </Layout>
    ); 
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout())
  }
}

export default withRouter( connect(null, mapDispatchToProps)(CustomLayout));