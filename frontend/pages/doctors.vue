<template>
    <div class="website-container">
      <main class="doctors-page">
        <!-- Hero Section -->
        <div class="page-hero">
          <div class="hero-container">
            <h1 class="hero-title">Our Doctors</h1>
            <p class="hero-description">Find and connect with specialized healthcare professionals</p>
          </div>
        </div>
  
        <!-- Doctors Section -->
        <div class="all-doctors-section">
          <div class="doctors-container">
            <!-- Search and Filter -->
            <div class="doctors-filter">
              <div class="search-box">
                <input type="text" placeholder="Search doctors by name, specialty...">
                <button class="search-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div class="filter-options">
                <select>
                  <option value="">All Specialties</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="neurology">Neurology</option>
                </select>
                <select>
                  <option value="">All Locations</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
            </div>
  
            <!-- Category Tabs -->
            <div class="category-tabs">
              <button class="tab active">All Doctors</button>
              <button class="tab">Cardiologists</button>
              <button class="tab">Dermatologists</button>
              <button class="tab">Pediatricians</button>
              <button class="tab">Neurologists</button>
              <button class="tab">General Physicians</button>
            </div>
  
            <!-- Doctors Grid -->
            <div class="doctors-grid">
              <!-- Doctor Card 1 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" alt="Dr. Sharma">
                  <div class="badge">Available Today</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Rajesh Sharma</h3>
                  <p class="doctor-specialty">Cardiologist</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="rating">4.2 (128 reviews)</span>
                  </div>
                  <p class="doctor-hospital">Apollo Hospital, Delhi</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Doctor Card 2 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Dr. Patel">
                  <div class="badge">Available Today</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Priya Patel</h3>
                  <p class="doctor-specialty">Dermatologist</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★★</span>
                    <span class="rating">4.8 (215 reviews)</span>
                  </div>
                  <p class="doctor-hospital">Fortis Hospital, Mumbai</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Doctor Card 3 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/portrait-male-doctor-holding-stethoscope_23-2149021178.jpg" alt="Dr. Kumar">
                  <div class="badge">Available Tomorrow</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Amit Kumar</h3>
                  <p class="doctor-specialty">Pediatrician</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="rating">4.5 (176 reviews)</span>
                  </div>
                  <p class="doctor-hospital">Max Hospital, Bangalore</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Doctor Card 4 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg" alt="Dr. Gupta">
                  <div class="badge">Available Today</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Neha Gupta</h3>
                  <p class="doctor-specialty">Neurologist</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★★</span>
                    <span class="rating">4.9 (342 reviews)</span>
                  </div>
                  <p class="doctor-hospital">AIIMS, Delhi</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Doctor Card 5 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" alt="Dr. Verma">
                  <div class="badge">Available Today</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Sanjay Verma</h3>
                  <p class="doctor-specialty">General Physician</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="rating">4.3 (98 reviews)</span>
                  </div>
                  <p class="doctor-hospital">Columbia Asia, Bangalore</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Doctor Card 6 -->
              <div class="doctor-card">
                <div class="doctor-image">
                  <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Dr. Joshi">
                  <div class="badge">Available Tomorrow</div>
                </div>
                <div class="doctor-info">
                  <h3 class="doctor-name">Dr. Ananya Joshi</h3>
                  <p class="doctor-specialty">Cardiologist</p>
                  <div class="doctor-rating">
                    <span class="stars">★★★★★</span>
                    <span class="rating">4.7 (204 reviews)</span>
                  </div>
                  <p class="doctor-hospital">Manipal Hospital, Mumbai</p>
                  <div class="doctor-actions">
                    <NuxtLink to="/appointment" class="book-button">Book Appointment</NuxtLink>
                    <button class="message-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  // You can add any necessary script logic here
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
  
  .doctors-page {
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
  
  /* Doctors Section */
  .all-doctors-section {
    padding: 4rem 0;
  }
  
  .doctors-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Filter Section */
  .doctors-filter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .search-box {
    position: relative;
    max-width: 600px;
  }
  
  .search-box input {
    width: 100%;
    padding: 0.75rem 1rem;
    padding-right: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
    font-size: 1rem;
  }
  
  .search-button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 0 1rem;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
  }
  
  .filter-options {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .filter-options select {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
    background-color: white;
    font-size: 0.9rem;
  }
  
  /* Category Tabs */
  .category-tabs {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  
  .tab {
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 1px solid #d1d5db;
    background-color: white;
    color: #4b5563;
    font-size: 0.9rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .tab:hover {
    background-color: #f3f4f6;
  }
  
  .tab.active {
    background-color: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }
  
  /* Doctors Grid */
  .doctors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .doctor-card {
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .doctor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .doctor-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .doctor-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #10b981;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .doctor-info {
    padding: 1.5rem;
  }
  
  .doctor-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }
  
  .doctor-specialty {
    color: #3b82f6;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  
  .doctor-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  .stars {
    color: #f59e0b;
    font-size: 0.9rem;
  }
  
  .rating {
    color: #6b7280;
    font-size: 0.8rem;
  }
  
  .doctor-hospital {
    color: #4b5563;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  .doctor-actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .book-button {
    flex: 1;
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .book-button:hover {
    background-color: #2563eb;
  }
  
  .message-button {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e5e7eb;
    color: #4b5563;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .message-button:hover {
    background-color: #d1d5db;
  }
  
  .message-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  /* Responsive Styles */
  @media (min-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .doctors-filter {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    .search-box {
      width: 400px;
    }
    
    .doctors-grid {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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