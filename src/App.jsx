import './App.css'
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';

function App()  //THIS IS COMPONENT 
{
    
    return (
      <>
        <ThemeProvider>
          <HelloFromExpress />
        </ThemeProvider>        
      </>
    );
}

export default App
