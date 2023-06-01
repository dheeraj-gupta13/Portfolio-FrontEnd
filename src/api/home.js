import axios from 'axios';

// const baseURL = "https://portfolio-back-8f34qzs3z-dheeraj13042002.vercel.app"
const baseURL = "https://portfolio-back-otztjdau3-dheeraj13042002.vercel.app"; // for localhost

export const getHomeData =  async () => {
    try {
        
        const response = await axios.get(baseURL + '/home');

        return response.data
    } catch (error) {
        console.log(error)
    }
}