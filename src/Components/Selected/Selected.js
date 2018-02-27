import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import '../CardContainer/CardContainer.css';
import { setPairings } from '../../Actions/index';
import { getParings } from '../../Helpers/apiCalls';
import PairingContainer from '../PairingContainer/PairingContainer';

export class Selected extends Component {
  render() {
    const { selectedCards, setPairings, pairingsObject } = this.props;

    const handlePairing = async (id, name) => {
      const pairings = await getParings(id, name);
      setPairings(pairings);
    };

    if (selectedCards && !pairingsObject.topFive) {
      const cards = selectedCards.map(ingredient => {
        return <Card data={ingredient} key={ingredient.id} />;
      });

      const ids = selectedCards.map(ingredient => ingredient.id).join();
      const names = selectedCards.map(ingredient => ingredient.name).join();

      return (
        <div className="all-pairings-container">
          <div className="all-pairings-btn-container">
            <button
              className="all-pairings-btn"
              onClick={() => handlePairing(ids, names)}
            >
              get pairings for all
            </button>
          </div>
          <div className="card-container">{cards}</div>
        </div>
      );
    } else if (pairingsObject.topFive) {
      return <PairingContainer />;
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => ({
  selectedCards: state.selectedCards,
  pairingsObject: state.pairingsObject
});

export const mapDispatchToProps = dispatch => ({
  setPairings: pairingsObject => dispatch(setPairings(pairingsObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Selected);

Selected.propTypes = {
  selectedCards: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
  ]),

  pairingsObject: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      topFive: PropTypes.array,
      middleFive: PropTypes.array,
      finalFive: PropTypes.array
    })
  ]),

  setPairings: PropTypes.func.isRequired
};
