import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="">
        {this.props.data.map((data) => {
          return (
            <li className="" key={data.id}>
              <div>
                <Pokemon
                  name={data.name}
                  url={data.url}
                  id={data.id}
                  types={data.types}
                />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}


export default PokemonList;