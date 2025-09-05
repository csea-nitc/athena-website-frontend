"use client";

import { alumniSans } from "@/fonts";
import { easeInOut, HTMLMotionProps, motion } from 'framer-motion'
import { MouseEventHandler, useMemo } from "react";

/**
* Cards for the Course Review page
* @param {string} [props.courseTitle] - Course Title
* @param {string} [props.courseId] - Course ID
* @param {number} [props.reviewCount] - Review Count
* @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - onClick action
*  
* @author Vaishnavi R Pai
*/
const CourseCard = ({
    courseTitle,
    courseId,
    reviewCount,
    onClick = undefined,
    selected = false,
}: CourseCardProps): JSX.Element => {
    const buttonProps: HTMLMotionProps<'button'> = useMemo(() => ({
        layoutId: courseId,
        className: 'flex flex-col w-full xs:w-[350px] h-[120px] py-[4px] px-[11px] gap-4 border-b border-b-px',
        onClick: onClick,
        ...(selected
            ? {
                transition: {
                    duration: 0.5,
                    ease: easeInOut,
                },
                initial: {
                    color: 'var(--secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    scale: 1,
                },
                animate: {
                    color: 'var(--secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    scale: 1,
                },
                whileHover: {
                    color: 'var(--secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    scale: 1.01,
                },
                whileTap: {
                    color: "var(--secondary)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    scale: 0.99,
                },
            }
            : {
                transition: {
                    duration: 0.5,
                    ease: easeInOut,
                },
                initial: {
                    color: 'rgba(255, 255, 255, 1)',
                    backgroundColor: 'var(--secondary)',
                    scale: 1,
                },
                animate: {
                    color: 'rgba(255, 255, 255, 1)',
                    backgroundColor: 'var(--secondary)',
                    scale: 1,
                },
                whileHover: {
                    color: 'var(--secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    scale: 1.01, transition: {
                        duration: 0.2,
                        ease: easeInOut,
                    },
                },
                whileTap: {
                    color: "var(--secondary)",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    scale: 0.99, transition: {
                        duration: 0.2,
                        ease: easeInOut,
                    },
                },
            })
    }), [selected, onClick, courseId]);

    return (
        <motion.button {...buttonProps}>
            <div className="w-full max-w-[328px] xs:w-[328px] h-[64px]">
                <h4 className={`${alumniSans.className} w-11/12 text-[28px] font-bold leading-[32px] text-left text-inherit`}>
                    {courseTitle}
                </h4>
            </div>

            <div className="flex flex-row items-center w-full h-[32px] justify-between">
                <div className="w-full h-[32px]">
                    <h5 className={`${alumniSans.className} text-[24px] text-left font-bold leading-[32px] text-inherit`}>
                        {courseId}
                    </h5>
                </div>

                <div className="flex flex-row gap-[5px] w-full h-[32px] justify-end">
                    <span className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-inherit`}>
                        {reviewCount}
                    </span>
                    <span className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-inherit`}>
                        Reviews
                    </span>
                </div>
            </div>
        </motion.button >
    )
};

export default CourseCard;
export interface CourseCardProps {
    courseTitle: string,
    courseId: string,
    reviewCount: number,
    onClick?: MouseEventHandler<HTMLButtonElement>
    selected?: boolean,
}