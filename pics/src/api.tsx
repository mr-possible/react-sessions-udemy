import axios from "axios";


async function searchImages(term: string): Promise<[]> {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID yt_g4d2ESS8a9vgH4w9-6dVqOUGWM3XJeM9SrakI4ds'
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImages