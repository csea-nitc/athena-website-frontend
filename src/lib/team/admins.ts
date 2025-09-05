import { CardProps } from '@/components/Card'
import { type Admin } from '@/types/backend'
import { type AdminData, type BatchData } from '@/types/frontend'
import axios from 'axios'
import { getImageUrl, getSocials } from '../utils'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getAdmins = async (): Promise<AdminData> => {
    const response = await axios.get<Admin>(`${backendUrl}/api/admin`)

    const previousAdmins: BatchData[] = response.data.data.previous_admins.map((batch) => {
        const { batchCode, admins } = batch;
        const formattedAdminData: CardProps[] = admins.map(admin => ({
            name: admin.name,
            socials: getSocials(admin.socials)
        }));

        return {
            batch: batchCode,
            admins: formattedAdminData,
        }
    });

    const currentAdmins: BatchData[] = response.data.data.current_admins.map((batch) => {
        const { batchCode, admins } = batch;
        const formattedAdminData: CardProps[] = admins.map(admin => ({
            name: admin.name,
            imageUrl: getImageUrl(admin.image),
            socials: getSocials(admin.socials),
        }));

        return {
            batch: batchCode,
            admins: formattedAdminData,
        }
    });

    return {
        currentAdmins,
        previousAdmins,
    }
}




export { getAdmins }


