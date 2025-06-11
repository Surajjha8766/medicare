<template>
  <div class="website-container">
    <main class="contact-page">
      <!-- Hero Section -->
      <div class="page-hero">
        <div class="hero-container">
          <h1 class="hero-title">Contact Us</h1>
          <p class="hero-description">We're here to help and answer any questions you may have</p>
        </div>
      </div>

      <!-- Contact Content -->
      <div class="contact-section">
        <div class="contact-container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-container">
              <h2 class="section-title">Send Us a Message</h2>
              <form class="contact-form" @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" id="name" v-model="formData.name" class="form-input" placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" id="email" v-model="formData.email" class="form-input" placeholder="john@example.com">
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="tel" id="phone" v-model="formData.contact" class="form-input" placeholder="+1 (555) 123-4567">
                </div>
                <div class="form-group">
                  <label for="subject" class="form-label">Subject</label>
                  <select id="subject" class="form-input" v-model="formData.subject">
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea id="message" rows="5" v-model="formData.message" class="form-input" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" class="submit-button">Send Message</button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info-container">
              <h2 class="section-title">Our Contact Information</h2>
              <div class="contact-info">
                <div class="info-item">
                  <div class="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="info-content">
                    <h3 class="info-title">Address</h3>
                    <p class="info-text">123 Medical Center Drive<br>Healthville, HV 12345</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="info-content">
                    <h3 class="info-title">Phone</h3>
                    <p class="info-text">Main: (123) 456-7890<br>Emergency: (123) 456-7891</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="info-content">
                    <h3 class="info-title">Email</h3>
                    <p class="info-text">info@medicalcenter.com<br>support@medicalcenter.com</p>
                  </div>
                </div>
              </div>

              <div class="hours-section">
                <h3 class="hours-title">Operating Hours</h3>
                <ul class="hours-list">
                  <li class="hours-item">
                    <span class="hours-day">Monday - Friday</span>
                    <span class="hours-time">8:00 AM - 8:00 PM</span>
                  </li>
                  <li class="hours-item">
                    <span class="hours-day">Saturday</span>
                    <span class="hours-time">9:00 AM - 5:00 PM</span>
                  </li>
                  <li class="hours-item">
                    <span class="hours-day">Sunday</span>
                    <span class="hours-time">Emergency Only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155732912346!2d-73.98784492453736!3d40.74844097138989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623866480699!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
          class="map-iframe">
        </iframe>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      formData: {
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: '',
      }
    }
  },

  methods: {
    async submitForm(){
      try {
        const response = await axios.post('http://localhost:5000/api/postData', this.formData);
        console.log(response.data);
        alert("Query Submitted");
         this.formData = {
      name: '',
      email: '',
      contact: '',
      subject: '',
      message: ''
    };
      } catch (error) {
        console.log('Failed to submit query');
        alert("Failed");
      }
    }
  }
}
// Any necessary script logic can go here
</script>

<style scoped>
/* Shared styles from services page */
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

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

/* Contact Section Styles */
.contact-section {
  padding: 4rem 0;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-grid {
  display: grid;
  gap: 3rem;
}

.contact-form-container {
  background-color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

textarea.form-input {
  min-height: 120px;
}

.submit-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-button:hover {
  background-color: #2563eb;
}

.contact-info-container {
  background-color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contact-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #eff6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.info-text {
  color: #4b5563;
  line-height: 1.5;
}

.hours-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.hours-list {
  list-style: none;
  padding: 0;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.hours-item:last-child {
  border-bottom: none;
}

.hours-day {
  color: #374151;
  font-weight: 500;
}

.hours-time {
  color: #4b5563;
}

.map-section {
  margin-top: 2rem;
}

.map-iframe {
  filter: grayscale(20%);
}

/* Responsive Styles */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr 1fr;
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