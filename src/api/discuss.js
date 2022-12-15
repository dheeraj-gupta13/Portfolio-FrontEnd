import axios from 'axios';

const baseURL = "http://localhost:8080"

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