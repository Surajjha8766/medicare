export const namespaced = true;

export const state = () => ({
    doctor: null,
    token: null,
    user: null,
  });
  
  export const mutations = {
    setUser(state ,user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearAuth(state) {
      state.token = null;
      state.user = null
    }
  };

  export const getters =  {
    hasuserdetails(state) {
      return state.user;
    },
    isLoggedIn(state){
      return !!state.token;
    },
    
  }