import axios from 'axios';
import { WORDPRESS_BASE_URL, TRUECALLER_SITE_ID } from "@/constants/api_constants.js";



//Fetch All Posts, All Categories or All tags by providing respective endpoints
export const requestData = (endpoint, number = 25) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/${endpoint}`,
        params: {
            number
        }
    });
}

export const requestSinglePost = (post_ID) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/posts/${post_ID}`
    });
}

export const requestPostsByCategory = (categoryName, number = 25) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/posts`,
        params: {
            category: categoryName,
            number
        },
    });
}

export const requestOldPost = (page_handle, number = 2) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/posts`,
        params: {
            number,
            page_handle
        },
    });
}

export const requestPostsBytag = (tagName, number = 25) => {
    return axios({
        method: "GET",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/posts`,
        params: {
            tag: tagName,
            number
        },
    });
}

export const requestRelatedPost = (postID) => {
    return axios({
        method: "POST",
        url: `${WORDPRESS_BASE_URL}${TRUECALLER_SITE_ID}/posts/${postID}/related`,
        params: {
            size: 3
        },
    });
}