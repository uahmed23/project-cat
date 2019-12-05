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

    this.feed = this.feed.bind(this)
    this.walk = this.walk.bind(this)
    this.fitcat = this.fitcat.bind(this)

  }

  //FUNCTIONS-----------------------------------------------------------------------------------------------------------

  feed(event) {
    this.setState({ catimg: "./fatcat.jpg" })
  }

  walk(event) {
    this.setState({ catimg: "./walkcat.jpg" })
    setTimeout(this.fitcat, 3000)
  }

  fitcat(event) {
    this.setState({ catimg: "./catpic.jpg" })

  }

  render() {

    return (
      <div className="App" >
        <br></br>

        <Header />
        <Cat pic={this.state.catimg} />
        <Actions feed={this.feed} walk={this.walk} />
      </div >
    )
  }
}

export default App;
