const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const getAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

const teamController = {
  // ============ Team Categories ============
  
  /**
   * Get all team categories (departments)
   */
  getCategories: async () => {
    try {
      console.log('📡 Fetching team categories from:', `${API_BASE_URL}/team/departments`);
      const response = await fetch(`${API_BASE_URL}/team/departments`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      const result = await response.json();
      console.log('📦 Categories API Response:', result);
      
      // Handle the response structure: { success: true, data: [...] }
      if (result.success && Array.isArray(result.data)) {
        console.log('✅ Categories data:', result.data.length, 'categories');
        return result.data;
      } else {
        console.log('⚠️ API response not in expected format');
        return [];
      }
    } catch (error) {
      console.error('❌ Error fetching categories:', error);
      throw error;
    }
  },

  /**
   * Get a single category by ID
   */
  getCategoryById: async (categoryId) => {
    try {
      console.log('📡 Fetching category by ID:', categoryId);
      const response = await fetch(`${API_BASE_URL}/team/departments/${categoryId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }
      
      const result = await response.json();
      console.log('📦 Category by ID Response:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error fetching category:', error);
      throw error;
    }
  },

  /**
   * Create a new team category
   */
  createCategory: async (categoryData) => {
    try {
      console.log('📤 Creating category:', categoryData);
      const response = await fetch(`${API_BASE_URL}/team/departments`, {
        method: 'POST',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
      
      const result = await response.json();
      console.log('✅ Category created:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error creating category:', error);
      throw error;
    }
  },

  /**
   * Update a team category
   */
  updateCategory: async (categoryId, categoryData) => {
    try {
      console.log('🔄 Updating category:', categoryId, categoryData);
      const response = await fetch(`${API_BASE_URL}/team/departments/${categoryId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update category');
      }
      
      const result = await response.json();
      console.log('✅ Category updated:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error updating category:', error);
      throw error;
    }
  },

  /**
   * Delete a team category
   */
  deleteCategory: async (categoryId) => {
    try {
      console.log('🗑️ Deleting category:', categoryId);
      const response = await fetch(`${API_BASE_URL}/team/departments/${categoryId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      
      const result = await response.json();
      console.log('✅ Category deleted:', result);
      return result;
    } catch (error) {
      console.error('❌ Error deleting category:', error);
      throw error;
    }
  },

  // ============ Team Members ============
  
  /**
   * Get all team members
   */
  getMembers: async () => {
    try {
      console.log('📡 Fetching team members from:', `${API_BASE_URL}/team`);
      const response = await fetch(`${API_BASE_URL}/team`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      
      const result = await response.json();
      console.log('📦 Members API Response:', result);
      
      // Handle the response structure: { success: true, data: [...] }
      if (result.success && Array.isArray(result.data)) {
        console.log('✅ Members data:', result.data.length, 'members');
        return result.data;
      } else {
        console.log('⚠️ API response not in expected format');
        return [];
      }
    } catch (error) {
      console.error('❌ Error fetching team members:', error);
      throw error;
    }
  },

  /**
   * Get members by category
   */
  getMembersByCategory: async (categoryId) => {
    try {
      console.log('📡 Fetching members by category:', categoryId);
      const response = await fetch(`${API_BASE_URL}/team?category=${categoryId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      
      const result = await response.json();
      console.log('📦 Members by Category Response:', result);
      
      if (result.success && Array.isArray(result.data)) {
        console.log('✅ Filtered members data:', result.data.length, 'members');
        return result.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('❌ Error fetching team members by category:', error);
      throw error;
    }
  },

  /**
   * Get a single team member by ID
   */
  getMemberById: async (memberId) => {
    try {
      console.log('📡 Fetching member by ID:', memberId);
      const response = await fetch(`${API_BASE_URL}/team/${memberId}`, {
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team member');
      }
      
      const result = await response.json();
      console.log('📦 Member by ID Response:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error fetching team member:', error);
      throw error;
    }
  },

  /**
   * Create a new team member
   */
  createMember: async (memberData) => {
    try {
      console.log('📤 Creating team member:', memberData);
      const response = await fetch(`${API_BASE_URL}/team`, {
        method: 'POST',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(memberData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create team member');
      }
      
      const result = await response.json();
      console.log('✅ Team member created:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error creating team member:', error);
      throw error;
    }
  },

  /**
   * Update a team member
   */
  updateMember: async (memberId, memberData) => {
    try {
      console.log('🔄 Updating team member:', memberId, memberData);
      const response = await fetch(`${API_BASE_URL}/team/${memberId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: getAuthHeaders(),
        body: JSON.stringify(memberData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update team member');
      }
      
      const result = await response.json();
      console.log('✅ Team member updated:', result);
      return result.success ? result.data : result;
    } catch (error) {
      console.error('❌ Error updating team member:', error);
      throw error;
    }
  },

  /**
   * Delete a team member
   */
  deleteMember: async (memberId) => {
    try {
      console.log('🗑️ Deleting team member:', memberId);
      const response = await fetch(`${API_BASE_URL}/team/${memberId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete team member');
      }
      
      const result = await response.json();
      console.log('✅ Team member deleted:', result);
      return result;
    } catch (error) {
      console.error('❌ Error deleting team member:', error);
      throw error;
    }
  },
};

export default teamController;