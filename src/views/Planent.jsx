import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Error from '../components/Error'

const Planent = () => {
    const {id} = useParams()
    const [planets, setPlanets] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            setPlanets(response.data)
            console.log(response.data)
        })
        .catch(err=> {
            setPlanets()
            console.log(err)
            console.log(planets)
        })
    },[id])


    return (
        <>

            {
                planets?
                <div>
                    <h1>{planets.name}</h1>
                    <h4>Climate: {planets.climate}</h4>
                    <h4>Terrain: {planets.terrain}</h4>
                    <h4>Sirface Water: {planets.surface_water}</h4>
                    <h4>Pupulation: {planets.population}</h4>
                    </div>
                        :<div>
                            <Error/>
                        </div>
            }
        </>
    )
}

export default Planent
