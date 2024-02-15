import { useState } from 'react'
import {Link } from "react-router-dom"
import "./App.css"

function VendingMachine() {
  
  
  return (
      <div>
        <h1>Welcome to the Vending Machine</h1>
        <h3> Please select your item.</h3>
        <div className='options'>
          <Link className='options-item' to="/food/apple"> Apple</Link>
          <Link className='options-item'  to="/food/candy"> Candy</Link>
          <Link className='options-item' to="/food/chips">Chips</Link>
        </div>
      </div>
    );
}


export default VendingMachine;
