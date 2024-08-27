import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldMiner from './components/GoldMiner'
import ThemeToggleButton from './components/ThemeToggleButton';

import { useState, useEffect } from 'react';

function App()  //THIS IS COMPONENT 
{
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


    return (
      <>
        <GoldMiner />
        <ThemeToggleButton theme={theme} setTheme={setTheme}/>
        <ClassicToggleButton theme={theme} setTheme={setTheme} />
        
      </>
    );
}

export default App
