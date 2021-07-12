import React from 'react';

const Img = ({imgURLObj,name,isSelected}) =>{
    return (
        <img
        style={{
            display: 'flex',
            alignItems: 'center',
            height: 40,
            width: 40,
            border: isSelected ? '2px solid grey' : undefined,
            borderRadius: 8,
        }}
        src={imgURLObj[name]}
    />
    )
}

export default Img;