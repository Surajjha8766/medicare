<template>
    <div class="website-container">

      
      <main class="services-page">
        <!-- Hero Section -->
        <div class="page-hero">
          <div class="hero-container">
            <h1 class="hero-title">Our Medical Services</h1>
            <p class="hero-description">Comprehensive healthcare solutions tailored to your needs</p>
          </div>
        </div>
  
        <!-- All Services Section -->
        <div class="all-services-section">
          <div class="services-container">
            <div class="section-intro">
              <h2 class="section-title">Specialized Healthcare Services</h2>
              <p class="section-description">We offer a wide range of medical services provided by expert professionals using state-of-the-art technology.</p>
            </div>
  
            <div class="services-list">
              <!-- Service 1 -->
              <div class="service-detail">
                <div class="service-image">
                  <img src="https://img.freepik.com/free-vector/emergency-medical-service-illustration_23-2148543791.jpg" alt="Emergency Care">
                </div>
                <div class="service-content">
                  <h3 class="service-title">Emergency Care</h3>
                  <p class="service-description">24/7 emergency services with rapid response teams and fully equipped emergency rooms to handle critical cases.</p>
                  <ul class="service-features">
                    <li>Trauma care</li>
                    <li>Cardiac emergencies</li>
                    <li>Pediatric emergencies</li>
                    <li>Stroke management</li>
                  </ul>
                  <NuxtLink to="/appointment" class="service-button">Book Now</NuxtLink>
                </div>
              </div>
  
              <!-- Service 2 -->
              <div class="service-detail">
                <div class="service-image">
                  <img src="https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-8234.jpg" alt="Health Checkup">
                </div>
                <div class="service-content">
                  <h3 class="service-title">Comprehensive Health Checkup</h3>
                  <p class="service-description">Preventive healthcare packages designed for early detection of health issues and wellness maintenance.</p>
                  <ul class="service-features">
                    <li>Executive health checkup</li>
                    <li>Women's wellness package</li>
                    <li>Senior citizen package</li>
                    <li>Diabetes screening</li>
                  </ul>
                  <NuxtLink to="/appointment" class="service-button">Book Now</NuxtLink>
                </div>
              </div>
  
              <!-- Service 3 -->
              <div class="service-detail">
                <div class="service-image">
                  <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="Diagnostics">
                </div>
                <div class="service-content">
                  <h3 class="service-title">Advanced Diagnostics</h3>
                  <p class="service-description">Cutting-edge diagnostic services for accurate and timely detection of medical conditions.</p>
                  <ul class="service-features">
                    <li>MRI & CT scans</li>
                    <li>Digital X-rays</li>
                    <li>Ultrasound</li>
                    <li>Pathology lab</li>
                  </ul>
                  <NuxtLink to="/appointment" class="service-button">Book Now</NuxtLink>
                </div>
              </div>
  
              <!-- Service 4 -->
              <div class="service-detail">
                <div class="service-image">
                  <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg" alt="Cardiology">
                </div>
                <div class="service-content">
                  <h3 class="service-title">Cardiology Services</h3>
                  <p class="service-description">Comprehensive heart care with advanced diagnostic and therapeutic procedures.</p>
                  <ul class="service-features">
                    <li>Echocardiography</li>
                    <li>Stress tests</li>
                    <li>Angioplasty</li>
                    <li>Pacemaker implantation</li>
                  </ul>
                  <NuxtLink to="/appointment" class="service-button">Book Now</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- CTA Section -->
        <div class="services-cta">
          <div class="cta-container">
            <h2 class="cta-title">Can't Find What You're Looking For?</h2>
            <p class="cta-description">Contact us to learn more about our specialized services and treatment options.</p>
            <div class="cta-buttons">
              <NuxtLink to="/contact" class="cta-button">Contact Us</NuxtLink>
              <NuxtLink to="/doctors" class="cta-button-outline">Our Doctors</NuxtLink>
            </div>
          </div>
        </div>
      </main>

    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Base Styles */
  .website-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f9fafb;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .services-page {
    flex: 1;
  }
  
  /* Page Hero Styles */
  .page-hero {
    background: linear-gradient(rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9)), url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_53876-119177.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 6rem 0;
    text-align: center;
  }
  
  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* All Services Section */
  .all-services-section {
    padding: 4rem 0;
  }
  
  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section-intro {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .section-description {
    color: #4b5563;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.125rem;
  }
  
  .services-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .service-detail {
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .service-detail:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .service-image {
    height: 250px;
    overflow: hidden;
  }
  
  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .service-content {
    padding: 2rem;
  }
  
  .service-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .service-description {
    color: #4b5563;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .service-features {
    color: #4b5563;
    margin-bottom: 2rem;
    padding-left: 1.25rem;
  }
  
  .service-features li {
    margin-bottom: 0.5rem;
    position: relative;
  }
  
  .service-features li::before {
    content: "•";
    color: #3b82f6;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  
  .service-button {
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .service-button:hover {
    background-color: #2563eb;
  }
  
  /* CTA Section */
  .services-cta {
    background-color: #3b82f6;
    color: white;
    padding: 4rem 0;
  }
  
  .cta-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }
  
  .cta-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .cta-description {
    font-size: 1.125rem;
    max-width: 700px;
    margin: 0 auto 2rem;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .cta-button {
    background-color: white;
    color: #3b82f6;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #f3f4f6;
  }
  
  .cta-button-outline {
    background-color: transparent;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    border: 2px solid white;
    transition: background-color 0.3s;
  }
  
  .cta-button-outline:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Responsive Styles */
  @media (min-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .service-detail {
      display: flex;
      align-items: center;
    }
    
    .service-image {
      width: 40%;
      height: auto;
    }
    
    .service-content {
      width: 60%;
      padding: 2.5rem;
    }
  }
  
  @media (min-width: 1024px) {
    .page-hero {
      padding: 8rem 0;
    }
    
    .hero-title {
      font-size: 3.5rem;
    }
  }
  </style>