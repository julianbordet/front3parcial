import { useState } from 'react'
import './styles/App.css'
import Card from './components/Card'
import BookForm from './components/BookForm'

function App() {

  const [libros, setLibros] = useState({
    libro1: '',
    libro2: ''
  })

  const [mostrar, setMostrar] = useState(false);

  const [librosValidos, setLibrosValidos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrar(true);
    if(libros.libro1.length >= 3 && libros.libro1.charAt(0) != " " && libros.libro2.length >= 6) {
      setLibrosValidos(true);
    } else {
      setLibrosValidos(false);
    }
  }

  return (
    <div className='mainContainer'>
      <h1 className='titulo'>Ingresa los nombres de tus dos libros favoritos</h1>
      <BookForm handleSubmit={handleSubmit} setLibros={setLibros}/>
      {mostrar && (librosValidos ? <Card libros={libros}/> : <span>Por favor chequea que la información sea correcta</span>) } 
    </div>
  )
}

export default App
