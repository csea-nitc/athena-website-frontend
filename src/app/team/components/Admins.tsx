import Card from "@/components/Card";
import { alumniSans } from "@/fonts";
import Button from "@/components/Button";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdmins } from "@/lib/team/admins";
import { AdminData } from "@/types/frontend";

const Admins = () => {
    const [admins, setAdmins] = useState<AdminData>({
        currentAdmins: [],
        previousAdmins: [],
    });

    useEffect(() => {
        const loadData = async () => {
            const data = await getAdmins();
            console.log(data);
            setAdmins(data);
        }

        void loadData();
    }, []);

    const router = useRouter();
    const routeHandler = useCallback((url: string) => {
        router.push(url)
    }, [router]);

    return (
        <div className="w-full h-full">
            {
                admins.currentAdmins.map((batch, index) => (
                    <div key={index} className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                        <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                            {
                                (batch.admins).map((admin, idx) => (
                                    <div key={idx}>
                                        <Card {...admin} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`w-full lg:w-fit flex items-center lg:items-end justify-start lg:justify-end text-9xl ${alumniSans.className}`}>
                            {batch.batch}&apos;s
                        </div>
                    </div>
                ))
            }
            <div className="pt-20 lg:pt-24">
                <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Previous Student Admins </h2>
                <div>
                    {
                        admins.previousAdmins.map((batch, index) => (
                            <div key={index} className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                                <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                                    {
                                        batch.admins.map((admin, idx) => (
                                            <div key={idx}>
                                                <Button
                                                    className="!px-[42px] !py-[16px]"
                                                    {
                                                    ...(admin.socials?.linkedin && ({
                                                        onClick: () => routeHandler(admin.socials?.linkedin || '#')
                                                    }))
                                                    }
                                                    hideIcon
                                                    disabled
                                                >
                                                    {admin.name}
                                                </Button>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className={`w-full lg:w-fit flex items-center lg:items-end justify-start lg:justify-end text-8xl ${alumniSans.className}`}>
                                    {batch.batch}&apos;s
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Admins;