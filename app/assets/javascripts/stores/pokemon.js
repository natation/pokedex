/* global EventEmitter, PokemonConstants, AppDispatcher */

(function(root) {
  'use strict';
  var _pokemons = [];
  var POKEMONS_INDEX_CHANGE_EVENT = "pokemons_index_change_event";
  var POKEMON_DETAIL_CHANGE_EVENT = "pokemons_detail_change_event";

  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
    PokemonStore.changePokemonsIndex();
  };

  var PokemonStore = root.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _pokemons.slice();
    },

    find: function (id) {
      return _.find(_pokemons, function(pokemon){
          return pokemon.id === id;
      });
    },

    addPokemonsDetailChangeListener: function(callback) {
      PokemonStore.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    removePokemonsDetailChangeListener: function(callback) {
      PokemonStore.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    addPokemonsIndexChangeListener: function(callback) {
      PokemonStore.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function(callback) {
      PokemonStore.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    changePokemonsIndex: function() {
      PokemonStore.emit(POKEMONS_INDEX_CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case PokemonConstants.POKEMONS_RECEIVED:
          resetPokemons(payload.pokemons);
          break;
        case PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT:
        debugger;
          PokemonStore.emit(POKEMON_DETAIL_CHANGE_EVENT);
          break;
      }
    })

  });
}(this));
