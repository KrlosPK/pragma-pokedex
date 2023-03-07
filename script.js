const pokeNameEl = document.querySelector('#pokeName')
const nroEl = document.querySelector('#nro')
const levelEl = document.querySelector('#level')
const typeEl = document.querySelector('#type')
const abilityEl = document.querySelector('#ability')
const heightEl = document.querySelector('#height')
const weightEl = document.querySelector('#weight')
const pokeImgEl = document.querySelector('#pokeImg')

//? Pokemons
const squirtle = document.querySelector('#squirtle')
const mewtwo = document.querySelector('#mewtwo')
const charizard = document.querySelector('#charizard')
const snorlax = document.querySelector('#snorlax')

const typeColors = {
  electric: '#ffb142',
  normal: '#809398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fairy: '#F4B1F4',
  fighting: '#2F2F2F',
  default: '#2A1A1F'
}

//? Poner en pantalla completa la imagen
pokeImgEl.addEventListener('click', () => {
  pokeImgEl.classList.toggle('fullscreen')
})

//* Cambiar el nombre e imagen del Pokémon
const changePokemon = (event) => {
  const { id } = event.target
  console.log(id)
  pokemon = id
  searchPokemon()
  pokeImgEl.src = `./images/${id}.png`
}

squirtle.addEventListener('click', changePokemon)
mewtwo.addEventListener('click', changePokemon)
charizard.addEventListener('click', changePokemon)
snorlax.addEventListener('click', changePokemon)

let pokemon = 6

//* Buscar pokemon
const searchPokemon = (event) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((data) => data.json())
    .then((response) => renderPokemonData(response))
    .catch((err) => console.log(err))
}
searchPokemon()

const renderPokemonData = (data) => {
  const { name, id, types, abilities, height, weight } = data

  const heightToMeters = height.toString().split('')
  const weightToKg = weight / 10
  const decimalWeight = weightToKg.toLocaleString(undefined, {
    minimumFractionDigits: 1
  })
  const pokeId = id.toString().padStart(3, '0')
  const level = Math.floor(Math.random() * 100)

  pokeNameEl.textContent = name
  nroEl.textContent = pokeId
  levelEl.textContent = level
  typeEl.textContent = types[0].type.name
  abilityEl.textContent = abilities[0].ability.name
  heightEl.textContent = `${heightToMeters} m`
  weightEl.textContent = `${decimalWeight} Kg`

  renderPokemonTypes(types)
}

const renderPokemonTypes = (types) => {
  typeEl.style.color = typeColors[types[0].type.name]
}
