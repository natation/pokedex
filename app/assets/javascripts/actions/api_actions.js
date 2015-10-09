/* global AppDispatcher, PokemonConstants */

(function(root) {
  'use strict';

  var ApiActions = root.ApiActions = {

    receiveAllPokemons: function(response) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.POKEMONS_RECEIVED,
        pokemons: response
      });
    },

    receiveSinglePokemon: function(response) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT,
        pokemon: response
      });
    }
  };


}(this));
