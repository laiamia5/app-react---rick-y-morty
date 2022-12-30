import Card from './Card';
import {Pcenter} from '../estilos/StyleCard.js'
import img from '../image/fondo.png'

export default function Cards(props) {
   const { characters } = props;
   return (
<div style={{display: 'flex', flexWrap: 'wrap', }}>
         {
            characters.length === 0? (
               <Pcenter>add characters by passing a number to the input</Pcenter> 
            ) : (
               characters.map((e) => {
                  return(              
                  <Card name={e.name}
                     species={e.species}
                     gender={e.gender}
                     image={e.image}
                     onClose={props.onClose}
                     id= {e.id}
                     detailId={e.id}
                     key={e.id}
                     >
                  </Card>)
    
               })
            )
         }
      </div>
   );
}
