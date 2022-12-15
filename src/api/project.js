import axios from 'axios';

const baseURL = "http://localhost:8080"

export const getProjects =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/projects');
        console.log("RESPONSE",response.data);

        return response.data
    } catch (error) {
        console.log(error)
    }
}