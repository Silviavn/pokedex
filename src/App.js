import './App.css';
import { useState } from 'react';

function App() {





    const [pokemon, setPokemon] = useState('')
    const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

    const onchangefn = (event) => {
        setPokemon(event.target.value)
    }
    const onclickfn = () => {
        //setPokemon( { label:pokemon})
        console.log(pokemon, "https://pokeapi.co/api/v2/pokemon/" + pokemon )
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon )
            .then(response => response.json())
            .then(
                (pokemonData) => {
                    console.log(pokemonData)
                    setPokemonD(pokemonData)
                }
            )
    }
    return (
        <>
            <div className="App text-center" style={{ backgroundImage: "url(codigo.png)", backgroundSize: '100% 100%' }}>
                <h1 class="text-light bg-dark">Busca tú pokemon</h1>
                <input type="text" value={pokemon} onChange={onchangefn} />
                <button type="" className ="btn btn-light" onClick={onclickfn}>Buscar</button>
<br></br>
                <img src={pokemonD.sprites.front_default}></img>
                <img src={pokemonD.sprites.back_default}></img>

                <h2 className='text-light bg-dark'>{pokemonD.name}</h2>
            </div>
        </>
    );
}
export default App;