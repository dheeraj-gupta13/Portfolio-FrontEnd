import axios from 'axios';

// const baseURL = "https://portfolio-back-8f34qzs3z-dheeraj13042002.vercel.app"
const baseURL = "https://portfolio-back-otztjdau3-dheeraj13042002.vercel.app"; // for localhost

export const getTags =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/discuss/tags');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getProblemsByTag =  async (tag) => {
    try {
        const response = await axios.get(baseURL + `/discuss/getProblemsByTag?tag=${tag}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllProblems =  async () => {
    try {
        const response = await axios.get(baseURL + `/discuss/problems`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}