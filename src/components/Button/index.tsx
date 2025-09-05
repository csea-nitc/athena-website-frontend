"use client";

import { ReactNode, useMemo } from "react";
import styles from './styles.module.css';
import { motion } from "framer-motion";

/**
 * Global button component to be used in all the pages.
 * 
 * @param {ButtonProps} props - The props for the Button component.
 * @param {React.ReactNode} props.children - The contents of the button.
 * @param {string} [props.className] - Additional classes to be added to the button (optional).
 * @param {() => void} [props.onClick] - The function to be called when the button is clicked (default: no action).
 * @param {boolean} [props.hideIcon] - Whether to hide the icon in the button (default: not hidden).
 * @param {boolean} [props.disabled] - Disables the button (default: not disabled)
 * @returns {JSX.Element} The rendered button component.
 * 
 * @author Diljith P D
 */
const Button = ({
    children = <></>,
    className = "",
    onClick,
    disabled = false,
    hideIcon = false,
}: ButtonProps): JSX.Element => {
    const buttonClassName = useMemo(() => (
        `${styles.button} ${className} ${hideIcon ? styles.hideIcon : ""}`.trim()
    ), [className, hideIcon]);
    return (
        <motion.button
            onClick={onClick}
            className={buttonClassName}
            disabled={disabled}
        >
            <span className={styles.bg} />
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.image}>
                <svg width="15" height="15" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.glowEffect}>
                    <path d="M1.71484 22.7853L22.2863 2.21387M22.2863 2.21387H6.8577M22.2863 2.21387V17.6424" className={styles.arrow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </motion.button>
    );
}


export default Button;
export interface ButtonProps {
    children: ReactNode
    className?: string,
    onClick?: () => void,
    hideIcon?: boolean,
    disabled?: boolean,
};