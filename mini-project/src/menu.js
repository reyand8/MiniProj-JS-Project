import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';
const active = ({isActive}) => isActive ? 'active' : '';

export const menu = [
    {
        label: <NavLink to="/" className={active}>Home</NavLink>,
        key: 'home',
    },
    {
        label: <NavLink to="/counter" className={active}>Counter</NavLink>,
        key: 'counter',
    },
    {
        label: <NavLink to="/quiz" className={active}>Quiz</NavLink>,
        key: 'quiz',
    },
    {
        label: <NavLink to="/users" className={active}>Users</NavLink>,
        key: 'users',
    },
    {
        label: <NavLink to="/gallery" className={active}>Gallery</NavLink>,
        key: 'gallery',
    },
];