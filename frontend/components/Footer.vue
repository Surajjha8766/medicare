<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-heading">MediCare+</h3>
            <p class="footer-text">Providing quality healthcare services with compassion and excellence.</p>
          </div>
          <div class="footer-column">
            <h4 class="footer-subheading">Quick Links</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
              <li><NuxtLink to="/services" class="footer-link">Services</NuxtLink></li>
              <li><NuxtLink to="/doctors" class="footer-link">Doctors</NuxtLink></li>
              <li><NuxtLink to="/appointment" class="footer-link">Appointment</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-subheading">Services</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Emergency Care</a></li>
              <li><a href="#" class="footer-link">Health Checkup</a></li>
              <li><a href="#" class="footer-link">Diagnostics</a></li>
              <li><a href="#" class="footer-link">Pharmacy</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-subheading">Contact Us</h4>
            <address class="footer-address">
              123 Medical Street<br>
              Health City, HC 12345<br>
              Phone: (123) 456-7890<br>
              Email: info@medicare.com
            </address>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">&copy; {{ new Date().getFullYear() }} MediCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
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
  
  @media (min-width: 768px) {
    .footer-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  </style>