import React from "react";

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
        errormessage: "",
        description: 'The content of a textarea goes in the value attribute',
        mycar: "Volvo"
      };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = ""
      if (nam === "age") {
        if (val !="" && !Number(val)) {
          err = <strong>Your age must be a number</strong>;
        }
        else{
            err = <strong style={{ color: "green"}}>Correct</strong>
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
      this.setState({mycar: val})
      
      
    }
    render() {
        return (
          <form style={{backgroundColor: "lightblue"}} onSubmit={this.mySubmitHandler}>
                <hr/>
                <h1 style={{color: "", fontFamily: "serif"}}>MyForm Component</h1>
                <h1 style={{color: "Blue", fontFamily: "serif"}}>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <h4 style={{color: "red", fontFamily: "serif"}}>{this.state.errormessage}</h4>
                <br/>
                <textarea value={this.state.description} />
                <br/>
                <select value={this.state.mycar} onChange={this.myChangeHandler}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select><br/>
                <input type='submit'/><br/>
               
          </form>
        );
      }
  }
export default MyForm;