import axios from 'axios';

const baseURL = "http://localhost:8080"

export const getHomeData =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/home');

        return response.data
    } catch (error) {
        console.log(error)
    }
}