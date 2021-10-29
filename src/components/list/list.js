const List = (props) => {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                {props.data.lista.map(function(persona, index){
                    return <li key={ index }>Nombre: {persona.nombre}, Edad: {persona.edad}</li>;
                  })}
            </ul>            
        </>
    );
}

export default List;