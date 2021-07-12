import React, { Component } from 'react';
import Input from '../Atom/Input';
import Span from '../Atom/Span';
import Button from '../Atom/Button';


class Form extends Component{
    render(){
        return (

            <>
                <Input value ={this.props.value} handleChangeValue={this.props.handleChangeValue}/>
                <Span></Span>
                <Button loading={this.props.loading} handleClick={this.props.handleClick}></Button>
            </>

        )
    }
}


export default Form;