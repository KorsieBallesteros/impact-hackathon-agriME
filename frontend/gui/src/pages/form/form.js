import React from 'react';
//import { Form, Input, Button} from 'antd';
import axios from 'axios';
import "./form.css";

class CustomForm extends React.Component {

    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

        this.state={
            province: null,
            NFA: null,
            Local_Special: null,
            Local_Premium: null,
            Local_Well_milled: null,
            Local_Regular_milled: null,
            Bangus: null,
            Tilapia: null,
            Local_Galunggong: null,
            Alumahan: null,
            Ampalaya: null,
            Sitao: null,
            Squash: null,
            Eggplant: null,
            Tomato: null,
            Cabbage: null,
            Carrots: null,
            White_Potato: null,
            Pechay: null,
            Chayote: null,
            Red_Onion: null,
            White_Onion: null,
            Local_Garlic: null,
            Ginger: null,
            Chili: null,
            Calamansi: null,
            Banana_Lakatan: null,
            Banana_Latundan: null,
            Papaya: null,
            Mango: null,
        }
    }
    handleFormSubmit = (event, requestType) => {

        event.preventDefault();
        console.log("form submitted");
        const NFA = this.state.NFA
        const Local_Special = this.state.Local_Special
        const Local_Premium = this.state.Local_Premium
        const Local_Well_milled = this.state.Local_Well_milled
        const Local_Regular_milled = this.state.Local_Regular_milled
        const Bangus = this.state.Bangus
        const Tilapia = this.state.Tilapia
        const Local_Galunggong = this.state.Local_Galunggong
        const Alumahan = this.state.Alumahan
        const Ampalaya = this.state.Ampalaya
        const Sitao = this.state.Sitao
        const Squash = this.state.Squash
        const Eggplant = this.state.Eggplant
        const Tomato = this.state.Tomato
        const Cabbage = this.state.Cabbage
        const Carrots = this.state.Carrots
        const White_Potato = this.state.White_Potato
        const Pechay = this.state.Pechay
        const Chayote = this.state.Chayote
        const Red_Onion = this.state.Red_Onion
        const White_Onion = this.state.White_Onion
        const Local_Garlic = this.state.Local_Garlic
        const Ginger = this.state.Ginger
        const Chili = this.state.Chili
        const Calamansi = this.state.Calamansi
        const Banana_Lakatan = this.state.Banana_Lakatan
        const Banana_Latundan = this.state.Banana_Latundan
        const Papaya = this.state.Papaya
        const Mango = this.state.Mango


        let province = localStorage.getItem("province");
        console.log('asdasd',province);
        axios.post('http://127.0.0.1:8000/api/price/',{
                province: province,                                                                      
                NFA: NFA,                                                                                                                                          
                Local_Special: Local_Special,                                                                      
                Local_Premium: Local_Premium,                                                                      
                Local_Well_milled: Local_Well_milled,                                                                      
                Local_Regular_milled: Local_Regular_milled,                                                                      
                Bangus: Bangus,                                                                      
                Tilapia: Tilapia,                                                                      
                Local_Galunggong: Local_Galunggong,                                                                                                                                           
                Alumahan: Alumahan,                                                                      
                Ampalaya: Ampalaya,                                                                      
                Sitao: Sitao,                                                                      
                Squash: Squash,                                                                      
                Eggplant: Eggplant,                                                                      
                Tomato: Tomato,                                                                      
                Cabbage: Cabbage,                                                                      
                Carrots: Carrots,                                                                                                                                          
                White_Potato: White_Potato,                                                                      
                Pechay: Pechay,                                                                      
                Chayote: Chayote,                                                                      
                Local_Red_Onion: Red_Onion,                                                                                                                                            
                Local_White_Onion: White_Onion,                                                                                                                                           
                Local_Garlic: Local_Garlic,                                                                                                                                           
                Ginger: Ginger,                                                                      
                Chili: Chili,                                                                      
                Calamansi: Calamansi,                                                                      
                Banana_Lakatan: Banana_Lakatan,                                                                      
                Banana_Latundan: Banana_Latundan,                                                                      
                Papaya: Papaya,                                                                      
                Mango: Mango,                                              
            })
            .then(res => console.log(res));
            //.catch(error => console.err(error));

    }

    handleFormChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        //const {province} = this.state
        return (
            
            <form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID
            )}>
            
            {/*div 1 for titles*/ }
            {/*div 2 for input boxes*/ }
            {/*form.css 
            className{
                display: flex;
                flex-direction: row;
                } 
            */}
        <div className = "form" > 
            <div>
                <label> NFA: </label>
                <label> Local Special: </label>
                <label> Local Premium: </label>
                <label> Local Well-Milled: </label>
                <label> Local Regular-Milled:  </label>
                <label> Bangus: </label>
                <label> Tilapia: </label>
                <label> Local Galunggong: </label>
                <label> Alumahan: </label>
                <label> Ampalaya: </label>
                <label> Sitao: </label>
                <label> Pechay: </label>
                <label> Squash: </label>
                <label> Eggplant: </label>
                <label> Tomato: </label>
                <label> Cabbage: </label>
                <label> Carrots: </label>
                <label> White Potato: </label>
                <label> Chayote: </label>
                <label> Local Red Onion: </label>
                <label> Local White Onion: </label>
                <label> Local Garlic:   </label>
                <label> Ginger: </label>
                <label> Chili: </label>
                <label> Calamansi: </label>
                <label> Banana Lakatan: </label>
                <label> Banana Latundan: </label>
                <label> Papaya: </label>
                <label> Mango: </label>
            </div>

            <div>
              
                <input type="text" placeholder="" name="NFA" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Special" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Premium" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Well_milled" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Regular_milled" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Bangus" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Tilapia" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Galunggong" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Alumahan" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Ampalaya" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Sitao" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Pechay" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Squash" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Eggplant" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Tomato" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Cabbage" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Carrots" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="White_Potato" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Chayote" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Red_Onion" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="White_Onion" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Local_Garlic" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Ginger" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Chili" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Calamansi" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Banana_Lakatan" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Banana_Latundan" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Papaya" onChange={this.handleFormChange} />
                <input type="text" placeholder="" name="Mango" onChange={this.handleFormChange} />
         
            </div>
            </div>

           {/* 
            <label>
                Province:  
                <input type="text" placeholder="" name="province" onChange={this.handleFormChange} />
            </label>
            <br/>
            <h1>Rice</h1>
            <label>
                NFA:  
                <input type="text" placeholder="" name="NFA" onChange={this.handleFormChange} />
            </label>
            <br/>

            <label>
                Local Special:  
                <input type="text" placeholder="" name="Local_Special" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Premium  
                <input type="text" placeholder="" name="Local_Premium" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Well milled:  
                <input type="text" placeholder="" name="Local_Well_milled" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Regular milled:  
                <input type="text" placeholder="" name="Local_Regular_milled" onChange={this.handleFormChange} />
            </label>
            <br/>
            <h1>Fish</h1>
            <label>
                Bangus:  
                <input type="text" placeholder="" name="Bangus" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Tilapia:  
                <input type="text" placeholder="" name="Tilapia" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Galunggong:  
                <input type="text" placeholder="" name="Local_Galunggong" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Alumahan:  
                <input type="text" placeholder="" name="Alumahan" onChange={this.handleFormChange} />
            </label>
            <br/>
            <h1>Fruits and Vegetables</h1>
            <label>
                Ampalaya:  
                <input type="text" placeholder="" name="Ampalaya" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Sitao:  
                <input type="text" placeholder="" name="Sitao" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Pechay:  
                <input type="text" placeholder="" name="Pechay" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Squash:  
                <input type="text" placeholder="" name="Squash" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Eggplant:  
                <input type="text" placeholder="" name="Eggplant" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Tomato:  
                <input type="text" placeholder="" name="Tomato" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Cabbage:  
                <input type="text" placeholder="" name="Cabbage" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Carrots:  
                <input type="text" placeholder="" name="Carrots" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                White Potato:  
                <input type="text" placeholder="" name="White_Potato" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Chayote:  
                <input type="text" placeholder="" name="Chayote" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Red Onion:  
                <input type="text" placeholder="" name="Red_Onion" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local White Onion:  
                <input type="text" placeholder="" name="White_Onion" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Local Garlic:  
                <input type="text" placeholder="" name="Local_Garlic" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Imported Garlic:  
                <input type="text" placeholder="" name="Imported_Garlic" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Ginger:  
                <input type="text" placeholder="" name="Ginger" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Chili:  
                <input type="text" placeholder="" name="Chili" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Calamansi:  
                <input type="text" placeholder="" name="Calamansi" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Banana Lakatan:  
                <input type="text" placeholder="" name="Banana_Lakatan" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Banana Latundan:
                <input type="text" placeholder="" name="Banana_Latundan" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Papaya:  
                <input type="text" placeholder="" name="Papaya" onChange={this.handleFormChange} />
            </label>
            <br/>
            <label>
                Mango:  
                <input type="text" placeholder="" name="Mango" onChange={this.handleFormChange} />
            </label>
            */}
            <br/>
            <button name = "Submit" type="submit" value="Submit"> Submit </button> 
          </form>
        );
    }

}

export default  CustomForm;
/*
<>
<Form onSubmit={this.handleFormSubmit}>
    <Form.Item label="Field A">
        <Input name="nfa" placeholder="NFA price" />
    </Form.Item>
    <Form.Item  label="Field B">
        <Input name="xxx" placeholder="xxx price" />
    </Form.Item>
    <Form.Item>
        <Button type="submit" htmlType="submit">Submit</Button>
    </Form.Item>
</Form>
</>
*/