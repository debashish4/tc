import * as mutation_types from "@/constants/mutation_types"

export default {
    [mutation_types.FETCH_ALL_POST](state, payload){
        state.posts = [...payload]
    },
    [mutation_types.FETCH_CATEGORIES](state, payload){
        state.categories = [...payload]
    }
}