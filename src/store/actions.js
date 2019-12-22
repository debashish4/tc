import { FETCH_ALL_POST, FETCH_CATEGORIES } from "@/constants/mutation_types";
import { requestData } from "@/network/api_calls";


export default {
    fetchAllPosts: ({ commit }, payload) => {
        requestData(payload)
            .then(function (response) {
                console.log(response);
                commit(FETCH_ALL_POST, response.data.posts);
            })
    },
    fetchCategories: ({ commit }, payload) => {
        requestData(payload)
            .then(function (response) {
                const categories = response.data.categories;
                commit(FETCH_CATEGORIES, categories);
            })
    }
}