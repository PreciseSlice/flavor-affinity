import React, { Component } from 'react';
import './MainForm.css';
import { connect } from 'react-redux';
//import * as actions from '../../Actions';
import { setIngredients } from '../../Actions/index'
import { searchForIngredient } from '../../Helpers/apiCalls';

class MainForm extends Component {
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

  submitForm(event) {
    const { setIngredients } = this.props;
    event.preventDefault();
    const { userInput } = this.state;
    const searchReasult = searchForIngredient(userInput);
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
          {/* <buttton>icon</buttton> */}
        </form>
      </div>
    );
  }
}

// export const mapStateToProps = state => ({
  
// });

export const mapDispatchToProps = dispatch => ({
  setIngredients : ingredient =>
    dispatch(searchForIngredient(ingredient))
});

export default connect(null, mapDispatchToProps)(MainForm);
