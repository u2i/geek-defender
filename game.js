(function() {
  var game;

  window.onload = function() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-window');
    game.state.add('playing', playingState);
    game.state.start('playing');
  };

  var playingState = {
    preload: function() {

    },

    create: function() {

    },

    update: function() {

    }
  }
}());
