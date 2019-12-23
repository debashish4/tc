import * as mutation_types from "@/constants/mutation_types"

export default {
    [mutation_types.FETCH_ALL_POST](state, payload) {
        state.posts = [...payload]
    },
    [mutation_types.FETCH_CATEGORIES](state, payload) {
        state.categories = [...payload]
    },
    [mutation_types.FETCH_SINGLE_POST](state, payload) {
        state.selectedPostDetails = { ...payload }
    },
    [mutation_types.FETCH_POST_BY_CATEGORY](state, payload) {
        state.posts = [...payload]
    },
    [mutation_types.SAVE_NEXT_PAGE_HANDLER](state, payload) {
        state.nextPage = payload
    },
    [mutation_types.FETCH_OLD_POSTS](state, payload) {
        state.posts = [...state.posts, ...payload]
    },
    [mutation_types.FETCH_TAGS](state, payload) {
        state.tags = [...payload]
    },
    [mutation_types.FETCH_POST_BY_TAG](state, payload) {
        state.posts = [...payload]
    },
    [mutation_types.FETCH_RELATED_POSTS](state, payload){
        state.relatedPosts = [...payload]
    }
}