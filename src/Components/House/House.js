import React, {Component} from 'react'



export default class House extends Component {
    render() {
        return(
            <div className='house-cards'>
                <h1>{this.props.name}</h1>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zip}</p>
                <button onClick={this.deleteHouse}>delete</button>
            </div>
        )
    }
}

