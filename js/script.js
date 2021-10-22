let pokemonRepository = (function () {
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //API url which has pokemon data
  let pokemonlist = [];
  let modalContainer = document.querySelector('#pokemonModal');
  let filter = document.querySelector('#filter');

  //Function to add items to pokemonlist
  function add(pokemon) {
    pokemonlist.push(pokemon);
  }

  //Function to return all items
  function getAll() {
    return pokemonlist;
  }

  //Function to show the details of the clicked Pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //Function to show the modal with pokemon details
  function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let pokeImage = $('.pokeImage');
    let pokeHeight = $('.pokeHeight');
    let pokeWeight = $('.pokeWeight');
    let pokeType = $('.pokeType');
    modalTitle.empty();
    pokeImage.empty();
    pokeHeight.empty();
    pokeWeight.empty();
    pokeType.empty();
    modalTitle.text(pokemon.name);
    let titleElement = document.querySelector('.modal-title');
    titleElement.innerText = pokemon.name.toUpperCase();
    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;
    let weightElement = document.createElement('p');
    weightElement.innerText = 'Weight: ' + pokemon.weight;
    let typesElement = document.createElement('p');
    typesElement.innerText =
      'Types: ' + ' ' + pokemon.types.map((t) => t.type.name).join(', ');
    let imageElement = document.createElement('img');
    imageElement.classList.add('img-custom');
    imageElement.src = pokemon.imageUrl;
    $('#pokemonModal').modal('toggle');
    modalTitle.append(titleElement);
    pokeHeight.append(heightElement);
    pokeWeight.append(weightElement);
    pokeType.append(typesElement);
    pokeImage.append(imageElement);
  }

  //Function to hide the modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //Function to create pokemon names as list of buttons
  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');
    let pokemonLi = document.createElement('li');
<<<<<<< Updated upstream
    pokemonLi.classList.add('group-list-item','col-xl-3','col-lg-4','col-md-6');
=======
    pokemonLi.classList.add(
      'group-list-item',
      'col-xl-3',
      'col-lg-4',
      'col-md-6'
    );
>>>>>>> Stashed changes
    let pokemonButton = document.createElement('button');
    pokemonButton.innerText = pokemon.name.toUpperCase();
    pokemonButton.classList.add('btn', 'btn-warning', 'btn-block');
    pokemonButton.setAttribute('data-target', '#pokemonModal');
    pokemonButton.setAttribute('data-target', 'modal');
    pokemonLi.appendChild(pokemonButton);
    pokemonUl.appendChild(pokemonLi);
    pokemonButton.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  //Function to fetch data from API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Function to load the details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Hide modal when Escape key is pressed
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //Hide modal when mouse clicked outside the modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  //Filter based on pokemon search
  filter.addEventListener('input', function () {
    let pokemonSearch = document.querySelectorAll('.group-list-item');
    let value = filter.value.toLowerCase();
    pokemonSearch.forEach(function (pokemon) {
      if (pokemon.innerText.toLowerCase().indexOf(value) > -1) {
        pokemon.style.display = '';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });

  //Return values
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

//Function to print the Pokemon list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
