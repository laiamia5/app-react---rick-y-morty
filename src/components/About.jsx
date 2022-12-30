import React from "react";

// Ahora si construiremos el componente <About />. Este componente será una vista que contenga
//  tu información y una explicación acerca de la aplicación!

// Esto significa que es completamente libre. Puedes mostrar incluso una foto tuya. Esto le 
// servirá a las personas que vean tu App para conocer al creador

export default function About(){
    return(
        <div style={estilo}>
            esta pagina simula una base de datos con la cual<br></br>
            solo se va a ingresar si es correcto el usuario y contraseña<br></br>
            siendo asi un formulario controlado<br></br>
            en <b>home</b> se agregaran las cards q nosotros queramos
            ya sea pasandole un id <br></br> al input (un numero entre 1 y 824) o 
            lanzando uno aleatoriamente con el boton 'random' <br></br>
            en <b>All</b> encontraremos todos los personajes y tambien los podremos 
            filtrar segun su genero.<br></br>
            en <b>favorite</b> se encontraran todas las cards a las cuales le hayamos dado like.

        </div>
    )
}

const estilo = {
    marginTop: '200px'
}