const API_BASE_URL = 'http://localhost:4000/api/team';

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

const teamController = {
  // ============ Team Categories ============
  
  /**
   * Get all team categories
   */
  getCategories: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  /**
   * Get a single category by ID
   */
  getCategoryById: async (categoryId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  },

  /**
   * Create a new team category
   */
  createCategory: async (categoryData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        method: 'POST',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },

  /**
   * Update a team category
   */
  updateCategory: async (categoryId, categoryData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update category');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating category:', error);
      throw error;
    }
  },

  /**
   * Delete a team category
   */
  deleteCategory: async (categoryId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${categoryId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  },

  // ============ Team Members ============
  
  /**
   * Get all team members
   */
  getMembers: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/members`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }
  },

  /**
   * Get members by category
   */
  getMembersByCategory: async (categoryId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/members?category=${categoryId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching team members by category:', error);
      throw error;
    }
  },

  /**
   * Get a single team member by ID
   */
  getMemberById: async (memberId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/members/${memberId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team member');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching team member:', error);
      throw error;
    }
  },

  /**
   * Create a new team member
   */
  createMember: async (memberData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/members`, {
        method: 'POST',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(memberData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create team member');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating team member:', error);
      throw error;
    }
  },

  /**
   * Update a team member
   */
  updateMember: async (memberId, memberData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/members/${memberId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(memberData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update team member');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  },

  /**
   * Delete a team member
   */
  deleteMember: async (memberId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/members/${memberId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete team member');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  },
};

export default teamController;
