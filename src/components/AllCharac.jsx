import React, {  useState } from "react";
import {Image, Text, CardConteiner} from '../estilos/StyleCard.js'
import { useDispatch, useSelector } from 'react-redux'
import {addFavorite, deleteFavorite} from '../redux/actions.js'
import s from '../estilos/StyleCard.css'
import f from '../estilos/StyleAll.css'
import { useEffect } from "react";
import checkk from '../image/checkkkk.png'




export default function AllCharac(){
    const [pagina, setPagina] = useState(1)
    const [estado, setEstado] = useState(() => {
        next(`https://rickandmortyapi.com/api/character?page=1`);
        })

    function next(page){
        fetch(page)
        .then((res) => res.json())
        .then((data) => {
            setEstado(data)
        })
        .catch((error) => console.log(error))   
    }

    function suma(){
        pagina !== 826 && setPagina(pagina + 1)
    }

    function restar(){
        pagina !== 1 && setPagina(pagina - 1)
    }
    function reset(){
        setPagina(1)
    }

    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()
 
    const myFavorites = useSelector(
    state => state.myFavorites
    )
 
    const handleFavorite = (props) => {
       if(isFav === true){
          setIsFav(false)
          dispatch(deleteFavorite(props.id))
       }else{
          setIsFav(true)
          dispatch(addFavorite(props))
       }
    }
 

    return(
        <div style={{display: 'flex', flexWrap:'wrap'}}>
            <div className='conteiner' >
                <div className="filter">
                <button onClick={()=>{reset(); next('https://rickandmortyapi.com/api/character?gender=male')}}>Male</button>
                <button onClick={()=>{reset(); next('https://rickandmortyapi.com/api/character?gender=female')}}>Female</button>
                <button onClick={()=>{reset(); next('https://rickandmortyapi.com/api/character?gender=unknown')}}>unknown</button>
                <button onClick={()=>{reset(); next('https://rickandmortyapi.com/api/character?gender=Genderless')}}>Genderless</button>
                </div>

                <button 
                    className='next'
                    onClick={ () => {
                    estado.info.prev === null?
                    alert('no previous page'):
                    next(estado.info.prev)
                    restar()
                }}> prev</button>
                <p className='pagina'>{`${pagina}`}</p>
                <button 
                    className='next'
                    onClick={ () => {
                    estado.info.next === null?
                    alert('no next page'):
                    next(estado.info.next)
                    suma()
                }}>next </button>
            </div>
            {estado?.results.map((el)=> {
                return(
                    <CardConteiner key={el.id} >
                         {/* <div className={isFav ? 'animation active': 'animation'}>
                            <p>Added to favs</p>
                            <img src= {checkk} alt='check'/>
                        </div> */}
                          {
                            isFav ? (
                                <span class="button heart heartActive " onClick={() => handleFavorite(el)}></span>
                                ) : (
                                <span class="button heart" onClick={() => handleFavorite(el)}></span>
                                )
                            }
                        <Image src={el.image} alt={el.id}/>
                        <Text>{el.name}</Text>
                    </CardConteiner>
                ) 
            })}
        </div>
    )
}

