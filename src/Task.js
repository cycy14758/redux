import React from 'react'
import { Link } from 'react-router-dom'

function Task({props}) {
  return (
    <div  className='task' >
<h6>id:{props.id}</h6>
<p   className='desc' >des:{props.description}</p>
<input type='checkbox'   className='check'  checked={props.isdone} />
   <Link to={`/edit/${props.id}`} ><button>edit</button></Link>
        </div>
  )
}

export default Task