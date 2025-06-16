<template>
    <div class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 ease-in-out">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">{{ isEditing ? 'Edit Blog' : 'Create New Blog' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
            Author
          </label>
          <input 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 cursor-not-allowed"
            id="author" 
            type="text" 
            :value="userName"
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
            v-model="formData.blogTitle"
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
            v-model="formData.blogCategory"
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
            v-model="formData.blogDescription"
            required
          ></textarea>
        </div>
        
        <div class="flex items-center justify-end space-x-4">
          <button 
            type="button"
            @click="cancelForm"
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
            {{ isSubmitting ? (isEditing ? 'Updating...' : 'Publishing...') : (isEditing ? 'Update Blog' : 'Publish Blog') }}
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      },
      blogData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formData: {
          blogTitle: '',
          blogDescription: '',
          blogCategory: '',
          userId: ''
        },
        isSubmitting: false,
        isEditing: false
      }
    },
    created() {
      if (this.blogData) {
        this.formData = { ...this.blogData };
        this.isEditing = true;
      }
    },
    methods: {
      submitForm() {
        this.isSubmitting = true;
        this.$emit('submit-blog', this.formData, () => {
          this.isSubmitting = false;
        });
      },
      cancelForm() {
        this.$emit('cancel-form');
      }
    }
  }
  </script>