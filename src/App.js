import React from 'react';
import './App.css';
import data from './components/data'
import PokemonList from './components/PokemonList'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: data
    }
  }
  render(){
    return (
      <div className="App">
        <h1 className="app__title">Lista de Pokemons</h1>
        <PokemonList data={this.state.data} />
      </div>
    );
  }
}

export default App;
