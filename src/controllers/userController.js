// User controller for managing user-related API calls
import { userApi } from '../lib/api';

/* ================= FETCH PROFILE ================= */
export const fetchUserProfile = async (uid) => {
  try {
    if (!uid) {
      throw new Error('User ID is required');
    }

    console.log('🔍 Fetching profile for Firebase UID:', uid);
    
    // Fetch from backend API using Firebase UID
    const userData = await userApi.getUser(uid);
    console.log('✅ Profile data received from backend:', userData);

    // Return data as-is from backend
    return { success: true, data: userData };
  } catch (err) {
    console.error('❌ fetchUserProfile error:', err);
    return { success: false, error: err.message || 'Failed to load profile' };
  }
};

/* ================= UPDATE PROFILE ================= */
export const updateUserProfile = async (userProfile, editForm) => {
  try {
    console.log('🔄 Updating profile for Firebase UID:', userProfile.uid || userProfile.firebaseUid);
    console.log('📝 Edit form data:', editForm);
    
    // Prepare update data with backend field names
    const updateData = {
      displayName: editForm.displayName,
      phoneNumber: editForm.phoneNumber,
      address: editForm.address,
      photoURL: editForm.photoURL,
    };
    
    console.log('📤 Sending to backend:', updateData);
    
    // Use Firebase UID to update user
    const uid = userProfile.uid || userProfile.firebaseUid;
    const updatedUser = await userApi.updateUser(uid, updateData);
    
    console.log('✅ Update response from backend:', updatedUser);

    return { success: true, data: updatedUser };
  } catch (error) {
    console.error('❌ Update profile error:', error);
    return { success: false, error: error.message || 'Update failed' };
  }
};