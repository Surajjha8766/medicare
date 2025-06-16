<template>
  <div class="website-container">
    <main class="contact-page">
      <section class="py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Health Insights & News</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Stay informed with our latest health articles and research updates</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Blog Articles -->
            <div 
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              v-for="(blog, index) in allBlogs" :key="blog._id"
            >
              <div class="relative overflow-hidden h-48">
                <img src="https://img.freepik.com/free-photo/young-woman-doing-yoga-mat_23-2148721330.jpg" 
                     alt="Woman doing yoga" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {{blog.blogCategory}}
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center text-sm text-gray-500 mb-2">
                  <span>{{ formatDate(blog.createdAt) }}</span>
                  <span class="mx-2">•</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{{blog.blogTitle}}</h3>
                <p class="text-gray-600 mb-4">{{blog.blogDescription.substring(0, 100)  }} {{ blog.blogDescription.length > 100 ? '...' : '' }}</p>
                <button 
                  @click="openModal(blog)"
                  class="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                >
                  Read Article <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Side Modal -->
      <transition name="slide-fade">
        <div v-if="isModalOpen" class="fixed inset-0 z-50 overflow-hidden">
          <div class="absolute inset-0 bg-black bg-opacity-30" @click="closeModal"></div>
          
          <div class="fixed inset-y-0 right-0 max-w-full flex">
            <div class="relative w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl">
                <!-- Modal header -->
                <div class="flex items-center justify-between px-6 py-4 border-b">
                  <h3 class="text-xl font-semibold text-gray-900">{{ selectedBlog.blogTitle }}</h3>
                  <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <!-- Modal content -->
                <div class="flex-1 overflow-y-auto p-6">
                  <div class="flex items-center mb-4">
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-3">
                      {{ selectedBlog.blogCategory }}
                    </span>
                    <span class="text-sm text-gray-500">{{ formatDate(selectedBlog.createdAt) }}</span>
                  </div>
                  
                  <div class="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <img src="https://img.freepik.com/free-photo/young-woman-doing-yoga-mat_23-2148721330.jpg" 
                         alt="Blog image" 
                         class="w-full h-full object-cover">
                  </div>
                  
                  <div class="prose">
                    <p class="whitespace-pre-line text-gray-700">{{ selectedBlog.blogDescription }}</p>
                  </div>
                </div>
                
                <!-- Modal footer -->
                <div class="border-t px-4 py-3">
                  <button 
                    @click="closeModal"
                    class="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{
      allBlogs: [],
      isModalOpen: false,
      selectedBlog: {}
    }
  },

  methods: {
    async fetchBlogs() {
      try{
        const response = await axios.get('http://localhost:5000/blog/getblog');
        this.allBlogs = response.data.data;
        console.log("Fetch Successfully")
      }catch(error){
        console.log("Failed to fetch", error)
      }
    },

    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },

    openModal(blog) {
      this.selectedBlog = blog;
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = 'auto';
    }
  },

  async mounted(){
    await this.fetchBlogs();
  }
}
</script>

<style scoped>
/* Previous styles remain the same */

/* Modal transition effects */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Modal styling */
.modal-content {
  max-height: 90vh;
  overflow-y: auto;
}

/* Custom scrollbar for modal */
.modal-content::-webkit-scrollbar {
  width: 6px;
}
.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.modal-content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Prose styling for better text readability */
.prose {
  line-height: 1.6;
  color: #374151;
}
.prose p {
  margin-bottom: 1rem;
}
</style>