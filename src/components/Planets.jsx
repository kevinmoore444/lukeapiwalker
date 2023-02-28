import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Planets = () => {
    const {idNumber} = useParams()
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${idNumber}`)
        .then((response) => {
            console.log(response.data);
            setPlanets(response.data);
        })
        .catch((error) => {
            console.log(error)

        })
        console.log("I'm running before our promise gives me data")
    }, [idNumber])

  return (
    <div>
      <h1>Check Out These Planets!</h1>
      <h2>Name: {planets.name}</h2>
      <p>Population: {planets.population}</p>
      <p>Orbital Period: {planets.orbital_period}</p>
      <p>Climate: {planets.climate}</p>
    </div>
  )
  }

export default Planets