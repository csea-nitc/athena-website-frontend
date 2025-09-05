import { CardProps } from '@/components/Card';
import { type Faculty } from '@/types/backend';
import { type FacultyData } from '@/types/frontend';
import axios from 'axios';
import { getImageUrl, getSocials } from '../utils';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getFaculties = async (): Promise<FacultyData> => {
    const response = await axios.get<Faculty>(`${backendUrl}/api/faculty`)

    const currentFaculties: CardProps[] = response.data.data.current_faculties.map((faculty) => ({
        name: faculty.name,
        imageUrl: getImageUrl(faculty.image),
        socials: getSocials(faculty.socials),
    }));

    const previousFaculties: CardProps[] = response.data.data.previous_faculties.map((faculty) => ({
        name: faculty.name,
        imageUrl: getImageUrl(faculty.image),
        socials: getSocials(faculty.socials),
    }));

    return {
        previousFaculties,
        currentFaculties,
    }
}

export { getFaculties }