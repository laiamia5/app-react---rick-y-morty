import React from "react";

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export function addFavorite(character){
    return {type: ADD_FAVORITE, payload: character}
   
}

export function deleteFavorite(id){
    return{type:DELETE_FAVORITE,payload: id}
}
