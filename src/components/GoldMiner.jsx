import { useEffect, useState } from 'react'
import { Coins, Pickaxe, Cpu } from 'lucide-react'
import { motion } from "framer-motion"
import './GoldMiner.css'
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
    const animatedProperties =
    {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }
    return (
        <div className="gold-clicker">
            <h1>Gold Miner!</h1>
            <div className="stats">
                <p><Coins /> Gold: 
                    <motion.span key={gold}
                        {...animatedProperties}
                        >
                        {gold}
                    </motion.span>
                </p>
                <p><Pickaxe /> Mining level: 
                    <motion.span key={clickPower}
                            {...animatedProperties}>
                            {clickPower}
                    </motion.span> 
                </p>
                <p><Cpu /> Auto-Clickers: 
                    <motion.span key={autoClickers}
                            {...animatedProperties}
                            initial={{ ...animatedProperties.initial, y: -30 }}
                            >
                            {autoClickers}
                    </motion.span>
                </p>
            </div>
            <div className="buttons">
                <button onClick={() => {
                    setGold(prevGold => prevGold + clickPower);
                }}><Coins /> Mine Gold</button>
                <button onClick={upgradeClickPower} disabled={gold < upgradePowerCost}>
                <Pickaxe /> Upgrade Click Power (Cost: {upgradePowerCost} Gold)
                </button>
                <button onClick={buyAutoClicker} disabled={gold < autoClickersCost}>
                <Cpu />     Auto Clicker (Cost: {autoClickersCost} Gold)
                </button>
            </div>
        </div>
    );    
}

export default GoldMiner