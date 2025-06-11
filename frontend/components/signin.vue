<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="modal-header">
        <h2 class="modal-title">Sign in to your account</h2>
        <button class="modal-close-btn" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <form class="modal-form" @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            v-model="doctor.email"
            type="email"
            required
            class="form-input"
            placeholder="Email address"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="doctor.password"
            type="password"
            required
            class="form-input"
            placeholder="Password"
          />
        </div>

        <div class="form-options">
          <div class="remember-me">
            <input
              id="remember-me"
              type="checkbox"
              class="remember-checkbox"
            />
            <label for="remember-me" class="remember-label">
              Remember me
            </label>
          </div>

          <a href="#" class="forgot-password">
            Forgot your password?
          </a>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          <span v-if="!loading">Sign in</span>
          <span v-else>Signing in...</span>
        </button>

        <div class="signup-link">
          Don't have an account? 
          <a href="#" class="signup-text" @click.prevent="$emit('showSignup')">
            Sign up
          </a>
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth'
export default {
  data() {
    return {
      doctor: {
        email: '',
        password: ''
      },
      loading: false,
      error: null
    }
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = false;

      try {
        const response = await axios.post('http://localhost:5000/api/user/signin', this.doctor , {withCredentials: true});
        const auth = useAuthStore()
        auth.setUser(response.data.user);
        auth.setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.$emit('close');
        this.$router.push('/dashboard')
      } catch (err) {
        console.error('Signin error:', err.response);
        this.error = err.response?.data?.message || 'Login failed';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal container */
.modal-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 470px;
  overflow: hidden;
}

/* Modal header */
.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  text-align: center;
  margin: 0;
}

.modal-close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #6b7280;
  transition: color 0.2s;
}

.modal-close-btn:hover {
  color: #111827;
}

/* Modal form */
.modal-form {
  padding: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Form options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-checkbox {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: #3b82f6;
}

.remember-label {
  font-size: 0.875rem;
  color: #374151;
}

.forgot-password {
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-password:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* Submit button */
.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 16px;
}

.submit-btn:hover {
  background-color: #2563eb;
}

.submit-btn:disabled {
  background-color: #93c5fd;
  cursor: not-allowed;
}

/* Sign up link */
.signup-link {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.signup-text {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.signup-text:hover {
  color: #2563eb;
  text-decoration: underline;
}

/* Error message */
.error-message {
  margin-top: 16px;
  padding: 10px;
  background-color: #fee2e2;
  color: #b91c1c;
  border-radius: 6px;
  font-size: 0.875rem;
  text-align: center;
}
</style>