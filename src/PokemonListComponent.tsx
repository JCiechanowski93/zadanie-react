import PokemonComponent from "./PokemonComponent"
import axios from "axios"
import React from "react";

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

function PokemonListComponent() {
    const [post, setPost] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data.results);
        });
    }, []);

    if (!post) return null;

    return (
        <>
        <ul>
            {post.map((e )=> {
                return (<PokemonComponent pokemonName={e.name}/>)
            })}
        </ul>
        </>
    )
}

export default PokemonListComponent