import React from 'react';
import { Link} from 'react-router-dom';

class Welcome extends React.Component {
    constructor() {
        super();
 //       this.state = {
 //         farmername: "",
 //         farmernumber:""
  //      }
 //       this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        return(
            
            <div>
            
                <Link to="/farmerprofile">
                  <button> Farmer </button>
                </Link>
              
                <Link to="/pricewatch">
                 <button> Consumer </button>
            </Link>
    
                   </div>
           
        );
       

   }
}



export default Welcome;