import './App.css'

import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/ThemeContext';

function App()  //THIS IS COMPONENT 
{
    
    return (
      <>
        <ThemeProvider>
        
          <ThemeToggleButton />
          
        </ThemeProvider>
        
      </>
    );
}

export default App
