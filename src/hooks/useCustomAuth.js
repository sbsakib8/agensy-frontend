"use client";

import { useState, useEffect } from 'react';

export function useCustomAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      console.log('🔍 Checking authentication status...')
      
      // Check sessionStorage first for immediate response
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      
      // Then verify with server
      const response = await fetch('/api/auth/profile', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const result = await response.json();
      console.log('👤 Auth check result:', result);
      
      if (result.success && result.user) {
        setUser(result.user);
        sessionStorage.setItem('user', JSON.stringify(result.user));
      } else {
        setUser(null);
        sessionStorage.removeItem('user');
      }
    } catch (error) {
      console.error('❌ Auth check error:', error);
      setUser(null);
      sessionStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      console.log('🚪 Signing out...');
      
      // Clear local state and storage
      setUser(null);
      sessionStorage.removeItem('user');
      
      // Call logout API to clear cookie
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      const result = await response.json();
      console.log('👋 Logout result:', result);
      
      // Redirect to home page
      window.location.href = '/';
      
    } catch (error) {
      console.error('❌ Logout error:', error);
      // Still redirect even if logout API fails
      window.location.href = '/';
    }
  };

  // Listen for storage changes (login from other tabs)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        if (e.newValue) {
          setUser(JSON.parse(e.newValue));
        } else {
          setUser(null);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    loading,
    signOut,
    checkAuth
  };
}