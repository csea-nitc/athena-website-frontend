"use client";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Chip from "@/components/Chip";
import CloseIcon from "@/components/CloseIcon";
import Container from "@/components/Container";
import { alumniSans, geo } from "@/fonts";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Section from "@/components/Section";
import { getFacilities } from "@/lib/facilities";




const Page = () => {
    const router = useRouter();
    const [facilities, setFacilities] = useState<string[]>([]);


    useEffect(() => {
        const loadData = async () => {
            const data = await getFacilities();
            setFacilities(data);
        }

        void loadData();
    }, []);

    const labsConducted = useMemo(() => [
        {
            name: "DBMS Lab",
            link: "https://nitcbase.github.io",
        },
        {
            name: "OS Lab",
            link: "https://exposnitc.github.io",
        },
        {
            name: "Hardware Lab",
            link: "https://hwlabnitc.github.io",
        },
        {
            name: "Compiler Lab",
            link: "https://silcnitc.github.io",
        },
        {
            name: "Programming Lab",
        },
        {
            name: "DSA Lab",
        },
        {
            name: "Networks Lab",
        },
    ], []);


    const routeTo = useCallback((route: string) => {
        router.push(route);
    }, [router]);

    const routeToExternal = useCallback((route: string) => {
        const a = document.createElement('a');
        a.href = route;
        a.target = '_blank';
        a.click();
    }, []);

    return (
        <Container>
            <Section className="flex flex-col justify-center min-h-screen items-center lg:items-start h-full">
                {/* 1. SSL Text Div */}
                <div className="w-[215px] h-[192px] lg:w-[1000px] lg:h-[248px] lg:top-[343px] lg:left-[140px] p-0 mb-8">
                    <p className={`${alumniSans.className} font-bold text-[64px] leading-[64px] text-center flex justify-center lg:text-[124px] lg:leading-[124px] lg:text-left bg-[linear-gradient(281.06deg,_#FFFFFF_36.47%,_#3ACBF1_81.15%)] bg-clip-text text-transparent`}>
                        Software Systems Laboratory
                    </p>
                </div>

                {/* 2. List Div */}
                <div className="flex w-[301px] h-[66px] lg:w-[1000px] lg:h-[36px] lg:top-[750px] lg:left-[140px] lg:justify-start">
                    <ul className="grid grid-cols-2 gap-[12px] gap-x-[52px] lg:flex lg:flex-row lg:gap-[49px] top-[666px] left-[140px]">

                        <li className="flex flex-row p-[6px_3px_6px_3px] w-[148px] lg:w-[198px] gap-[8px] items-center">
                            <img src="/hero/mail.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" alt="email" />
                            <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                ssladmin@nitc.ac.in
                            </span>
                        </li>

                        <li className="flex flex-row p-[6px_3px_6px_3px] w-[121px] lg:w-[162px] gap-[8px] items-center">
                            <img src="/hero/phone.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" alt="phone-no" />
                            <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                0495 228 6864
                            </span>
                        </li>

                        <li className="flex flex-row p-[6px_3px_6px_3px] w-[148px] lg:w-[183px] gap-[8px] items-center">
                            <img src="/hero/location.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" alt="location" />
                            <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                ITL302 - 2nd Floor
                            </span>
                        </li>

                        <li className="flex flex-row p-[6px_3px_6px_3px] w-[121px] lg:w-[135px] gap-[8px] items-center">
                            <img src="/hero/clock.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" alt="timings" />
                            <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                9AM - 12AM
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 3. Athena:Running Div */}
                <div className="w-[154px] h-[27px] lg:w-[205px] lg:h-[36px] absolute bottom-[30px] left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <p className={`${geo.className} text-[24px] leading-[26.67px] lg:text-[32px] lg:leading-[35.56px] text-darkBlue font-medium`}
                        style={{ filter: 'drop-shadow(0 0 10px var(--dark-blue)) drop-shadow(0 0 20px var(--dark-blue))' }}>
                        ATHENA: RUNNING
                    </p>
                </div>

                {/* 4. Image Div */}
                <div className="absolute bottom-0 right-0 hidden lg:flex md:justify-end">
                    <img src="/hero/server.png" alt="Server" className="lg:w-[300px] lg:h-[420px] xl:w-[400px] xl:h-[580.47px]"></img>
                </div>
            </Section>

            <Section id="about-us" className="py-24 2xl:py-48 h-full flex justify-between" borderTop>
                <CloseIcon />
                <div className="w-full lg:w-4/5 xl:w-3/5 h-inherit flex flex-col gap-8 items-start justify-center py-14">
                    <h2 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> About Us </h2>
                    <div className="w-full h-full flex flex-col gap-4 lg:gap-0 items-start justify-center lg:grid grid-cols-12 grid-rows-12 text-lg">
                        <span className="w-full h-full row-start-1 row-span-5 col-start-1 col-span-7 flex items-start lg:py-3 lg:pe-5">
                            The objective of this laboratory is to provide the infrastructure for conducting the regular labs and project works for the BTech Program. The lab is equipped with state of the art servers, desktops and software
                        </span>

                        <span className="w-full h-full row-start-1 row-span-5 col-start-8 col-span-5 border border-white border-[1px] lg:border-b-0 p-3 flex flex-col gap-2 justify-start">
                            <h3 className={`${alumniSans.className} text-4xl font-bold`}> Established </h3>
                            <p className={`${alumniSans.className} text-5xl text-neonGreen`} style={{
                                filter: 'drop-shadow(0 0 6px var(--neon-green)) drop-shadow(0 0 8px var(--neon-green)',
                            }}> 2006 </p>
                        </span>

                        <span className="w-full h-full row-start-6 row-span-7 col-start-1 col-span-7 lg:border lg:border-white lg:border-[1px] lg:border-e-0 lg:p-3 flex flex-col gap-2 justify-start">
                            <h3 className={`${alumniSans.className} text-4xl font-bold`}> Labs Conducted </h3>
                            <div className="flex flex-wrap gap-[10px] drop-shadow-[0_0_50px_white] hover:drop-shadow-none transition transition-filter duration-300">
                                {
                                    labsConducted.map((lab, index) => (
                                        lab.link
                                            ? <Button key={index} onClick={() => routeToExternal(lab.link)}>{lab.name}</Button>
                                            : <Chip key={index} text={lab.name} disableShadow />
                                    ))
                                }
                            </div>
                        </span>

                        <button
                            className="w-full h-full row-start-6 row-span-7 col-start-8 col-span-5 border border-white border-[1px] p-3 flex flex-col gap-2 justify-start relative group z-1"
                            onClick={() => routeTo('/team')}
                        >
                            <img src="/CloseIcon/tab-bar-group.svg" className="absolute top-0 right-0" alt="" />
                            <span className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-width duration-200 bg-white z-[-2] " />
                            <span
                                className={`${alumniSans.className} text-4xl lg:text-5xl w-1/2 text-left font-bold group-hover:text-black transition-color duration-200 pb-24`}
                            >
                                Meet Our Team
                            </span>
                            <img
                                src="/Home/arrow.svg"
                                alt="arrow"
                                className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] absolute bottom-3 right-3 group-hover:hidden" style={{
                                    filter: 'drop-shadow(0 0 6px white) drop-shadow(0 0 8px white)',
                                }}
                            />
                            <img
                                src="/Home/arrow-black.svg"
                                alt="arrow-black"
                                className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] absolute bottom-3 right-3 hidden group-hover:block"
                            />
                        </button>
                    </div>
                </div>
                <span className={`${geo.className} hidden w-1/5 xl:w-2/5 h-inherit text-xl lg:text-2xl font-medium py-14 lg:flex items-end justify-end text-darkBlue`}
                    style={{ filter: 'drop-shadow(0 0 10px var(--dark-blue)) drop-shadow(0 0 20px var(--dark-blue))' }}>
                    STATUS: ACTIVE
                </span>
            </Section>
            <Section id="facilities" className="py-24 2xl:py-48 h-full flex justify-between" borderTop>
                <CloseIcon />
                <div className="w-7/12 hidden lg:block h-inherit flex flex-col gap-8 items-center justify-center p-14">
                    <div className="aspect-video w-full flex items-center justify-center">
                        <Carousel images={facilities} />
                    </div>
                </div>
                <div className="w-full lg:w-5/12 h-inherit flex flex-col gap-8 items-start justify-center p-0 lg:p-14">
                    <h3 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> Facilities </h3>
                    <p>
                        The objective of this laboratory is to provide the infrastructure for conducting the regular labs and project works for the BTech Program. The lab is equipped with state of the art servers, desktops and software.
                    </p>
                    <div className="w-full text-center md:text-left">
                        <Button onClick={() => routeTo('/facilities-and-resources')}>
                            View Facilities
                        </Button>
                    </div>
                </div>
            </Section>
            <Section id="resources" className="py-24 2xl:py-48 h-full flex justify-between" borderTop>
                <CloseIcon />
                <div className="w-full lg:w-5/12 h-inherit flex flex-col gap-8 items-start justify-center p-0 lg:p-14">
                    <h3 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> CSED Resources </h3>
                    <p>
                        Find the link below to all the academic resources you&apos;ll need for your CSE course, compiled and put together by multiple batches since 2018. This is a one-stop set of curated notes, previous year question papers, slides, reference books, and other invaluable materials to help you with your studies.
                    </p>
                    <div className="w-full text-center md:text-left">
                        <Button onClick={() => routeToExternal('https://drive.google.com/drive/folders/1SEQD8DihaA-5nt1kjI79rbQ1PVunXsnj')}>
                            Start Grinding!
                        </Button>
                    </div>
                </div>
                <div className="w-7/12 hidden lg:block h-inherit flex flex-col gap-8 items-center justify-center p-14">
                    <img className="aspect-video w-full flex items-center justify-center" src="/Home/server-rack-section-3.svg" alt="" />
                </div>
            </Section>

            {/* Desktop only */}
            <Section className="hidden lg:flex py-24 2xl:py-48 h-full justify-between" borderTop>
                <CloseIcon />
                <div className="relative p-14 flex gap-8 flex-row w-full">
                    <div className="h-full w-1/3 flex flex-col items-start justify-center gap-8 relative">
                        <h3 className={`${alumniSans.className} font-bold text-7xl`}> Want to book SSL for events? </h3>
                        <p>
                            Download the form below and submit the filled form at the CSED office to request SSL/NSL access.
                        </p>
                        <div className="w-full text-center md:text-left">
                            <Button onClick={() => routeTo('/docs/SSL-Request.pdf')} className="!px-6" hideIcon> Download Form </Button>
                        </div>

                    </div>
                    <div className="h-full flex w-1/3 xl:w-3/12 items-center justify-end relative">
                        <span className="absolute top-0 left-0 w-[1px] h-full bg-white" style={{
                            filter: 'drop-shadow(0 0 6px white) drop-shadow(0 0 8px white)',
                        }} />
                        <img src="/Home/course-review-section-4.svg" alt="course-review" className="w-11/12" />
                    </div>
                    <div className="h-full w-1/3 xl:w-5/12 flex flex-col items-start justify-center gap-8">
                        <h3 className={`${alumniSans.className} font-bold text-7xl`}> Course Review </h3>
                        <p>
                            Feeling confused about which electives to choose or curious about the content and workload of various courses taught throughout your CSE journey? Click the link below to explore reviews from fellow students who have previously taken these courses.
                        </p>

                        <div className="w-full text-left">
                            <Button onClick={() => routeTo('/course-review')}> Review Courses </Button>
                        </div>
                    </div>
                </div>
            </Section>


            {/* mobile view only  */}
            <Section className="flex lg:hidden py-24 h-full justify-between">
                <div className="h-full w-full lg:w-1/3 xl:w-5/12 flex flex-col items-start justify-center gap-8">
                    <h3 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> Course Review </h3>
                    <p>
                        Feeling confused about which electives to choose or curious about the content and workload of various courses taught throughout your CSE journey? Click the link below to explore reviews from fellow students who have previously taken these courses.
                    </p>

                    <div className="w-full text-center md:text-left">
                        <Button onClick={() => routeTo('/course-review')}> Review Courses </Button>
                    </div>
                </div>
            </Section>
            <Section className="flex lg:hidden py-24 h-full justify-between" borderTop>
                <div className="h-full w-full lg:w-1/3 flex flex-col items-start justify-center gap-8 relative">
                    <h3 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> Want to book SSL for events? </h3>
                    <p>
                        Download the form below and submit the filled form at the CSED office to request SSL/NSL access.
                    </p>
                    <div className="w-full text-center md:text-left">
                        <Button onClick={() => routeTo('/docs/SSL-Request.pdf')} className="!px-6" hideIcon> Download Form </Button>
                    </div>

                </div>
            </Section>
        </Container>
    );
}

export default Page;
