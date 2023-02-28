import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";





const NavBar = () => {
    const [category, setCategory] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const navigate = useNavigate();

    const sendinquiry = (e) => {
        e.preventDefault();
        console.log(category)
        console.log(idNumber)
        if(category === "People"){
            navigate(`/people/${idNumber}`)
        }
        if(category === "Planets"){
            navigate(`/planets/${idNumber}`)
        }
        
    }

    return (
    <div>
        <form onSubmit={sendinquiry}>
            <h2>Search For:</h2>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="" disabled selected>Select Your Option</option>
                <option value="People">People</option>
                <option value="Planets">Planets</option>
            </select>
            <input type="number" placeholder='id number' onChange={(e) => setIdNumber(e.target.value)} value={idNumber}/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default NavBar



