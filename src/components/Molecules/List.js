import React from 'react';
import { imgURLObj, nameTypes, defaultValueList } from '../../data';
import LunchValue  from './LunchValue';
const List = ({selectedName,valueList,setValueList,loading,setLoading})=>{
    const nameList = Object.keys(imgURLObj);
    return (
        <div style={{ flex: 1 }}>
            {nameList.map((name, i) => (
                 <LunchValue
                 key={i}
                 name={name}
                 isSelected={selectedName == name}
                 value={valueList[name]}
                 valueList={valueList}
                 setValueList={setValueList}
                 loading={loading}
                 setLoading={setLoading}
             />
            ))}
        </div>
    )
}

export default List;