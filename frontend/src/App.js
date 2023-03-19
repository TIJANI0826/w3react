import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import Car from './components/Car';
import Tet from './components/Tet';
import Remover from './components/Remover';
import Football from './components/Football';
import MyForm from './components/Forms';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {color: "red"};
  }

  render(){
    return(
      <div>
        <Remover />
        <Header favcol="Pink"/>
        <Car  color="Pink"/>
        <Tet />
        <Football />
        <MyForm />
      </div>
    )
  }

}
export default App;
