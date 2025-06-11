<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
      <div class="px-5 py-4 border-b border-gray-200 relative">
        <h2 class="text-xl font-semibold text-gray-900 text-center m-0">Create your account</h2>
        <button class="absolute top-4 right-4 bg-transparent border-none cursor-pointer p-1 text-gray-500 hover:text-gray-900 transition-colors" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <form class="p-5" @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">User Type</label>
          <div class="flex gap-5">
            <label class="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                value="doctor"
                v-model="doctor.userType"
                required
                class="mr-2"
              />
              Doctor
            </label>
            <label class="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                value="customer"
                v-model="doctor.userType"
                required
                class="mr-2"
              />
              Customer
            </label>
          </div>
        </div>
        
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            id="name"
            v-model="doctor.name"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full Name"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email address</label>
          <input
            id="email"
            v-model="doctor.email"
            type="email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
          <button 
            type="button" 
            @click="sendOtp" 
            :disabled="otpSent"
            class="mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded hover:bg-blue-200 disabled:opacity-50"
          >
            Verify Email
          </button>
        </div>

        <!-- OTP Input -->
        <div class="mb-4" v-if="otpSent && !otpVerified">
          <label for="otp" class="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
          <input
            id="otp"
            v-model="enteredOtp"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter OTP"
          />
          <button 
            type="button" 
            @click="verifyOtp"
            class="mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded hover:bg-blue-200"
          >
            Submit OTP
          </button>
        </div>

        <div class="mb-4">
          <label for="specialization" class="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
          <input
            id="specialization"
            v-model="doctor.specialization"
            type="text"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Specialization"
          />
        </div>

        <div class="mb-4">
          <label for="contact" class="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
          <input
            id="contact"
            v-model="doctor.contact"
            type="number"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contact Number"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            id="password"
            v-model="doctor.password"
            type="password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
        </div>

        <button 
          type="submit" 
          class="w-full py-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed mb-4 transition-colors"
          :disabled="loading"
        >
          <span v-if="!loading">Sign up</span>
          <span v-else>Processing...</span>
        </button>

        <div class="text-center text-sm text-gray-500">
          Already have an account? 
          <a href="#" class="text-blue-500 font-medium hover:text-blue-600 hover:underline" @click.prevent="$emit('showSignin')">
            Sign in
          </a>
        </div>

        <div v-if="error" class="mt-4 p-2 bg-red-100 text-red-700 rounded-md text-sm text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      doctor: {
        userType: '',
        name: '',
        email: '',
        password: '',
        specialization: '',
        contact: ''
      },
      loading: false,
      error: null,
      otpSent: false,
      enteredOtp: '',
      otpVerified: false,
    }
  },
  methods: {
    async sendOtp() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.doctor.email)) {
        this.error = "Invalid email format.";
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/user/send-otp', {
          email: this.doctor.email
        });
        this.otpSent = true;
        alert("OTP sent to your email");
      } catch (err) {
        this.error = err.response?.data?.message || "Failed to send OTP.";
      }
    },

    async verifyOtp() {
      try {
        const response = await axios.post('http://localhost:5000/api/user/verify-otp', {
          email: this.doctor.email,
          otp: this.enteredOtp
        });
        this.otpVerified = true;
        alert("Email verified successfully");
      } catch (err) {
        this.error = err.response?.data?.message || "Invalid OTP.";
      }
    },

    async register() {
      if (!this.otpVerified) {
        this.error = "Please verify your email before signing up.";
        return;
      }
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:5000/api/user/createuser', this.doctor);
        console.log('Signup response:', response.data);

        // Save token and user data to Vuex store
        this.$store.commit('auth/setDoctor', response.data.user);
        this.$store.commit('auth/setToken', response.data.token);

        // Save token to localStorage
        localStorage.setItem('token', response.data.token);
        alert("Submit....")
        // Close modal and redirect
        this.$emit('close');

      } catch (err) {
        console.error('Signup error:', err.response);
        this.error = err.response?.data?.message || 'Registration failed';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>