import { CardProps } from '@/components/Card';
import { type Staff } from '@/types/backend';
import { type StaffData } from '@/types/frontend';
import axios from 'axios';
import { getImageUrl, getSocials } from '../utils';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;



const getStaff = async (): Promise<StaffData> => {
    const response = await axios.get<Staff>(`${backendUrl}/api/staff`)


    const formattedData: CardProps[] = response.data.data.current_staffs.map((staff) => {
        const output: CardProps = {
            imageUrl: getImageUrl(staff.image),
            name: staff.name,
            socials: getSocials(staff.socials),
        }

        return output;
    })

    return formattedData;
}


export { getStaff }