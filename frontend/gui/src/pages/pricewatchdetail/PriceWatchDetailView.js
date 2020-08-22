import React, {Fragment} from 'react';
import axios from 'axios';
import "./PriceWatchDetailView.css";
class PriceWatchDetail extends React.Component{

    state = {
        pricewatch: {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/price/${articleID}/`)
        .then(res => {
            this.setState(
                {pricewatch: res.data}
            );
            console.log(res.data);
        })
    }

    render(){
        return(
    <div>
      <Fragment > 
        <header>
          <h4>Department of Agriculture</h4>
          <h2>Bantay Presyo Prices Monitoring </h2>
          <h8> PREVAILING PRICES </h8>

      </header>
            <div className="centered">
            <br />
                <h1> Rice</h1>
                <br />
            </div>
            <div className="rice">
              
                <div>            
                        <h4>NFA Rice</h4> 
                        <h1>{this.state.pricewatch.NFA}</h1>
                        <h6>pesos per kilo</h6>
         
                </div>

                <div>
                    <h4>Special Rice</h4>
                    <h1>{this.state.pricewatch.Local_Special}</h1>
                    <h6>pesos per kilo</h6>
                </div>

            
                <div>
                    <h4>Premium Rice</h4>
                    <h1> {this.state.pricewatch.Local_Premium}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Well milled Rice</h4>
                    <h1>{this.state.pricewatch.Local_Well_milled}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Regular milled Rice</h4>
                    <h1>{this.state.pricewatch.Local_Regular_milled}</h1>
                    <h6>pesos per kilo</h6>
                </div>
        </div>
             <div className="centered">
             <br />
                <h1> Seafood</h1>
                <br />
            </div>
            <div className="seafood">
                <div>
                    <h4>Bangus</h4>
                    <h1>{this.state.pricewatch.Bangus}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Tilapia</h4>
                    <h1> {this.state.pricewatch.Tilapia} </h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Galunggong</h4>
                    <h1>{this.state.pricewatch.Local_Galunggong}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Alumahan</h4>
                    <h1>{this.state.pricewatch.Alumahan} </h1>
                    <h6>pesos per kilo</h6>
                </div>
            </div>
            <div className="centered">
            <br />
                <h1> Vegetables and Fruits</h1>
                <br />
            </div>
            <div className="vegfruit">
                <div>
                    <h4>Ampalaya</h4>
                    <h1>{this.state.pricewatch.Ampalaya}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Sitao</h4>
                    <h1>{this.state.pricewatch.Sitao}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Squash</h4>
                    <h1>{this.state.pricewatch.Squash}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Eggplant</h4>
                    <h1>{this.state.pricewatch.Eggplant}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Tomato</h4>
                    <h1>{this.state.pricewatch.Tomato}</h1>
                    <h6>pesos per kilo</h6>
                </div>
            </div>
            <div className="vegfruit">
                <div>
                    <h4>Cabbage</h4>
                    <h1>{this.state.pricewatch.Cabbage}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Carrots</h4>
                    <h1>{this.state.pricewatch.Carrots}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>White Potato</h4>
                    <h1> {this.state.pricewatch.White_Potato} </h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Pechay</h4>
                    <h1>{this.state.pricewatch.Pechay}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Chayote</h4>
                    <h1>{this.state.pricewatch.Chayote}</h1>
                    <h6>pesos per kilo</h6>
                </div>

            </div>
            <div className="vegfruit">
                <div>
                    <h4>Red Onion</h4>
                    <h1>{this.state.pricewatch.Local_Red_Onion} </h1>
                    <h6>pesos per kilo</h6>                
                </div>
                <div>
                    <h4>White Onion</h4>
                    <h1>{this.state.pricewatch.Local_White_Onion} </h1>
                    <h6>pesos per kilo</h6>              
                </div>
                <div>
                    <h4>Garlic</h4>
                    <h1>{this.state.pricewatch.Local_Garlic} </h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Ginger</h4>
                    <h1>{this.state.pricewatch.Ginger} </h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Chili</h4>
                    <h1> {this.state.pricewatch.Chili} </h1>
                    <h6>pesos per kilo</h6>
                </div>               
            </div>
            <div className="vegfruit">
                <div>
                    <h4>Calamansi</h4>
                    <h1>{this.state.pricewatch.Calamansi} </h1>
                    <h6>pesos per kilo</h6>
                </div>
                    <div>
                        <h4>Lakatan</h4>
                        <h1>{this.state.pricewatch.Banana_Lakatan}</h1>
                        <h6>pesos per kilo</h6>
                    </div>
                    <div>
                        <h4>Latundan</h4>
                        <h1>{this.state.pricewatch.Banana_Latundan} </h1>
                        <h6>pesos per kilo</h6>
                    </div>
                <div>
                    <h4>Papaya</h4>
                    <h1>{this.state.pricewatch.Papaya}</h1>
                    <h6>pesos per kilo</h6>
                </div>
                <div>
                    <h4>Mango</h4>
                    <h1> {this.state.pricewatch.Mango} </h1>
                    <h6>pesos per kilo</h6>
                </div>
            </div>
            
       
            
            </Fragment>
        </div>
           
        );
    }

}

export default PriceWatchDetail;