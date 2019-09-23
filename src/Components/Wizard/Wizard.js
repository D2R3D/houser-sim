import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Wizard.css'
export default class Wizard extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleChange = this.handleChange.bind(this)
      
    
    }

    handleChange(prop, value) {
        switch (prop) {
            case 'state':
                if(value.length>2){
                    return
                }
                break;
                case 'zip':
                    if(value.length >5) {
                        return
                    }
                break;
                    default:
                 break;
        }
        this.setState({ [prop]: value})
    }
    createHouse = () => {
        const {name, address, city, state, zip} = this.state;
        axios.post('/api/house', {name, address, city, state, zip})
            .then(res => {
                this.props.history.push('/')
    })
}

    render() {
        return (
            <div className ='house-container'>
                <div className ='input-boxes'>
                <input type='text'
                       value ={this.state.name}
                       onChange={e => this.handleChange('name',e.target.value)}> 
                </input>

                <input type='text'
                       value ={this.state.address}
                       onChange={e=> this.handleChange('address', e.target.value)}>
                </input>

                <input type ='text'
                       value={this.state.city}
                       onChange={e=> this.handleChange('city', e.target.value)}>
                </input>

                <input type ='text'
                       value ={this.state.state}
                       onChange ={e => this.handleChange('state', e.target.value)} />
                

                <input type ='number'
                       value ={this.state.zip}
                       onChange ={e => this.handleChange('zip', e.target.value)} />
                
                </div>
                Wizard
                <button onClick={_ => this.props.history.push('/')}> Cancel </button>

             <Link to ='/'>  <button onClick={this.createHouse}>Complete</button>   </Link>
            </div>
        )
    }
}
