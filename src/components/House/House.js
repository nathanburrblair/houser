import React from 'react';

export default function House (props) {
    return (
        <div>
            <h1>House</h1>
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>
            <h4>{props.city}</h4>
            <h4>{props.state}</h4>
            <h4>{props.zip}</h4>
            <button>Delete</button>
        </div>
    )
}