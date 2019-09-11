import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'
import './PokemonList.scss'

class PokemonList extends React.Component {
  render() {
    return (
      <ol className="pokemons-list">
        {this.props.data.map((data) => {
          return (
            <li className="pokemon-item" key={data.id}>
                <Pokemon
                  name={data.name}
                  url={data.url}
                  id={data.id}
                  types={data.types}
                />
            </li>
          );
        })}
      </ol>
    );
  }
}

PokemonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default PokemonList;