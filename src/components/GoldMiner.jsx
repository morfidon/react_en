import { useEffect, useState } from 'react'
import { Coins, Pickaxe, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedValue from './functional/AnimatedValue';
import styles from './GoldMiner.module.css'
import {scaleOnHover} from './../utils/animations.jsx';
import useLocalStorageState from 'use-local-storage-state'

function GoldMiner()
{
    const [gold, setGold] = useLocalStorageState('gold', {
        defaultValue: 100
    });
    const [clickPower, setClickPower] = useLocalStorageState('clickPower', {
        defaultValue: 1
    });
    const [upgradePowerCost, setUpgradePowerCost] = useLocalStorageState(
        'upgradePowerCost',
        {
            defaultValue: 10
        }
    );
    const [autoClickers, setAutoClickers] = useLocalStorageState('autoClickers', {
        defaultValue: 0
    });
    const [autoClickersCost, setAutoClickersCost] = useLocalStorageState(
        'autoClickersCost',
        {
            defaultValue: 20
        }
    );
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
    const customProps =
    {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
    }
    return (
        <div className={styles.goldClicker}>
            <h1>Gold Miner!</h1>
            <div className={styles.stats}>
                <p><Coins /> Gold: 
                    <AnimatedValue value={gold} customAnimationProps={customProps}/>
                </p>
                <p><Pickaxe /> Mining level: 
                    <AnimatedValue value={clickPower} animationType='bounce'/>
                </p>
                <p><Cpu /> Auto-Clickers: 
                    <AnimatedValue value={autoClickers} />
                </p>
            </div>
            <div className={styles.buttons}>
                <motion.button onClick={() => {
                    setGold(prevGold => prevGold + clickPower);
                }}
                
                {...scaleOnHover}
                ><Coins /> Mine Gold</motion.button>
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