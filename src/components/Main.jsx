import React, { useState } from 'react'


const Main = ({item, handleDelete, handleToggle, handleClear}) => {


  const [sortBy, setSortBy] = useState("input")

  let sortedItems

  if(sortBy === 'input') sortedItems = item

  if(sortBy === 'description') sortedItems = item.slice()
  .sort((a,b)=> a.description.localeCompare(b.description))

  if(sortBy === "packed") sortedItems = item.slice()
  .sort((a,b)=> Number(a.packed) - Number(b.packed))



  
  

  

  return (
    <div className='list h-[28vw] relative '>
        
        {sortedItems.map((val) => 
             
        <div key={val.id} className={'p-3 h-fit flex items-center gap-5 '}>

          <span className = {`${val.packed ? 'line-through' : ''} flex items-center gap-3`}>
            
             <input  onClick={() => handleToggle(val.id)} value={val.packed}  type="checkbox" />

            {val.quantity} {val.description}

          </span>

          <p onClick={()=> handleDelete(val.id)} className='text-[1.5vw] cursor-pointer'> ❌ </p>

        </div>
    )}



    <div className='absolute bottom-20 left-[35%] '>

      <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>

          <option value="input"> SORT BY INPUT ORDER </option>
          <option value="description"> SORT BY DESCRIPTION  </option>
          <option value="packed"> SORT BY PACKED STATUS </option>

      </select>

    <button onClick={handleClear} className='px-5'>CLEAR LIST</button>
    </div>

        
    </div>
  )
}

export default Main