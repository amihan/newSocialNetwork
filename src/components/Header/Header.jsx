import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img className={s.img} src='https://i.pinimg.com/originals/28/86/6b/28866b3e689f4ca0832446ca57703b6f.jpg' />
    </header>
}

export default Header;