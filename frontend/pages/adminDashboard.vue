<template>
    <div class="min-h-screen bg-gray-100">
      <div class="bg-indigo-600 pb-32">
        <header class="py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-white">Admin Panel</h1>
          </div>
        </header>
      </div>
  
      <main class="-mt-32">
        <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p class="text-lg text-gray-500">Admin Dashboard Content Goes Here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    setup() {
      definePageMeta({
        topbar_sidebar_hide: false
      })
    },
    middleware: 'auth'
  }
  </script>