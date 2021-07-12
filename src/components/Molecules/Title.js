import React from 'react';
import styled from 'styled-components';

const block =  styled.div`
padding-top: 16px;
margin-bottom: 16px;
color: black;
font-size: 28px;
font-weight: bold;
`;

const Title = ({})=>{
    return (
       <block>
           오늘 먹은 점심 값은?
       </block>
    )
}

export default Title;
