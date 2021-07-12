import React from 'react';

const Select = ({handleChangeName,children})=>{
    return (
        <select
            style={{
                marginRight: 16,
                height: 36,
                width: 72,
                border: '1px solid grey',
                borderRadius: 8,
                fontSize: 20,
            }}
                onChange={handleChangeName}
            >{children}</select>
    )
}

export default Select;