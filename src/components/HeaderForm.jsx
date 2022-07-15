import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const HeaderForm = () => {
    const categorys = [
    'planets',
    'people'
];
    const [selectedCategory, setSelectedCategory] = useState()
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/${selectedCategory}/${id}`)

    }

    return (
        <fieldset>
            <legend> ❤ (●'◡'●) Winter_Was_Here.jsx §(*￣▽￣*)§</legend>
            <form onSubmit={handleSubmit}>

            <label>Search For: </label>
            <select value={selectedCategory}  onChange={e => setSelectedCategory(e.target.value)}>
            <option hidden></option>
                {categorys.map((category,idx)=>
                <option key ={idx} value ={category}> {category} </option>)}

            </select>

            <label>Id: </label>
            <input type="number" name="id" value={id} onChange={e=>setId(e.target.value)} />

            <button type='submit'> Search</button>
            </form>
        </fieldset>
    )
}

export default HeaderForm
