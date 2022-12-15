import axios from 'axios';

const baseURL = "http://localhost:8080"

export const getWorksData =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/works');

        return response.data
    } catch (error) {
        console.log(error)
    }
}