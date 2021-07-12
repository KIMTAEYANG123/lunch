import React from 'react';
import ValueInput from '../Molecules/ValueInput';
import Form from '../Molecules/Form';

const InputContent = ({valueInput,form})=>{

    return (
        <div style={{ marginBottom: 8, height: 36 }}>
            {valueInput}
            {form}
        </div>
    )
}

export default InputContent;