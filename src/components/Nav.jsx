import SearchBar from './SearchBar.jsx'
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import RandomCard from './RandomCard'

export default function Nav(props) {
    return (
      <div style={div}>
        <Link to='/about' style={estilos}> About</Link>
        <Link to='/home' style={estilos}> Home</Link>
        <Link to='/all' style={estilos}>All</Link>
        <Link to='/favorites' style={estilos} >Favorites</Link>

        <SearchBar onSearch={props.onSearch}/>
        <RandomCard onSearch={props.onSearch}/>


      </div>
    );
 }
 
 const estilos = {
  paddingLeft: '20px',
  listStyleType: 'none',
  color: '#000',
  textDecoration: 'none'
}

const div = {
  position: 'fixed',
  backgroundColor: 'inherit',
  width:'100%',
  zIndex: '400'
}