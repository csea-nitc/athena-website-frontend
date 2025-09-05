import Card from "@/components/Card";
import { alumniSans } from "@/fonts";
import { useEffect, useState } from "react";
import { WebTeamData } from "@/types/frontend";
import { getWebTeam } from "@/lib/team/webteam";

const WebTeam = () => {
    const [webteam, setWebteam] = useState<WebTeamData>({
        design: [],
        juniors: [],
        seniors: [],
    })

    useEffect(() => {
        const loadData = async () => {
            const data = await getWebTeam();
            setWebteam(data);
        }

        void loadData();
    }, []);


    return (
        <div className="w-full h-full">
            <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Senior Devs </h2>
            <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                    {
                        webteam.seniors.map((details, index) => (
                            <div key={index}>
                                <Card {...details} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pt-20 lg:pt-24">
                <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Junior Devs </h2>
                <div>
                    <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                        <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                            {
                                webteam.juniors.map((details, index) => (
                                    <div key={index}>
                                        <Card {...details} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-20 lg:pt-24">
                <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Designers </h2>
                <div>
                    <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                        <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                            {
                                webteam.design.map((details, index) => (
                                    <div key={index}>
                                        <Card {...details} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WebTeam;