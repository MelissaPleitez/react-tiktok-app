import { useState, useEffect } from 'react'
import React from 'react'

function UseItems(data) {

  const [items, setItems] = useState([]);

useEffect(() => {
  if(Array.isArray(data)){
    setItems([...items, ...data]); 
  }

}, [data])

  return (
   [items]
  )
}

export default UseItems