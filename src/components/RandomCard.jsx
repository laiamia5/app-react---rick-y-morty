import React from "react";

export default function RandomCard(props) {

    let number = Math.floor(Math.random() * 826)

    return(
        <>
            <button style={estilo}
            onClick={() => props.onSearch(number)}
            >random</button>
        </>
    )
}

const estilo = {
    margin: '15px'
}