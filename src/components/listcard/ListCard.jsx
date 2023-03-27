import React, { useEffect } from 'react'
import "./ListCard.css"

function ListCard(props) {
    useEffect(()=>{
        console.log("List Card")
    },[])
  return (
    <div className='card-container'>
        <img src={props.data.photo}></img>
        <div className='info'>
          <span className='super'>SUPER HOST</span>
          <span>{props.data.type}{props.data.beds!==null && "."+props.data.beds +" beds"}</span>
          <span>{props.data.rating}</span>
        </div>
        <p>{props.data.title}</p>
    </div>
  )
}

export default ListCard