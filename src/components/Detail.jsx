import React from "react";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Detail(props){

    const {detailId} = useParams()
    const [character, setCharacter] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese IDaaaaa');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return(
        <div>
            <h1>nombre: {character?.name}</h1>
            <p>estado: {character?.status}</p>
            <p>especie: {character?.species}</p>
            <p>genero: {character?.gender}</p>
            <p>lugar de origen: {character?.origin?.name}</p>
            <p>locacion: {character?.location?.name}</p>
            <img src={character?.image} />
        </div>
    )
}