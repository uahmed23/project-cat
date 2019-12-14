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
      catimg: "./catpic.jpg"
    }

    this.fat = this.fat.bind(this)
    this.walk = this.walk.bind(this)
    this.fitcat = this.fitcat.bind(this)
    this.eat = this.eat.bind(this)
    this.petcat = this.petcat.bind(this)

  }

  //FUNCTIONS-----------------------------------------------------------------------------------------------------------

  eat(event) {
    this.setState({ catimg: "./eatcat.jpg" })
    setTimeout(this.fat, 2000)
  }
  fat(event) {
    this.setState({ catimg: "./fatcat.jpg" })
  }

  walk(event) {
    this.setState({ catimg: "./walkcat.jpg" })
    setTimeout(this.fitcat, 2000)
  }

  fitcat(event) {
    this.setState({ catimg: "./catpic.jpg" })

  }

  petcat(event) {
    this.setState({ catimg: "./memecatpet.jpg" })
    setTimeout(this.fitcat, 2000)

  }

  render() {

    return (
      <div className="App" >
        <br></br>

        <Header />
        <Cat pic={this.state.catimg} />
        <Actions feed={this.eat} walk={this.walk} pet={this.petcat} />
      </div >
    )
  }
}

export default App;
