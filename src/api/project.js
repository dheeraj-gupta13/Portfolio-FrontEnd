import axios from 'axios';

// const baseURL = "https://portfolio-back-8f34qzs3z-dheeraj13042002.vercel.app"
const baseURL = "https://portfolio-back-end-lmhm-pzrxpeut0-dheeraj13042002s-projects.vercel.app"; // for localhost
// const baseURL = "http://localhost:8080"

export const getProjects =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/projects');
        console.log("RESPONSE",response.data);

        return response.data
    } catch (error) {
        console.log(error)
    }
}