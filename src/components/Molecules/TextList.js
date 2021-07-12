import React from 'react';


const TextList = ({isSelected,loading,value}) =>{
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 8,
            height: 48,
            borderBottom: isSelected ? '1px solid grey' : undefined,
        }}>
            {loading ? '...' : value}원
        </div>
       
    )
}

export default TextList;
