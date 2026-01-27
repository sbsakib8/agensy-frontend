'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Edit2,
  Save,
  CheckCircle
} from 'lucide-react'
import { updateUserProfile } from '../../controllers/userController'
import { useCustomAuth } from '../../hooks/useCustomAuth'

export default function Profile() {
  const { user: authUser, loading: authLoading } = useCustomAuth();
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({})
  const [updating, setUpdating] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Use authUser directly from useCustomAuth - no need to fetch again!
  useEffect(() => {
    if (authUser) {
      console.log('✅ Using profile data from useCustomAuth:', authUser);
      setEditForm(authUser);
    }
  }, [authUser]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      setUpdating(true)
      
      console.log('🔍 Updating profile for UID:', authUser.uid)
      console.log('📝 Edit form data:', editForm)
      
      const result = await updateUserProfile(authUser, editForm)
      
      if (result.success) {
        // Show success modal
        setShowSuccessModal(true)
        setIsEditing(false)
        
        // Hide modal after 1 second
        setTimeout(() => {
          setShowSuccessModal(false)
          // Reload to fetch updated data
          window.location.reload()
        }, 1000)
      } else {
        setError(result.error || 'Update failed')
      }
    } catch (error) {
      console.error('❌ Update error:', error)
      setError('Failed to update profile')
    } finally {
      setUpdating(false)
    }
  }

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin h-20 w-20 border-4 border-cyan-400 border-t-transparent rounded-full" />
          <p className="text-cyan-300 text-lg">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!authUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05060a] p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-400 mb-2">Please Sign In</h2>
                <p className="text-red-300/80 text-sm">You need to be logged in to view your profile</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a
                href="/signin"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition font-medium"
              >
                Sign In
              </a>
              <Link
                href="/"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition font-medium inline-block"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05060a] p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-400 mb-2">{error}</h2>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition font-medium"
              >
                Retry
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition font-medium inline-block"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#05060a] py-8 px-4">
      <div className="max-w-5xl mt-[100px] mx-auto">
        
    
        <div className="relative  mb-8">
          {/* Background Card */}
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_50%)]" />
            
            {/* Content */}
            <div className="relative p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                      {authUser.photoURL ? (
                        <Image
                          src={authUser.photoURL}
                          alt={authUser.displayName || 'User'}
                          width={120}
                          height={120}
                          className="object-cover rounded-full"
                          onError={() => {
                            const imgElement = document.querySelector('#profile-fallback');
                            if (imgElement) {
                              imgElement.style.display = 'flex';
                            }
                          }}
                        />
                      ) : (
                        <User className="text-white w-12 h-12" />
                      )}
                      <div id="profile-fallback" className="absolute inset-0 hidden items-center justify-center bg-slate-900 rounded-full">
                        <User className="text-white w-12 h-12" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold shadow-lg ${
                      authUser.role === 'admin'
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                    }`}>
                      <Shield size={12} />
                      {(authUser.role || 'user').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {authUser.displayName || 'User'}
                  </h1>
                  <p className="text-xl text-cyan-300 mb-6">{authUser.email}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">
                        {authUser.role === 'admin' ? 'Full' : 'Limited'}
                      </div>
                      <div className="text-sm text-white/60">Access Level</div>
                    </div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">Active</div>
                      <div className="text-sm text-white/60">Status</div>
                    </div>
                    {authUser.createdAt && (
                      <>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">
                            {new Date(authUser.createdAt).getFullYear()}
                          </div>
                          <div className="text-sm text-white/60">Member Since</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Edit Button */}
                <div className="lg:ml-8">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="group px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <Edit2 size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROFILE DETAILS ================= */}
        <div className="grid lg:grid-cols-1 gap-8">
          
          {/* Profile Information Card */}
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            
            <div className="relative p-8">
              {!isEditing ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard icon={User} label="Firebase UID" value={authUser.firebaseUid || authUser.uid || 'Not available'} />
                    <InfoCard icon={Mail} label="Email Address" value={authUser.email} />
                    <InfoCard icon={Phone} label="Phone Number" value={authUser.phoneNumber || 'Not provided'} />
                    <InfoCard icon={MapPin} label="Location" value={authUser.address || 'Not provided'} />
                    <InfoCard icon={Calendar} label="Member Since" value={authUser.createdAt ? formatDate(authUser.createdAt) : 'Recently joined'} />
                    <InfoCard icon={Shield} label="Account Role" value={(authUser.role || 'user').toUpperCase()} />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                    Edit Profile
                  </h2>
                  
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <ModernInput label="Full Name" value={editForm.displayName} onChange={(v) => setEditForm({ ...editForm, displayName: v })} icon={User} />
                      <ModernInput label="Email Address" value={editForm.email} onChange={(v) => setEditForm({ ...editForm, email: v })} icon={Mail} disabled={true} />
                      <ModernInput label="Phone Number" value={editForm.phoneNumber} onChange={(v) => setEditForm({ ...editForm, phoneNumber: v })} icon={Phone} />
                      <ModernInput label="Location" value={editForm.address} onChange={(v) => setEditForm({ ...editForm, address: v })} icon={MapPin} />
                    </div>

                    <div className="flex gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="flex-1 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        disabled={updating}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {updating ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save size={18} />
                            Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mx-4 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Profile Updated!</h3>
              <p className="text-white/70">Your profile has been successfully updated.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}


function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20">
          <Icon size={20} className="text-cyan-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white/60 mb-1">{label}</p>
          <p className="text-white font-semibold truncate" title={value}>{value}</p>
        </div>
      </div>
    </div>
  )
}

function ModernInput({ label, value, onChange, icon: Icon, disabled = false }) {
  return (
    <div className="space-y-2">
      <label className="text-white/80 text-sm font-medium flex items-center gap-2">
        <Icon size={16} className="text-cyan-400" />
        {label}
        {disabled && <span className="text-xs text-white/40">(Read-only)</span>}
      </label>
      <input
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </div>
  )
}
