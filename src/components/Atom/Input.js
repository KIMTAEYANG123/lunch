import React from 'react';

const Input = ({value ,handleChangeValue})=>{
    return (
        <input
        type='number'
        style={{
            width: 80,
            border: 'none',
            borderBottom: '1px solid grey',
            fontSize: 20,
        }}
         value={value}
        onChange={handleChangeValue}
    />
    )
}

export default Input;