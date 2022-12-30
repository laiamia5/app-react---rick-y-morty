
import {DELETE_FAVORITE, ADD_FAVORITE} from './actions'

const initialState = {
    myFavorites: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
              myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
          return{
              myFavorites: state.myFavorites.filter(t => t.id !== action.payload)
          }
        default:
            return state
    }

}

export default reducer
