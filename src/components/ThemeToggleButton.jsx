import { useEffect, useState } from 'react';
import styles from './ThemeToggleButton.module.css'

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
        </>
    );

}

export default ThemeToggleButton