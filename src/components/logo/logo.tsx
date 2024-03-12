import React from 'react';
import { FC } from "react";
import style from './styles.module.css';

import logoImage from '../../assets/logo/logo.png'

const logo: FC = () => {
    return (
        <div>
            <div className={style.logo}>
                <img src={logoImage} alt="" />  
            </div>
        </div>
    )
}

export default logo