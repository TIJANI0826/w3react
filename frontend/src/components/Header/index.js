import React, { Component } from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 10000)
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
    //    shouldComponentUpdate() {
    //        return false;
    //     }
    // static getDerivedStateFromProps(props, state) {
    //   return {favoritecolor: props.favcol };
    // }
  
    render() {
      return (
        <div>
            <hr/>
            <h1>Header Component</h1>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button onClick={this.changeColor}>Change Favorite Color</button>
        </div>

      );
    }
  }
export default Header;