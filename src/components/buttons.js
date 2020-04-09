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
          <br/>
          <br/>
          <button onClick={() => props.handleClickRange(200)}>200</button>
          <button onClick={() => props.handleClickRange(600)}>600</button>
          <button onClick={() => props.handleClickRange(800)}>800</button>
          <button onClick={() => props.handleClickRange(1000)}>1000</button>
        </div>
    )
}
