import axios from 'axios';

const state = {
    categories: []
}

const getters = {
    allCategories: (state) => state.categories
}

const actions = {
    fetchCategories: async ({ commit }) => {
        const res = await axios.get('/api/category');
        commit('setCategories', res.data);
    }
}

const mutations = {
    setCategories: (state, categories) => state.categories = categories
}

export default {
    state, 
    getters,
    actions,
    mutations
}