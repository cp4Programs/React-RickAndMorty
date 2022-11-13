import axios from 'axios'
import React, { useState } from 'react'
import '../styles/search.css'




function Search({ setCharacters }) {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(res => {
                setCharacters(res.data.results)
            })
            .catch(err => {
                if (err.response.status === 404) {
                    alert('none found')
                } else {
                    console.log(err)
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input onChange={handleChange} placeholder="search all characters" />
            <button type="submit">Submit</button>
        </form>
    )

}

export default Search