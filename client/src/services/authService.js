import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/api";

export const signUpUser = async (userData) => {
    
    const response = await axios.post(`${API_URL}/v01/user/`, userData);

    return response.data;
    
};

export const loginUser = async (userData) => {

    console.log(userData);
    const response = await axios.post(`${API_URL}/v01/user/login`, userData);

    console.log(response);

    return response.data;

}
