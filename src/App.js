import './App.css'
import Cards from './components/Cards.jsx'
// import characters from './data.js'
import Nav from './components/Nav'
import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail';
import Form from './components/Form'
import {useLocation, useNavigate} from 'react-router-dom'
import Favorites from './components/Favorites.jsx'
import AllCharac from './components/AllCharac.jsx'
import fondo from './image/fondo.png'



function App () {
  const [ characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false) 
  const navigate = useNavigate();
  let location = useLocation()

  const username = 'laiamiaperez@gmail.com'
  const password = '1234567'

  function login (userData){
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
      console.log('funciona')
    }
    if(userData.username !== username || userData.password !== password){
      console.log('algo esta mal')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  
 const onClose = (id) => {
  let esto = characters.filter ((e) => e.id != id)
  setCharacters([
    ...esto
  ])
 }

 
  return (
    <div className='App' style={{ padding: '25px'}}>
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/home' element={
          <Cards
            characters={characters}
            onClose={onClose}
          />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/' element={<Form login={login}/>}></Route>
        <Route path='/all' element={<AllCharac/>} />
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </div>
  )
}

export default App
