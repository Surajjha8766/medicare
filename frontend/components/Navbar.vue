<template>
    <nav class="navbar">
      <div class="nav-container">
        <!-- Logo -->
        <div class="logo-container">
           <NuxtLink to="/">
         <img src="../image/Medicare+.png" style="height: 95px; width: 95px;margin: 10px 0px">
        </NuxtLink>
         
        </div>
  
        <!-- Desktop Menu -->
        <div class="desktop-menu">
          <NuxtLink to="/" class="menu-item">Home</NuxtLink>
          <NuxtLink to="/services" class="menu-item">Services</NuxtLink>
          <NuxtLink to="/doctors" class="menu-item">Doctors</NuxtLink>
          <NuxtLink to="/about" class="menu-item">About</NuxtLink>
          <NuxtLink to="/contact" class="menu-item">Contact</NuxtLink>
          <div style="position: relative;left: 140px;">
            <button class="btns_signin" @click="openSignInModal">Sign In</button>
            <button class="btns_signin" @click="openSignUpModal">Sign Up</button>
          </div>
        </div>
  
        <!-- Mobile Menu Button -->
        <div class="mobile-menu-button">
          <button class="menu-toggle" @click="toggleMenu">
            <svg class="menu-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="mobile-menu">
        <NuxtLink to="/" class="mobile-menu-item">Home</NuxtLink>
        <NuxtLink to="/services" class="mobile-menu-item">Services</NuxtLink>
        <NuxtLink to="/doctors" class="mobile-menu-item">Doctors</NuxtLink>
        <NuxtLink to="/about" class="mobile-menu-item">About</NuxtLink>
        <NuxtLink to="/contact" class="mobile-menu-item">Contact</NuxtLink>
        <div>
          <button class="btns_signin" @click="openSignInModal">Sign In</button>
          <button class="btns_signin" @click="openSignUpModal">Sign Up</button>
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
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
  
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    height: 32px;
    width: 32px;
    color: #3b82f6;
  }
  
  .logo-text {
    margin-left: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .menu-item {
    color: #4b5563;
    margin-left: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .menu-item:hover {
    color: #3b82f6;
  }
  
  .menu-item.router-link-active {
    color: #3b82f6;
    font-weight: 600;
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .menu-toggle {
    color: #4b5563;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .menu-toggle:hover {
    color: #3b82f6;
  }
  
  .menu-icon {
    height: 24px;
    width: 24px;
  }
  
  /* Mobile Menu Styles */
  .mobile-menu {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    border-top: 1px solid #e5e7eb;
  }
  
  .mobile-menu-item {
    color: #4b5563;
    padding: 0.75rem 0;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .mobile-menu-item:hover {
    color: #3b82f6;
  }
  
  .mobile-menu-item.router-link-active {
    color: #3b82f6;
    font-weight: 600;
  }
  
  .btns_signin {
    margin: 0px 10px;
    padding: 8px 30px;
    cursor: pointer;
    background: #3073f0;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
  }
  
  @media (min-width: 768px) {
    .desktop-menu {
      display: flex;
    }
    
    .mobile-menu-button {
      display: none;
    }
    
    .mobile-menu {
      display: none;
    }
  }
  </style>