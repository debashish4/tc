import { FETCH_ALL_POST, FETCH_CATEGORIES, FETCH_SINGLE_POST, FETCH_POST_BY_CATEGORY, SAVE_NEXT_PAGE_HANDLER, FETCH_OLD_POSTS, FETCH_TAGS, FETCH_POST_BY_TAG, FETCH_RELATED_POSTS } from "@/constants/mutation_types";
import { requestData, requestSinglePost, requestPostsByCategory, requestOldPost, requestPostsBytag, requestRelatedPost } from "@/network/api_calls";


export default {
    fetchAllPosts: ({ commit, dispatch }, payload) => {
        requestData(payload)
            .then(function (response) {
                const next_page = response.data.meta.next_page;
                dispatch("saveNextPage", next_page);
                commit(FETCH_ALL_POST, response.data.posts);
            })
    },
    fetchCategories: ({ commit }, payload) => {
        requestData(payload)
            .then(function (response) {
                const categories = response.data.categories;
                commit(FETCH_CATEGORIES, categories);
            })
    },
    fetchSinglePostDetail: ({ commit }, payload) => {
        requestSinglePost(payload)
            .then(function (response) {
                const { content, date, title, post_thumbnail: { guid }, author: { first_name, last_name } } = response.data;
                commit(FETCH_SINGLE_POST, { content, date, title, guid, author: { first_name, last_name } });
            })
    },
    fetchPostsByCategory: ({ commit }, payload) => {
        requestPostsByCategory(payload)
            .then(function (response) {
                const posts = response.data.posts;
                commit(FETCH_POST_BY_CATEGORY, posts)
            })
    },

    saveNextPage: ({ commit }, payload) => {
        commit(SAVE_NEXT_PAGE_HANDLER, payload)
    },
    fetchOldPosts: ({ commit, dispatch }, payload) => {
        requestOldPost(payload)
            .then(function (response) {
                console.log(response);
                const next_page = response.data.meta.next_page;
                dispatch("saveNextPage", next_page)
                commit(FETCH_OLD_POSTS, response.data.posts);
            })
    },


    fetchAllTags: ({ commit }, payload) => {
        requestData(payload)
            .then(function (response) {
                const tags = response.data.tags;
                console.log("tags", tags)
                commit(FETCH_TAGS, tags);
            })
    },

    fetchPostsByTag: ({ commit }, payload) => {
        requestPostsBytag(payload)
            .then(function (response) {
                const posts = response.data.posts;
                commit(FETCH_POST_BY_TAG, posts)
            })
    },

    fetchRelatedPosts: ({ commit }, payload) => {
        requestRelatedPost(payload)
        .then(function (response) {
            const posts = response.data.posts
            commit(FETCH_RELATED_POSTS, posts)
        })
    }
}