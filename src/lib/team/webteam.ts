import { type CardProps } from '@/components/Card'
import { type WebTeam } from '@/types/backend'
import { type WebTeamData } from '@/types/frontend'
import axios from 'axios'
import { getImageUrl, getSocials } from '../utils'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getWebTeam = async (): Promise<WebTeamData> => {
    const response = await axios.get<WebTeam>(`${backendUrl}/api/web-team`)

    const design: CardProps[] = response.data.data.design.map(people => ({
        name: people.name,
        imageUrl: getImageUrl(people.image),
        socials: getSocials(people.socials),
    }));

    const juniors: CardProps[] = response.data.data.juniors.map(people => ({
        name: people.name,
        imageUrl: getImageUrl(people.image),
        socials: getSocials(people.socials),
    }));

    const seniors: CardProps[] = response.data.data.seniors.map(people => ({
        name: people.name,
        imageUrl: getImageUrl(people.image),
        socials: getSocials(people.socials),
    }));

    return {
        design,
        juniors,
        seniors,
    }
}

export { getWebTeam }