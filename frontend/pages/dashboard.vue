<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-10"
         :class="{ '-translate-x-full': !sidebarOpen, 'translate-x-0': sidebarOpen }">
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <h2 class="text-xl font-bold text-gray-800">Menu</h2>
        <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="mt-6">
        <div>
          <router-link to="/dashboard" class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="mx-3">Dashboard</span>
          </router-link>
          
          <button @click="toggleBlogSection" class="w-full flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span class="mx-3">Blogs</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-show="blogSectionOpen" class="pl-14 bg-gray-50">
            <button @click="showBlogList" class="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              My Blogs
            </button>
            <button @click="showCreateBlogForm" class="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              Create Blog
            </button>
          </div>
          
          <router-link to="/profile" class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="mx-3">Profile</span>
          </router-link>
          
          <router-link to="/settings" class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="mx-3">Settings</span>
          </router-link>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col" :class="{ 'ml-64': sidebarOpen }">
      <!-- Header Section -->
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
          
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {{ userInitials }}
              </div>
              <span class="font-medium">{{ userData?.name}}</span>
            </div>
            
            <!-- <button 
              @click="handleLogout"
              class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button> -->
          </div>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex-1">
        <!-- Blog Section -->
        <div v-if="showBlogs" class="mb-8 transition-all duration-300 ease-in-out">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">My Blogs</h2>
            <button 
              @click="showCreateBlogForm"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Blog
            </button>
          </div>
          
          <div v-if="userBlogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="blog in userBlogs" 
              :key="blog._id"
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div class="p-6">
                <div class="flex justify-between items-start">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ blog.blogTitle }}</h3>
                  <span class="px-2 py-1 text-xs rounded-full" 
                        :class="getCategoryColor(blog.blogCategory)">
                    {{ blog.blogCategory }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4">{{ blog.blogDescription.substring(0, 100) }}{{ blog.blogDescription.length > 100 ? '...' : '' }}</p>
                <div class="flex justify-between items-center text-sm text-gray-500">
                  <span>By {{ blog.author || userData?.name }}</span>
                  <span>{{ formatDate(blog.createdAt) }}</span>
                </div>
              </div>
              <button type="button" @click="deleteBlog(blog._id)">Delete</button>
            </div>
          </div>
          <div v-else class="bg-white rounded-lg shadow p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-4 text-lg font-medium text-gray-900">No blogs found</h3>
            <p class="mt-1 text-gray-500">You haven't written any blogs yet.</p>
            <button 
              @click="showCreateBlogForm"
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Your First Blog
            </button>
          </div>
        </div>
        
        <!-- Create Blog Form -->
        <div v-if="showCreateBlog" class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 ease-in-out">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create New Blog</h2>
          <form @submit.prevent="submitBlog">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
                Author
              </label>
              <input 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 cursor-not-allowed"
                id="author" 
                type="text" 
                :value="userData?.name"
                disabled
              >
            </div>
            
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                Blog Title <span class="text-red-500">*</span>
              </label>
              <input 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title" 
                type="text" 
                placeholder="Enter blog title"
                v-model="newBlog.blogTitle"
                required
              >
            </div>
            
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                Category <span class="text-red-500">*</span>
              </label>
              <select 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                v-model="newBlog.blogCategory"
                required
              >
                <option value="" disabled selected>Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
              </select>
            </div>
            
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                Blog Description <span class="text-red-500">*</span>
              </label>
              <textarea 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="description" 
                placeholder="Write your blog content here..."
                v-model="newBlog.blogDescription"
                required
              ></textarea>
            </div>
            
            <div class="flex items-center justify-end space-x-4">
              <button 
                type="button"
                @click="cancelCreateBlog"
                class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Publishing...' : 'Publish Blog' }}
              </button>
            </div>
          </form>
        </div>
        
        <!-- Dashboard Content (shown when not in blog mode) -->
        <div v-if="!showBlogs && !showCreateBlog">
          <div class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Welcome back, {{ userData?.name }}!</h2>
            <p class="text-gray-600">Here's your activity summary</p>
          </div>
    
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 class="text-lg font-medium text-gray-500 mb-2">Total Appointments</h3>
              <p class="text-3xl font-bold text-blue-600">{{ userStats.appointments || 0 }}</p>
            </div>
            
            <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 class="text-lg font-medium text-gray-500 mb-2">Total Dates</h3>
              <p class="text-3xl font-bold text-green-600">{{ userStats.totalDates || 0 }}</p>
            </div>
            
            <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <h3 class="text-lg font-medium text-gray-500 mb-2">Availability</h3>
              <p class="text-3xl font-bold text-purple-600">
                {{ userStats.availability || 'Not Set' }}
              </p>
            </div>
          </div>
    
          <!-- Recent Appointments -->
          <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div class="px-6 py-4 border-b border-gray-200">
              <h3 class="text-lg font-medium text-gray-900">Recent Appointments</h3>
            </div>
            <div class="divide-y divide-gray-200">
              <div 
                v-for="(appointment, index) in recentAppointments" 
                :key="index"
                class="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
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
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default { 
  setup() {
    definePageMeta({
      topbar_sidebar_hide: false
    })
  },
  
  data() {
    return {
      sidebarOpen: true,
      blogSectionOpen: false,
      showBlogs: false,
      showCreateBlog: false,
      userData: null,
      auth: null,
      userId: null,
      userStats: {
        appointments: 0,
        totalDates: 0,
        availability: 'Available'
      },
      recentAppointments: [],
      userBlogs: [],
      newBlog: {
        blogTitle: '',
        blogDescription: '',
        blogCategory: '',
        userId: '',
      },
      isSubmitting: false,
      userId: this.auth?.hasUserDetails?._id
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
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    
    toggleBlogSection() {
      this.blogSectionOpen = !this.blogSectionOpen;
    },
    
    showBlogList() {
      this.showBlogs = true;
      this.showCreateBlog = false;
      this.fetchUserBlogs();
    },
    
    showCreateBlogForm() {
      this.showBlogs = false;
      this.showCreateBlog = true;
      this.newBlog.author = this.userData?.name || '';
    },
    
    cancelCreateBlog() {
      this.showCreateBlog = false;
    },
    
    async submitBlog() {
      this.isSubmitting = true;
      try {
       // Automatically assign userId from logged-in user data
         this.newBlog.userId = this.userData?._id;
        const response = await axios.post('http://localhost:5000/blog/postblog', this.newBlog);
        console.log(response.data);
        alert("Blog Posted")
      } catch (error) {
        console.error("Error submitting blog:", error);
        alert("faled", error)
      } finally {
        this.isSubmitting = false;
      }
    },
    
    async fetchUserBlogs() {
      try {
        // Simulate API call to fetch blogs
        await new Promise(resolve => setTimeout(resolve, 500));
       const response = await axios.get(`http://localhost:5000/blog/getblogById/${this.userId}`);
       this.userBlogs = response.data.data;
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },

    async deleteBlog(id){
      try{
        const response = await axios.delete(`http://localhost:5000/blog/deleteblog/${id}`);
        console.log(response.data);
        alert("delete Success");
        this.fetchUserBlogs();
      }catch(error){
        alert("Failed to delete", error)
      }
    },
    
    getCategoryColor(category) {
      const colors = {
        'Technology': 'bg-blue-100 text-blue-800',
        'Travel': 'bg-green-100 text-green-800',
        'Food': 'bg-yellow-100 text-yellow-800',
        'Lifestyle': 'bg-purple-100 text-purple-800',
        'Health': 'bg-red-100 text-red-800',
        'Business': 'bg-indigo-100 text-indigo-800'
      };
      return colors[category] || 'bg-gray-100 text-gray-800';
    },
    
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    
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
      try {
        this.auth.logout();
        // Redirect to login page or home page
        const router = useRouter();
        router.push('/');
      } catch(error) {
        console.error('Logout failed:', error);
        // Even if the API logout fails, we should clear local state
        this.auth.logout();
        const router = useRouter();
        router.push('/');
      }
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
    await this.fetchUserBlogs();
  }
}
</script>

<style scoped>
/* Smooth transitions for sidebar */
.sidebar-enter-active, .sidebar-leave-active {
  transition: transform 0.3s ease;
}
.sidebar-enter-from, .sidebar-leave-to {
  transform: translateX(-100%);
}

/* Custom scrollbar for sidebar */
nav::-webkit-scrollbar {
  width: 6px;
}
nav::-webkit-scrollbar-track {
  background: #f1f1f1;
}
nav::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
nav::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>