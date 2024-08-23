import { motion } from "framer-motion"
import merge from 'lodash.merge'

const animatedProperties =
{
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}
function AnimatedValue({value, customAnimationProps = {}})
{
    const mergedProps = merge(animatedProperties, customAnimationProps);
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