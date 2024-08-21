
import './App.css'
import ClickCounter from './components/ClickCounter';

function App()  //THIS IS COMPONENT 
{
    return (
      <>
        <ClickCounter initialValue={10} incrementBy={5} buttonText='Increase by 5'/>
        <ClickCounter initialValue={500} />
        <ClickCounter />
      </>
    );
}

export default App
