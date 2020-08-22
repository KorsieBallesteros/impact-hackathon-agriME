import React from 'react';
import axios from 'axios';


import Dropdownmenu from './province';
import CustomForm from '../form/form'; //paaath

import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';


class PriceWatchList extends React.Component{

    state = {
        pricewatchs: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/price/')
        .then(res => {
            this.setState(
                {pricewatchs:res.data}
            );
            //console.log(this.state.pricewatchs[0].id);
            //for (var i in this.state.pricewatchs) {
            //  console.log(this.state.pricewatchs[i].id);
            //}
        })
    }

    render(){
        return(
            <>  {this.props.isAuthenticated ?  
                  <div>
                    <h2>Enter market prices</h2>
                    <CustomForm requestType="post" articleID={null} /> 
                  </div>
                  : <br/>}
                {//<PriceWatch data={this.state.pricewatchs}/>
                }
                <br/>
                {<Dropdownmenu data={this.state.pricewatchs} />
                }
            </>
        );
        }
    

}
const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout())
  }
}

//export default withRouter( connect(null, mapDispatchToProps)(CustomLayout));

export default withRouter( connect(null, mapDispatchToProps)(PriceWatchList));