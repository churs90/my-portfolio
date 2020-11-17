import React from 'react';
import classes from "./Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";



let Header = () =>{
  return (
    <div className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/qqq"><FontAwesomeIcon icon={faHome}/>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/zzz">Скиллы</NavLink>
                </li>
                <li>
                    <NavLink to="/zzzz">Работы</NavLink>
                </li>
                <li>
                    <NavLink to="/zzzz">Контакты</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;
