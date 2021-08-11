let pokemonlist = [];
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

for (let i=0; i < pokemonlist.length; i++) {
  if (pokemonlist[i].height > 13) {
      document.write(`<p><b> ${pokemonlist[i].name} (height: ${pokemonlist[i].height}") - Wow, that’s big! </b></p>`);
  } else {
      document.write(`<p> ${pokemonlist[i].name} (height: ${pokemonlist[i].height}")</p>`);
  }
}
