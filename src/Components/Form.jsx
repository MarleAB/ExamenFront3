import React from 'react'
import { useState } from 'react'
import Envio from './Envio'

const Form = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        cancion: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        if(cliente.nombre.length > 2 && event.target.value.trim() && cliente.cancion.length > 5){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
            <label>Ingresa tu nombre</label>
            <input
                value = {cliente.nombre}
                name="nombre"
                type="nombre"
                onChange={(event) => setCliente({...cliente, nombre: event.target.value})}
            />
            <label>Ingresa tu canción favorita</label>
            <input
                value = {cliente.cancion}
                name="cancion"
                type="cancion"
                onChange={(event) => setCliente({...cliente, cancion: event.target.value})}
            />
            <button type="submit">Enviar</button>
            {show && <Envio nombre={cliente.nombre} cancion={cliente.cancion} />}
            {error && <h5 style={{color: 'red'}}>Verifique que la información sea correcta</h5>}
            </form>
        </div>
    )



}

export default Form