<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section with Animated Gradient -->
    <section class="relative bg-gradient-to-br from-blue-500 to-indigo-700 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/low-poly-white-background_1048-6711.jpg')] bg-cover opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="800">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Advanced Healthcare</span>
              <br>For Everyone
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-8">Experience world-class medical care with our expert team and cutting-edge technology.</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 font-bold text-lg shadow-lg"
                data-aos="fade-up" data-aos-delay="200"
              >
                Book Appointment
              </button>
              <button 
                class="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-1 font-bold text-lg shadow-lg"
                data-aos="fade-up" data-aos-delay="300"
              >
                Virtual Consultation
              </button>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="800">
            <img src="https://img.freepik.com/free-vector/medical-team-concept-illustration_114360-1517.jpg" 
                 alt="Medical team" 
                 class="w-full max-w-md transform hover:scale-105 transition-transform duration-500">
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
    </section>

    <!-- Stats Section with Floating Animation -->
    <section class="py-12 md:py-16 bg-white -mt-1">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200"
            data-aos="fade-up" data-aos-delay="100"
          >
            <div class="text-4xl font-bold text-blue-600 mb-2 animate-pulse">10+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200"
            data-aos="fade-up" data-aos-delay="200"
          >
            <div class="text-4xl font-bold text-blue-600 mb-2 animate-pulse">50+</div>
            <div class="text-gray-600 font-medium">Expert Doctors</div>
          </div>
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200"
            data-aos="fade-up" data-aos-delay="300"
          >
            <div class="text-4xl font-bold text-blue-600 mb-2 animate-pulse">10K+</div>
            <div class="text-gray-600 font-medium">Happy Patients</div>
          </div>
          <div 
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-200"
            data-aos="fade-up" data-aos-delay="400"
          >
            <div class="text-4xl font-bold text-blue-600 mb-2 animate-pulse">24/7</div>
            <div class="text-gray-600 font-medium">Emergency Care</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section with 3D Card Effect -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare solutions tailored to your needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="100"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Emergency Care</h3>
            <p class="text-gray-600">Immediate medical attention with our 24/7 emergency services and rapid response team.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Service 2 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="200"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Precision Diagnostics</h3>
            <p class="text-gray-600">Advanced imaging and laboratory tests for accurate diagnosis and treatment planning.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Service 3 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="300"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Specialist Consultations</h3>
            <p class="text-gray-600">Access to leading specialists across various medical fields for comprehensive care.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Service 4 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="100"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Digital Health</h3>
            <p class="text-gray-600">Seamless online booking, telemedicine, and health records at your fingertips.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Service 5 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="200"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Preventive Care</h3>
            <p class="text-gray-600">Comprehensive wellness programs to maintain health and prevent disease.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <!-- Service 6 -->
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            data-aos="zoom-in" data-aos-delay="300"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Rehabilitation</h3>
            <p class="text-gray-600">Personalized recovery programs to restore function and improve quality of life.</p>
            <button class="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
              Learn more <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with Parallax Effect -->
    <section class="relative py-16 md:py-24 bg-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg')] bg-cover opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12" data-aos="fade-right">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Healthcare Center?</h2>
            <p class="text-xl text-gray-600 mb-8">We combine clinical excellence with compassionate care to deliver exceptional health outcomes.</p>
            
            <div class="space-y-6">
              <div class="flex items-start" data-aos="fade-up" data-aos-delay="100">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Cutting-Edge Technology</h3>
                  <p class="mt-1 text-gray-600">State-of-the-art diagnostic and treatment equipment for precise care.</p>
                </div>
              </div>
              
              <div class="flex items-start" data-aos="fade-up" data-aos-delay="200">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Multidisciplinary Team</h3>
                  <p class="mt-1 text-gray-600">Collaborative approach with specialists across all major medical disciplines.</p>
                </div>
              </div>
              
              <div class="flex items-start" data-aos="fade-up" data-aos-delay="300">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Patient-Centered Care</h3>
                  <p class="mt-1 text-gray-600">Personalized treatment plans focused on your unique needs and goals.</p>
                </div>
              </div>

              <div class="flex items-start" data-aos="fade-up" data-aos-delay="400">
                <div class="flex-shrink-0 mt-1">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Holistic Approach</h3>
                  <p class="mt-1 text-gray-600">Addressing physical, emotional, and social aspects of health and wellness.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2" data-aos="fade-left">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://img.freepik.com/free-photo/medium-shot-nurses-posing_23-2148937828.jpg" 
                   alt="Medical team" 
                   class="w-full h-auto transform hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 class="text-xl font-bold text-white">Compassionate Care in Modern Facilities</h3>
                  <p class="text-blue-100">Our team is dedicated to your health journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctors Section with Hover Effect -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Board-certified physicians dedicated to exceptional patient care</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Doctor 1 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="zoom-in" data-aos-delay="100"
          >
            <div class="relative overflow-hidden h-64">
              <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" 
                   alt="Dr. Sarah Williams" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p class="text-blue-300 font-medium">Cardiology Specialist</p>
                  <p class="text-white">15+ years experience</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Williams</h3>
              <p class="text-blue-600 font-medium mb-4">Cardiologist</p>
              <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Consultation
              </button>
            </div>
          </div>
          
          <!-- Doctor 2 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="zoom-in" data-aos-delay="200"
          >
            <div class="relative overflow-hidden h-64">
              <img src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" 
                   alt="Dr. Michael Johnson" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p class="text-blue-300 font-medium">Neurology Specialist</p>
                  <p class="text-white">12+ years experience</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Michael Johnson</h3>
              <p class="text-blue-600 font-medium mb-4">Neurologist</p>
              <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Consultation
              </button>
            </div>
          </div>
          
          <!-- Doctor 3 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="zoom-in" data-aos-delay="300"
          >
            <div class="relative overflow-hidden h-64">
              <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" 
                   alt="Dr. Emily Chen" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p class="text-blue-300 font-medium">Pediatrics Specialist</p>
                  <p class="text-white">10+ years experience</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Emily Chen</h3>
              <p class="text-blue-600 font-medium mb-4">Pediatrician</p>
              <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Consultation
              </button>
            </div>
          </div>
          
          <!-- Doctor 4 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="zoom-in" data-aos-delay="400"
          >
            <div class="relative overflow-hidden h-64">
              <img src="https://img.freepik.com/free-photo/mature-doctor-with-confident-expression_1098-2006.jpg" 
                   alt="Dr. Robert Davis" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p class="text-blue-300 font-medium">Orthopedics Specialist</p>
                  <p class="text-white">18+ years experience</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Robert Davis</h3>
              <p class="text-blue-600 font-medium mb-4">Orthopedic Surgeon</p>
              <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12" data-aos="fade-up">
          <button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg shadow-lg border-2 border-blue-600">
            View All Specialists
          </button>
        </div>
      </div>
    </section>

    <!-- Appointment CTA Section -->
    <section class="relative py-16 md:py-24 bg-[url('https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg')] bg-cover bg-center">
      <div class="absolute inset-0 bg-blue-800/80"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">Ready to Prioritize Your Health?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Schedule your appointment today and experience healthcare that puts you first.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
          <button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg transform hover:scale-105">
            Book In-Person Visit
          </button>
          <button class="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold text-lg shadow-lg transform hover:scale-105">
            Schedule Virtual Visit
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Section with Card Hover -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Health Insights & News</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Stay informed with our latest health articles and research updates</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="fade-up" data-aos-delay="100"
          >
            <div class="relative overflow-hidden h-48">
              <img src="https://img.freepik.com/free-photo/young-woman-doing-yoga-mat_23-2148721330.jpg" 
                   alt="Woman doing yoga" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Wellness
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>June 15, 2023</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Mindfulness Practices for Stress Reduction</h3>
              <p class="text-gray-600 mb-4">Discover simple techniques to incorporate mindfulness into your daily routine for better stress management.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                Read Article <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          
          <!-- Article 2 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="fade-up" data-aos-delay="200"
          >
            <div class="relative overflow-hidden h-48">
              <img src="https://img.freepik.com/free-photo/fresh-fruits-vegetables_144627-25858.jpg" 
                   alt="Fresh fruits and vegetables" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Nutrition
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>June 22, 2023</span>
                <span class="mx-2">•</span>
                <span>7 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">The Mediterranean Diet: Benefits and Basics</h3>
              <p class="text-gray-600 mb-4">Learn about this heart-healthy eating approach that's backed by extensive scientific research.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                Read Article <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          
          <!-- Article 3 -->
          <div 
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            data-aos="fade-up" data-aos-delay="300"
          >
            <div class="relative overflow-hidden h-48">
              <img src="https://img.freepik.com/free-photo/young-sporty-man-running-park_1303-17008.jpg" 
                   alt="Man running in park" 
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Fitness
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>June 29, 2023</span>
                <span class="mx-2">•</span>
                <span>6 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Exercise for Longevity: What Research Shows</h3>
              <p class="text-gray-600 mb-4">Explore the types and amounts of physical activity most associated with increased lifespan.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                Read Article <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12" data-aos="fade-up">
          <button class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section with Gradient -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Stay Connected with Health Updates</h2>
        <p class="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
          Subscribe to our newsletter for the latest health news, wellness tips, and special offers.
        </p>
        
        <div class="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900 shadow-lg"
            >
            <button class="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-lg">
              Subscribe
            </button>
          </div>
          <p class="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}

/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>