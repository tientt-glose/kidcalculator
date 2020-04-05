import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ResultItem from './ResultItem';
import FormSum from './FormSum';
import FormSub from './FormSub';
import FormMul from './FormMul';
import FormDu from './FormDu';
import FormDiv from './FormDiv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.handleMul = this.handleMul.bind(this);
    this.handleDiv = this.handleDiv.bind(this);
    this.handleModule = this.handleModule.bind(this);
  }

  handleDelete(id) {
    let tempList = this.state.resultList;
    tempList.splice(id, 1);
    this.setState({ resultList: tempList });
  }

  handleAdd(addState) {
    console.log(Number(addState.termA) + Number(addState.termB));
    var resTemp = Number(addState.termA) + Number(addState.termB);
    var resultItem = {
      exp: Number(addState.termA) + ' + ' + Number(addState.termB) + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }

  handleSub(subState) {
    console.log(Number(subState.termA) - Number(subState.termB));
    var resTemp = Number(subState.termA) - Number(subState.termB);
    var resultItem = {
      exp: Number(subState.termA) + ' - ' + Number(subState.termB) + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }

  handleMul(mulState) {
    console.log(Number(mulState.termA) * Number(mulState.termB));
    var resTemp = Number(mulState.termA) * Number(mulState.termB);
    var resultItem = {
      exp: Number(mulState.termA) + ' * ' + Number(mulState.termB) + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }

  handleModule(moduleState) {
    console.log(Number(moduleState.termA) % Number(moduleState.termB));
    var resTemp = Number(moduleState.termA) % Number(moduleState.termB);
    var resultItem = {
      exp: Number(moduleState.termA) + ' % ' + Number(moduleState.termB) + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }

  handleDiv(divState) { 
  console.log(Number(divState.termA) / Number(divState.termB));
    var resTemp = Number(divState.termA) / Number(divState.termB);
    var resultItem = {
      exp: Number(divState.termA) + ' / ' + Number(divState.termB) + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }

  render() {
    var resultList = this.state.resultList.map((item, id) => (
      <ResultItem
        id={id}
        exp={item.exp}
        res={item.res}
        onDelete={() => this.handleDelete(id)}
      />
    ));
    return (
      <div className="App">
        <h1> ⛩ Kid Calculator ⛩</h1>
        <FormSum doAdd={this.handleAdd} />
        <FormSub doSub={this.handleSub} />
        <FormMul doMul={this.handleMul} />
        <FormDu doModule={this.handleModule} />
        <FormDiv doDiv={this.handleDiv}/>
        {resultList}
      </div>
    );
  }
}

export default App;
