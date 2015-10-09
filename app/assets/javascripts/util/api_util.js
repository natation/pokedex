/* global ApiActions */

(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {

    fetchAllPokemons: function () {
      $.ajax({
        url: 'api/pokemon',
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
          ApiActions.receiveAllPokemons(response);
        }
      });
    },
    fetchPokemon: function (id) {
      $.ajax({
        url: 'api/pokemon/' + id,
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
          ApiActions.receiveSinglePokemon(response);
        }
      });
    },

  };

}(this));
