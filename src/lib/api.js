import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

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

export const bannerApi = {
  // Get all banners
  getAllBanners: async () => {
    console.log('📡 Fetching all banners from: /banner/all');
    const response = await api.get('banner/all');
    console.log('📦 Banners response:', response.data);
    return response.data;
  },

  // Get single banner by ID
  getBanner: async (id) => {
    console.log('📡 Fetching banner:', id);
    const response = await api.get(`banner/${id}`);
    console.log('📦 Banner response:', response.data);
    return response.data;
  },

  // Create new banner
  createBanner: async (data) => {
    console.log('📤 Creating banner:', data);
    const response = await api.post('banner', data);
    console.log('✅ Banner created:', response.data);
    return response.data;
  },

  // Update banner
  updateBanner: async (id, data) => {
    console.log('🔄 Updating banner:', id, data);
    const response = await api.put(`banner/${id}`, data);
    console.log('✅ Banner updated:', response.data);
    return response.data;
  },

  // Delete banner
  deleteBanner: async (id) => {
    console.log('🗑️ Deleting banner:', id);
    const response = await api.delete(`banner/${id}`);
    console.log('✅ Banner deleted:', response.data);
    return response.data;
  },
};

export const faqApi = {
  // Get all FAQs
  getAllFAQs: async () => {
    console.log('📡 Fetching all FAQs from: /faqs');
    const response = await api.get('faqs');
    console.log('📦 FAQs response:', response.data);
    return response.data;
  },

  // Get single FAQ by ID
  getFAQ: async (id) => {
    console.log('📡 Fetching FAQ:', id);
    const response = await api.get(`faqs/${id}`);
    console.log('📦 FAQ response:', response.data);
    return response.data;
  },

  // Create new FAQ
  createFAQ: async (data) => {
    console.log('📤 Creating FAQ:', data);
    const response = await api.post('faqs', data);
    console.log('✅ FAQ created:', response.data);
    return response.data;
  },

  // Update FAQ
  updateFAQ: async (id, data) => {
    console.log('🔄 Updating FAQ:', id, data);
    const response = await api.put(`faqs/${id}`, data);
    console.log('✅ FAQ updated:', response.data);
    return response.data;
  },

  // Patch FAQ (partial update)
  patchFAQ: async (id, data) => {
    console.log('🔄 Patching FAQ:', id, data);
    const response = await api.patch(`faqs/${id}`, data);
    console.log('✅ FAQ patched:', response.data);
    return response.data;
  },

  // Delete FAQ
  deleteFAQ: async (id) => {
    console.log('🗑️ Deleting FAQ:', id);
    const response = await api.delete(`faqs/${id}`);
    console.log('✅ FAQ deleted:', response.data);
    return response.data;
  },
};

export const testimonialApi = {
  // Get all testimonials
  getAllTestimonials: async () => {
    console.log('📡 Fetching all testimonials from: /testimonials');
    const response = await api.get('testimonials');
    console.log('📦 Testimonials response:', response.data);
    return response.data;
  },

  // Get single testimonial by ID
  getTestimonial: async (id) => {
    console.log('📡 Fetching testimonial:', id);
    const response = await api.get(`testimonials/${id}`);
    console.log('📦 Testimonial response:', response.data);
    return response.data;
  },

  // Create new testimonial
  createTestimonial: async (data) => {
    console.log('📤 Creating testimonial:', data);
    const response = await api.post('testimonials', data);
    console.log('✅ Testimonial created:', response.data);
    return response.data;
  },

  // Update testimonial (patch)
  updateTestimonial: async (id, data) => {
    console.log('🔄 Updating testimonial:', id, data);
    const response = await api.patch(`testimonials/${id}`, data);
    console.log('✅ Testimonial updated:', response.data);
    return response.data;
  },

  // Delete testimonial
  deleteTestimonial: async (id) => {
    console.log('🗑️ Deleting testimonial:', id);
    const response = await api.delete(`testimonials/${id}`);
    console.log('✅ Testimonial deleted:', response.data);
    return response.data;
  },
};

export const orderApi = {
  // Create new order
  createOrder: async (data) => {
    console.log('📤 Creating order:', data);
    const response = await api.post('orders', data);
    console.log('✅ Order created:', response.data);
    return response.data;
  },

  // Get all orders (admin only)
  getAllOrders: async (params = {}) => {
    console.log('📡 Fetching all orders');
    const response = await api.get('orders', { params });
    console.log('📦 Orders response:', response.data);
    return response.data;
  },

  // Get user's orders
  getUserOrders: async () => {
    console.log('📡 Fetching user orders');
    const response = await api.get('orders/my-orders');
    console.log('📦 User orders:', response.data);
    return response.data;
  },

  // Get order by ID
  getOrderById: async (id) => {
    console.log('📡 Fetching order:', id);
    const response = await api.get(`orders/${id}`);
    console.log('📦 Order response:', response.data);
    return response.data;
  },

  // Get order by order number
  getOrderByOrderNumber: async (orderNumber) => {
    console.log('📡 Fetching order by number:', orderNumber);
    const response = await api.get(`orders/number/${orderNumber}`);
    console.log('📦 Order response:', response.data);
    return response.data;
  },

  // Update order status (admin only)
  updateOrderStatus: async (id, status) => {
    console.log('🔄 Updating order status:', id, status);
    const response = await api.patch(`orders/${id}/status`, { status });
    console.log('✅ Order status updated:', response.data);
    return response.data;
  },

  // Update payment status (admin only)
  updatePaymentStatus: async (id, paymentStatus) => {
    console.log('🔄 Updating payment status:', id, paymentStatus);
    const response = await api.patch(`orders/${id}/payment`, { paymentStatus });
    console.log('✅ Payment status updated:', response.data);
    return response.data;
  },

  // Cancel order
  cancelOrder: async (id) => {
    console.log('❌ Cancelling order:', id);
    const response = await api.patch(`orders/${id}/cancel`);
    console.log('✅ Order cancelled:', response.data);
    return response.data;
  },

  // Update order (admin only)
  updateOrder: async (id, data) => {
    console.log('🔄 Updating order:', id, data);
    const response = await api.put(`orders/${id}`, data);
    console.log('✅ Order updated:', response.data);
    return response.data;
  },

  // Delete order (admin only)
  deleteOrder: async (id) => {
    console.log('🗑️ Deleting order:', id);
    const response = await api.delete(`orders/${id}`);
    console.log('✅ Order deleted:', response.data);
    return response.data;
  },

  // Get order statistics (admin only)
  getOrderStats: async () => {
    console.log('📊 Fetching order stats');
    const response = await api.get('orders/stats');
    console.log('📦 Order stats:', response.data);
    return response.data;
  },
};

export const adminApi = {
  createUser: async (data, adminSecret) => {
    const headers = adminSecret ? { 'x-admin-secret': adminSecret } : {};
    const response = await api.post('create-user', data, { headers });
    return response.data;
  },
};

// ==================== CONTACT API ====================
export const contactApi = {
  // Public - Submit contact form
  submitContact: async (data) => {
    console.log('📧 Submitting contact form:', data);
    const response = await api.post('contact', data);
    console.log('✅ Contact form submitted:', response.data);
    return response.data;
  },

  // Admin - Get all contacts
  getAllContacts: async (params = {}) => {
    console.log('📡 Fetching contacts with params:', params);
    const response = await api.get('contact', { params });
    console.log('📦 Contacts response:', response.data);
    return response.data;
  },

  // Admin - Get contact stats
  getContactStats: async () => {
    console.log('📊 Fetching contact stats');
    const response = await api.get('contact/stats');
    console.log('📦 Contact stats:', response.data);
    return response.data;
  },

  // Admin - Get contact by ID
  getContactById: async (id) => {
    console.log('🔍 Fetching contact by ID:', id);
    const response = await api.get(`contact/${id}`);
    console.log('📦 Contact details:', response.data);
    return response.data;
  },

  // Admin - Update contact status
  updateContactStatus: async (id, status) => {
    console.log('🔄 Updating contact status:', id, status);
    const response = await api.patch(`contact/${id}/status`, { status });
    console.log('✅ Contact status updated:', response.data);
    return response.data;
  },

  // Admin - Delete contact
  deleteContact: async (id) => {
    console.log('🗑️ Deleting contact:', id);
    const response = await api.delete(`contact/${id}`);
    console.log('✅ Contact deleted:', response.data);
    return response.data;
  },

  // Admin - Delete multiple contacts
  deleteMultipleContacts: async (ids) => {
    console.log('🗑️ Deleting multiple contacts:', ids);
    const response = await api.post('contact/delete-multiple', { ids });
    console.log('✅ Contacts deleted:', response.data);
    return response.data;
  },
};

export const healthCheck = async () => {
  const response = await api.get('health');
  return response.data;
};

export default api;
