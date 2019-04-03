import React, { Component } from 'react';
import './App.css';
import data from './data'
import PreviousUser from './components/PreviousUser'
import NextUser from './components/NextUser'
import NewUser from './components/NewUser'
import Home from './components/Home'
import EditUser from'./components/EditUser'
import DisplayUser from './components/DisplayUser'
import DeleteUser from './components/DeleteUser'





class App extends Component {
  
  state = {
      index: 0,
      data: data
  }

  nextUser = () => {
    if(this.state.index < this.state.data.length - 1) {
      this.setState({ index: this.state.index += 1 })
    } else {
      alert('stop in the name of the law');
    }
  }

  previousUser = () => {
    if(this.state.index > 0) {
      this.setState({ index: this.state.index -= 1 })
    } else {
      alert('stop in the name of the law');
    }
  }

  deleteUser = () => {
    
    if(this.state.index > 0) {
      {this.state.data.splice(this.state.index, 1)}
      this.setState({ index: this.state.index -= 1 })
    } else {
      {this.state.data.splice(this.state.index, 1)}
      this.setState({ index: this.state.index += 1 })
    }
  }
  
  render() {

    return (
      <div className="App">
        <Home />
        <DisplayUser dataArr={this.state.data} data={this.state.data[this.state.index]} />
        <PreviousUser previousUser={this.previousUser}/> 
        <EditUser /> 
        <DeleteUser deleteUser={this.deleteUser}/> 
        <NewUser /> 
        <NextUser nextUser={this.nextUser}/> 
      </div>
    );
  }
}

export default App;
