import React, { useState } from 'react'
import './searchBar.scss'
import Search from '../../assets/search.png'
const types=["buy","rent"]
const SearchBar = () => {
  const [query,setQuery]=useState(
    {
      type:"buy",
      location:"",
      minPrice:0,
      maxPrice:0
    }
  )

  const switchType = (val)=>{
      setQuery((prev)=>({...prev,type:val}))
  }
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type)=>(
          <button onClick={()=>switchType(type)} className={query.type === type ? "active" : ''}>{type}</button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min  price"
          min={0}
          max={1000000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={1000000}
        />
        <button>
          <img src={Search} alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar
