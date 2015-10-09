/* global React, PokemonIndex, ReactRouter, PokemonDetail */

$(function() {
  'use strict';
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var Index = React.createClass({
    render: function(){
      return (
        <div>
          <PokemonIndex/>
          {this.props.children}
        </div>
      );
    }
  });

  React.render(
    <Router>
      <Route path="/" component={Index}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}></Route>
      </Route>
    </Router>,
    document.getElementById("pokedex")
  );
});
