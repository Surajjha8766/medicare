<template>
    <div class="mb-8 transition-all duration-300 ease-in-out">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">My Blogs</h2>
        <button 
          @click="$emit('create-blog')"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Blog
        </button>
      </div>
      
      <div v-if="blogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="blog in blogs" 
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
              <span>By {{ blog.author || userName }}</span>
              <span>{{ formatDate(blog.createdAt) }}</span>
            </div>
          </div>
          <div class="px-6 py-3 bg-gray-50 flex justify-end space-x-2">
            <button 
              @click="$emit('edit-blog', blog._id)"
              class="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button 
              @click="$emit('delete-blog', blog._id)"
              class="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div v-else class="bg-white rounded-lg shadow p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">No blogs found</h3>
        <p class="mt-1 text-gray-500">You haven't written any blogs yet.</p>
        <button 
          @click="$emit('create-blog')"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Your First Blog
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      blogs: {
        type: Array,
        required: true
      },
      userName: {
        type: String,
        required: true
      }
    },
    methods: {
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
      }
    }
  }
  </script>