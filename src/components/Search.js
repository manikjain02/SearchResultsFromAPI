import React, { useState } from 'react'
// For icons in react js
import {FaSearch} from 'react-icons/fa'
import './Search.css'

function Search({setResults}) {
    const [input, setInput] = useState('')
    const fetchData = async (value)=>{
        // API Calling
        const fetchAPI = await fetch('https://jsonplaceholder.typicode.com/users')
        // Converting API into Readable format
        const getAwaitedResult = await fetchAPI.json()
        // Search Operation perform using filter method of array
        const results =  getAwaitedResult.filter((user)=>{
            // Checking multiple conditions in return statement
            return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(results)
    }
    const handleChange = (value)=>{
        setInput(value)
        fetchData(value)
    }
    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' />
            <input type="text" placeholder='Type Here' value={input} onChange={(e)=>handleChange(e.target.value)} />
        </div>
    )
}

export default Search
