import styles from './ThemeToggleButton.module.css'


function ThemeToggleButton({theme, setTheme})
{

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