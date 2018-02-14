import React, { Component } from 'react';
import './App.css';
import MainForm from '../Form/MainForm';
//import { connect } from 'react-redux';
//import { getAllIngredients } from '../../Helpers/apiCalls';


class App extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <div className="App">
        <MainForm />
      </div>
    );
  }
}

export default App
