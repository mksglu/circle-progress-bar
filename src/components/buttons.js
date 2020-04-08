import React from 'react'
import "./buttons.css"
export default function buttons(props) {
    return (
        <div className="buttons">
          <button onClick={()=>  props.handleClick(25)}>25</button>
          <button onClick={() => props.handleClick(50)}>50</button>
          <button onClick={() => props.handleClick(75)}>75</button>
          <button onClick={() => props.handleClick(100)}>100</button>
          <button onClick={() => props.handleClick(150)}>150</button>
          <button onClick={() => props.handleClick(200)}>200</button>
        </div>
    )
}
