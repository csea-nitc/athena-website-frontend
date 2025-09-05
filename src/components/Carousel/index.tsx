"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * creates an image carousel component with the given list of image URLs
 * 
 * @param {string[]} [CarouselProps.images] - Array of image URLs
 * @param {boolean} [CarouselProps.showPreview] - Show preview of prev and next image (doesn't show by default)
 * @param {boolean} [CarouselProps.controls] - Show controls for the carousel (doesn't show by default)
 * @param {boolean} [CarouselProps.autoPlay] - Autoplay the carousel (defaults to true)
 * @returns {JSX.Element} - Carousel component
 * 
 * @author Diljith P D
 */
const Carousel = ({
    images,
    showPreview = false,
    controls = false,
    autoPlay = true,
}: CarouselProps): JSX.Element => {
    const [currentImage, setCurrentImage] = useState(0);
    const [prevImage, setPrevImage] = useState(images.length - 1);
    const [nextImage, setNextImage] = useState(1 % images.length);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setInterval(() => {
                if (images.length === 0)
                    setCurrentImage(0);
                else
                    setCurrentImage(prev => (prev + 1) % images.length);
            }, 4000)
        }

        return () => {
            if (timeoutRef.current)
                clearInterval(timeoutRef.current);
        }
    }, [autoPlay, images.length]);

    useEffect(() => {
        setPrevImage((currentImage - 1 + images.length) % images.length);
        setNextImage((currentImage + 1) % images.length);
    }, [currentImage, images.length]);


    const handleControl = useCallback((index: number) => {
        if (timeoutRef.current)
            clearInterval(timeoutRef.current);

        setCurrentImage(index);
        if (autoPlay) {
            timeoutRef.current = setInterval(() => {
                if (images.length === 0)
                    setCurrentImage(0);
                else
                    setCurrentImage(prev => (prev + 1) % images.length);
            }, 4000)
        }
    }, [autoPlay, images.length]);

    return (
        <div className='h-full w-full relative'>
            <div className="h-full w-full overflow-hidden relative drop-shadow-xl">
                <AnimatePresence initial={false}>
                    <motion.img
                        src={images[currentImage]}
                        alt={`Image ${currentImage}`}
                        key={currentImage}
                        initial={{ x: '100%', position: 'absolute' }}
                        animate={{ x: '0%', position: 'relative' }}
                        exit={{ x: '-100%', position: 'absolute' }}
                        transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                        className='object-cover w-full aspect-video'
                    />
                </AnimatePresence >
            </div>
            {
                showPreview && (
                    <>
                        <div className='w-[calc(100%-3rem)] h-[calc(100%-3rem)] z-[-2] absolute top-8 -left-8 overflow-hidden brightness-50'>
                            <AnimatePresence initial={false}>
                                <motion.img
                                    src={images[prevImage]}
                                    alt={`Image ${prevImage}`}
                                    key={`prev-${prevImage}`}
                                    initial={{ x: '100%', position: 'absolute' }}
                                    animate={{ x: '0%', position: 'relative' }}
                                    exit={{ x: '-100%', position: 'absolute' }}
                                    transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                                    className='object-cover w-full aspect-video'

                                />
                            </AnimatePresence>
                        </div>
                        <div className='w-[calc(100%-3rem)] h-[calc(100%-3rem)] z-[-2] absolute top-8 -right-8 overflow-hidden brightness-50'>
                            <AnimatePresence initial={false}>
                                <motion.img
                                    src={images[nextImage]}
                                    alt={`Image ${nextImage}`}
                                    key={`next-${nextImage}`}
                                    initial={{ x: '100%', position: 'absolute' }}
                                    animate={{ x: '0%', position: 'relative' }}
                                    exit={{ x: '-100%', position: 'absolute' }}
                                    transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                                    className='object-cover w-full aspect-video'
                                />
                            </AnimatePresence>
                        </div>
                    </>
                )
            }

            {
                controls && (
                    <div className='absolute -bottom-8 left-0 w-full h-8 flex items-center justify-center gap-2'>
                        {
                            Array.from({ length: images.length }, (_, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-neonGreen' : 'bg-[#D9D9D9]'}`}
                                    style={{
                                        filter: (currentImage === index) ? `drop-shadow(0px 0px 5px var(--neon-green)) drop-shadow(0 0 10px var(--neon-green))` : undefined
                                    }}
                                    onClick={() => handleControl(index)}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>

    )
}

export default Carousel;
export interface CarouselProps {
    images: string[];
    showPreview?: boolean;
    controls?: boolean;
    autoPlay?: boolean;
}