"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SslStatus = ({
    open = false,
}: {
    open?: boolean;
}) => {

    const borderColor = open ? 'border-neonGreen' : 'border-neonRed'; // TODO: have to change the border color when SSL is closed
    const textColor = open ? 'text-neonGreen' : 'text-neonRed'; // TODO: have to change the text color when SSL is closed
    const text = open ? 'SSL IS OPEN' : 'SSL IS CLOSED';
    const shadowColor = open ? 'var(--neon-green)' : 'var(--neon-red)'; // TODO: have to change the shadow color when SSL is closed

    const className = `border ${borderColor} ${textColor} border-[1px] rounded-[4px] py-[10px] px-[13px] text-xs text-nowrap lg:text-md lg:font-medium select-none transition-all duration-200 ease-in-out`;
    const filterConfig = `drop-shadow(0 0 5px ${shadowColor}) drop-shadow(0 0 10px ${shadowColor})`;
    const filterConfigOnHover = `drop-shadow(0 0 5px ${shadowColor}) drop-shadow(0 0 10px ${shadowColor}) drop-shadow(0 0 15px ${shadowColor})`;

    return (
        <motion.div
            className={className}
            style={{ filter: filterConfig }}
            whileHover={{ filter: filterConfigOnHover }}
            transition={{ duration: 0.2, ease: [0.445, 0.05, 0.55, 0.95] }}
        >
            {text}
        </motion.div>
    )
}

export default SslStatus;