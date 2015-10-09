/* global React, PokemonStore, ApiUtil, PokemonIndexItem */

(function(root) {
  'use strict';

  var PokemonIndex = root.PokemonIndex = React.createClass({

    getInitialState: function() {
      return {pokemons: PokemonStore.all()};
    },

    _onChange: function() {
      this.setState({pokemons: PokemonStore.all()});
    },

    componentDidMount: function(){
      PokemonStore.addPokemonsIndexChangeListener(this._onChange);
      ApiUtil.fetchAllPokemons();
    },

    componentWillUnmount: function(){
      PokemonStore.removePokemonsIndexChangeListener(this._onChange);
    },

    render: function () {
      return (
        <div className="PokemonIndex">
          <ul>
            {this.state.pokemons.map(function(pokemon){
              return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;
            })}
          </ul>
        </div>
      );
    }
  });

}(this));
