import React, { useState } from 'react'

const Weatherfrom = ({onSearch}) => {
    const [city,setCity]=useState();
    const handleSubmit=(e)=>{
     e.preventDefault()
     onSearch(city);
     setCity('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter City Name'/>
        <button type='submit'>Search</button>
    </form>
  )
}

export default Weatherfrom