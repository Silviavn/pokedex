import './App.css';
import { useState } from 'react';
import datospokemones from './datospokemones';


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
                <img src={pokemonD.sprites.front_default} className="pica"></img>
                <img src={pokemonD.sprites.back_default} className="pica1"></img>

                <datospokemones pokemonD={pokemonD} />

                <h2 className='text-light bg-dark'>{pokemonD.name}</h2>
            </div>
        </>
    );
}



<p>Bueno mi nombre es Silvia Vergara, tengo 22 años soy madre de una hija de un año siete meses, su nombre es Marina Cortés Vergara, me gusta mucho el deporte el año 2018 fui parte de una pre-seleccion para arusa para representar a Chile jugando rugby, por cosas de la vida tuve que tomar otro camino, me independice en el año 2019, me fui de casa de mi madre a vivir a una toma harme mi casa de 0 aprendi construcción y vivi muchas experiencias,estudie tecnico en enfermeria nivel medio, soy una mujer muy activa que busca superarse a si misma y cada dia aprender mas de lo que sabia el dia anterior , siempre me llamo la atencion la tecnologia pero por preción social de " eso es para hombres " nunca estudie algo con tecnologia hasta que este año decidi ya hacer lo que me hace feliz y dejar de preocuparme por la opinión del resto y llegue a Fundación Soy más y inicie el curso de indrucción al desarrollo agíl en mención de  Front-End y fue una experiencia que lo unico que me iso pensar fue por que no lo ise antes, tengo todas las ganas de seguir adelante estudiando, aprendiendo, me considero una mujer percerberante que lucha para que las cosas le salgan sea como sea como también tengo tolerancia a la frustración y acudo a ayuda cuando la necesito no me gusta quedar con dudas "mas tonto es el que no pregunta" este curso me encanto ya que me facina la idea de reforzar mi conocimiento y aprender mucho mas que es una muy buena oportunidad para seguir formandome en un camino profecional  </p>
 //hasta aqui esta bien

export default App
 