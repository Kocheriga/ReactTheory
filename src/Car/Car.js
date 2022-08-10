import React from "react";
import Radium from 'radium';
import './Car.css'

const Car = props => {
    const inputClasses = ['input']
    if(props.pname !==''){
        inputClasses.push('green')
    }
    else{
        inputClasses.push('red')
    }
    if (props.pname.length > 4){
        inputClasses.push('bold')
    }

    const style={
        border:'1px solid #ccc',
        boxShadow:'0 4px 5px 0 rgba(0,0,0, .14)',
        ':hover':{
            border:'1px solid #aaa',
            boxShadow:'0 4px 15px 0 rgba(0,0,0, .21)'
        }
    }

    return (
        <div className={'Car'} style={style}>
            <p>Some data {props.pname}</p>
            <input
                className={inputClasses.join(' ')}
                type='text'
                onChange={props.onChangeName}
                value={props.pname}
            />
            <button onClick={props.deleteData}>Delete data</button>
        </div>
    )
}
export default Radium(Car)