import { motion } from "framer-motion";

const MobileNavItem = ({ item, index, onClick }: MobileNavItemProps) => {
    return (
        <motion.div className='p-4 relative overflow-hidden w-full flex items-center justify-between'>
            <motion.button
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                className='inline-block text-4xl'
                onClick={onClick}
            >
                {item.name}
            </motion.button>
            <motion.img
                src="/Navbar/rarr.svg"
                width={20}
                height={20}
                alt="arrow-right"

                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -90, opacity: 1 }}
                exit={{ rotate: 0, opacity: 0 }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.6, ease: [0.445, 0.05, 0.55, 0.95] }}
            />
            <motion.span
                initial={{ opacity: 0, width: '40%' }}
                animate={{ opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: '40%' }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.6, ease: [0.445, 0.05, 0.55, 0.95] }}
                className='absolute bottom-0 left-0 w-full h-[0.5px] bg-neutral-600'
            />
        </motion.div>
    );
};

export default MobileNavItem
export interface MobileNavItemProps {
    item: {
        name: string;
        route: string;
    };
    index: number;
    onClick: () => void;
}