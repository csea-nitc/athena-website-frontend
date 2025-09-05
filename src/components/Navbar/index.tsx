"use client";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import SslStatus from './SslStatus';
import MobileNavItem from './MobileNavItem';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getSslOpenStatus } from '@/lib/sslopen';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], ['rgba(14, 14, 16, 0)', 'rgba(14, 14, 16, 1)']);
    const navBarItems = useMemo(() => [
        {
            name: 'Home',
            route: "/",
            newTab: false
        },
        {
            name: 'About Us',
            route: "/#about-us",
            newTab: false
        },
        {
            name: 'Facilities',
            route: "/facilities-and-resources",
            newTab: false
        },
        {
            name: 'Access',
            route: '/rules-and-timings',
            newTab: false
        },
        {
            name: "Team",
            route: "/team",
            newTab: false
        },
        {
            name: 'Course Reviews',
            route: '/course-review',
            newTab: false,
        },
        {
            name: "Resources",
            route: "https://drive.google.com/drive/folders/1SEQD8DihaA-5nt1kjI79rbQ1PVunXsnj",
            newTab: true,
        }
    ], []);

    const [open, setOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setOpen(prev => (!prev));
    }, [setOpen]);


    const routeToTarget = useCallback((route: string, newTab: boolean = false) => {
        setOpen(false);
        if (newTab) {
            const a = document.createElement('a');
            a.href = route;
            a.target = '_blank';
            a.click();
        }
        else {
            router.push(route);
        }
    }, [router, setOpen]);


    const [sslOpenStatus, setSslOpenStatus] = useState<boolean>();

    useEffect(() => {
        const fetchData = async () => {
            const status = await getSslOpenStatus();
            setSslOpenStatus(status);
        }

        void fetchData();
    }, []);


    return (
        <motion.div className='fixed top-0 left-0 w-full flex items-center justify-center bg-black z-[100]' style={{
            background: opacity
        }}>
            <nav className="w-full max-w-[1920px] h-16 lg:h-20 flex items-center justify-between">
                <Link href="/" className='w-full lg:w-1/5 h-full flex items-center p-4 lg:px-8 lg:py-4 order-first z-[200]'>
                    <img src="/Navbar/logo.png" width={100} height={88} alt="logo" />
                </Link>
                <div className='w-full flex items-center justify-end lg:block lg:w-3/5 h-full p-2 lg:px-8 lg:py-4 order-last lg:order-1 z-[2]'>
                    <div className="hidden h-full lg:flex items-center relative justify-center gap-4">
                        {
                            navBarItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    className='mx-4 text-nowrap'
                                    style={{ color: (item.route == pathname) ? 'var(--light-blue)' : 'rgba(255,255,255,1)' }}
                                    whileHover={{ color: 'var(--light-blue)' }}
                                    whileTap={{ color: 'var(--dark-blue)' }}
                                    onClick={() => routeToTarget(item.route, item.newTab)}
                                >
                                    {item.name}
                                </motion.button>
                            ))
                        }
                        <span className='absolute -bottom-4 left-0 w-full h-[1px] bg-white' />
                    </div>
                    <button className='h-full lg:hidden flex items-center justify-end' onClick={toggleMenu}>
                        <img src="/Navbar/hamburger-menu.svg" width={75} height={75} alt=" hamburger-menu" />
                    </button>
                </div>
                <div className='w-full lg:w-1/5 h-full flex items-center justify-center lg:justify-end py-4 px-8 order-1 lg:order-last z-[2]'>
                    <SslStatus open={sslOpenStatus} />
                </div>
                <AnimatePresence>
                    {
                        open && (
                            <div className='block lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col gap-2 items-center justify-center overscroll-contain'>
                                <motion.div
                                    className='absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.2)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overscroll-contain'
                                    initial={{ height: '0dvh', backdropFilter: 'blur(0px)', opacity: 0 }}
                                    animate={{ height: '100dvh', backdropFilter: 'blur(20px)', opacity: 1 }}
                                    exit={{
                                        height: '0dvh', backdropFilter: 'blur(0px)', opacity: 0, transition: {
                                            delay: 0.8,
                                        }
                                    }}
                                    transition={{ duration: 0.4, ease: [0.445, 0.05, 0.55, 0.95] }}
                                />
                                {
                                    navBarItems.map((item, index) => (
                                        <MobileNavItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            onClick={() => routeToTarget(item.route, item.newTab)}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </AnimatePresence>
            </nav>
        </motion.div>
    )
}

export default Navbar;