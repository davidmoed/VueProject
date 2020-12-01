import axios from "axios";

const state = {
  user: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
};

const actions = {
  async LogIn({commit}, user) {
    await axios.post("/account/login/", user);
    await commit("setUser", user);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
