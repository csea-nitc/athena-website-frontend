'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import { alumniSans } from "@/fonts";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { getCourses, getReviews } from "@/lib/courses";
import ReviewCard, { ReviewCardProps } from "@/components/ReviewCard";
import styles from './styles.module.css';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import InputWrapper from "./components/InputWrapper";

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<CourseCardProps | null>(null);
    const [prevValue, setPrevValue] = useState<CourseCardProps | null>(null);
    const [showReviewSection, setShowReviewSection] = useState<boolean>(false);
    const [courses, setCourses] = useState<CourseCardProps[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<CourseCardProps[]>([]);
    const [reviews, setReviews] = useState<{ firstHalf: ReviewCardProps[], secondHalf: ReviewCardProps[] }>({ firstHalf: [], secondHalf: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const collapseGridClassName = useMemo(() =>
        (selected !== null)
            ? "flex flex-col w-full lg:w-1/2 h-full overflow-y-scroll gap-[50px] place-items-center px-[18px] py-[35px]"
            : "w-full h-auto gap-[50px] place-items-center px-[18px] py-[35px] grid md:grid-cols-2 lg:grid-cols-3",
        [selected])

    useEffect(() => {
        const loadData = async () => {
            const courses = await getCourses();
            setCourses(courses);
            setFilteredCourses(courses);
        }

        void loadData();
    }, []);

    useEffect(() => {
        const loadData = async () => {
            if (selected == null)
                return;
            setLoading(true);
            const reviews = await getReviews(selected.courseId);
            const middleIndex = Math.ceil(reviews.length / 2);
            setReviews({
                firstHalf: reviews.slice(0, middleIndex),
                secondHalf: reviews.slice(middleIndex),
            })
            setLoading(false);
        }

        void loadData();
    }, [selected, courses]);


    const coursesChunk = useMemo(() => {
        const lastPostInd = currentPage * 9;
        const firstPostInd = lastPostInd - 9;

        return filteredCourses.slice(firstPostInd, lastPostInd);
    }, [filteredCourses, currentPage]);


    const handleSelectCourse = useCallback((course: CourseCardProps | null) => {
        setPrevValue(selected);
        setSelected(course);
        if (course !== null)
            setShowReviewSection(true);
    }, [selected]);

    const handleHideReviewSection = useCallback(() => {
        setShowReviewSection(false);
    }, []);

    useEffect(() => {
        if (prevValue == null && selected != null) {
            containerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            })
        }
    }, [selected, prevValue]);



    return (
        <Container>
            <Section className="flex flex-col justify-center min-h-screen items-center lg:items-start h-full mb-16 pt-20 lg:pt-32">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 justify-center items-start lg:items-center border-b-[1px] border-solid border-white p-4 lg:p-0">
                    <h3 className={`${alumniSans.className} text-7xl font-bold`}>
                        Course Review
                    </h3>
                    <InputWrapper
                        allCourses={courses}
                        setFilteredCourses={setFilteredCourses}
                    />
                </div>

                <div className="w-full h-full flex flex-col gap-4 py-24" ref={containerRef}>
                    {
                        (selected !== null) && (
                            <div className="w-full flex justify-end">
                                <div className="w-full lg:w-1/2 flex items-center justify-between">
                                    <h4 className={`text-2xl ${alumniSans.className}`}>
                                        {selected.courseId} | {selected.courseTitle}
                                    </h4>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center" onClick={handleHideReviewSection}>
                                        <Image src="/icons/rarr.svg" alt="close-review-section" height={25} width={25} className="w-[20px] rotate-45" style={{
                                            filter: 'drop-shadow(0 0 7px white)',
                                        }} />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    <div className={`${selected ? 'h-[75dvh]' : 'min-h-[75dvh] h-full'} w-full flex relative overflow-y-hidden`}>
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentPage}
                                className={`${collapseGridClassName} ${loading ? styles.disabledDiv : ''}`}
                                layoutId={`courses-container-${currentPage}`}
                                initial={{ y: 300, position: 'absolute', opacity: 0 }}
                                animate={{ y: 0, position: 'relative', opacity: 1 }}
                                exit={{ y: -300, position: 'absolute', opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: easeInOut,
                                }}
                            >
                                {
                                    coursesChunk.map((item, index) => (
                                        <CourseCard
                                            key={index}
                                            courseTitle={item.courseTitle}
                                            courseId={item.courseId}
                                            reviewCount={item.reviewCount}
                                            onClick={() => handleSelectCourse(item)}
                                            selected={item.courseId === selected?.courseId}
                                        />
                                    ))
                                }
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait" initial={false} onExitComplete={() => handleSelectCourse(null)}>
                            {
                                showReviewSection && (
                                    <motion.div
                                        className="bg-secondary absolute top-0 left-0 h-full w-full lg:relative lg:w-1/2 h-full overflow-y-scroll flex items-center justify-center py-[27px] px-[21px] lg:border-s lg:border-s-px"
                                        initial={{
                                            right: 0,
                                            x: '100%',
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: '0%',
                                            opacity: 1,

                                        }}
                                        exit={{
                                            right: 0,
                                            x: '100%',
                                            opacity: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: easeInOut,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: easeInOut,
                                        }}
                                    >
                                        {
                                            selected?.reviewCount == 0 ? (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    No Reviews For This Course Yet
                                                </div>
                                            ) : (
                                                <div className="flex gap-[24px] flex-col lg:flex-row h-full">
                                                    <div className="w-full lg:w-1/2 h-full flex flex-col gap-[24px]">
                                                        {
                                                            reviews.firstHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="w-full lg:w-1/2 h-full flex flex-col gap-[24px]">
                                                        {
                                                            reviews.secondHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>

                    </div>
                </div>

                <div className="flex justify-center w-full">
                    {
                        Array.from({ length: Math.ceil(filteredCourses.length / 9) }).map((_, index) => (
                            <button
                                key={index + 1}
                                className="w-[36px] h-[36px] border bg-transparent text-black relative z-0"
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                <motion.span
                                    className="z-[5]"
                                    initial={{ color: 'rgba(255, 255, 255, 1)', }}
                                    animate={{ color: (currentPage == index + 1) ? "var(--secondary)" : "rgba(255, 255, 255, 1)", }}
                                    transition={{
                                        duration: 0.3, ease: [0.445, 0.05, 0.55, 0.95]
                                    }}
                                >
                                    {index + 1}
                                </motion.span>
                                {
                                    (currentPage == index + 1) && (
                                        <motion.span
                                            className="absolute top-0 left-0 w-full h-full bg-white z-[-1]"
                                            transition={{
                                                duration: 0.3, ease: [0.445, 0.05, 0.55, 0.95]
                                            }}
                                            layoutId="active-item"
                                        />
                                    )
                                }
                            </button>
                        ))
                    }
                </div>
            </Section>
        </Container >
    )
};

export default Page;
