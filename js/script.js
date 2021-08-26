let pokemonlist = [];
let pokemonRepository = (function () {
  pokemonlist = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['Grass', 'Poison']
    },
    {
      name: 'Charizard',
      height: 17,
      types: ['Fire', 'Flying'],
    },
    {
      name: 'Clefairy',
      height: 6,
      types: 'Fairy'
    },
    {
      name: 'Spearow',
      height: 3,
      types: ['Flying', 'Normal']
    },
    {
      name: 'Venonat',
      height: 10,
      types: ['Bug', 'Poison'],
    },
    {
      name: 'Primeape',
      height: 10,
      types: 'Fighting'
    }
  ];

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonlist.push(pokemon);
    }
  }

  function getAll() {
    return pokemonlist;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Pikachu', height: 4, types: 'Electric' });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(list) {
  if (list.height > 13) {
    document.write(`<p><b> ${list.name} (height: ${list.height}") - Wow, that’s big! </b></p>`);
  } else {
    document.write(`<p> ${list.name} (height: ${list.height}")</p>`);
  }
});
