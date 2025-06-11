<template>
    <div>
      <h1>Doctor Dashboard</h1>
      <p>Welcome, {{ $store.state.auth.doctor?.name || 'User' }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        this.$store.commit('auth/setDoctor', null);
        this.$store.commit('auth/setToken', null);
        localStorage.removeItem('token');
        this.$nuxt.context.redirect('/');
      }
    }
  }
  </script>