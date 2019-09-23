import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            houses: []
        }
     
        this.deleteHouse = this.deleteHouse.bind(this)
    
    }
 

    componentDidMount() {
        this.getHouses()
    }

    getHouses = () =>  {
        axios.get('/api/houses')
        .then(response => {
            this.setState({
                houses: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    };
    

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`).then(res => this.getHouses());
    }
    render() {
        return (
            <div>
                  <button onClick= {_ => this.props.history.push('/wizard')}> Add New Property </button>
                  
            <div className='dash_prop_container'>
          <h3 className='dash_prop_heading'>Home Listings</h3>
          {/* {this.state.houses.map(house => {
            return (
                <House key={house.id}
                    index={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deleteHouse={this.deleteHouse} />
            )})} */}

            {this.state.houses.map(e => {
                return <House house ={e} deleteHouse = {this.deleteHouse} key = {e.id} />
            })}
        </div>
  
              
                    
            
            </div>
        )
            }
        }
