import React from 'react';
import Select from '../Atom/Select';
import { imgURLObj, nameTypes, defaultValueList } from '../../data';

const ValueInput = ({selectedName,handleChangeName,children})=>{
    const nameList = Object.keys(imgURLObj);

    return(
        
        <Select handleChangeName={handleChangeName} >
             {nameList.map((name, i) => (
                <option
                    key={i}
                    value={name}
                    selected={name === selectedName}>
                
                    {name} 
                </option>
            ))}
        </Select>
    )
}

export default ValueInput;