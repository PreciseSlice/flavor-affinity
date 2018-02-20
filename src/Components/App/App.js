import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainForm from '../MainForm/MainForm';
import CardContainer from '../CardContainer/CardContainer';
//import { getAllIngredients } from '../../Helpers/apiCalls';
import { setAllIngredients } from '../../Actions';
//import * as actions from '../../Actions';
import { allDataClean } from '../../Helpers/.mockApi.js';
//import { cleanData } from '../App/testData';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  async componentDidMount() {
    const { setAllIngredients } = this.props;
    //const allIngredients = await getAllIngredients();
    //setAllIngredients(allIngredients);
    setAllIngredients(allDataClean);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  clearError() {
    this.setState({
      error: null,
      errorInfo: null
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="eror">
          <h2>{'Oh-no! Something went wrong'}</h2>
          <p className="">{this.state.error && this.state.error.toString()}</p>
          <div>{'Component Stack Error Details: '}</div>
          <p className="">{this.state.errorInfo.componentStack}</p>
          <button onClick={() => this.clearError()} />
        </div>
      );
    }
    return (
      <div className="app">
        <MainForm />
        <CardContainer />
      </div>
    );
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  setAllIngredients: ingredient => dispatch(setAllIngredients(ingredient))
});

export default connect(null, mapDispatchToProps)(App);
