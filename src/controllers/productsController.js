const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api'}/products`;

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

const productsController = {
  
  /**
   * Get all products
   */
  getProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single product by ID
   */
  getProductById: async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${productId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single product by slug
   */
  getProductBySlug: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/slug/${slug}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new product (Admin only)
   */
  createProduct: async (productData) => {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(productData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update a product (Admin only)
   */
  updateProduct: async (productId, productData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${productId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(productData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a product (Admin only)
   */
  deleteProduct: async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${productId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update product status (Admin only)
   */
  updateProductStatus: async (productId, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${productId}/status`, {
        method: 'PATCH',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update product status');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  /**
   * Reorder products (Admin only)
   */
  reorderProducts: async (productIds) => {
    try {
      const response = await fetch(`${API_BASE_URL}/reorder`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify({ productIds }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to reorder products');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default productsController;
