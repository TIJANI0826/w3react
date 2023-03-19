import React from "react";

class Football extends React.Component {
    //arrow function
    shoot1 = (a,b) => {
        alert(b.type);
    }
    
    // regular funtions
    shoot2(a, b) {
      alert(a, b.type);
    }

    render() {
      return (
          <div>
            <h1>Using Arrow Function and Regular Function(Football Component)</h1>
            <button onClick={(ev) => this.shoot1("Goal", ev)}>Take the shot Using arrow Function</button><br/>
            <button onClick={this.shoot2.bind(this, "Goal")}>Take the shot Using regular Function</button>
        </div>
      );
    }
  }

export default Football