import './App.css'
import ClassicToggleButton from './components/ClassicToggleButton';
import GoldMiner from './components/GoldMiner'
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
        </ThemeProvider>
        
      </>
    );
}

export default App
