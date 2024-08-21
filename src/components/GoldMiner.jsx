import { useState } from 'react'

function GoldMiner()
{
    const [gold, setGold] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [upgradePowerCost, setUpgradePowerCost] = useState(10);

    const upgradeClickPower = () =>
    {
        if (gold >= upgradePowerCost)
        {
            setGold(gold - upgradePowerCost);
            setClickPower(clickPower + 1);
            setUpgradePowerCost(upgradePowerCost * 2);
        }
    }

    return (
        <div>
            <h1>Gold Miner!</h1>
            <p>Gold: {gold}</p>
            <p>Mining level: {clickPower} </p>
            <button onClick={() => {
                setGold(gold + clickPower);
            }}>Mine Gold</button>
            <button onClick={upgradeClickPower}>Upgrade Click Power (Cost: {upgradePowerCost} Gold)</button>
        </div>
    );    
}

export default GoldMiner