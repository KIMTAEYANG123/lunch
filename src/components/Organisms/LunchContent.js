import React from 'react';


const LunchContent =({list,restMoney})=>{

    return (
        <div style={{ display: 'flex', height: '90%' }}>
            {list}
            {restMoney}
        </div>
    )
}

export default LunchContent;