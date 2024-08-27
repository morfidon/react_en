import { useEffect, useState } from 'react';
import styles from './ThemeToggleButton.module.css'
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

function ThemeToggleButton()
{
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <button
              className={styles.toggleButton}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>

            <Classic duration={750}
                     style={
                         {
                            color: theme === 'light' ? "blue" : "yellow",
                            backgroundColor: "var(--background-color)",
                            fontSize: "1.9em"
                         }
                     }
                     toggled={theme === 'light'}
                     toggle={() => setTheme(theme === 'light' ? 'dark' : 'light') } 
            />
        </>
    );

}

export default ThemeToggleButton