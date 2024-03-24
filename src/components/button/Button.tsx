import React from 'react';
import style from './style.module.css'

const Button = ({children,onClick}: any) => {
    return (
       <button onClick={onClick}>{children}</button>
    )
}

export default Button