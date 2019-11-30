import React, { Component } from "react"
import Header from "./components/Header"
import Actions from "./components/Actions"
import Cat from "./components/Cat"
import './App.css';
const $ = window.$;
// const firebase = require("firebase")
// require("firebase/firestore")


class App extends Component {

  constructor() {

    super()

    this.state = {
    }


  }

  //FUNCTIONS-----------------------------------------------------------------------------------------------------------



  render() {

    return (
      <div className="App" >
        <Header />
        <Cat />
        <Actions />
      </div >
    )
  }
}

export default App;
