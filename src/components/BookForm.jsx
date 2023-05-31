import React, { useState } from 'react'
import '../styles/BookForm.css'

const BookForm = ({handleSubmit, setLibros}) => {

    return (
        <form onSubmit={handleSubmit} className='book-form'>
            <label htmlFor='input1'>Libro favorito 1:</label>
            <input type='text' id="input1" name="input1" onChange={(e) => setLibros((prevState) => ({...prevState, libro1: e.target.value}))}></input>
            <label htmlFor='input2'>Libro favorito 2:</label>
            <input type='text' id="input2" name="input2" onChange={(e) => setLibros((prevState) => ({...prevState, libro2: e.target.value}))}></input>
            <button id='submit-button' type='submit'>Submit</button>
        </form>
    )

}

export default BookForm;