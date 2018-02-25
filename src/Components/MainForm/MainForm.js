import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setAllIngredients,
  setSuggestedIngredients
} from '../../Actions/index';
//import * as actions from '../../Actions';
//import { searchForIngredient } from '../../Helpers/apiCalls';
import { PrefixTrie } from '@PreciseSlice/complete-me';
import './MainForm.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export class MainForm extends Component {
  constructor(props) {
    super(props);

    this.trie = new PrefixTrie();

    this.state = {
      userInput: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allIngredients !== nextProps.allIngredients) {
      const { allIngredients } = nextProps;
      const nameArray = allIngredients.map(ingredient => ingredient.name);

      this.trie.populate(nameArray);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    this.suggestIngredient(value);
  }

  suggestIngredient(input) {
    const suggestedIngredients = this.trie.suggest(input);

    this.props.setSuggestedIngredients(suggestedIngredients);
  }

  render() {
    return (
      <div className="form-container">
        <div>
          <button>
            <NavLink to="/selected">Ingredients</NavLink>
          </button>
          <button>
            <NavLink to="/">Home</NavLink>
          </button>
        </div>
        <form>
          <input
            autoComplete="off"
            autoFocus
            name="userInput"
            type="text"
            onChange={event => this.handleChange(event)}
            placeholder="enter ingredient"
            list="drop-down"
          />

          <datalist id="drop-down">
            {this.props.suggestedIngredients
              .map((ingredient, index) => {
                return <option value={ingredient} key={index} />;
              })
              .slice(0, 5)}
          </datalist>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
  suggestedIngredients: state.suggestedIngredients
});

export const mapDispatchToProps = dispatch => ({
  setAllIngredients: ingredient => dispatch(setAllIngredients(ingredient)),
  setSuggestedIngredients: suggestedIngredients =>
    dispatch(setSuggestedIngredients(suggestedIngredients))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);

MainForm.propTypes = {
  allIngredients: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
      })
    )
  ]),

  suggestedIngredients: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
      })
    )
  ]),

  setSuggestedIngredients: PropTypes.func.isRequired

};
