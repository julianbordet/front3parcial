import React, { useState } from 'react'
import '../styles/Card.css'

const Card = ({libros}) => {

    return (
        <div className='card-container'>
            <h3>Libro favorito 1: {libros.libro1}</h3>
            <h3>Libro favorito 2: {libros.libro2}</h3>
        </div>
    )
}

export default Card;