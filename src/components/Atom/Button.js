import React from 'react';

const Button = ({})=>{
    return (
        <button
        style={{
            height: 36,
            width: 64,
            border: '1px solid grey',
            borderRadius: 8,
            background: 'white',
            fontSize: 20,
        }}
        disabled={loading}
        onClick={handleClick}
    >
        입력
    </button>
    )
}