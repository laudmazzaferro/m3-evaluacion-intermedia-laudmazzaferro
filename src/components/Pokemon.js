import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon-item-container">
        <img src={this.props.url} alt={this.props.name} className="pokemon-item-img" />
        <h2 className="pokemon-item-name">{this.props.name}</h2>
        <ol className="pokemon-item-types-list">
          {this.props.types.map((types, index) => {
            return (
              <li className="pokemon-item-types" key={index}>
                <div className="pokemon-types-continer">
                  <p className="pokemon-type">{types}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types:PropTypes.array
}
export default Pokemon;
