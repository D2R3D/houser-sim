import React from 'react'
import './House.css'


export default function House(props) {
    let { id, name, address, city, state, zip } = props.house;
    return (
      <div className='House'>
        <div className='house_detail_box'>
          <p>Property Name: {name}</p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
        </div>

        <div>
        <button onClick={_ => props.deleteHouse(id)}> Delete </button>
        </div>
      </div>
    )
  }

