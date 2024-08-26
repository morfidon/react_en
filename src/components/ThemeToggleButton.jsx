import { useEffect, useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext.jsx';
import styles from'./ThemeToggleButton.module.css'

function ThemeToggleButton()
{
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <button
                className={styles.toggleButton}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                data-theme={theme}  
            >
            
            <span className={styles.toggleText}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>

            </button>
        </>
    );

}

export default ThemeToggleButton