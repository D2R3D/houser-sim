import React, { Component } from 'react'
// import 'reset-css'

import routes from './routes'

import Header from './Components/Header/Header'

export default class App extends Component {
  render() {
    return (
  
      <div>
        <Header />
        {routes}
      </div>
      
    )
  }
}
