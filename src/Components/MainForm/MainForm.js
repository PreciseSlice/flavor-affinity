import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../../Actions';
import { setAllIngredients } from '../../Actions/index';
//import { searchForIngredient } from '../../Helpers/apiCalls';
import { PrefixTrie } from '@PreciseSlice/complete-me';
import './MainForm.css';
import PropTypes from 'prop-types';

export class MainForm extends Component {
  constructor(props) {
    super(props);

    this.trie = new PrefixTrie();

    this.state = {
      userInput: '',
      allIngredients: [],
      suggestedIngredients: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.allIngredients !== nextProps.allIngredients) {
      const { allIngredients } = nextProps
      const nameArray = allIngredients.map(ingredient => {
        return ingredient.name;
      });
      this.trie.populate(nameArray);
      this.setState({
        allIngredients
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    this.suggestIngredient(value);
  }

  // async submitForm(event) {
  //   event.preventDefault();
  //   const { setAllIngredients } = this.props;
  //   const { userInput } = this.state;
  //   const searchReasult = await searchForIngredient(userInput);
  //   setAllIngredients(searchReasult);
  // }

  suggestIngredient(input) {
    const suggestedIngredients = this.trie.suggest(input);

    this.setState({
      suggestedIngredients
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={event => this.submitForm(event)}>
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
            {/* need to make this conditional on data being
                in the suggested ingredients array */}
            {this.state.suggestedIngredients
              .map(ingredient => {
                return <option value={ingredient} key={ingredient} />;
              })
              .slice(0, 5)}
          </datalist>

          <button onClick={event => this.submitForm(event)}>search</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  allIngredients: state.ingredients,
});

export const mapDispatchToProps = dispatch => ({
  setAllIngredients: ingredient => dispatch(setAllIngredients(ingredient))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);

MainForm.propTypes = {
  allIngredients: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )]),
};
