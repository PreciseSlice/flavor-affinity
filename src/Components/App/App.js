import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainForm from '../MainForm/MainForm';
import CardContainer from '../CardContainer/CardContainer';
import { setAllIngredients } from '../../Actions';
//import { getAllIngredients } from '../../Helpers/apiCalls';
//import { allDataClean } from '../../Helpers/.mockApi.js';
import { cleanData } from '../App/testData';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Selected from '../Selected/Selected';
import Header from '../Header/Header';

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
    setAllIngredients(cleanData);
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
        <div className="error">
          <h2>{'Oh-no! Something went wrong'}</h2>
          <p className="">{this.state.error && this.state.error.toString()}</p>
          <div>{'Component Stack Error Details: '}</div>
          <p className="">{this.state.errorInfo.componentStack}</p>
          <button onClick={() => this.clearError()} />
        </div>
      );
    }
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="app">
              <Header />
              <MainForm />
              <CardContainer />
            </div>
          )}
        />
        <Route
          path="/selected"
          render={() => (
            <div className="app">
              <Header />
              <Selected />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setAllIngredients: ingredient => dispatch(setAllIngredients(ingredient))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
