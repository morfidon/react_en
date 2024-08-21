import { useState } from 'react'

function ClickCounter({initialValue = 0, incrementBy = 1, 
    buttonText = 'Click me'})
{

    const [counter, setCounter] = useState(initialValue);// [0, f]


    return (
        <div>
            <h1>Welcome!</h1>
            <p>Clicked {counter} times</p>
            <button onClick={() => {
                setCounter(counter + incrementBy);
            }}>{buttonText}</button>
        </div>
    );    
}

export default ClickCounter