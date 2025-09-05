'use client';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import { ReactNode, useMemo } from 'react';

/**
 * Wraps around the page to provide a consistent layout to all the pages.
 *
 * @param {ContainerProps} props - The props for the Container component.
 * @param {React.ReactNode} props.children - Contents of the page.
 * @param {string} [props.className] - Additional classes to be added to the container (optional).
 * @param {boolean} [props.disableAnimation] - Disables the page transition animation (optional).
 * @returns {JSX.Element} The rendered container component.
 *
 * @author Diljith P D
 */
const Container = ({
    children,
    className,
    disableAnimation = true,
}: ContainerProps): JSX.Element => {
    const containerClass = useMemo(() => `w-screen overflow-x-hidden min-h-screen h-full flex flex-col items-center justify-center relative ${className}`, [className]);
    const containerProps: HTMLMotionProps<'div'> = useMemo(() =>
        disableAnimation
            ? {
                className: containerClass,
            }
            : {
                className: containerClass,
                initial: { position: 'absolute', opacity: 0 },
                animate: { position: 'relative', opacity: 1 },
                exit: { position: 'absolute', opacity: 0 },
                transition: { duration: 0.3, type: "tween" },
            }
        , [disableAnimation, containerClass]);




    return (
        <AnimatePresence>
            <motion.div {...containerProps}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}



export default Container;
export interface ContainerProps {
    children: ReactNode
    className?: string
    disableAnimation?: boolean
};
