// Edit the code below
let games = 'Planet Earth';

function first(){
  return middleFunction('Football');

  function second(games) {
    return innerFunction('Cricket');

    function third(games) {
      games = 'Volleyball';
      return innermostFunction();

      function fourth() {
        return 'The games are' + games + ', ' + games + ', ' + games + ', ' + games;
      }
    }
  }
}
