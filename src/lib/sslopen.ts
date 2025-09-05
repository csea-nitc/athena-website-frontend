import axios from 'axios'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getSslOpenStatus = async (): Promise<boolean> => {
    const response = await axios.get<{ data: { current_status: boolean } }>(`${backendUrl}/api/is-ssl-open`);

    return response.data.data.current_status;
}

export {
    getSslOpenStatus,
}