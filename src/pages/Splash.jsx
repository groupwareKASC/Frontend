import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import big_icon from "../../public/images/big_logo.svg"
import * as motion from "motion/react-client"

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Attendence');
        }, 2800)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.3, 0.1, 0.25, 1],
            }}
        >
            <img src={big_icon} alt="big_icon" />
        </motion.div>
    )
}

export default Splash