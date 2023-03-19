import React, { Component } from 'react';

class Tet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: "ibrahim"};
    }

    changeText = (text) => {
        text = prompt("")
        this.setState({text: text})
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        const prev = prevState.text
        alert("The previous state is " + prevState.text)
      }

      // componentDidMount() {
      //   return document.getElementById("div1").innerHTML = "<h1>" + this.state.text + "</h1>"
      // }
    render() {
      return (
        <div>
          <h1>Tet Component</h1>
          <div class="div1">{this.state.text}</div>
          <button onClick={this.changeText}>Change Text</button>
          <hr/>
        </div>

      );
    }
  }
export default Tet;