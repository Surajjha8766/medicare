// stores/auth.js

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    hasUserDetails: (state) => state.user,
    isLoggedIn: (state) => !!state.token
  },
  actions: {

    setUser(user) {
      this.user = user;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    setToken(token) {
      this.token = token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
    },
    loadFromLocalStorage() {
      if (typeof window !== 'undefined') {
        this.user = JSON.parse(localStorage.getItem('user')) || null;
        this.token = localStorage.getItem('token') || null;
      }
    },
    clearAuth() {
      this.user = null;
      this.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('rememberMe');
        sessionStorage.removeItem('sessionAuth');
      }
    },
    initialize() {
      this.loadFromLocalStorage();
      
      // Check session storage if not remembered
      if (typeof window !== 'undefined' && 
          localStorage.getItem('rememberMe') !== 'true' && 
          !sessionStorage.getItem('sessionAuth')) {
        this.clearAuth();
      }
    }
  }
});