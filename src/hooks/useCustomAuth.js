"use client";

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { authApi, userApi } from '@/lib/api';

export function useCustomAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          console.log('🔑 Firebase user detected:', firebaseUser.email);
          console.log('🆔 Firebase UID:', firebaseUser.uid);
          
          // Fetch complete user data from backend using UID
          console.log('📡 Fetching complete user profile from /api/users/' + firebaseUser.uid);
          const userData = await userApi.getUser(firebaseUser.uid);
          console.log('✅ Complete user profile fetched from backend:', userData);
          console.log('📋 All fields:', Object.keys(userData));
          
          // Fetch user role
          try {
            const roleData = await userApi.getUserRole(firebaseUser.uid);
            if (roleData.success && roleData.data) {
              userData.role = roleData.data.role;
              console.log('✅ User role fetched:', userData.role);
            }
          } catch (error) {
            console.error('❌ Error fetching user role:', error);
            // Default to 'user' if role fetch fails
            userData.role = userData.role || 'user';
          }
          
          setUser(userData);
        } catch (error) {
          console.error('❌ Error fetching user data from backend:', error);
          console.error('Error response:', error.response?.data);
          
          // If backend fails, use Firebase user data as fallback
          console.log('⚠️ Using Firebase user data as fallback');
          const fallbackUser = {
            uid: firebaseUser.uid,
            firebaseUid: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            displayName: firebaseUser.displayName || '',
            email: firebaseUser.email,
            phone: '',
            phoneNumber: '',
            address: '',
            image: firebaseUser.photoURL || '',
            photoURL: firebaseUser.photoURL || '',
            provider: 'google',
            role: 'user',
            status: 'active',
            termsAccepted: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          console.log('📦 Fallback user data:', fallbackUser);
          setUser(fallbackUser);
        }
      } else {
        console.log('🚫 No Firebase user, clearing auth state');
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      console.log('🚪 Signing out...');
      
      // Sign out from Firebase
      await firebaseSignOut(auth);
      
      // Clear local state
      setUser(null);
      
      // Call backend logout API
      await authApi.logout();
      
      console.log('✅ Logout successful');
      
      // Redirect to home page
      window.location.href = '/';
      
    } catch (error) {
      console.error('❌ Logout error:', error);
      // Still redirect even if logout fails
      window.location.href = '/';
    }
  };

  return {
    user,
    loading,
    signOut
  };
}