import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checked, Searchh } from './Redux/actions/action';


function Search() {
 

const [search, setsearch] = useState(true)

const Disptach=useDispatch()
const handleClick=()=>{
  setsearch(!search)
Disptach(checked(search))
}
  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        onChange={(e)=>Disptach(Searchh(e.target.value))}
       
      />
<input
 type='checkbox'

 onClick={handleClick}

/>
    
    </div>
  );
}

export default Search;
