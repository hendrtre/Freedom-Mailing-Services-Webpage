import React from 'react'
import { Link } from "react-router-dom"

export default function() {
    return (
        <div className="no-match">
            <h1>We couldn't find that page</h1>
            <h2>Please return to "Main Page"</h2>
            <Link to="/">Return to Homepage</Link>
        </div>
    )    
}
