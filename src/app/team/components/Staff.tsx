import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { StaffData } from "@/types/frontend";
import { getStaff } from "@/lib/team/staff";

const Staff = () => {
    const [staff, setStaff] = useState<StaffData>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await getStaff();
            setStaff(data);
        }

        void loadData();
    }, []);


    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-center flex-wrap gap-[10px] py-[24px] lg:p-[24px] ">
                {
                    staff.map((details, index) => (
                        <Card key={index} {...details} />
                    ))
                }
            </div>
        </div>
    )
}

export default Staff;