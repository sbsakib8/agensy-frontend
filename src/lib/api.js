import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('🔴 API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      data: error.response?.data
    });

    // Enhance error object with user-friendly messages
    if (error.response) {
      error.userMessage = error.response.data?.message || 'Server error occurred';
    } else if (error.request) {
      error.userMessage = 'Cannot connect to server. Please check if the backend is running.';
    } else {
      error.userMessage = error.message || 'An unexpected error occurred';
    }

    return Promise.reject(error);
  }
);

const normalizeUser = (user) => {
  // Return backend data as-is, only add uid for consistency
  console.log('📦 Backend user data:', user);
  return {
    ...user,
    uid: user.firebaseUid || user.uid || user._id, // Just add uid alias
  };
};

export const authApi = {
  registerWithEmail: async (data) => {
    try {
      const response = await api.post('register-cookie', data);
      return response.data;
    } catch (error) {
      console.error('❌ Register with email failed:', error.userMessage);
      throw error;
    }
  },

  loginWithEmail: async (data) => {
    try {
      const response = await api.post('login-cookie', data);
      return response.data;
    } catch (error) {
      console.error('❌ Login with email failed:', error.userMessage);
      throw error;
    }
  },

  loginWithGoogle: async (idToken) => {
    try {
      const response = await api.post('google-login', { idToken });
      return response.data;
    } catch (error) {
      console.error('❌ Google login failed:', error.userMessage);
      throw error;
    }
  },

  registerWithGoogle: async (idToken) => {
    try {
      const response = await api.post('google-register', { idToken });
      return response.data;
    } catch (error) {
      console.error('❌ Google register failed:', error.userMessage);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('logout');
      return response.data;
    } catch (error) {
      return { ok: true };
    }
  },

  getProfile: async (uid) => {
    const response = await api.get(`users/${uid}`);
    return normalizeUser(response.data);
  },

  getProfileWithToken: async (idToken) => {
    const response = await api.get('profile', {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return normalizeUser(response.data);
  },

  forgotPassword: async (email) => {
    try {
      const response = await api.post('forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const response = await api.post('reset-password', { token, newPassword });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export const userApi = {
  // Get all users
  getAllUsers: async () => {
    console.log('📡 Fetching all users from: /users');
    const response = await api.get('users');
    console.log('📦 Raw response:', response.data);
    
    // Handle different response structures
    const usersData = response.data.data || response.data.users || response.data;
    const usersArray = Array.isArray(usersData) ? usersData : [];
    console.log('✅ Users array:', usersArray.length, 'users');
    
    return usersArray.map(normalizeUser);
  },

  // Get all users with status
  getAllUsersWithStatus: async () => {
    console.log('📡 Fetching all users with status from: /users/status/all');
    const response = await api.get('users/status/all');
    console.log('📦 Users with status response:', response.data);
    return response.data;
  },

  // Get all users with role
  getAllUsersWithRole: async () => {
    console.log('📡 Fetching all users with role from: /users/role/all');
    const response = await api.get('users/role/all');
    console.log('📦 Users with role response:', response.data);
    return response.data;
  },

  // Get single user by ID
  getUser: async (uid) => {
    console.log('📡 Fetching user from: /users/' + uid);
    const response = await api.get(`users/${uid}`);
    console.log('📦 Raw response from backend:', response.data);
    
    // Extract the actual user data from { success: true, data: {...} }
    const userData = response.data.data || response.data;
    console.log('👤 Extracted user data:', userData);
    
    return normalizeUser(userData);
  },

  // Get user status
  getUserStatus: async (uid) => {
    console.log('📡 Fetching user status from: /users/' + uid + '/status');
    const response = await api.get(`users/${uid}/status`);
    console.log('📦 User status response:', response.data);
    return response.data;
  },

  // Get user role
  getUserRole: async (uid) => {
    console.log('📡 Fetching user role from: /users/' + uid + '/role');
    const response = await api.get(`users/${uid}/role`);
    console.log('📦 User role response:', response.data);
    return response.data;
  },

  // Update user
  updateUser: async (uid, data) => {
    console.log('📡 Updating user at: /users/' + uid);
    console.log('📤 Update data:', data);
    const response = await api.put(`users/${uid}`, data);
    console.log('📦 Update response from backend:', response.data);
    
    // Extract the actual user data from { success: true, data: {...} }
    const userData = response.data.data || response.data;
    console.log('👤 Extracted updated user data:', userData);
    
    return normalizeUser(userData);
  },

  // Update user status
  updateUserStatus: async (uid, status) => {
    console.log('📡 Updating user status at: /users/' + uid + '/status');
    console.log('📤 New status:', status);
    const response = await api.patch(`users/${uid}/status`, { status });
    console.log('📦 Status update response:', response.data);
    return response.data;
  },

  // Update user role
  updateUserRole: async (uid, role) => {
    console.log('📡 Updating user role at: /users/' + uid + '/role');
    console.log('📤 New role:', role);
    const response = await api.patch(`users/${uid}/role`, { role });
    console.log('📦 Role update response:', response.data);
    return response.data;
  },

  // Delete user
  deleteUser: async (uid) => {
    console.log('🗑️ Deleting user:', uid);
    const response = await api.delete(`users/${uid}`);
    console.log('📦 Delete response:', response.data);
    return response.data;
  },
};

export const productApi = {
  getAllProducts: async (params) => {
    const queryString = params ? new URLSearchParams(params).toString() : '';
    const response = await api.get(`products-module${queryString ? `?${queryString}` : ''}`);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await api.get(`products-module/${id}`);
    return response.data;
  },

  createProduct: async (uid, data) => {
    console.log('📤 Creating product with UID:', uid);
    const response = await api.post(`products-module/${uid}`, data);
    return response.data;
  },

  updateProduct: async (id, data) => {
    console.log('🔄 Updating product:', id);
    const response = await api.put(`products-module/${id}`, data);
    return response.data;
  },

  deleteProduct: async (id) => {
    console.log('🗑️ Deleting product:', id);
    await api.delete(`products-module/${id}`);
  },
};

export const adminApi = {
  createUser: async (data, adminSecret) => {
    const headers = adminSecret ? { 'x-admin-secret': adminSecret } : {};
    const response = await api.post('create-user', data, { headers });
    return response.data;
  },
};

export const healthCheck = async () => {
  const response = await api.get('health');
  return response.data;
};

export default api;
