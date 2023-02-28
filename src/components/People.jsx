import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const People = () => {
    const {idNumber} = useParams()
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${idNumber}`)
        .then((response) => {
            console.log(response);
            setPeople(response.data);
        })
        .catch((error) => {
            console.log(error)

        })
        console.log("I'm running before our promise gives me data")
    }, [idNumber])

  return (
    <div>
      <h1>Check Out This Star Wars Character!</h1>
            <h2>Name: {people.name}</h2>
            <p>Birth Year: {people.birth_year}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Hair Color: {people.hair_color}</p>
    </div>
  )
}

export default People