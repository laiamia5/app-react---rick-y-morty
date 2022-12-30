import React, { useEffect } from "react";

export default function Form(props){

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errorU, setErroru] = React.useState()
    const [errorP, setErrorp] = React.useState()


    const handleInputChange = (evento) => {
        const valueInput = evento.target.value;
        const nameInput = evento.target.name;
        setUserData({...userData, [nameInput]:valueInput})
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }
      useEffect(() => {
        alert('simulacion de base de datos introduce el usuario: laiamiaperez@gmail.com y la contraseña: 1234567')
      }, [])
    //   aca van las validaciones---------------------------------------------------
    function validarUsername(value){
        if(value.length > 35)  setErroru('el texto puede tener como maximo 35 caracteres')
        else if(value.length < 8)  setErroru('el texto debe tener almenos 8 caracteres')
        else if(value === '' || value.length=== 0) setErroru('este campo es obligatorio')
        else if(! /\S+@\S+\.\S+/.test(value)){
                setErroru('el usuario tiene que ser un email')
        }else{
            setErroru('')
        }
    }
    
    function validarPassword(value){
        if(value.length > 10)  setErrorp('el texto puede tener como maximo 10 caracteres')
        else if(value.length < 6)  setErrorp('el texto debe tener almenos 6 caracteres')
        else{
            setErrorp('')
        }
        if(! /\d/.test(value)) setErrorp('la contraseña deberia tener almenos un digito')
    }
    

    return(
        <div >
        <form onSubmit={(event) => handleSubmit(event)}>
            <div style={estilo}>
                <p style={errores}>{errorU}</p>
                <label>username</label>
                <input type='text' value={userData.username} name='username' 
                onChange={(event) => {
                    handleInputChange(event)
                    validarUsername(event.target.value)
                    }}></input>
            </div>
            <div style={estilo}>
                <p style={errores}>{errorP}</p>
                <label>password</label>
                <input type='password' value={userData.password} name='password'
                onChange={(event) => {
                    handleInputChange(event)
                    validarPassword(event.target.value)
                }}
                ></input>
                <button style={estilo} >submit</button>
            </div>
        </form>


        </div>
    )
}

const estilo = {
    display: 'block',
    marginTop: '15px',
}

const errores = {
    fontSize: '13px',
    color: 'red'
}