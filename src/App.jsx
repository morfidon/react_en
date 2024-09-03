import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldMiner from './components/GoldMiner'
import PWAInstallButton from './components/PWAInstallButton';
import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeProvider } from './contexts/ThemeContext';
function App()  //THIS IS COMPONENT 
{
    
    return (
      <>
        <ThemeProvider>
          <GoldMiner />
          <ThemeToggleButton />
          <ClassicToggleButton />
          <PWAInstallButton />
        </ThemeProvider>
        
      </>
    );
}

export default App
