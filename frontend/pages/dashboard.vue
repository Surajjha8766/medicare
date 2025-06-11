<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Header Section -->
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {{ userInitials }}
              </div>
              <span class="font-medium">{{ userData?.names }}</span>
            </div>
            
            <button 
              @click="handleLogout"
              class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Welcome back, {{ userData?.name }}!</h2>
          <p class="text-gray-600">Here's your activity summary</p>
        </div>
  
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-medium text-gray-500 mb-2">Total Appointments</h3>
            <p class="text-3xl font-bold text-blue-600">{{ userStats.appointments || 0 }}</p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-medium text-gray-500 mb-2">Total Dates</h3>
            <p class="text-3xl font-bold text-green-600">{{ userStats.totalDates || 0 }}</p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-medium text-gray-500 mb-2">Availability</h3>
            <p class="text-3xl font-bold text-purple-600">
              {{ userStats.availability || 'Not Set' }}
            </p>
          </div>
        </div>
  
        <!-- Recent Appointments -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Recent Appointments</h3>
          </div>
          <div class="divide-y divide-gray-200">
            <div 
              v-for="(appointment, index) in recentAppointments" 
              :key="index"
              class="px-6 py-4 flex justify-between items-center"
            >
              <div>
                <p class="font-medium">{{ appointment.title }}</p>
                <p class="text-sm text-gray-500">{{ appointment.date }} at {{ appointment.time }}</p>
              </div>
              <span class="px-3 py-1 rounded-full text-sm font-medium" 
                    :class="appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                {{ appointment.status }}
              </span>
            </div>
            <div v-if="recentAppointments.length === 0" class="px-6 py-4 text-center text-gray-500">
              No appointments found
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth';
  
  export default { 
    setup() {
      definePageMeta({
        topbar_sidebar_hide: false
      })
    },
    
    data() {
      return {
        userData: null,
        auth: null,
        userId: null,
        userStats: {
          appointments: 0,
          totalDates: 0,
          availability: 'Available'
        },
        recentAppointments: []
      }
    },
  
    computed: {
      userInitials() {
        if (!this.userData?.name) return 'U';
        const names = this.userData.name.split(' ');
        return names.map(name => name[0]).join('').toUpperCase();
      }
    },
  
    methods: {
      async getUserData() {
        if (!this.userId) return;
        try {
          const response = await axios.get(`http://localhost:5000/api/user/getuser/${this.userId}`);
          this.userData = response.data.data;
          console.log("User data fetched successfully");
          
          // In a real app, you might fetch these from different endpoints
          this.fetchUserStats();
          this.fetchRecentAppointments();
        } catch(error) {
          console.log("Failed to fetch user data", error);
        }
      },
      
      async fetchUserStats() {
        try {
          // This would be replaced with actual API calls in a real app
          this.userStats = {
            appointments: 12,
            totalDates: 24,
            availability: 'Available'
          };
        } catch(error) {
          console.log("Failed to fetch user stats", error);
        }
      },
      
      async fetchRecentAppointments() {
        try {
          // Mock data - replace with actual API call
          this.recentAppointments = [
            {
              id: 1,
              title: 'Dentist Appointment',
              date: '2023-06-15',
              time: '10:30 AM',
              status: 'confirmed'
            },
            {
              id: 2,
              title: 'Team Meeting',
              date: '2023-06-16',
              time: '2:00 PM',
              status: 'pending'
            },
            {
              id: 3,
              title: 'Lunch with Client',
              date: '2023-06-17',
              time: '12:30 PM',
              status: 'confirmed'
            }
          ];
        } catch(error) {
          console.log("Failed to fetch appointments", error);
        }
      },
      
      handleLogout() {
        this.auth.logout();
        // Redirect to login page or home page
        this.$router.push('/login');
      }
    },
  
    async mounted() {
      this.auth = useAuthStore();
      this.userId = this.auth?.hasUserDetails?._id;
  
      if (!this.userId && localStorage.getItem('user')) {
        const localUser = JSON.parse(localStorage.getItem('user'));
        this.userId = localUser?._id;
        this.auth.setUser(localUser);
      }
  
      await this.getUserData();
    }
  }
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>