"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  MessageSquare,
  HelpCircle,
  Plus,
  Edit,
  Trash2,
  Star,
  Save,
  X,
} from "lucide-react";

export default function HomeManagementComponent() {
  const [activeTab, setActiveTab] = useState("testimonials");
  const [isVisible, setIsVisible] = useState(true);

  const cardStyle =
    "bg-[#0a0f23]/60 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500";

  return (
    <div className="relative min-h-screen p-6 overflow-auto text-slate-200">
      <div
        className={`relative z-10 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Home Page Management</h1>
          <p className="text-gray-400">
            Manage testimonials, hero banner images, and frequently asked questions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          <TabButton
            active={activeTab === "testimonials"}
            onClick={() => setActiveTab("testimonials")}
            icon={<MessageSquare size={20} />}
            label="Testimonials"
          />
          <TabButton
            active={activeTab === "banner"}
            onClick={() => setActiveTab("banner")}
            icon={<ImageIcon size={20} />}
            label="Hero Banner"
          />
          <TabButton
            active={activeTab === "faqs"}
            onClick={() => setActiveTab("faqs")}
            icon={<HelpCircle size={20} />}
            label="FAQs"
          />
        </div>

        {/* Content Sections */}
        {activeTab === "testimonials" && <TestimonialsSection cardStyle={cardStyle} />}
        {activeTab === "banner" && <BannerSection cardStyle={cardStyle} />}
        {activeTab === "faqs" && <FAQsSection cardStyle={cardStyle} />}
      </div>
    </div>
  );
}

// Tab Button Component
function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
        active
          ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/10 text-white border border-blue-500/50"
          : "bg-[#0a0f23]/40 text-gray-400 hover:text-white hover:bg-[#0a0f23]/60 border border-blue-500/10"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

// ===================== TESTIMONIALS SECTION =====================
function TestimonialsSection({ cardStyle }) {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "রাশেদ মাহমুদ",
      role: "CEO, TechCorp",
      image: "https://i.ibb.co.com/H998MXC/image.png",
      text: "এই কোম্পানির সার্ভিস আমাদের ব্যবসার গ্রোথে বড় ভূমিকা রেখেছে। তাদের প্রফেশনাল অ্যাপ্রোচ এবং কোয়ালিটি সার্ভিস সত্যিই অভূতপূর্ব।",
      rating: 5,
    },
    {
      id: 2,
      name: "সাদিয়া ইসলাম",
      role: "Marketing Director",
      image: "https://i.pravatar.cc/150?img=45",
      text: "ডিজাইন কোয়ালিটি এবং সাপোর্ট টিম দুটোই খুবই প্রফেশনাল ছিল। আমাদের ব্র্যান্ডের জন্য পারফেক্ট সলিউশন দিয়েছে।",
      rating: 5,
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    text: "",
    rating: 5,
  });

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({ name: "", role: "", image: "", text: "", rating: 5 });
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial.id);
    setFormData(testimonial);
  };

  const handleSave = () => {
    if (editingId) {
      setTestimonials(
        testimonials.map((t) => (t.id === editingId ? { ...formData, id: editingId } : t))
      );
      setEditingId(null);
    } else {
      setTestimonials([...testimonials, { ...formData, id: Date.now() }]);
      setIsAdding(false);
    }
    setFormData({ name: "", role: "", image: "", text: "", rating: 5 });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: "", role: "", image: "", text: "", rating: 5 });
  };

  return (
    <div className="space-y-6">
      {/* Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Manage Testimonials</h2>
        {!isAdding && !editingId && (
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <Plus size={20} />
            Add Testimonial
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId) && (
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Testimonial" : "Add New Testimonial"}
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter role"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Image URL</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter image URL"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Testimonial Text</label>
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 min-h-[100px]"
                placeholder="Enter testimonial text"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Rating</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Star{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <Save size={20} />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={cardStyle}>
            <div className="flex items-start gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <div className="flex gap-1 my-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mt-2">{testimonial.text}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(testimonial)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-sm"
              >
                <Edit size={16} />
                Edit
              </button>
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="flex items-center gap-2 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===================== BANNER SECTION =====================
function BannerSection({ cardStyle }) {
  const [bannerData, setBannerData] = useState({
    title: "Build Modern & Scalable Web Experiences",
    subtitle: "BD-Stack Solutions Agency",
    description:
      "We create cutting-edge web applications with a focus on performance, security, and user experience.",
    primaryImage: "https://i.ibb.co/2qX3X3X/hero-image.png",
    secondaryImage: "https://i.ibb.co/1qX3X3X/hero-bg.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(bannerData);

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(bannerData);
  };

  const handleSave = () => {
    setBannerData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(bannerData);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Hero Banner Settings</h2>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <Edit size={20} />
            Edit Banner
          </button>
        )}
      </div>

      <div className={cardStyle}>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Subtitle</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Primary Image URL</label>
              <input
                type="text"
                value={formData.primaryImage}
                onChange={(e) => setFormData({ ...formData, primaryImage: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Secondary Image URL</label>
              <input
                type="text"
                value={formData.secondaryImage}
                onChange={(e) => setFormData({ ...formData, secondaryImage: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <Save size={20} />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Subtitle</h3>
              <p className="text-white">{bannerData.subtitle}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Title</h3>
              <p className="text-white text-xl font-bold">{bannerData.title}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Description</h3>
              <p className="text-gray-300">{bannerData.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Primary Image</h3>
                <Image
                  src={bannerData.primaryImage}
                  alt="Primary"
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Secondary Image</h3>
                <Image
                  src={bannerData.secondaryImage}
                  alt="Secondary"
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===================== FAQs SECTION =====================
function FAQsSection({ cardStyle }) {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What services does BD Stack Solutions offer?",
      answer:
        "We provide modern software solutions including web and mobile applications, focused on scalability, security, and performance.",
    },
    {
      id: 2,
      question: "How can I request a demo?",
      answer:
        "Simply click the 'Schedule a Call' button or contact our sales team. We'll arrange a personalized demo for you.",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ question: "", answer: "" });

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({ question: "", answer: "" });
  };

  const handleEdit = (faq) => {
    setEditingId(faq.id);
    setFormData(faq);
  };

  const handleSave = () => {
    if (editingId) {
      setFaqs(faqs.map((f) => (f.id === editingId ? { ...formData, id: editingId } : f)));
      setEditingId(null);
    } else {
      setFaqs([...faqs, { ...formData, id: Date.now() }]);
      setIsAdding(false);
    }
    setFormData({ question: "", answer: "" });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this FAQ?")) {
      setFaqs(faqs.filter((f) => f.id !== id));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ question: "", answer: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Manage FAQs</h2>
        {!isAdding && !editingId && (
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            <Plus size={20} />
            Add FAQ
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId) && (
        <div className={cardStyle}>
          <h3 className="text-xl font-semibold mb-4">{editingId ? "Edit FAQ" : "Add New FAQ"}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Question</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter question"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Answer</label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full px-4 py-2 bg-[#05060a] border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 min-h-[100px]"
                placeholder="Enter answer"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <Save size={20} />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className={cardStyle}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(faq)}
                  className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
