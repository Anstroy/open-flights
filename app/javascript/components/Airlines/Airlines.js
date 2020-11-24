import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Airline from './Airline'

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        // Get all airlines from API
        axios.get('/api/v1/airlines.json')
            .then(res => {
                // Update airlines in out state
                setAirlines(res.data.data)
            })
            .catch(err => console.error(err))

    }, [airlines.length])

    const grid = airlines.map(item => (
        <Airline
            key={item.attributes.name}
            attributes={item.attributes}
        />
    ))

    return (
        <div className="home">
            <div className="header">
                <h1>Open Flights</h1>
                <div className="subheader">Honest, unbiased airlines reviews.</div>
            </div>
            <div className="grid">
                <ul>
                    {grid}
                </ul>
            </div>
        </div>
    )
}

export default Airlines