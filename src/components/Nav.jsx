import React, { useState } from 'react'

const Nav = ({handleItem}) => {

  const [quantity, setQuantity] = useState(1)
  
  const [description, setDescription] = useState("")




  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!description) return

    const newItem = {quantity, description, packed: false, id : Date.now()}

    handleItem(newItem);

    setDescription("")
    setQuantity(1)
  }


 
 
  return (

    <form className='add-form' onSubmit={handleSubmit}>

      <h3 className="font-bold "> What do u need for your 😍 trip? </h3>


      <select onChange={(e)=> setQuantity(Number(e.target.value))} value={quantity}>

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option  value={num} key={num.id}>

            {num}

          </option>

))}
      </select>

      <input type="text" placeholder='Item...' onChange={(e)=> setDescription(e.target.value)} 
      
      value={description} />

      <button >ADD</button>

    </form>

  )
}

export default Nav