import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [allPokemon, setAllPokemon] = useState([])
const [filteredPokemon, setFilteredPokemon] = useState(allPokemon)

function handleSearch(e){
  const filteredPoke = allPokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(e.target.value)
  })
  setFilteredPokemon(filteredPoke)
}

function addNewPokemon(newPokemon){
 
  fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
        body: JSON.stringify(newPokemon)
    })
        .then(r => r.json())
        .then(data => console.log(data))
        
    setAllPokemon([...allPokemon, newPokemon])
}

//Wont load pokemon initially without this, everytime allpokemon changes, we update filteredpokemon 
useEffect(() => { 
  setFilteredPokemon(allPokemon)
}, [allPokemon])

useEffect(() => {
  fetch(`http://localhost:3001/pokemon`)
  .then(r => r.json())
  .then(data => setAllPokemon(data))
}, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection allPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
