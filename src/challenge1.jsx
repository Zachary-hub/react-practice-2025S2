/*
 Challenge 1:
 Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
const squared =nums.map(function(num) {
    return num * num
})
console.log(squared)

const squared2 = nums.map(num => num * num)
console.log(squared2)

/*
 Challenge 2:
 Given an array of strings, return an array where
 the first letter of each string is capitalized
*/
const names = ["alice", "bob", "charlie", "danielle"]
const capitalizedNames = names.map(function(name){
    if (name.length =0) return name;
    return name.charAt(0).toUpperCase() + name.slice(1);
})

/*
 Challenge 3:
 Given an array of strings, return an array of strings
 that wraps each of the original strings in an HTML-like <p></p> tag.
*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const wrappedPokemon = pokemon.map(function(poke){
return '<p>' + poke + '</p>';
})



console.log(wrappedPokemon);
// [ '<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>' ]
