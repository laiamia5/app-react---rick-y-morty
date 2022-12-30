import React, { useState, useEffect } from 'react';


export default function SearchBar(props) {

   const [valor, setValor] = useState('')

   let actualizo = (val) => {
      setValor(val)
   }

   let vaciar = () =>{
      document.getElementById("input1").value = "";
   }

   return (
      <div style= {input}>
         <input type='search' onChange={(e) => actualizo(e.target.value)} id='input1'/>
         <button onClick={()=>{
            props.onSearch(valor)
            vaciar()
            }}>Agregar</button>
      </div>
   );
}

const input= {
   width: '300px',
   height: '30px',
   display: 'flex',
   float: 'right'
}
