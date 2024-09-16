import './App.css'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 5, packed: true },

  { id: 4, description: "Mobile Phone", quantity: 1, packed: false },
  { id: 5, description: "Cases", quantity: 10, packed: true },
];


const [item, setItem] = useState([])

const handleItem = (items)=>{

  setItem((val) =>  [...val, items])
}


const handleDelete = (id)=>{
  setItem(item => item.filter((val)=> val.id !== id  ))
}
  

const handleToggle = (id)=>{
  setItem(item => item.map((val) => val.id === id ? {...val, packed : !val.packed } : val ))
}
  

const handleClear = ()=>{
  alert("Are you sure you want to delete all items? ")
  
  if(alert) {

    setItem([])
  }
}





  return (
    <>
    <Logo/>

    <Nav handleItem = {handleItem} />

    <Main initialItems = {initialItems} item = {item} handleDelete = {handleDelete} 
    handleToggle = {handleToggle} handleClear = {handleClear}
    />

    <Footer item = {item} />

    </>
  )
}

export default App
