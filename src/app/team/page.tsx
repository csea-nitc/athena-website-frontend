
"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { alumniSans } from "@/fonts";
import { useCallback, useMemo, useState } from "react";
import Staff from "./components/Staff";
import Faculties from "./components/Faculties";
import WebTeam from "./components/WebTeam";
import Admins from "./components/Admins";
import { AnimatePresence, motion } from "framer-motion";
import { groups } from "@/types/frontend";



const Page = () => {
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const handleToggleChange = useCallback((option: number) => {
        setSelectedOption(option);
    }, []);

    const options = useMemo(() => [
        <Faculties key="faculty" />,
        <Staff key="staff" />,
        <Admins key="admins" />,
        // <WebTeam key="webteam" />
    ], []);

    return (
        <Container>
            <Section className="min-h-screen h-full mb-16 pt-20 lg:pt-28">
                <h1 className={`${alumniSans.className} text-left lg:text-center text-[64px] leading-[76.8px] font-bold mb-4`}>
                    Meet The Team
                </h1>

                <div className="flex justify-center mb-8">
                    <div className="relative flex-col md:flex-row flex justify-center items-center w-full max-w-[860px] px-[14px]">
                        {
                            groups.map((option, index) => (
                                <button
                                    key={index}
                                    className="w-full py-[12px] px-[53px] h-full bg-transparent border border-white relative"
                                    onClick={() => handleToggleChange(index)}
                                >
                                    <motion.span
                                        className={`text-center text-nowrap text-[24px] font-bold z-[5]  ${alumniSans.className}`}
                                        initial={{ color: "white" }}
                                        animate={{ color: selectedOption === index ? 'rgba(0, 0, 0, 1)' : 'rgba(255,255,255,1)' }}
                                        transition={{
                                            duration: 0.3, ease: [0.445, 0.05, 0.55, 0.95]
                                        }}
                                    >
                                        {option}
                                    </motion.span>
                                    {
                                        selectedOption == index && (
                                            <motion.div
                                                className="absolute top-0 left-0 bg-white w-full h-full z-[-1]"
                                                transition={{
                                                    duration: 0.3, ease: [0.445, 0.05, 0.55, 0.95]
                                                }}
                                                layoutId="active"
                                            />
                                        )
                                    }
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence initial={false}>
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0, position: "absolute", y: 10, transformOrigin: "top" }}
                            animate={{ scale: 1, opacity: 1, position: "relative", y: 0, transformOrigin: "top" }}
                            exit={{ scale: 0.8, opacity: 0, position: "absolute", y: -10, transformOrigin: "top" }}
                            transition={{ duration: 0.5, ease: [0.445, 0.05, 0.55, 0.95] }}
                            key={selectedOption}
                            className="w-full h-full flex items-center justify-center"
                        >
                            {options[selectedOption]}
                        </motion.div>
                    </AnimatePresence>
                </div>


            </Section>

        </Container>
    );
};

export default Page;