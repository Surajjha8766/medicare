<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30 backdrop-blur-sm" v-if="creatAccount">
    <div class="w-full max-w-md mx-4 overflow-hidden bg-white rounded-2xl shadow-xl">
      <!-- Modal Header -->
      <div class="relative p-6 pb-4">
        <h2 class="text-2xl font-bold text-center text-gray-900">Create your account</h2>
        <button 
          @click="$emit('close')"
          class="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Modal Content -->
      <form class="px-6 pb-8 space-y-5" @submit.prevent="register">
        <!-- User Type Selection -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">I am a</label>
          <div class="flex gap-4">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="doctor"
                v-model="doctor.userType"
                required
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span class="text-sm font-medium text-gray-700">Doctor</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="customer"
                v-model="doctor.userType"
                required
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span class="text-sm font-medium text-gray-700">Customer</span>
            </label>
          </div>
        </div>

        <!-- Full Name -->
        <div class="space-y-2">
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            v-model="doctor.name"
            type="text"
            required
            class="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>

        <!-- Email with OTP Verification -->
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="flex gap-2">
            <input
              id="email"
              v-model="doctor.email"
              type="email"
              required
              class="flex-1 px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              placeholder="your@email.com"
              :disabled="otpVerified"
            />
            <button
              type="button"
              @click="sendOtp"
              :disabled="otpSent || !doctor.email"
              class="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {{ otpSent ? 'Sent' : 'Verify' }}
            </button>
          </div>
        </div>

        <!-- OTP Input -->
        <div v-if="otpSent && !otpVerified" class="p-4 space-y-3 bg-blue-50 rounded-lg">
          <div>
            <label for="otp" class="block text-sm font-medium text-gray-700">Verification code</label>
            <p class="text-xs text-gray-500">We've sent a 6-digit code to your email</p>
          </div>
          <div class="flex gap-2">
            <input
              id="otp"
              v-model="enteredOtp"
              type="text"
              required
              maxlength="6"
              class="flex-1 px-4 py-2.5 text-center text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="123456"
            />
            <button
              type="button"
              @click="verifyOtp"
              class="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>

        <!-- Specialization -->
        <div v-if="doctor.userType === 'doctor'" class="space-y-2">
          <label for="specialization" class="block text-sm font-medium text-gray-700">Specialization</label>
          <input
            id="specialization"
            v-model="doctor.specialization"
            type="text"
            required
            class="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Cardiology, Neurology, etc."
          />
        </div>

        <!-- Contact Number -->
        <div class="space-y-2">
          <label for="contact" class="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            id="contact"
            v-model="doctor.contact"
            type="tel"
            required
            class="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="+1 234 567 890"
          />
        </div>

        <!-- Password -->
        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            v-model="doctor.password"
            type="password"
            required
            class="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="••••••••"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="!otpVerified || loading"
          class="w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <span v-if="!loading">Create Account</span>
          <span v-else class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        </button>

        <!-- Already have account -->
        <div class="text-sm text-center text-gray-500">
          Already have an account? 
          <a href="#" @click.prevent="$emit('showSignin')" class="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
            Sign in
          </a>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth'

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
      creatAccount: true,
    }
  },
  methods: {
    async sendOtp() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.doctor.email)) {
        this.error = "Please enter a valid email address.";
        return;
      }

      this.loading = true;
      try {
        const response = await axios.post('http://localhost:5000/api/user/send-otp', {
          email: this.doctor.email
        });
        this.otpSent = true;
        this.error = null;
       alert("OTP sent to email")
      } catch (err) {
        this.error = err.response?.data?.message || "Failed to send OTP. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    async verifyOtp() {
      if (!this.enteredOtp || this.enteredOtp.length !== 6) {
        this.error = "Please enter a valid 6-digit code.";
        return;
      }

      this.loading = true;
      try {
        const response = await axios.post('http://localhost:5000/api/user/verify-otp', {
          email: this.doctor.email,
          otp: this.enteredOtp
        });
        this.otpVerified = true;
        this.error = null;
        alert("Email Verified")
      } catch (err) {
        this.error = err.response?.data?.message || "Invalid verification code. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    async register() {
      if (!this.otpVerified) {
        this.error = "Please verify your email before signing up.";
        return;
      }
      
       // Validate all required fields
       if (!this.doctor.name || !this.doctor.email || !this.doctor.password || 
          (this.doctor.userType === 'doctor' && !this.doctor.specialization) || 
          !this.doctor.contact) {
        this.error = "Please fill all required fields.";
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:5000/api/user/createuser', this.doctor);
        const auth = useAuthStore()
        auth.setUser(response.data.user);
        auth.setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Close modal
      this.creatAccount = false;
        // Show success message
       alert("Successfully")

      } catch (err) {
        console.error('Signup error:', err.response);
        this.error = err.response?.data?.message || 'Registration failed. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>