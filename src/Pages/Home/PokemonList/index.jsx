import React from "react";
import "../PokemonList/style.css";
import PokemonCard from "../PokemonCard";
import { useState } from "react";

function PokemonList({allPokemon}){
    const [hover,setHover] = useState(false)
    const [pokemon,setPokemon] = useState()
    const [index,setIndex] = useState()
    const setDate = (pokemon,index) => {
        setPokemon(pokemon)
        setIndex(index)
        setHover(true)
    }
    return(
        <div>
             {allPokemon.map((pokemon,index) => (
                <div className="section" key={index} onMouseEnter={() =>{setDate(pokemon,index+1)}} onMouseLeave={() => setHover(false)}>
                    <img src={pokemon.sprites.front_default}  alt="" />
                    <div className="text" >
                        <p>id {index+1}</p>
                        <p className="pokemonName">{pokemon.name}</p>
                    </div>
                </div>
            ))}
            <PokemonCard pokemon={pokemon} isActive={hover} index={index}/>
        </div>
        
    )
}
export default PokemonList;