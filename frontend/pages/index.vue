<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
 

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Your Health Is Our Top Priority</h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-8">We provide the best healthcare services with our expert doctors and modern facilities.</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">Book Appointment</button>
              <button class="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold text-lg">Learn More</button>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" alt="Doctor" class="w-full max-w-md">
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="bg-blue-50 p-6 rounded-xl">
            <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl">
            <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600 font-medium">Expert Doctors</div>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl">
            <div class="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div class="text-gray-600 font-medium">Happy Patients</div>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl">
            <div class="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div class="text-gray-600 font-medium">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">We offer a wide range of medical services to meet your healthcare needs.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Emergency Care</h3>
            <p class="text-gray-600">24/7 emergency services with quick response and expert care for critical situations.</p>
          </div>

          <!-- Service 2 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Health Checkup</h3>
            <p class="text-gray-600">Comprehensive health checkup packages tailored for all age groups and needs.</p>
          </div>

          <!-- Service 3 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Expert Doctors</h3>
            <p class="text-gray-600">Consult with our team of experienced and specialized doctors across various fields.</p>
          </div>

          <!-- Service 4 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Online Appointment</h3>
            <p class="text-gray-600">Easy online booking system for hassle-free doctor appointments anytime.</p>
          </div>

          <!-- Service 5 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Preventive Care</h3>
            <p class="text-gray-600">Proactive health management to prevent diseases before they occur.</p>
          </div>

          <!-- Service 6 -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Telemedicine</h3>
            <p class="text-gray-600">Virtual consultations with doctors from the comfort of your home.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Medicare+?</h2>
            <p class="text-xl text-gray-600 mb-8">We combine quality medical services with compassionate care to deliver exceptional healthcare experiences.</p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Board Certified Specialists</h3>
                  <p class="mt-1 text-gray-600">Our doctors are highly qualified and experienced in their respective fields.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Advanced Technology</h3>
                  <p class="mt-1 text-gray-600">State-of-the-art equipment for accurate diagnosis and effective treatment.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-medium text-gray-900">Patient-Centered Care</h3>
                  <p class="mt-1 text-gray-600">Personalized treatment plans tailored to your unique health needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <div class="relative rounded-xl overflow-hidden shadow-lg">
              <img src="https://img.freepik.com/free-photo/medium-shot-doctor-with-co-workers_23-2148965590.jpg" alt="Doctor with patient" class="w-full h-auto">
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 class="text-xl font-bold text-white">Compassionate Care You Can Trust</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our satisfied patients about their experiences with Medicare+.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"The care I received at Medicare+ was exceptional. The doctors took time to listen to my concerns and explained everything clearly. Highly recommend!"</p>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Chen">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Michael Chen</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"The online appointment system is so convenient. I was able to book a same-day appointment and the doctor was very thorough in the examination."</p>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Rodriguez">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Emily Rodriguez</h3>
                <div class="flex text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"The staff at Medicare+ made me feel comfortable and cared for during my entire treatment. The facilities are clean and modern. Five stars!"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctors Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Our team of experienced doctors is dedicated to providing you with the best care.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Doctor 1 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" alt="Dr. Sarah Williams" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Williams</h3>
              <p class="text-blue-600 font-medium mb-4">Cardiologist</p>
              <p class="text-gray-600 mb-4">Specializing in heart health and cardiovascular diseases with over 15 years of experience.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">View Profile →</button>
            </div>
          </div>
          
          <!-- Doctor 2 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" alt="Dr. Michael Johnson" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Michael Johnson</h3>
              <p class="text-blue-600 font-medium mb-4">Neurologist</p>
              <p class="text-gray-600 mb-4">Expert in treating disorders of the nervous system with a patient-centered approach.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">View Profile →</button>
            </div>
          </div>
          
          <!-- Doctor 3 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Dr. Emily Chen" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Emily Chen</h3>
              <p class="text-blue-600 font-medium mb-4">Pediatrician</p>
              <p class="text-gray-600 mb-4">Dedicated to the health and well-being of children from birth through adolescence.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">View Profile →</button>
            </div>
          </div>
          
          <!-- Doctor 4 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/mature-doctor-with-confident-expression_1098-2006.jpg" alt="Dr. Robert Davis" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Robert Davis</h3>
              <p class="text-blue-600 font-medium mb-4">Orthopedic Surgeon</p>
              <p class="text-gray-600 mb-4">Specializing in musculoskeletal system injuries and disorders with surgical expertise.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">View Profile →</button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg">View All Doctors</button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Need a Doctor for Check-up?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Book an appointment with our specialists today and take the first step towards better health.</p>
        <button class="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">Book Appointment Now</button>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Health Tips & Articles</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Stay informed with our latest health news and wellness tips.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/young-woman-doing-yoga-mat_23-2148721330.jpg" alt="Woman doing yoga" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>May 15, 2023</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">5 Daily Habits for Better Mental Health</h3>
              <p class="text-gray-600 mb-4">Simple practices you can incorporate into your daily routine to improve your mental wellbeing.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">Read More →</button>
            </div>
          </div>
          
          <!-- Article 2 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/fresh-fruits-vegetables_144627-25858.jpg" alt="Fresh fruits and vegetables" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>June 2, 2023</span>
                <span class="mx-2">•</span>
                <span>7 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Nutrition Guide: Eating for Immunity</h3>
              <p class="text-gray-600 mb-4">Discover the best foods to boost your immune system and stay healthy year-round.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">Read More →</button>
            </div>
          </div>
          
          <!-- Article 3 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-photo/young-sporty-man-running-park_1303-17008.jpg" alt="Man running in park" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>June 10, 2023</span>
                <span class="mx-2">•</span>
                <span>4 min read</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">The Benefits of Regular Exercise</h3>
              <p class="text-gray-600 mb-4">How consistent physical activity can transform your health and quality of life.</p>
              <button class="text-blue-600 font-medium hover:text-blue-800 transition-colors">Read More →</button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button class="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg">View All Articles</button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 md:py-24 bg-blue-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Health Tips</h2>
        <p class="text-xl text-blue-100 mb-8">Subscribe to our newsletter for the latest health news, wellness tips, and special offers.</p>
        
        <div class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Enter your email" class="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900">
          <button class="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold">Subscribe</button>
        </div>
        
        <p class="text-sm text-blue-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>


    <!-- Modals -->
    <SignInModal v-if="showSignInModal" @close="closeModals" />
    <SignUpModal v-if="showSignUpModal" @close="closeModals" />
  </div>
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

<style>
/* Custom styles can be added here if needed */
</style>