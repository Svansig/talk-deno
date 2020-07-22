const randomPoke = Math.floor(Math.random() * 151);
console.log("Who's that Pokemon?");
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
const data = await response.json();

const printPokemon = (name: string) =>
  console.log(`It's ${name[0].toUpperCase() + name.slice(1)}!`);
setTimeout(() => printPokemon(data.name), 1000);
