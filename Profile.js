import React from 'react'
import './Profile.css'

//void add(a,b="10")
function Profile(props) {
  return (
     
       <div className='box'>
            <h1>{props.title}</h1>
             <p>{props.desc}</p>
            <button className="btn">Join Purple Gang</button>
       </div>
     
  )
}

export default Profile