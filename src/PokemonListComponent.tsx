import PokemonComponent from "./PokemonComponent"
import Pagination from "./Pagination"
import axios from "axios"
import React from "react";

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

function PokemonListComponent() {
    const [pokemons, setPokemons] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pokemonsPerPage] = React.useState(20);

    React.useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const res = await axios.get(baseURL);
            setPokemons(res.data.results);
            setLoading(false);
        }
        fetchPokemons()
    }, []);

    if (loading && pokemons.length === 0) {
        return <><h2>Loading...</h2></>
    }

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const howManyPages = Math.ceil(pokemons.length / pokemonsPerPage);

    return (
        <>
            <ul>
                {currentPokemons.map((e, index) => {
                    return (<PokemonComponent pokemonName={e.name} pokemonIndex={index} />)
                })}
            </ul>
            <Pagination />
        </>
    )
}

export default PokemonListComponent