import { useState } from 'react';
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom"


function VendingItem() {

  const { name } = useParams();

  return (
      <div>
        <h1> Here is your {name}.</h1>
        <Link className="back" to="/"> Back</Link>
      </div>
    );
}


export default VendingItem