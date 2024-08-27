import styles from './ThemeToggleButton.module.css'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

function ThemeToggleButton()
{
    const { theme, setTheme } = useContext(ThemeContext)
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