// import {s} from './card.css'
import {Link} from 'react-router-dom'
import {addFavorite, deleteFavorite} from '../redux/actions.js'
import { useDispatch, useSelector } from 'react-redux'
import {useState, useEffect} from 'react'
import {Image, Text, CardConteiner} from '../estilos/StyleCard.js'
import s from '../estilos/StyleCard.css'
import checkk from '../image/checkkkk.png'


export default function Card(props) {

   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()

   const myFavorites = useSelector(
   state => state.myFavorites
   )
  console.log(myFavorites )

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
         dispatch(deleteFavorite(props.id))
      }else{
         setIsFav(true)
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <CardConteiner className='cardConteiner'>
         <div className={isFav ? 'animation active': 'animation'}>
            <p>Added to favs</p>
            <img src= {checkk} alt='check'/>
         </div>

         {
            isFav ? (
               <span class="button heart heartActive " onClick={handleFavorite}></span>
            ) : (
               <span class="button heart" onClick={handleFavorite}></span>
            )
         }
         <div class="buttonHolder">
            <span class="button cross" onClick={()=>props.onClose(props.id)}></span>
         </div>
         <Image src={props.image} alt="img" />
         <Link to={`/detail/${props.detailId}`} style={{textDecoration: 'none', color:'black'}} >
            <Text>{props.name}</Text>
         </Link>

      </CardConteiner>
   );
}
