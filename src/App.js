import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormSum from './FormSum';
import ResultItem from './ResultItem';
import FormDu from './FormDu';


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
      exp: addState.termA + ' + ' + addState.termB + ' = ',
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
      exp: moduleState.termA + ' % ' + moduleState.termB + ' = ',
      res: resTemp
    };
    let tempList = this.state.resultList;
    tempList.unshift(resultItem);
    this.setState({ resultList: tempList });
  }
  //TODO
  handleSub(subState) { }
  handleDiv(divState) { }
  handleMul(mulState) { }



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
        <FormSum doAdd={this.handleAdd} />
        <FormDu doModule={this.handleModule} />
        {/* Them may cai <Form...> vao day */}
        {resultList}
      </div>
    );
  }
}

export default App;
