import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HelloFromExpress from './components/HelloFromExpress';

import { ThemeProvider } from './contexts/ThemeContext';
import TasksList from './TasksList';

function App()  //THIS IS COMPONENT 
{
    
    return (
      <>
        <ThemeProvider>
            <TasksList />
        </ThemeProvider>        
      </>
    );
}

export default App
