import React, { Component } from 'react';
import styles from './car.module.css';

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {color: props.color };
    //   }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <hr />
          <h1 className={styles.bigblue}>Car Component</h1>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
              {this.state.model} 
            from {this.state.year}.
          </p>
          <button 
            type="button"
            onClick={this.changeColor}>Change color</button>
          <hr />
        </div>
      );
    }
  }
export default Car;