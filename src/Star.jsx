import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "./index.css"

function Star({numstar=5}) {
const [rating,setrating]=useState(0)
const [hover,sethover]=useState(0)

function handleclick (getcurrentindex){
    console.log(getcurrentindex)
    setrating(getcurrentindex)
}
function handlemouseenter(getcurrentindex){
    sethover(getcurrentindex)
    console.log(getcurrentindex)

}
function handlemouseleave (getcurrentindex){
    sethover(rating)
    console.log(getcurrentindex)


}

  return (
    <div> {
        [...Array(numstar)].map((_,index)=>{
            index+=1
            return <FaStar
            key={index}
            className={index<=(rating||hover)?'active':'inactive'}
            onClick={()=>handleclick(index)}
             onMouseEnter={()=>handlemouseenter(index)}
            onMouseLeave={()=>handlemouseleave(index)}
                size={40}
            
            />
        }  )
        }  </div>
  )
}

export default Star