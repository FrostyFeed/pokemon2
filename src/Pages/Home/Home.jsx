import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import PokemonList from "./PokemonList";
import "./sctyle.css";
function Home(){
    const [allPokemon,setAllPokemon] = useState([])
    useEffect(
        () => async () => {
            try{
                const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=100")
                
                result.data.results.map(async (item) => {
                    const result = await axios(item.url)
                    setAllPokemon((oldArray) => [...oldArray,result.data])
                })
                
            }
            catch{}
            
        },[]
    )
    return(
        <div>
            <Link to="/about">
                <div className="App">about</div>
            </Link>
            <div className="main">
            <PokemonList allPokemon={allPokemon}/>
            </div>
        </div>
    )
}

export default Home