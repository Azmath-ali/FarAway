import React from 'react'

const Footer = ({item}) => {

  if(item.length === 0){
    return <p className='stats'> Start adding some items to your packing list  </p>

  }

  const numItems = item.length
  const numPacked = item.filter((item)=> item.packed).length

  const percentage = Math.round((numPacked / numItems ) * 100)

  return (
    <div className='stats '>

      <em>

      { percentage === 100 ? "You got everything! Ready to go ✈️" :

      `💼 You have ${numItems} times on your list, and you already packed ${numPacked}
       (${percentage}%)`}

      </em>
        
    </div>
  )
}

export default Footer