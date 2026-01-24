// User controller for managing user-related API calls

/* ================= FETCH PROFILE ================= */
export const fetchUserProfile = async () => {
  try {
    const res = await fetch('/api/auth/profile', { credentials: 'include' })
    const data = await res.json()

    if (!data.success) throw new Error(data.message)

    const u = data.user || data.data || data

    const mapped = {
      id: u._id || u.id,
      name: u.name,
      email: u.email,
      phone: u.phone || '',
      address: u.address || '',
      image: u.image || '',
      role: u.role || 'user',
      createdAt: u.createdAt
    }

    return { success: true, data: mapped }
  } catch (err) {
    return { success: false, error: err.message || 'Failed to load profile' }
  }
}

/* ================= UPDATE PROFILE ================= */
export const updateUserProfile = async (userProfile, editForm) => {
  try {
    console.log('🔄 Updating profile with data:', editForm)
    console.log('📱 Phone number in editForm:', editForm.phone)
    
    const res = await fetch(`/api/users/${userProfile.id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm)
    })

    const data = await res.json()
    console.log('📝 Update response:', data)
    
    if (!data.success) throw new Error(data.message)

    // Handle nested data structure: data.data.data
    const updatedUser = data.data?.data || data.data || data
    console.log('🎯 Extracted user data:', updatedUser)
    console.log('📞 Backend returned phone:', updatedUser.phone)
    
    const mapped = {
      id: updatedUser._id || updatedUser.id || userProfile.id,
      name: updatedUser.name || editForm.name,
      email: updatedUser.email || editForm.email,
      phone: updatedUser.phone || editForm.phone,
      address: updatedUser.address || editForm.address,
      image: updatedUser.image || editForm.image,
      role: updatedUser.role || editForm.role,
      createdAt: updatedUser.createdAt || userProfile.createdAt
    }

    console.log('✅ Final mapped data:', mapped)
    console.log('📱 Final phone number:', mapped.phone)

    return { success: true, data: mapped }
  } catch (error) {
    console.error('❌ Update profile error:', error)
    return { success: false, error: 'Update failed' }
  }
}