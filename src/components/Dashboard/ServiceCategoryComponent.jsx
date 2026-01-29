"use client";

import React, { useState, useEffect } from "react";

export default function ServiceCategoryComponent() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteModal, setDeleteModal] = useState({ show: false, categoryName: "", categoryId: "" });

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    icon: "",
    order: 0,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch service categories on component mount
  useEffect(() => {
    fetchServiceCategories();
  }, []);

  const fetchServiceCategories = async () => {
    try {
      setLoading(true);
      console.log('📡 Fetching service categories');
      const response = await fetch('http://localhost:4000/api/services/categories', {
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch service categories');
      }
      
      const result = await response.json();
      console.log('📦 API Response:', result);
      
      if (result.success && result.data && Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        setCategories([]);
      }
      setError(null);
    } catch (err) {
      console.error('❌ Error fetching service categories:', err);
      setError(err.message);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Auto-generate 'name' from 'title' (e.g., "Web Development" -> "web-development")
      const categoryName = formData.name || formData.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      const submitData = {
        ...formData,
        name: categoryName,
      };

      if (isEditing) {
        // Update existing category
        console.log('🔄 Updating category:', editId);
        const response = await fetch(`http://localhost:4000/api/services/categories/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(submitData),
        });

        if (!response.ok) throw new Error('Failed to update category');
        const result = await response.json();
        console.log('✅ Update Response:', result);
        await fetchServiceCategories();
        setSuccessMessage("Category updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setIsEditing(false);
        setEditId(null);
      } else {
        // Create new category
        console.log('📤 Creating new category');
        const response = await fetch('http://localhost:4000/api/services/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(submitData),
        });

        if (!response.ok) throw new Error('Failed to create category');
        const result = await response.json();
        console.log('✅ Create Response:', result);
        await fetchServiceCategories();
        setSuccessMessage("Category added successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }

      setFormData({ name: "", title: "", description: "", icon: "", order: 0 });
      setError(null);
    } catch (err) {
      console.error('❌ Error submitting form:', err);
      setError(err.message);
    }
  };

  const handleEdit = (category) => {
    setFormData({
      name: category.name,
      title: category.title || category.name,
      description: category.description,
      icon: category.icon || "",
      order: category.order || 0,
    });
    setIsEditing(true);
    setEditId(category.id || category._id);
  };

  const handleDelete = async (categoryId) => {
    setDeleteModal({ show: false, categoryName: "", categoryId: "" });

    try {
      console.log('🗑️ Deleting category:', categoryId);
      const response = await fetch(`http://localhost:4000/api/services/categories/${categoryId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to delete category');
      const result = await response.json();
      console.log('✅ Delete Response:', result);
      await fetchServiceCategories();
      setSuccessMessage("Category deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setError(null);
    } catch (err) {
      console.error('❌ Error deleting category:', err);
      setError(err.message);
    }
  };

  const openDeleteModal = (categoryName, categoryId) => {
    setDeleteModal({ show: true, categoryName, categoryId });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ show: false, categoryName: "", categoryId: "" });
  };

  const handleCancel = () => {
    setFormData({ name: "", title: "", description: "", icon: "", order: 0 });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Service Categories</h1>

      {/* Success Modal */}
      {successMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-green-900/90 to-emerald-900/90 border border-green-500/50 rounded-xl p-6 shadow-2xl max-w-sm mx-4 animate-[scale-in_0.3s_ease-out]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Success!</h3>
                <p className="text-green-300 text-sm">{successMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br black border border-red-500/50 rounded-xl p-6 shadow-2xl max-w-md mx-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Delete Category</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Are you sure you want to delete <span className="font-semibold text-white">&quot;{deleteModal.categoryName}&quot;</span>? This action cannot be undone.
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={closeDeleteModal}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteModal.categoryId)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="text-white text-center py-8">Loading service categories...</div>
      ) : (
        <>
          {/* Add/Edit Category Form */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              {isEditing ? "Edit Category" : "Add New Category"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="e.g., Web Development"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Icon (optional)</label>
                  <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="🌐 or URL"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter category description"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Order</label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="0"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {isEditing ? "Update Category" : "Add Category"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Categories List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-8">
                No service categories found. Add your first category above.
              </div>
            ) : (
              categories.map((category) => (
                <div
                  key={category._id || category.id}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-all"
                >
                  {category.icon && (
                    <div className="text-4xl mb-3">{category.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title || category.name}
                  </h3>
                  <p className="text-gray-400 mb-1 text-xs text-blue-300">ID: {category.id}</p>
                  <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(category)}
                      className="px-4 py-1.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(category.title || category.name, category.id || category._id)}
                      className="px-4 py-1.5 bg-red-600/80 hover:bg-red-600 text-white rounded-lg text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
