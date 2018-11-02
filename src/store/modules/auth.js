import axios from 'axios';

const state = {
    token: window.localStorage.getItem('token')
}

const getters = {
    isLoggedIn: (state) => !!state.token
}

const actions = {
    logout:({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('token');
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default {
    state,
    getters, 
    actions,
    mutations
}