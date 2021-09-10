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
      types: ['Fairy']
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
    }
  ];

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon && "height" in pokemon && "types" in pokemon) {
      pokemonlist.push(pokemon);
    }
    else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonlist;
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');
    let pokemonLi = document.createElement('li');
    let pokemonButton = document.createElement('button');
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add('button-class');
    pokemonLi.appendChild(pokemonButton);
    pokemonUl.appendChild(pokemonLi);
    pokemonButton.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem
  };
})();

pokemonRepository.add({ name: 'Pikachu', height: 4, types: ['Electric'] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
