function datospokemones(props) {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Puesto de tu pokemon</th>
                    <th scope="col">Experiencia</th>
                    <th scope="col">Identificador</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Peso</th>

                </tr>
</thead>
<tbody>
    <tr>
<th scope="row">{props.pokemonD.order}</th>
<td>{props.pokemonD.name}</td>
<td>{props.pokemonD.base_experience}</td>
<td>{props.pokemonD.id}</td>
<td>{props.pokemonD.height}</td>
<td>{props.pokemonD.weight}</td>
</tr>
<tr>

</tr>
</tbody>
</table>

            )
}
export default datospokemones