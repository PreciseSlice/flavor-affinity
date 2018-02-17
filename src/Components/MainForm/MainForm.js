import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../../Actions';
import { setIngredients } from '../../Actions/index';
import { searchForIngredient } from '../../Helpers/apiCalls';
import './MainForm.css';

export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  }

  async submitForm(event) {
    event.preventDefault();
    const { setIngredients } = this.props;
    const { userInput } = this.state;
    const searchReasult = await searchForIngredient(userInput);
    setIngredients(searchReasult);
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={event => this.submitForm(event)}>
          <input
            name="userInput"
            type="text"
            onChange={event => this.handleChange(event)}
            placeholder="enter ingredient"
          />
          <button onClick={event => this.submitForm(event)}>search</button>
        </form>
      </div>
    );
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  setIngredients: ingredient => dispatch(setIngredients(ingredient))
});

export default connect(null, mapDispatchToProps)(MainForm);
