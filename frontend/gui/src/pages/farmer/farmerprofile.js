import React from 'react';
import axios from 'axios'

class FarmerProfile extends React.Component{
    constructor() {
        super();
        this.state = {
              farmername: "",
              farmernumber:""
         }
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
          [evt.target.id]: value,
        });
      };
  
    handleSubmit(){
        //insert database
        //registration ba to ng farmers? yep
        axios.post('http://127.0.0.1:8000/api/farmer/',{
                farmer_name: this.state.farmername,                                                                      
                number: this.state.farmernumber,                                                                                               
        }).then(res => console.log(res));
        //.catch(error => console.err(error));
    };

    render(){
        return(
        <div>
          <blockquote>
            <div >
              
            <h6>Name</h6>
                    <input
                      type="farmername"
                      id="farmername"
                      name="farmername"
                      onChange={this.handleChange}
                    />
            </div>

            <div>
              <br />
            <h6>Contact Number</h6>
                    <input
                      type="farmerumber"
                      id="farmernumber"
                      name="farmernumber"
                      onChange={this.handleChange}
                    />
            </div>
           

            <div>
              <br />
              <h6>
                    <button
                      class="button"
                      onClick={this.handleSubmit}
                      type="submit"
                      >
                     Register
                    </button>
                    </h6>
            </div>
            </blockquote>
            </div>

     
        
        )

    }

}

export default FarmerProfile;