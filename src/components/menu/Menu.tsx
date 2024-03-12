import React, { FC } from 'react';
import style from './style.module.css';
import home from '../../assets/menu/home.png';
import note from '../../assets/menu/note-2.png';
import theme from '../../assets/menu/moon.png';
import account from '../../assets/menu/profile-2user.png';
import explore from '../../assets/menu/microscope.png';
import graph from '../../assets/menu/graph.png';
import mess from '../../assets/menu/mess.png';
import ssetings from '../../assets/menu/setting-2.png';
import logOut from '../../assets/menu/logout.png';



const Menu: FC = () => {

    const [boxClassName, setBoxClassName] = React.useState<any>(false);
    const [id, setId] = React.useState<any>(0);

    const handleMouseEnter = (id: number) => {
        setBoxClassName(true);
        setId(id);
    }

    const handleMouseLeave = (id: number) => {
        setBoxClassName(false);
        setId(id);
    }


    const menu: any[] = [
        { id: 1, title: 'Dashboard', img: home },
        { id: 2, title: 'Note’s', img: note },
        { id: 3, title: 'Theme', img: theme },
        { id: 4, title: 'Account', img: account },
        { id: 5, title: 'Explore', img: explore },
        { id: 6, title: 'Graph', img: graph },
        { id: 7, title: 'Messages', img: mess },
        { id: 8, title: 'GraSettingph', img: ssetings },
    ];

    const listMenu = (id: any): any => {
    }


    return (
        <div className={style.container}>
            <div className={style.flex}>
                {<ul className={style.notesLi} >
                    {
                        menu.map((item) => {
                            return (
                                <li
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={() => handleMouseLeave(item.id)}
                                    key={item.id}
                                ><div className={boxClassName && id === item.id ? style.warpper : style.warpperNone}></div>
                                    <span ><img src={item.img} alt="" /></span>
                                    <a  href="#" className={boxClassName && id === item.id ? style.active : ''}>{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>}
                <div className={style.logOut}>
                    <ul className={style.notesLi}>
                        <li><span><img src={logOut} alt="" /></span><a href="#">Dashboard</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Menu