import { useEffect, useState } from 'react'

function GoldMiner()
{
    const [gold, setGold] = useState(100);
    const [clickPower, setClickPower] = useState(1);
    const [upgradePowerCost, setUpgradePowerCost] = useState(10);
    const [autoClickers, setAutoClickers] = useState(0);
    const [autoClickersCost, setAutoClickersCost] = useState(20);

    useEffect(() => {
        
        const timer = setInterval(() => {
            setGold(prevGold => prevGold + autoClickers);
        }, 1000);

        return () => clearInterval(timer); //clearing function
    }, [autoClickers]);
    const upgradeClickPower = () =>
    {
        if (gold >= upgradePowerCost)
        {
            setGold(prevGold => prevGold - upgradePowerCost);
            setClickPower(prevClickPower => prevClickPower + 1);
            setUpgradePowerCost(prevUpgradePowerCost => prevUpgradePowerCost * 2);
        }
    }

    const buyAutoClicker = () =>
    {
        if (gold >= autoClickersCost)
        {
            setGold(prevGold => prevGold - autoClickersCost);
            setAutoClickers(prevAutoClickers => prevAutoClickers + 1);
            setAutoClickersCost(prevAutoClickersCost => prevAutoClickersCost * 2);
        }
    }
    return (
        <div>
            <h1>Gold Miner!</h1>
            <p>Gold: {gold}</p>
            <p>Mining level: {clickPower} </p>
            <p>Auto-Clickers: {autoClickers}</p>
            <button onClick={() => {
                setGold(prevGold => prevGold + clickPower);

            }}>Mine Gold</button>
            <button onClick={upgradeClickPower} disabled={gold < upgradePowerCost}>
                Upgrade Click Power (Cost: {upgradePowerCost} Gold)
            </button>
            <button onClick={buyAutoClicker} disabled={gold < autoClickersCost}>
                Auto Clicker (Cost: {autoClickersCost} Gold)
            </button>
        </div>
    );    
}

export default GoldMiner