<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img src="../image/Medicare+.png" class="h-16 w-16" alt="Medicare+ Logo">
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</NuxtLink>
          <NuxtLink to="/services" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</NuxtLink>
          <NuxtLink to="/doctors" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Doctors</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</NuxtLink>
          <NuxtLink to="/blogs" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blogs</NuxtLink>
          <div class="flex space-x-4 ml-8">
            <button @click="openSignInModal" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Sign In</button>
            <button @click="openSignUpModal" class="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">Sign Up</button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-600 hover:text-blue-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white pb-4 px-4">
      <div class="flex flex-col space-y-3">
        <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 font-medium py-2">Home</NuxtLink>
        <NuxtLink to="/services" class="text-gray-600 hover:text-blue-600 font-medium py-2">Services</NuxtLink>
        <NuxtLink to="/doctors" class="text-gray-600 hover:text-blue-600 font-medium py-2">Doctors</NuxtLink>
        <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 font-medium py-2">About</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600 font-medium py-2">Contact</NuxtLink>
        <NuxtLink to="/blogs" class="text-gray-600 hover:text-blue-600 font-medium py-2">Blogs</NuxtLink>
        <div class="flex space-x-4 pt-2">
          <button @click="openSignInModal" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex-1">Sign In</button>
          <button @click="openSignUpModal" class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex-1">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Modals -->
  <SignInModal v-if="showSignInModal" @close="closeModals" />
  <SignUpModal v-if="showSignUpModal" @close="closeModals" />
</template>

<script setup>
import { ref } from 'vue';
import SignInModal from '@/components/signin.vue';
import SignUpModal from '@/components/signup.vue';

const isMenuOpen = ref(false);
const showSignInModal = ref(false);
const showSignUpModal = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const openSignInModal = () => {
  showSignInModal.value = true;
  showSignUpModal.value = false;
};

const openSignUpModal = () => {
  showSignUpModal.value = true;
  showSignInModal.value = false;
};

const closeModals = () => {
  showSignInModal.value = false;
  showSignUpModal.value = false;
};
</script>