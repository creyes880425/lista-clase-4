import { useState } from "react";

const personaModel = {
    nombre: '',
    edad: ''
};
const Form = (props) => {
    const [ persona, setPersona ] = useState(personaModel);
    const { lista, setLista } = props.data;

    const changeForm = (e) => {
        const {name, value} = e.target;
        setPersona({
            ...persona,
            [name]: value 
        });
    }

    const clickButton = (e) => {
        e.preventDefault();
        setLista([...lista, persona]);
    }

    return (
        <>
            <h1>Formulario</h1>
            <form>
                <input type="text" name="nombre" value={persona.nombre} onChange={changeForm}/>
                <input type="text" name="edad" value={persona.edad} onChange={changeForm}/>

                <button type="submit" onClick={clickButton}>Agregar Persona</button>
            </form>
        </>
    );
}

export default Form;