import React from 'react'
import ListCard from '../components/listcard/ListCard'
import Arr from "../stays.json"
import "./Main.css"

function Main() {
  return (
    <div className='list-container'>
        {Arr && Arr.map((val,ind)=>{
            return(
                <ListCard data={val}/>
            )
        }) }
    </div>
  )
}

export default Main