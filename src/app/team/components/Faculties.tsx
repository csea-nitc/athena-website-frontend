import Card from "@/components/Card";
import { alumniSans } from "@/fonts";
import { useEffect, useState } from "react";
import { FacultyData } from "@/types/frontend";
import { getFaculties } from "@/lib/team/faculties";

const Faculties = () => {
    const [faculty, setFaculty] = useState<FacultyData>({
        previousFaculties: [],
        currentFaculties: [],
    });

    useEffect(() => {
        const loadData = async () => {
            const data = await getFaculties();
            setFaculty(data);
        }

        void loadData();
    }, []);


    return (
        <div className="w-full h-full">
            <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                    {
                        faculty.currentFaculties.map((fac, index) => (
                            <Card {...fac} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="pt-20 lg:pt-24">
                <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Our Roots </h2>
                <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                    <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                        {
                            faculty.previousFaculties.map((fac, index) => (
                                <Card {...fac} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faculties;