"use client";

import React, { useState, useEffect } from 'react';
import { Package, Search, Filter, MoreVertical, Eye, Edit, Trash2, X, Save, AlertTriangle, Plus, Upload } from 'lucide-react';
import { productApi } from '@/lib/api';
import { useCustomAuth } from '@/hooks/useCustomAuth';

export default function ProductComponent() {
  const { user } = useCustomAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    slug: '',
    title: '',
    tagline: '',
    description: '',
    coverImage: { url: '', alt: '' },
    badge: { label: '', color: '' },
    liveLink: '',
    repoLink: '',
    highlights: [{ label: '', value: '' }],
    features: [''],
    cta: { text: '', url: '' },
    theme: { gradientFrom: '', gradientTo: '' },
    status: 'active',
    order: 0
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const openCreateModal = () => {
    setEditForm({
      slug: '',
      title: '',
      tagline: '',
      description: '',
      coverImage: { url: '', alt: '' },
      badge: { label: '', color: '' },
      liveLink: '',
      repoLink: '',
      highlights: [{ label: '', value: '' }],
      features: [''],
      cta: { text: '', url: '' },
      theme: { gradientFrom: '', gradientTo: '' },
      status: 'active',
      order: 0
    });
    setShowCreateModal(true);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching products from products-module API...');
      
      const data = await productApi.getAllProducts();
      console.log('📦 API Response:', data);
      
      if (data.success) {
        const productsArray = Array.isArray(data.data) ? data.data : [];
        console.log('✅ Products array:', productsArray);
        console.log('📊 Total products loaded:', productsArray.length);
        
        // Log each product's ID for debugging
        productsArray.forEach((product, index) => {
          console.log(`📋 Product ${index + 1}:`, {
            id: product._id,
            idType: typeof product._id,
            idLength: product._id?.length || 'N/A',
            title: product.title,
            slug: product.slug
          });
        });
        
        setProducts(productsArray);
      } else {
        console.error('❌ API returned success=false:', data);
        setError(data.message || 'Failed to fetch products');
        setProducts([]);
      }
    } catch (error) {
      console.error('💥 Fetch products error:', error);
      setError(error.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    
    if (!user || !user.uid) {
      setError('User not authenticated');
      return;
    }
    
    try {
      console.log('➕ Creating product with data:', editForm);
      console.log('👤 User UID:', user.uid);
      
      const data = await productApi.createProduct(user.uid, editForm);
      
      console.log('✅ Create response:', data);
      if (data.success) {
        console.log('🎉 Product created successfully:', data.data);
        setProducts([...products, data.data]);
        setShowCreateModal(false);
        setSuccessMessage('Product created successfully!');
        setShowSuccessModal(true);
        fetchProducts(); // Refresh the list
      }
    } catch (error) {
      console.error('💥 Create product error:', error);
      setError(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('🔄 Updating product:', selectedProduct._id, 'with data:', editForm);
      console.log('🔍 Product ID details:', {
        id: selectedProduct._id,
        idType: typeof selectedProduct._id,
        idLength: selectedProduct._id?.length || 'N/A',
        title: selectedProduct.title
      });
      
      const data = await productApi.updateProduct(selectedProduct._id, editForm);
      
      console.log('✅ Update response:', data);
      if (data.success) {
        console.log('🎉 Product updated successfully');
        setProducts(products.map(p => p._id === selectedProduct._id ? { ...p, ...editForm } : p));
        setShowEditModal(false);
        setSuccessMessage('Product updated successfully!');
        setShowSuccessModal(true);
        fetchProducts(); // Refresh the list
      }
    } catch (error) {
      console.error('💥 Update product error:', error);
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      console.log('🗑️ Deleting product:', selectedProduct._id, selectedProduct.title);
      
      await productApi.deleteProduct(selectedProduct._id);
      
      console.log('🎉 Product deleted successfully');
      setProducts(products.filter(p => p._id !== selectedProduct._id));
      setShowDeleteModal(false);
      setSelectedProduct(null);
      setSuccessMessage('Product deleted successfully!');
      setShowSuccessModal(true);
    } catch (error) {
      console.error('💥 Delete product error:', error);
      setError(error.message);
    }
  };

  const resetForm = () => {
    setEditForm({
      slug: '',
      title: '',
      tagline: '',
      description: '',
      coverImage: { url: '', alt: '' },
      badge: { label: '', color: '' },
      liveLink: '',
      repoLink: '',
      highlights: [{ label: '', value: '' }],
      features: [''],
      cta: { text: '', url: '' },
      theme: { gradientFrom: '', gradientTo: '' },
      status: 'active',
      order: 0
    });
  };

  const openEditModal = (product) => {
    console.log('✏️ Editing product:', product);
    setSelectedProduct(product);
    setEditForm({
      slug: product.slug || '',
      title: product.title || '',
      tagline: product.tagline || '',
      description: product.description || '',
      coverImage: product.coverImage || { url: '', alt: '' },
      badge: product.badge || { label: '', color: '' },
      liveLink: product.liveLink || '',
      repoLink: product.repoLink || '',
      highlights: product.highlights || [{ label: '', value: '' }],
      features: product.features || [''],
      cta: product.cta || { text: '', url: '' },
      theme: product.theme || { gradientFrom: '', gradientTo: '' },
      status: product.status || 'active',
      order: product.order || 0
    });
    console.log('📝 Form data loaded:', {
      slug: product.slug || '',
      title: product.title || '',
      tagline: product.tagline || '',
      description: product.description || '',
      coverImage: product.coverImage || { url: '', alt: '' },
      badge: product.badge || { label: '', color: '' },
      liveLink: product.liveLink || '',
      repoLink: product.repoLink || '',
      highlights: product.highlights || [{ label: '', value: '' }],
      features: product.features || [''],
      cta: product.cta || { text: '', url: '' },
      theme: product.theme || { gradientFrom: '', gradientTo: '' },
      status: product.status || 'active',
      order: product.order || 0
    });
    setShowEditModal(true);
  };

  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button
          onClick={openCreateModal}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-700">
                <th className="pb-3 text-gray-400 font-medium">Title</th>
                <th className="pb-3 text-gray-400 font-medium">Status</th>
                <th className="pb-3 text-gray-400 font-medium">Order</th>
                <th className="pb-3 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id} className="border-b border-slate-700/50">
                  <td className="py-4">
                    <div>
                      <p className="text-white font-medium">{product.title}</p>
                      <p className="text-gray-400 text-sm">{product.tagline}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400">{product.order}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          console.log('👀 Viewing product:', product);
                          setShowViewModal(true);
                        }}
                        className="p-1 text-gray-400 hover:text-cyan-400"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => openEditModal(product)}
                        className="p-1 text-gray-400 hover:text-blue-400"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowDeleteModal(true);
                        }}
                        className="p-1 text-gray-400 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {showViewModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Product Details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400">Title</label>
                <p className="text-white">{selectedProduct.title}</p>
              </div>
              <div>
                <label className="text-gray-400">Slug</label>
                <p className="text-white">{selectedProduct.slug}</p>
              </div>
              <div>
                <label className="text-gray-400">Tagline</label>
                <p className="text-white">{selectedProduct.tagline || 'N/A'}</p>
              </div>
              <div>
                <label className="text-gray-400">Description</label>
                <p className="text-white">{selectedProduct.description || 'N/A'}</p>
              </div>
              <div>
                <label className="text-gray-400">Status</label>
                <p className="text-white">{selectedProduct.status}</p>
              </div>
              <div>
                <label className="text-gray-400">Order</label>
                <p className="text-white">{selectedProduct.order}</p>
              </div>

              {/* Cover Image */}
              {selectedProduct.coverImage && (selectedProduct.coverImage.url || selectedProduct.coverImage.alt) && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Cover Image</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.coverImage.url && (
                      <p className="text-white text-sm">URL: {selectedProduct.coverImage.url}</p>
                    )}
                    {selectedProduct.coverImage.alt && (
                      <p className="text-white text-sm">Alt: {selectedProduct.coverImage.alt}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Badge */}
              {selectedProduct.badge && (selectedProduct.badge.label || selectedProduct.badge.color) && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Badge</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.badge.label && (
                      <p className="text-white text-sm">Label: {selectedProduct.badge.label}</p>
                    )}
                    {selectedProduct.badge.color && (
                      <p className="text-white text-sm">Color: {selectedProduct.badge.color}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Links */}
              {(selectedProduct.liveLink || selectedProduct.repoLink) && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Links</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.liveLink && (
                      <p className="text-white text-sm">Live: <a href={selectedProduct.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{selectedProduct.liveLink}</a></p>
                    )}
                    {selectedProduct.repoLink && (
                      <p className="text-white text-sm">Repo: <a href={selectedProduct.repoLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{selectedProduct.repoLink}</a></p>
                    )}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {selectedProduct.highlights && selectedProduct.highlights.length > 0 && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Highlights</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.highlights.map((highlight, index) => (
                      <div key={index} className="text-white text-sm">
                        <span className="font-medium">{highlight.label}:</span> {highlight.value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Features</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="text-white text-sm">• {feature}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {selectedProduct.cta && (selectedProduct.cta.text || selectedProduct.cta.url) && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Call to Action</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.cta.text && (
                      <p className="text-white text-sm">Text: {selectedProduct.cta.text}</p>
                    )}
                    {selectedProduct.cta.url && (
                      <p className="text-white text-sm">URL: <a href={selectedProduct.cta.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{selectedProduct.cta.url}</a></p>
                    )}
                  </div>
                </div>
              )}

              {/* Theme */}
              {selectedProduct.theme && (selectedProduct.theme.gradientFrom || selectedProduct.theme.gradientTo) && (
                <div className="border-t border-slate-600 pt-4">
                  <label className="text-gray-400">Theme</label>
                  <div className="mt-2 space-y-2">
                    {selectedProduct.theme.gradientFrom && (
                      <p className="text-white text-sm">From: {selectedProduct.theme.gradientFrom}</p>
                    )}
                    {selectedProduct.theme.gradientTo && (
                      <p className="text-white text-sm">To: {selectedProduct.theme.gradientTo}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Metadata */}
              <div className="border-t border-slate-600 pt-4">
                <label className="text-gray-400">Metadata</label>
                <div className="mt-2 space-y-2">
                  <p className="text-white text-sm">Created: {new Date(selectedProduct.createdAt).toLocaleString()}</p>
                  {selectedProduct.postedBy && (
                    <p className="text-white text-sm">
                      Posted by: {selectedProduct.postedBy.displayName || selectedProduct.postedBy.email || 'Unknown'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {(showCreateModal || showEditModal) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">
                {showCreateModal ? 'Create Product' : 'Edit Product'}
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setShowEditModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={showCreateModal ? handleCreate : handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">Slug</label>
                <input
                  type="text"
                  value={editForm.slug}
                  onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Tagline</label>
                <input
                  type="text"
                  value={editForm.tagline}
                  onChange={(e) => setEditForm({ ...editForm, tagline: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded h-24"
                />
              </div>

              {/* Cover Image */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Cover Image</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Image URL</label>
                    <input
                      type="url"
                      value={editForm.coverImage.url}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        coverImage: { ...editForm.coverImage, url: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Alt Text</label>
                    <input
                      type="text"
                      value={editForm.coverImage.alt}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        coverImage: { ...editForm.coverImage, alt: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="Image description"
                    />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Badge</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Label</label>
                    <input
                      type="text"
                      value={editForm.badge.label}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        badge: { ...editForm.badge, label: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="New"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Color</label>
                    <input
                      type="text"
                      value={editForm.badge.color}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        badge: { ...editForm.badge, color: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Live Link</label>
                    <input
                      type="url"
                      value={editForm.liveLink}
                      onChange={(e) => setEditForm({ ...editForm, liveLink: e.target.value })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Repository Link</label>
                    <input
                      type="url"
                      value={editForm.repoLink}
                      onChange={(e) => setEditForm({ ...editForm, repoLink: e.target.value })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="https://github.com/user/repo"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Highlights</h3>
                {editForm.highlights.map((highlight, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      type="text"
                      value={highlight.label}
                      onChange={(e) => {
                        const newHighlights = [...editForm.highlights];
                        newHighlights[index].label = e.target.value;
                        setEditForm({ ...editForm, highlights: newHighlights });
                      }}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="Label"
                    />
                    <div className="flex gap-1">
                      <input
                        type="text"
                        value={highlight.value}
                        onChange={(e) => {
                          const newHighlights = [...editForm.highlights];
                          newHighlights[index].value = e.target.value;
                          setEditForm({ ...editForm, highlights: newHighlights });
                        }}
                        className="flex-1 bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                        placeholder="Value"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newHighlights = editForm.highlights.filter((_, i) => i !== index);
                          setEditForm({ ...editForm, highlights: newHighlights });
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white px-2 rounded text-sm"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setEditForm({
                    ...editForm,
                    highlights: [...editForm.highlights, { label: '', value: '' }]
                  })}
                  className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 rounded text-sm"
                >
                  Add Highlight
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Features</h3>
                {editForm.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...editForm.features];
                        newFeatures[index] = e.target.value;
                        setEditForm({ ...editForm, features: newFeatures });
                      }}
                      className="flex-1 bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="Feature description"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newFeatures = editForm.features.filter((_, i) => i !== index);
                        setEditForm({ ...editForm, features: newFeatures });
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-2 rounded text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setEditForm({
                    ...editForm,
                    features: [...editForm.features, '']
                  })}
                  className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 rounded text-sm"
                >
                  Add Feature
                </button>
              </div>

              {/* CTA */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Call to Action</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Button Text</label>
                    <input
                      type="text"
                      value={editForm.cta.text}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        cta: { ...editForm.cta, text: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="Learn More"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Button URL</label>
                    <input
                      type="url"
                      value={editForm.cta.url}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        cta: { ...editForm.cta, url: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Theme */}
              <div className="border-t border-slate-600 pt-4">
                <h3 className="text-white font-medium mb-2">Theme</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Gradient From</label>
                    <input
                      type="text"
                      value={editForm.theme.gradientFrom}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        theme: { ...editForm.theme, gradientFrom: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 text-sm">Gradient To</label>
                    <input
                      type="text"
                      value={editForm.theme.gradientTo}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        theme: { ...editForm.theme, gradientTo: e.target.value }
                      })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded text-sm"
                      placeholder="blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="border-t border-slate-600 pt-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-1">Status</label>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                      className="w-full bg-slate-700 border border-slate-600 text-white p-2 rounded"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <Save size={16} />
                  {showCreateModal ? 'Create' : 'Update'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setShowEditModal(false);
                    resetForm();
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-400" size={24} />
              <h2 className="text-xl font-bold text-white">Delete Product</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete &ldquo;{selectedProduct.title}&rdquo;? This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex-1"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Success</h2>
            </div>
            <p className="text-gray-400 mb-6">{successMessage}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}