import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom' 
import Error from '../components/Error'
import Planent from './Planent'

const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            setPerson(response.data)
            console.log(response.data)
        })
        .catch(err=>{
            setPerson()
            console.log(err)
            console.log(person)
        } )
    },[id])

    return (
        <>

            {
                person?
                <div>
                    <h1>{person.name}</h1>
                    <h4>Height: {person.height}</h4>
                    <h4>Mass: {person.mass}</h4>
                    <h4>Hair Color: {person.hair_color}</h4>
                    <h4>Skin Color: {person.skin_color}</h4>
                </div>
                    :<div>
                        <Error/>
                    </div>
                    
                
            }
        </>
    )
}

export default People
