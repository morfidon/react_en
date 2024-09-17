import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';

function App()  //THIS IS COMPONENT 
{
    
    return (
      <>
        <ThemeProvider>
           <ToastContainer />
          <HelloFromExpress />
        </ThemeProvider>        
      </>
    );
}

export default App
