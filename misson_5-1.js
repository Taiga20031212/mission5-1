document.addEventListener("DOMContentLoaded", function() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonIdInput = document.getElementById('pokemonId');
  const fetchButton = document.getElementById('fetchButton');
  const resultDiv = document.getElementById('result');

  fetchButton.addEventListener('click', function() {
      const pokemonId = pokemonIdInput.value;
      if (!pokemonId) {
          resultDiv.innerHTML = 'Please enter a Pokémon ID.';
          return;
      }
      
      fetch(`${baseUrl}${pokemonId}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              displayPokemonData(data);
          })
          .catch(error => {
              resultDiv.innerHTML = 'Error fetching data.';
              console.error('Error:', error);
          });
  });

  function displayPokemonData(data) {
      resultDiv.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Base Experience: ${data.base_experience}</p>
      `;
  }
});
