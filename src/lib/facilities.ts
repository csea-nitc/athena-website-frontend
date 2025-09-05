import { Facility } from '@/types/backend';
import axios from 'axios';
import { getImageUrl } from './utils';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getFacilities = async (): Promise<string[]> => {
    const response = await axios.get<Facility>(`${backendUrl}/api/facility`);

    const formattedData = response.data.data.data.map(image => getImageUrl(image))
    return formattedData;
}

export { getFacilities }