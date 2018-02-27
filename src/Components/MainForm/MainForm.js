import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setAllIngredients,
  setSuggestedIngredients,
  setUserInput
} from '../../Actions/index';
import { PrefixTrie } from '@PreciseSlice/complete-me';
import './MainForm.css';
import PropTypes from 'prop-types';

export class MainForm extends Component {
  constructor(props) {
    super(props);

    this.trie = new PrefixTrie();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allIngredients !== nextProps.allIngredients) {
      const { allIngredients } = nextProps;
      const nameArray = allIngredients.map(ingredient => ingredient.name);

      this.trie.populate(nameArray);
    }
  }

  handleChange(event) {
    const { setUserInput } = this.props;
    const { value } = event.target;

    setUserInput(value);
    this.suggestIngredient(value);
  }

  suggestIngredient(input) {
    const suggestedIngredients = this.trie.suggest(input);

    this.props.setSuggestedIngredients(suggestedIngredients);
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <input
            autoComplete="off"
            autoFocus
            name="userInput"
            type="text"
            value={this.props.userInput}
            onChange={event => this.handleChange(event)}
            placeholder="search"
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
  suggestedIngredients: state.suggestedIngredients,
  userInput: state.userInput
});

export const mapDispatchToProps = dispatch => ({
  setAllIngredients: ingredient => dispatch(setAllIngredients(ingredient)),
  setSuggestedIngredients: suggestedIngredients =>
    dispatch(setSuggestedIngredients(suggestedIngredients)),
  setUserInput: userInput => dispatch(setUserInput(userInput))
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

  setSuggestedIngredients: PropTypes.func.isRequired,
  setUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string
};
