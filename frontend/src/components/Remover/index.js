import React from "react";

class Remover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }

    delHeader = () => {
      this.setState({show: false});
    }
    showHeader = () => {
        this.setState({show : true})
    }

    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
          <hr/>
          <h1>Remover component with Child Component to be removed</h1>
          {myheader}
          <button type="button" onClick={this.showHeader} hidden={this.state.show}>Show Header</button>
          <button type="button" onClick={this.delHeader} hidden={!this.state.show}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }

  export default Remover;