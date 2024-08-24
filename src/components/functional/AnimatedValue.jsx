import { motion } from "framer-motion"
import merge from 'lodash.merge'
import * as animations from './../../utils/animations.jsx';

function AnimatedValue({value, animationType = 'fadeInUp', customAnimationProps = {}})
{
    
    const mergedProps = merge(animations[animationType], customAnimationProps);
    return (
        <motion.span
        key={value}
        {...mergedProps}
        >
            {value}
        </motion.span>
    );
}

export default AnimatedValue