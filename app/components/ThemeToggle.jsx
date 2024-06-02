'use client'
import React from 'react';
import { useState } from 'react';
import {BsMoonFill, BsSunFill} from 'react-icons/bs';

const themes = {
    nord: 'nord',
    dracula:'dracula',
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.nord);
    const toggleTheme = () => {
        const newTheme = theme === themes.nord ? themes.dracula : themes.nord;
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    }
  return (
    <button className='btn btn-primary btn-sm' onClick={toggleTheme}>{theme === 'nord'? <BsMoonFill className='h-4 w-4' />: <BsSunFill className='h-4 w-4' />}</button>
  )
}

export default ThemeToggle