'use client'

import {motion} from 'framer-motion'

export default function Transition({ children } : { children: React.ReactNode }) {
    return (
       <motion.div
       initial={{scale: 0.8, opacity: 0}}
       animate={{scale: 1, opacity: 1}}
       transition={{ease: 'easeInOut', duration: 1.5}}
       >
        {children}
       </motion.div>


    )
}

