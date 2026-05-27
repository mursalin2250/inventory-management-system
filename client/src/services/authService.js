import axios from "axios";


const API_URL = "http://localhost:3000/api";

export const signUpUser = async (userData) => {
    
    const response = await axios.post(`${API_URL}/v01/user/`, userData);

    console.log("frontend", userData);
    return response.data;
    
};

