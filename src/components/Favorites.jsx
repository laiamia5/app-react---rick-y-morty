import React from "react";
import store from '../redux/store'
import {subscribe} from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import {addFavorite, deleteFavorite} from '../redux/actions.js'
import {useState} from 'react'
import {Image, Text, CardConteiner} from '../estilos/StyleCard.js'
import '../estilos/StyleCard.css'


export default function Favorites() {
	const dispatch = useDispatch()
	const myFavorites = useSelector(
		state => state.myFavorites
		)
	const [count, setCount] = useState(myFavorites.length)
	
		console.log(myFavorites)
    return(
		<div style={{display: 'flex', flexWrap: 'wrap'}} >
			{store.getState().myFavorites.map((element, index) => {
					return(
						<CardConteiner key={index} className='cardprincipal'>
							<div class="buttonHolder">
								<span class="button heart heartActive"
									onClick={() => {
									dispatch(deleteFavorite(element.id))
									setCount(count - 1)
									}}
								></span>
							</div>
         					<Image src={element.image} alt="img" />
							<Text>{element.name}</Text>
						</CardConteiner>
					)
				})
			}	
		</div>
	
    )
}

//https://rickandmortyapi.com/api/character?page=var?name=var?gender=var

//https://rickandmortyapi.com/api/character?page=1&gender=male
