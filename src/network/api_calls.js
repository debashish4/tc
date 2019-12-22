import axios from 'axios';
import { WORDPRESS_BASE_URL, TRUECALLER_ID } from "@/constants/api_constants.js";


 
//Fetch Posts or Categories by providing respective endpoints
export const requestData = (endpoint, number = 25) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_ID}/${endpoint}`,
        params: {
            number
        }
    });
}

export const requestSinglePost = (post_ID) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_ID}/posts/${post_ID}`
    });
}