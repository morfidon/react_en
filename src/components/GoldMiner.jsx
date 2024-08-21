import { useState } from 'react'

function GoldMiner()
{
    const [gold, setGold] = useState(0);

    return (
        <div>
            <h1>Gold Miner!</h1>
            <p>Gold: {gold}</p>

            <button onClick={() => {
                setGold(gold + 1);
            }}>Mine Gold</button>
        </div>
    );    
}

export default GoldMiner