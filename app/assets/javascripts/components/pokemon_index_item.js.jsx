/* global React, ReactRouter, ApiUtil */

(function(root) {
  'use strict';

  var PokemonIndexItem = root.PokemonIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function () {
      this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
    },

    render: function () {
      return (
        <li className="poke-list-item" onClick={this.showDetail}>
          {this.props.pokemon.name}
        </li>
      );
    }
  });

}(this));
