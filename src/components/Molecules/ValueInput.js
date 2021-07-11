import React from 'react';
import Select from '../Atom/Select';

const ValueInput = ({i,name,selectedName})=>{
    return(
        <Select>
             <option
                key={i}
                value={name}
                selected={name == selectedName}
            >
                {name}
            </option>
        </Select>
    )
}