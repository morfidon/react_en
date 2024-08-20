import { useState } from 'react'
import './App.css'

function App()  //THIS IS COMPONENT
{
    const [counter, setCounter] = useState(0);// [0, f]


    return (
        <div>
            <h1>Welcome!</h1>
            <p>Clicked {counter} times</p>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Click me</button>
        </div>
    );
}

export default App
