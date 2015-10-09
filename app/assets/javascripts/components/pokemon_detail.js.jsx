/* global PokemonDetail, PokemonStore, React, ApiUtil */
(function(root) {
  'use strict';
  var PokemonDetail = root.PokemonDetail = React.createClass({
    getInitialState: function() {
      return {pokemon: this.getStateFromStore() || {}};
    },

    _onChange: function() {
      this.setState({pokemon: this.getStateFromStore()});
    },

    componentDidMount: function () {
      PokemonStore.addPokemonsIndexChangeListener(this._onChange);
      PokemonStore.addPokemonsDetailChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      PokemonStore.removePokemonsIndexChangeListener(this._onChange);
      PokemonStore.removePokemonsDetailChangeListener(this._onChange);
    },

    getStateFromStore: function () {
      var id = parseInt(this.props.params.pokemonId);
      return PokemonStore.find(id);
    },

    componentWillReceiveProps: function(nextProps) {
      var id = parseInt(nextProps.params.pokemonId);
      ApiUtil.fetchPokemon(id);
    },

    render: function () {
      var pokemon = this.state.pokemon;
        return (
          <div className="detail">
            <img src={pokemon.image_url}/>
            name: {pokemon.name}<br/>
            type: {pokemon.poke_type}<br/>
            attack: {pokemon.attack}<br/>
            defense: {pokemon.defense}<br/>
          moves: {pokemon.moves}<br/>
          </div>
        );
      }
  });
}(this));
