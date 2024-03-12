import React, { FC } from 'react';
import style from './style.module.css';

const MainFilter: FC = () => {

    const filter: any[] = [
        { id: 1, title: 'Recommended' },
        { id: 2, title: 'Popular Places' },
        { id: 3, title: 'Trip’s' },
    ]
    return (
        <div>
            <ul className={style.flex}>
                {
                    filter.map(item => {
                        return (

                            <li key={item.id}>
                                {item.title}
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MainFilter