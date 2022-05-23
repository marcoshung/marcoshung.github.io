import React from 'react'
import { TypeWriter, NavBar } from '../'
import { motion } from 'framer-motion'
export const Home = () => {
    return (
        <motion.div className={"home"}>
            <motion.h1>
                Marcos Hung
            </motion.h1>
            <h3>Computer Science @ SJSU</h3>
            <NavBar/>
        </motion.div>
    );
}