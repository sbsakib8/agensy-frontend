"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, X, Upload, Loader2 } from "lucide-react";
import { uploadImageToImgBB } from "@/lib/imgbb-upload";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api'}/services`;

export default function ServiceComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteModal, setDeleteModal] = useState({ show: false, serviceName: "", serviceId: "" });
  const [imageUploading, setImageUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    category: "",
    tags: [""],
    thumbnail: "",
    gallery: "",
    liveDemo: "",
    youtubeDemo: "",
    githubRepo: "",
    basePrice: "",
    currency: "USD",
    deliveryTimeDays: "",
    features: "",
    technologies: "",
    requirements: {
      businessName: false,
      businessType: false,
      pagesCount: false,
      contentProvided: false,
      referenceWebsites: false,
      domainHosting: false,
    },
    status: "active",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch services on component mount
  useEffect(() => {
    fetchCategories();
    fetchServices();
  }, []);

  // Fetch services when selected category changes
  useEffect(() => {
    if (selectedCategoryId) {
      fetchServices();
    }
  }, [selectedCategoryId]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      const result = await response.json();
      
      if (result.success && result.data && Array.isArray(result.data)) {
        setCategories(result.data);
        
        // Set first category name as default if no category is selected
        if (!formData.category && result.data.length > 0) {
          setFormData(prev => ({
            ...prev,
            category: result.data[0].name
          }));
        }
      }
    } catch (err) {
    }
  };

  const fetchServices = async () => {
    try {
      setLoading(true);
      
      // Fetch all services
      const response = await fetch(`${API_BASE_URL}`, {
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      
      const result = await response.json();
      
      if (result.success && result.data && Array.isArray(result.data)) {
        // Filter services by selected category if a category is selected
        if (selectedCategoryId) {
          const filteredServices = result.data.filter(
            service => service.category === selectedCategoryId
          );
          setServices(filteredServices);
        } else {
          setServices(result.data);
        }
      } else {
        setServices([]);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
      setServices([]);
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
      // Convert comma-separated strings to arrays
      const featuresArray = formData.features
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
      
      const tagsArray = formData.tags
        .map(item => item.trim())
        .filter(item => item !== '');
      
      const technologiesArray = formData.technologies
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
      
      const galleryArray = formData.gallery
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

      const serviceData = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        category: formData.category || selectedCategoryId,
        tags: tagsArray,
        images: {
          thumbnail: formData.thumbnail,
          gallery: galleryArray,
        },
        links: {
          liveDemo: formData.liveDemo,
          youtubeDemo: formData.youtubeDemo,
          githubRepo: formData.githubRepo,
        },
        pricing: {
          basePrice: parseFloat(formData.basePrice) || 0,
          currency: formData.currency,
        },
        deliveryTimeDays: parseInt(formData.deliveryTimeDays) || 0,
        features: featuresArray,
        technologies: technologiesArray,
        requirements: formData.requirements,
        status: formData.status,
      };

      if (isEditing) {
        // Update existing service
        const response = await fetch(`${API_BASE_URL}/${editId}`, {
          method: 'PATCH',
        cache: 'no-store',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(serviceData),
        });
        
        if (!response.ok) throw new Error('Failed to update service');
        const result = await response.json();
        await fetchServices();
        setSuccessMessage("Service updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setIsEditing(false);
        setEditId(null);
      } else {
        // Create new service
        const response = await fetch(`${API_BASE_URL}`, {
          method: 'POST',
        cache: 'no-store',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(serviceData),
        });
        
        if (!response.ok) throw new Error('Failed to create service');
        const result = await response.json();
        await fetchServices();
        setSuccessMessage("Service added successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }

      setFormData({ 
        title: "",
        shortDescription: "",
        category: "",
        tags: [""],
        thumbnail: "",
        gallery: "",
        liveDemo: "",
        youtubeDemo: "",
        githubRepo: "",
        basePrice: "",
        currency: "USD",
        deliveryTimeDays: "",
        features: "",
        technologies: "",
        requirements: {
          businessName: false,
          businessType: false,
          pagesCount: false,
          contentProvided: false,
          referenceWebsites: false,
          domainHosting: false,
        },
        status: "active",
      });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      title: service.title || "",
      shortDescription: service.shortDescription || "",
      category: service.category || "",
      tags: Array.isArray(service.tags) && service.tags.length > 0 ? service.tags : [""],
      thumbnail: service.images?.thumbnail || "",
      gallery: Array.isArray(service.images?.gallery) ? service.images.gallery.join(', ') : "",
      liveDemo: service.links?.liveDemo || "",
      youtubeDemo: service.links?.youtubeDemo || "",
      githubRepo: service.links?.githubRepo || "",
      basePrice: service.pricing?.basePrice || "",
      currency: service.pricing?.currency || "USD",
      deliveryTimeDays: service.deliveryTimeDays || "",
      features: Array.isArray(service.features) ? service.features.join(', ') : "",
      technologies: Array.isArray(service.technologies) ? service.technologies.join(', ') : "",
      requirements: service.requirements || {
        businessName: false,
        businessType: false,
        pagesCount: false,
        contentProvided: false,
        referenceWebsites: false,
        domainHosting: false,
      },
      status: service.status || "active",
    });
    setIsEditing(true);
    setEditId(service.id || service._id);
  };

  const handleDelete = async (serviceId) => {
    setDeleteModal({ show: false, serviceName: "", serviceId: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/${serviceId}`, {
        method: 'DELETE',
        cache: 'no-store',
        credentials: 'include',
      });
      
      if (!response.ok) throw new Error('Failed to delete service');
      const result = await response.json();
      await fetchServices();
      setSuccessMessage("Service deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const openDeleteModal = (serviceName, serviceId) => {
    setDeleteModal({ show: true, serviceName, serviceId });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ show: false, serviceName: "", serviceId: "" });
  };

  const handleCancel = () => {
    setFormData({ 
      title: "",
      shortDescription: "",
      category: "",
      tags: [""],
      thumbnail: "",
      gallery: "",
      liveDemo: "",
      youtubeDemo: "",
      githubRepo: "",
      basePrice: "",
      currency: "USD",
      deliveryTimeDays: "",
      features: "",
      technologies: "",
      requirements: {
        businessName: false,
        businessType: false,
        pagesCount: false,
        contentProvided: false,
        referenceWebsites: false,
        domainHosting: false,
      },
      status: "active",
    });
    setIsEditing(false);
    setEditId(null);
  };

  // Helper functions for tags management
  const addTag = () => {
    setFormData({ ...formData, tags: [...formData.tags, ""] });
  };

  const updateTag = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData({ ...formData, tags: newTags });
  };

  const removeTag = (index) => {
    const newTags = formData.tags.filter((_, i) => i !== index);
    setFormData({ ...formData, tags: newTags });
  };

  // Image upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      setTimeout(() => setError(null), 3000);
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      setTimeout(() => setError(null), 3000);
      return;
    }

    try {
      setImageUploading(true);
      const result = await uploadImageToImgBB(file);

      if (result.success) {
        setFormData({ ...formData, thumbnail: result.imageUrl });
        setSuccessMessage('Image uploaded successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(result.error || 'Failed to upload image');
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      setError('Error uploading image');
      setTimeout(() => setError(null), 3000);
    } finally {
      setImageUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Our Services</h1>

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
                <h3 className="text-lg font-semibold text-white mb-2">Delete Service</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Are you sure you want to delete <span className="font-semibold text-white">&quot;{deleteModal.serviceName}&quot;</span>? This action cannot be undone.
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={closeDeleteModal}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteModal.serviceId)}
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
        <div className="text-white text-center py-8">Loading services...</div>
      ) : (
        <>
          {/* Add/Edit Service Form */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              {isEditing ? "Edit Service" : "Add New Service"}
            </h2>
<form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Service Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Professional Website Development"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Category *</label>
                    {loading ? (
                      <div className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-gray-400">
                        Loading categories...
                      </div>
                    ) : categories.length === 0 ? (
                      <div className="w-full px-4 py-2 bg-slate-900/50 border border-yellow-500/30 rounded-lg text-yellow-400">
                        No categories available. Please add a category first in Service Categories.
                      </div>
                    ) : (
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category._id || category.id} value={category.name}>
                            {category.title || category.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Short Description *</label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    required
                    rows="2"
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Modern, fast, and SEO-friendly website for your business"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Tags *</label>
                  <div className="space-y-2">
                    {formData.tags.map((tag, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) => updateTag(index, e.target.value)}
                          className="flex-1 px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                          placeholder="Enter tag"
                        />
                        <button
                          type="button"
                          onClick={() => removeTag(index)}
                          className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addTag}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-sm"
                    >
                      <Plus size={16} />
                      Add Tag
                    </button>
                  </div>
                </div>
                
                <div>"
                  <label className="block text-gray-300 mb-2">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Images</h3>
                
                <div>
                  <label className="block text-gray-300 mb-2">Thumbnail</label>
                  
                  {/* Image Preview */}
                  {formData.thumbnail && (
                    <div className="mb-3 relative w-full h-48 rounded-lg overflow-hidden border-2 border-blue-500/30">
                      <Image 
                        src={formData.thumbnail} 
                        alt="Thumbnail preview" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* URL Input */}
                  <input
                    type="url"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 mb-2"
                    placeholder="https://example.com/images/web-thumb.png"
                  />

                  {/* File Upload */}
                  <div className="flex gap-2">
                    <label className="flex-1 cursor-pointer">
                      <div className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed transition-colors ${
                        imageUploading 
                          ? 'border-blue-500/50 bg-blue-500/10 cursor-not-allowed' 
                          : 'border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/50'
                      }`}>
                        {imageUploading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-sm text-gray-300">Uploading...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-gray-300">Upload Image</span>
                          </>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={imageUploading}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Upload image or paste URL (Max 5MB)</p>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Gallery URLs (comma-separated)</label>
                  <input
                    type="text"
                    name="gallery"
                    value={formData.gallery}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="https://example.com/img1.png, https://example.com/img2.png"
                  />
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Links</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Live Demo URL</label>
                    <input
                      type="url"
                      name="liveDemo"
                      value={formData.liveDemo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="https://demo.example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">YouTube Demo URL</label>
                    <input
                      type="url"
                      name="youtubeDemo"
                      value={formData.youtubeDemo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="https://youtube.com/watch?v=demo123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">GitHub Repository</label>
                    <input
                      type="url"
                      name="githubRepo"
                      value={formData.githubRepo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Delivery */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Pricing & Delivery</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Base Price *</label>
                    <input
                      type="number"
                      name="basePrice"
                      value={formData.basePrice}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Currency</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="BDT">BDT</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Delivery Time (days) *</label>
                    <input
                      type="number"
                      name="deliveryTimeDays"
                      value={formData.deliveryTimeDays}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="14"
                    />
                  </div>
                </div>
              </div>

              {/* Features & Technologies */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Features & Technologies</h3>
                
                <div>
                  <label className="block text-gray-300 mb-2">Features (comma-separated) *</label>
                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Responsive Design, SEO Optimization, Fast Loading Speed, Admin Dashboard"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Technologies (comma-separated) *</label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Next.js, Node.js, MongoDB, Tailwind CSS"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-300 border-b border-blue-500/30 pb-2">Requirements from Client</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.keys(formData.requirements).map((key) => (
                    <label key={key} className="flex items-center gap-2 text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.requirements[key]}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          requirements: {
                            ...prev.requirements,
                            [key]: e.target.checked
                          }
                        }))}
                        className="w-4 h-4 bg-slate-900/50 border border-blue-500/30 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                >
                  {isEditing ? "Update Service" : "Add Service"}
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

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-8">
                No services found. Add your first service above.
              </div>
            ) : (
              services.map((service) => (
                <div
                  key={service._id || service.id}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-all"
                >
                  {/* Thumbnail */}
                  {service.images?.thumbnail && (
                    <img 
                      src={service.images.thumbnail} 
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  
                  {/* Category Badge */}
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs mb-2">
                    {service.category}
                  </span>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm line-clamp-2">
                    {service.shortDescription}
                  </p>
                  
                  {/* Tags */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <div className="mb-3">
                      <p className="text-blue-300 text-xs font-semibold mb-2">Features:</p>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mb-3">
                      <p className="text-purple-300 text-xs font-semibold mb-1">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 4).map((tech, index) => (
                          <span key={index} className="px-2 py-0.5 bg-slate-700/50 text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price & Delivery */}
                  <div className="flex gap-2 mb-3 text-xs">
                    {service.pricing?.basePrice && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded font-semibold">
                        {service.pricing.currency} ${service.pricing.basePrice}
                      </span>
                    )}
                    {service.deliveryTimeDays && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                        {service.deliveryTimeDays} days
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded capitalize ${
                      service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                      service.status === 'inactive' ? 'bg-red-500/20 text-red-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  
                  {/* Links */}
                  {(service.links?.liveDemo || service.links?.youtubeDemo || service.links?.githubRepo) && (
                    <div className="flex gap-2 mb-3">
                      {service.links.liveDemo && (
                        <a 
                          href={service.links.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300"
                        >
                          🔗 Demo
                        </a>
                      )}
                      {service.links.youtubeDemo && (
                        <a 
                          href={service.links.youtubeDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-red-400 hover:text-red-300"
                        >
                          ▶️ Video
                        </a>
                      )}
                      {service.links.githubRepo && (
                        <a 
                          href={service.links.githubRepo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-gray-400 hover:text-gray-300"
                        >
                          📦 GitHub
                        </a>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="flex-1 px-4 py-1.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteModal(service.title, service.id || service._id)}
                      className="flex-1 px-4 py-1.5 bg-red-600/80 hover:bg-red-600 text-white rounded-lg text-sm transition-colors"
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