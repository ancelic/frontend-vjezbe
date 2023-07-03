const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow', true);

function fill() {
  const data = JSON.parse(xhr.response);
  const src = document.getElementById('pokemon-list').innerHTML;
  const template = Handlebars.compile(src);
  const context = {
    pokemon: data.pokemon_species.slice(0, 20),
    tableClass: 'table',
  };
  const html = template(context);

  document.getElementById('result').innerHTML = html;
}

xhr.onload = function () {
  fill();
};

xhr.send();
