<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Panel Login
        </h2>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input 
                  id="email"  
                  type="email"  
                  required 
                  v-model="email"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <input 
                  id="password" 
                  type="password" 
                  required 
                  v-model="password"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  v-model="rememberMe"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
            </div>
  
            <div>
              <button 
                type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
  
          <div v-if="error" class="mt-4 text-center text-sm text-red-600">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth';
  import axios from 'axios';

  export default {
    setup() {
      definePageMeta({
        topbar_sidebar_hide: false
      })
    },
    
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
        error: ''
      }
    },
    methods: {
     async handleLogin() {
      const authStore = useAuthStore();
      try{
        const response = await axios.post('http://localhost:5000/api/user/login', {
          email: this.email,
          password: this.password
        });
       
        const { token, user } = response.data;

         // Use store methods
         authStore.setUser(user);
        authStore.setToken(token);

        if(this.rememberMe){
          localStorage.setItem('rememberMe', 'true')
        } else{
          sessionStorage.setItem('sessionAuth', 'true')
        }

        //Redirect
        this.$router.push('/adminDashboard');
  //
      } catch(error){
        this.error = error.response?.data?.message || 'Login failed';
        authStore.clearAuth();
      }
     }
    }
  }
  </script>