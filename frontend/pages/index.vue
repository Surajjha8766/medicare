<template>
    <div class="website-container">  
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Your Health Is Our Top Priority</h1>
              <p class="hero-description">We provide the best healthcare services with our expert doctors and modern facilities.</p>
              <div class="hero-buttons">
                <button class="primary-button">Book Appointment</button>
                <button class="secondary-button">Learn More</button>
              </div>
            </div>
            <div class="hero-image-container">
              <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" alt="Doctor" class="hero-image">
            </div>
          </div>
        </div>
      </div>
  
      <!-- Services Section -->
      <div class="services-section">
        <div class="services-container">
          <div class="section-header">
            <h2 class="section-title">Our Services</h2>
            <p class="section-description">We offer a wide range of medical services to meet your healthcare needs.</p>
          </div>
  
          <div class="services-grid">
            <!-- Service 1 -->
            <div class="service-card">
              <div class="service-icon-container">
                <svg class="service-icon" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 class="service-title">Emergency Care</h3>
              <p class="service-description">24/7 emergency services with quick response and expert care.</p>
            </div>
  
            <!-- Service 2 -->
            <div class="service-card">
              <div class="service-icon-container">
                <svg class="service-icon" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="service-title">Health Checkup</h3>
              <p class="service-description">Comprehensive health checkup packages for all age groups.</p>
            </div>
  
            <!-- Service 3 -->
            <div class="service-card">
              <div class="service-icon-container">
                <svg class="service-icon" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="service-title">Expert Doctors</h3>
              <p class="service-description">Consult with our team of experienced and specialized doctors.</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-container">
          <h2 class="cta-title">Need a Doctor for Check-up?</h2>
          <p class="cta-description">Book an appointment with our specialists today.</p>
          <button class="cta-button">Book Appointment Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
   
  }
  </script>
  
  <style scoped>
  /* Base Styles */
  .website-container {
    min-height: 100vh;
    background-color: #f9fafb;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  /* Navigation Styles */
  .navbar {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
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
  
  .active-menu-item {
    color: #3b82f6;
    margin-left: 1.5rem;
    font-weight: 600;
    text-decoration: none;
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
  
  /* Hero Section Styles */
  .hero-section {
    background: linear-gradient(to right, #3b82f6, #2563eb);
    color: white;
  }
  
  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 1rem;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
  }
  
  .hero-text {
    margin-bottom: 2.5rem;
  }
  
  .hero-title {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    max-width: 600px;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .primary-button {
    background-color: white;
    color: #2563eb;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .primary-button:hover {
    background-color: #f3f4f6;
  }
  
  .secondary-button {
    background: transparent;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .secondary-button:hover {
    background-color: white;
    color: #2563eb;
  }
  
  .hero-image-container {
    display: flex;
    justify-content: center;
  }
  
  .hero-image {
    height: 320px;
    object-fit: contain;
  }
  
  /* Services Section Styles */
  .services-section {
    padding: 4rem 0;
  }
  
  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .section-description {
    color: #4b5563;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .services-grid {
    display: grid;
    gap: 1.5rem;
  }
  
  .service-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s;
  }
  
  .service-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }
  
  .service-icon-container {
    background-color: #eff6ff;
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .service-icon {
    height: 32px;
    width: 32px;
    color: #3b82f6;
  }
  
  .service-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }
  
  .service-description {
    color: #4b5563;
  }
  
  /* CTA Section Styles */
  .cta-section {
    background-color: #3b82f6;
    color: white;
    padding: 3rem 0;
  }
  
  .cta-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }
  
  .cta-title {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .cta-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background-color: white;
    color: #3b82f6;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #f3f4f6;
  }
  
  /* Footer Styles */
  .footer {
    background-color: #1f2937;
    color: white;
    padding: 3rem 0 0;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-grid {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .footer-column {
    margin-bottom: 1.5rem;
  }
  
  .footer-heading {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .footer-text {
    color: #9ca3af;
    line-height: 1.5;
  }
  
  .footer-subheading {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-link {
    color: #9ca3af;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: white;
  }
  
  .footer-address {
    color: #9ca3af;
    font-style: normal;
    line-height: 1.5;
  }
  
  .footer-bottom {
    border-top: 1px solid #374151;
    padding: 1.5rem 0;
    text-align: center;
  }
  
  .copyright {
    color: #9ca3af;
    font-size: 0.875rem;
  }
  
  /* Responsive Styles */
  @media (min-width: 768px) {
    .desktop-menu {
      display: flex;
    }
    
    .mobile-menu-button {
      display: none;
    }
    
    .hero-content {
      flex-direction: row;
      align-items: center;
    }
    
    .hero-text {
      flex: 1;
      margin-bottom: 0;
      padding-right: 2rem;
    }
    
    .hero-image-container {
      flex: 1;
    }
    
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .footer-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .section-title {
      font-size: 2.25rem;
    }
  }
  </style>