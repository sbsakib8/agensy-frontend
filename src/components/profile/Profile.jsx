"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Edit2,
  Save,
  CheckCircle,
  X,
} from "lucide-react";
import { fetchUserProfile, updateUserProfile } from "../../controllers/userController";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [updating, setUpdating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFetchUserProfile = async () => {
    try {
      setLoading(true);
      const result = await fetchUserProfile();
      if (result?.success) {
        setUserProfile(result.data);
        setEditForm(result.data);
      } else {
        setError(result?.error || "Failed to load profile");
      }
    } catch (err) {
      setError(err?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);

      console.log("🔍 EditForm before update:", editForm);
      console.log("📱 Phone in editForm:", editForm.phone);
      console.log("🆔 UserProfile ID:", userProfile?.id);

      const result = await updateUserProfile(userProfile, editForm);

      if (result?.success) {
        setUserProfile(result.data);
        setIsEditing(false);

        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 1100);
      } else {
        alert(result?.error || "Update failed");
      }
    } catch (error) {
      alert("Update failed");
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    handleFetchUserProfile();
  }, []);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const roleChip = useMemo(() => {
    const isAdmin = userProfile?.role === "admin";
    return {
      text: (userProfile?.role || "user").toUpperCase(),
      cls: isAdmin ? "from-fuchsia-500 to-purple-600" : "from-cyan-400 to-blue-500",
    };
  }, [userProfile?.role]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neon-blue px-4">
        <div className="max-w-md w-full rounded-2xl border border-cyan-400/10 bg-white/5 p-6 text-center">
          <p className="text-white font-semibold mb-2">Something went wrong</p>
          <p className="text-white/70 text-sm wrap-break-word">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neon-blue relative overflow-hidden">
      {/* ================== BACKGROUND LAYERS (GLOBAL CSS) ================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-cyan-500/10 blur-3xl animate-floatSlow" />
        <div className="absolute -bottom-48 -right-48 h-155 w-155 rounded-full bg-blue-500/10 blur-3xl animate-floatSlow2" />

        <div className="absolute left-1/2 -top-30 h-105 w-180 -translate-x-1/2 rotate-12 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl animate-sweep" />
        <div className="absolute left-1/2 -bottom-40 h-130 w-205 -translate-x-1/2 -rotate-12 bg-linear-to-r from-transparent via-blue-500/10 to-transparent blur-2xl animate-sweep2" />

        <div className="absolute inset-0 opacity-[0.10] bg-[linear-linear(to_right,rgba(56,189,248,0.18)_1px,transparent_1px),linear-linear(to_bottom,rgba(56,189,248,0.18)_1px,transparent_1px)] bg-size-[42px_42px]" />

        <div className="absolute inset-0 opacity-90">
          <div className="particle-layer particle-1" />
          <div className="particle-layer particle-2" />
          <div className="particle-layer particle-3" />
        </div>

        <div className="absolute inset-0 bg-neon-vignette" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-23 sm:pt-28 pb-12">
        {/* ================== TOP HEADER ================== */}
        <div className="mb-6 sm:mb-8">
          <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-linear-to-r from-[#071226]/80 via-[#071a33]/70 to-[#06213a]/70 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-linear(circle_at_top_right,rgba(34,211,238,0.18),transparent_55%)]" />
            <div className="absolute inset-0 opacity-40 animate-shimmer bg-[linear-linear(120deg,transparent,rgba(34,211,238,0.12),transparent)]" />

            <div className="relative p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Profile
                </h1>
                <p className="text-cyan-100/70 mt-1 text-xs sm:text-sm md:text-base">
                  Manage your personal info, contact details and account settings.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="inline-flex sm:hidden text-[11px] text-cyan-50/70 px-3 py-2 rounded-xl border border-cyan-400/15 bg-white/5">
                  Last updated: {formatDate(userProfile?.updatedAt || userProfile?.createdAt)}
                </span>

                <span className="hidden md:inline-flex text-xs text-cyan-50/70 px-3 py-2 rounded-xl border border-cyan-400/15 bg-white/5">
                  Last updated: {formatDate(userProfile?.updatedAt || userProfile?.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================== DASHBOARD GRID ================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 sm:gap-6">
          {/* LEFT: Profile card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-white/5 overflow-hidden hover:shadow-[0_0_40px_-20px_rgba(34,211,238,0.65)] transition-shadow">
            <div className="p-5 sm:p-6 md:p-7 relative">
              <div className="absolute inset-0 bg-[radial-linear(circle_at_top,rgba(34,211,238,0.16),transparent_55%)]" />
              <div className="absolute inset-0 opacity-25 animate-shimmerSlow bg-[linear-linear(120deg,transparent,rgba(59,130,246,0.12),transparent)]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 text-cyan-50/80 text-xs">
                    <Shield size={14} className="text-cyan-300" />
                    Account Role
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-white text-xs font-semibold border border-cyan-300/20 bg-linear-to-r ${roleChip.cls}`}
                  >
                    <Shield size={14} />
                    {roleChip.text}
                  </span>
                </div>

                <div className="mt-6 flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-cyan-500/12 blur-2xl animate-glowPulse" />
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-linear-to-r from-cyan-300 to-blue-500 p-0.5 relative shadow-[0_0_34px_-18px_rgba(34,211,238,0.9)]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#020614] flex items-center justify-center">
                        {userProfile?.image ? (
                          <Image
                            src={userProfile.image}
                            alt={userProfile.name || "User"}
                            width={112}
                            height={112}
                            className="object-cover rounded-full"
                          />
                        ) : (
                          <User className="text-white w-10 h-10" />
                        )}
                      </div>
                    </div>
                  </div>

                  <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-white tracking-tight wrap-break-word">
                    {userProfile?.name || "Unnamed User"}
                  </h2>
                  <p className="mt-1 text-cyan-100/70 text-xs sm:text-sm wrap-break-word">
                    {userProfile?.email || "No email"}
                  </p>

                  {/* mini stats */}
                  <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-3 w-full">
                    <MiniStat title="Status" value="Active" valueClass="text-emerald-300" />
                    <MiniStat
                      title="Access"
                      value={userProfile?.role === "admin" ? "Full" : "Limited"}
                      valueClass="text-cyan-300"
                    />
                    <MiniStat
                      title="Since"
                      value={new Date(userProfile?.createdAt).getFullYear()}
                      valueClass="text-blue-200"
                    />
                  </div>

                  <div className="mt-5 sm:mt-6 w-full">
                    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4 text-left">
                      <p className="text-cyan-50/60 text-xs mb-2">Quick Notes</p>
                      <p className="text-cyan-50/80 text-sm">
                        Keep your phone & address updated for smoother account recovery and
                        deliveries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom strip */}
            <div className="px-5 sm:px-6 md:px-7 py-4 sm:py-5 border-t border-cyan-400/15 bg-linear-to-r from-[#061126]/60 via-[#071a33]/40 to-[#06213a]/40">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-cyan-50/60">Member Since</div>
                <div className="text-xs font-semibold text-white text-right">
                  {formatDate(userProfile?.createdAt)}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Details / Edit */}
          <div className="space-y-5 sm:space-y-6">
            {!isEditing ? (
              <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-white/5 overflow-hidden hover:shadow-[0_0_40px_-22px_rgba(59,130,246,0.55)] transition-shadow">
                <div className="p-5 sm:p-6 md:p-7 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/8 to-blue-500/8" />
                  <div className="absolute inset-0 opacity-20 animate-shimmerSlow bg-[linear-linear(120deg,transparent,rgba(34,211,238,0.10),transparent)]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          Personal Information
                        </h3>
                        <p className="text-cyan-100/60 text-xs sm:text-sm mt-1">
                          Your primary contact details and basic profile data.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (isEditing) setEditForm(userProfile);
                          setIsEditing(!isEditing);
                        }}
                        className="w-full sm:w-auto justify-center group px-5 py-3 rounded-2xl bg-cyan-400/10 hover:bg-cyan-400/15 border border-cyan-300/20 text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_0_0_rgba(34,211,238,0.0)] hover:shadow-[0_0_30px_-12px_rgba(34,211,238,0.6)]"
                      >
                        {isEditing ? (
                          <>
                            <X size={18} className="group-hover:scale-110 transition-transform" />
                            <span className="font-semibold">Cancel</span>
                          </>
                        ) : (
                          <>
                            <Edit2
                              size={18}
                              className="group-hover:scale-110 transition-transform"
                            />
                            <span className="font-semibold">Edit Profile</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <InfoCard icon={Mail} label="Email Address" value={userProfile.email} />
                      <InfoCard
                        icon={Phone}
                        label="Phone Number"
                        value={userProfile.phone || "Not provided"}
                      />
                      <InfoCard
                        icon={MapPin}
                        label="Location"
                        value={userProfile.address || "Not provided"}
                      />
                      <InfoCard
                        icon={Calendar}
                        label="Member Since"
                        value={formatDate(userProfile.createdAt)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-white/5 overflow-hidden hover:shadow-[0_0_45px_-22px_rgba(34,211,238,0.6)] transition-shadow">
                <div className="p-5 sm:p-6 md:p-7 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 opacity-20 animate-shimmerSlow bg-[linear-linear(120deg,transparent,rgba(59,130,246,0.10),transparent)]" />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 sm:mb-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          Edit Profile
                        </h3>
                        <p className="text-cyan-100/60 text-xs sm:text-sm mt-1">
                          Update your details and save changes.
                        </p>
                      </div>
                      <span className="w-fit text-xs text-cyan-50/70 px-3 py-2 rounded-xl border border-cyan-400/15 bg-cyan-400/5">
                        Tip: Use real phone for OTP
                      </span>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <ModernInput
                          label="Full Name"
                          value={editForm.name}
                          onChange={(v) => setEditForm({ ...editForm, name: v })}
                          icon={User}
                        />
                        <ModernInput
                          label="Email Address"
                          value={editForm.email}
                          onChange={(v) => setEditForm({ ...editForm, email: v })}
                          icon={Mail}
                        />
                        <ModernInput
                          label="Phone Number"
                          value={editForm.phone}
                          onChange={(v) => setEditForm({ ...editForm, phone: v })}
                          icon={Phone}
                        />
                        <ModernInput
                          label="Location"
                          value={editForm.address}
                          onChange={(v) => setEditForm({ ...editForm, address: v })}
                          icon={MapPin}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setEditForm(userProfile);
                            setIsEditing(false);
                          }}
                          className="w-full sm:flex-1 py-4 rounded-2xl bg-cyan-400/5 hover:bg-cyan-400/10 border border-cyan-400/15 text-white font-semibold transition-all duration-300"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          disabled={updating}
                          className="w-full sm:flex-1 py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_34px_-18px_rgba(34,211,238,0.9)] hover:shadow-[0_0_46px_-18px_rgba(59,130,246,0.9)]"
                        >
                          {updating ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Card */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/15 bg-white/5 overflow-hidden hover:shadow-[0_0_38px_-22px_rgba(34,211,238,0.55)] transition-shadow">
              <div className="p-5 sm:p-6 md:p-7 relative">
                <div className="absolute inset-0 bg-[radial-linear(circle_at_top_left,rgba(34,211,238,0.14),transparent_55%)]" />
                <div className="absolute inset-0 opacity-25 animate-shimmerSlow bg-[linear-linear(120deg,transparent,rgba(34,211,238,0.10),transparent)]" />
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                    Security & Tips
                  </h3>
                  <p className="text-cyan-100/60 text-xs sm:text-sm">
                    Keep your info accurate to protect your account.
                  </p>

                  <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TipCard title="Use strong password" desc="Mix letters, numbers and symbols." />
                    <TipCard title="Keep phone updated" desc="For OTP and recovery alerts." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
          <div className="relative w-full max-w-md rounded-3xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl p-6 sm:p-7 overflow-hidden">
            <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/12 blur-3xl animate-glowPulse" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/12 blur-3xl animate-glowPulse" />
            <div className="relative text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-18px_rgba(34,211,238,0.9)]">
                <CheckCircle size={30} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Profile Updated!</h3>
              <p className="text-cyan-50/70 text-sm">Your changes were saved successfully.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== Small Components ===================== */

function InfoCard({ icon: Icon, label, value }) {
  const [expanded, setExpanded] = useState(false);
  const text = value ?? "";

  return (
    <div
      onClick={() => setExpanded((s) => !s)}
      className="group relative cursor-pointer select-none p-5 rounded-2xl bg-cyan-400/5 hover:bg-cyan-400/8 border border-cyan-400/15 transition-all duration-300 hover:shadow-[0_0_34px_-22px_rgba(34,211,238,0.7)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-linear(circle_at_top,rgba(34,211,238,0.14),transparent_60%)]" />

      <div className="relative flex items-start gap-4">
        <div className="shrink-0 p-3 rounded-xl bg-linear-to-br from-cyan-400/15 to-blue-500/15 border border-cyan-400/15">
          <Icon size={20} className="text-cyan-300" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-cyan-50/55 mb-1">{label}</p>

          <p
            className={`text-white font-semibold transition-all duration-300 ${
              expanded ? "whitespace-normal wrap-break-word leading-6" : "truncate"
            }`}
            title={!expanded ? String(text) : ""}
          >
            {text}
          </p>

          {/* small hint only when long */}
          {typeof text === "string" && text.length > 28 && (
            <span className="mt-1 inline-block text-[12px] font-bold text-cyan-300/60">
              {expanded ? "Tap to collapse" : "Tap to expand"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ModernInput({ label, value, onChange, icon: Icon }) {
  return (
    <div className="space-y-2">
      <label className="text-cyan-50/80 text-sm font-semibold flex items-center gap-2">
        <Icon size={16} className="text-cyan-300" />
        {label}
      </label>
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-4 rounded-2xl bg-cyan-400/5 border border-cyan-400/15 text-white placeholder-cyan-50/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/35 focus:border-cyan-300/35 transition-all duration-300"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </div>
  );
}

function MiniStat({ title, value, valueClass = "text-white" }) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center hover:shadow-[0_0_30px_-22px_rgba(34,211,238,0.65)] transition-shadow">
      <div className={`text-lg font-bold ${valueClass}`}>{value}</div>
      <div className="text-[11px] text-cyan-50/55 mt-0.5">{title}</div>
    </div>
  );
}

function TipCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-5 hover:shadow-[0_0_34px_-24px_rgba(59,130,246,0.6)] transition-shadow">
      <p className="text-white font-semibold">{title}</p>
      <p className="text-cyan-50/60 text-sm mt-1">{desc}</p>
    </div>
  );
}
