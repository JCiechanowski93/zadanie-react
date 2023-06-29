import { useState } from 'react'
import styled from 'styled-components';


const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function PokemonComponent({pokemonName, pokemonIndex} : {pokemonName: string; pokemonIndex: number}) {
    return (
        <>
            <li>{pokemonName}</li>
        </>
    )
}

export default PokemonComponent