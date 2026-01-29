"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail, MapPin, Calendar, Search } from "lucide-react";
import { teamController } from '@/controllers';

const TeamSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [teamCategories, setTeamCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await teamController.getCategories();
        setTeamCategories(categories);
        console.log("✅ Getting categories:", categories)
      } catch (error) {
        console.error("❌ Failed to load team categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Subtle particles (less “party”, more “premium”)
  const [particles] = useState(() => {
    return [...Array(10)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 14,
      size: 1 + Math.random() * 2,
      opacity: 0.08 + Math.random() * 0.12,
    }));
  });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const teamMembers = useMemo(
    () => [
      {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO & Co-Founder",
        department: "Leadership",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Visionary leader with 10+ years in tech innovation. Focused on building solutions that scale and create measurable business impact.",
        location: "San Francisco, CA",
        joinDate: "Jan 2020",
        skills: ["Strategy", "Leadership", "Partnerships"],
        social: {
          linkedin: "https://linkedin.com/in/sarahjohnson",
          twitter: "https://twitter.com/sarahjohnson",
          email: "sarah@bdstacksolutions.com",
        },
      },
      {
        id: 2,
        name: "Michael Chen",
        position: "CTO & Co-Founder",
        department: "Engineering",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Full-stack architect specializing in scalable systems and AI integration. Led teams across high-growth environments and enterprise delivery.",
        location: "Austin, TX",
        joinDate: "Jan 2020",
        skills: ["Architecture", "AI/ML", "Engineering Leadership"],
        social: {
          linkedin: "https://linkedin.com/in/michaelchen",
          github: "https://github.com/michaelchen",
          email: "michael@bdstacksolutions.com",
        },
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        position: "Lead UI/UX Designer",
        department: "Design",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "User-centered designer focused on clarity, conversion, and premium brand systems. Builds interfaces that feel effortless and modern.",
        location: "New York, NY",
        joinDate: "Mar 2021",
        skills: ["Product Design", "Prototyping", "User Research"],
        social: {
          linkedin: "https://linkedin.com/in/emilyrodriguez",
          twitter: "https://twitter.com/emilydesigns",
          email: "emily@bdstacksolutions.com",
        },
      },
      {
        id: 4,
        name: "David Kim",
        position: "Senior Full-Stack Developer",
        department: "Engineering",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Product-minded engineer with strong frontend craft and backend reliability. Enjoys building robust apps and mentoring developers.",
        location: "Seattle, WA",
        joinDate: "Jul 2021",
        skills: ["React", "Node.js", "AWS"],
        social: {
          linkedin: "https://linkedin.com/in/davidkim",
          github: "https://github.com/davidkim",
          email: "david@bdstacksolutions.com",
        },
      },
      {
        id: 5,
        name: "Aisha Patel",
        position: "AI/ML Engineer",
        department: "Engineering",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80",
        bio: "Machine learning specialist developing intelligent systems and applied AI solutions with strong research fundamentals.",
        location: "Boston, MA",
        joinDate: "Sep 2022",
        skills: ["Machine Learning", "Python", "TensorFlow"],
        social: {
          linkedin: "https://linkedin.com/in/aishapatel",
          github: "https://github.com/aishapatel",
          email: "aisha@bdstacksolutions.com",
        },
      },
      {
        id: 6,
        name: "James Wilson",
        position: "Mobile App Developer",
        department: "Engineering",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Mobile developer building polished cross-platform apps with performance focus and clean UX. Strong delivery mindset.",
        location: "Los Angeles, CA",
        joinDate: "Nov 2022",
        skills: ["React Native", "Flutter", "iOS/Android"],
        social: {
          linkedin: "https://linkedin.com/in/jameswilson",
          github: "https://github.com/jameswilson",
          email: "james@bdstacksolutions.com",
        },
      },
      {
        id: 7,
        name: "Alex Thompson",
        position: "Frontend Development Intern",
        department: "Intern",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "CS student learning modern web development while contributing to real projects with guidance from senior engineers.",
        location: "Chicago, IL",
        joinDate: "Jan 2024",
        skills: ["React", "JavaScript", "Git"],
        social: {
          linkedin: "https://linkedin.com/in/alexthompson",
          github: "https://github.com/alexthompson",
          email: "alex.intern@bdstacksolutions.com",
        },
      },
      {
        id: 8,
        name: "Maya Singh",
        position: "UX Design Intern",
        department: "Intern",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Design student exploring research and interaction design through hands-on product work and structured mentorship.",
        location: "Portland, OR",
        joinDate: "Jun 2024",
        skills: ["Figma", "Prototyping", "User Research"],
        social: {
          linkedin: "https://linkedin.com/in/mayasingh",
          github: "https://github.com/mayasingh",
          email: "maya.intern@bdstacksolutions.com",
        },
      },
      {
        id: 9,
        name: "Daniel Rodriguez",
        position: "Data Science Intern",
        department: "Intern",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Stats major focused on practical analytics and ML fundamentals. Supports data tasks and learns production workflows.",
        location: "Denver, CO",
        joinDate: "Sep 2024",
        skills: ["Python", "SQL", "Data Analysis"],
        social: {
          linkedin: "https://linkedin.com/in/danielrodriguez",
          github: "https://github.com/danielrodriguez",
          email: "daniel.intern@bdstacksolutions.com",
        },
      },
    ],
    [],
  );

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleDepartmentChange = (dept) => {
    setSelectedDepartment(dept);
    setCurrentPage(1);
  };

  const departments = useMemo(() => {
    const allCount = teamMembers.length;
    const counts = {
      Leadership: teamMembers.filter((m) => m.department === "Leadership").length,
      Engineering: teamMembers.filter((m) => m.department === "Engineering").length,
      Design: teamMembers.filter((m) => m.department === "Design").length,
      Intern: teamMembers.filter((m) => m.department === "Intern").length,
    };
    return [
      { name: "All", count: allCount },
      { name: "Leadership", count: counts.Leadership },
      { name: "Engineering", count: counts.Engineering },
      { name: "Design", count: counts.Design },
      { name: "Intern", count: counts.Intern },
    ];
  }, [teamMembers]);

  const membersPerPage = 9;

  const filteredMembers = useMemo(() => {
    const byDept =
      selectedDepartment === "All"
        ? teamMembers
        : teamMembers.filter((m) => m.department === selectedDepartment);

    const q = query.trim().toLowerCase();
    if (!q) return byDept;

    return byDept.filter((m) => {
      return (
        m.name.toLowerCase().includes(q) ||
        m.position.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q) ||
        (m.skills || []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [teamMembers, selectedDepartment, query]);

  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / membersPerPage));
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  return (
    <section className="relative min-h-screen overflow-hidden bg-neon-blue">
      {/* Background layers from globals.css utilities */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
        <div className="absolute inset-0 bg-neon-vignette opacity-90" />

        <div
          className="absolute -top-24 -left-24 h-105 w-105 rounded-full bg-cyan-500/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="absolute -bottom-28 -right-28 h-115 w-115 rounded-full bg-blue-500/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
          }}
        />

        <div className="particle-layer particle-1" />
        <div className="particle-layer particle-2" />
        <div className="particle-layer particle-3" />

        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-300/40 animate-float-slow"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80 animate-pulse-slow" />
            Our People
          </div>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-5xl">
            Meet the team at
            <br className="mb-2" />
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              BD Stack Solutions
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            A focused group of designers, engineers, and builders delivering clean, reliable digital
            products.
          </p>

          {/* Search */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <div className="relative w-full sm:w-105">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-linear-to-r from-cyan-500/20 via-sky-500/10 to-blue-500/20 blur-xl" />
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-200/80" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by name, role, skill..."
                className={[
                  "relative w-full rounded-2xl",
                  "border border-white/10",
                  "bg-slate-950/40 backdrop-blur-xl",
                  "px-11 py-3.5 text-sm text-white",
                  "placeholder:text-white/45",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_rgba(0,0,0,0.35)]",
                  "transition-all duration-300",
                  "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/15",
                  "hover:border-white/15",
                ].join(" ")}
              />
            </div>
          </div>
        </div>

        {/* Department Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-in-up-delayed">
          {departments.map((dept) => {
            const active = selectedDepartment === dept.name;
            return (
              <button
                key={dept.name}
                onClick={() => handleDepartmentChange(dept.name)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  "border",
                  active
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/2 text-white/70 hover:bg-white/4 hover:text-white",
                ].join(" ")}
              >
                {dept.name}{" "}
                <span className={active ? "text-cyan-200/80" : "text-white/40"}>
                  ({dept.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up-more-delayed">
          {currentMembers.map((member) => (
            <article
              key={member.id}
              className={[
                "group relative overflow-hidden rounded-2xl border border-slate-700/40",
                "bg-slate-900/50 p-6",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_40px_rgba(0,0,0,0.35)]",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-2 hover:scale-[1.01]",
                "hover:border-indigo-400/35",
                "hover:bg-linear-to-b hover:from-slate-900/70 hover:via-slate-900/60 hover:to-slate-900/50",
                "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.18),0_30px_70px_rgba(0,0,0,0.55)]",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl" />
                <div className="absolute -bottom-28 right-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-indigo-400/15 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-700/40 bg-slate-800/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.06]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-semibold text-white">{member.name}</h3>
                  <p className="mt-0.5 text-sm text-white/70">{member.position}</p>

                  <div className="mt-2 inline-flex items-center rounded-full border border-slate-700/40 bg-slate-800/30 px-3 py-1 text-xs text-white/60">
                    {member.department}
                  </div>
                </div>
              </div>

              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/60">
                {member.bio}
              </p>

              <div className="mt-5 grid gap-2 text-xs text-white/55">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-300/80" />
                  <span className="truncate">{member.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-300/80" />
                  <span>Joined {member.joinDate}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700/40 bg-slate-800/30 px-3 py-1 text-xs text-white/60 transition group-hover:border-indigo-400/25 group-hover:text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-indigo-300/80" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4 text-indigo-300/80" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4 text-indigo-300/80" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="icon-btn"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 text-indigo-300/80" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2 animate-fade-in-up">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={[
                "rounded-xl border px-4 py-2 text-sm font-medium transition",
                currentPage === 1
                  ? "border-white/10 bg-white/2 text-white/30 cursor-not-allowed"
                  : "border-white/10 bg-white/3 text-white/70 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const active = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={[
                    "h-10 w-10 rounded-xl border text-sm font-semibold transition",
                    active
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/3 text-white/65 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={[
                "rounded-xl border px-4 py-2 text-sm font-medium transition",
                currentPage === totalPages
                  ? "border-white/10 bg-white/2 text-white/30 cursor-not-allowed"
                  : "border-white/10 bg-white/3 text-white/70 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              Next
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="mt-6 text-center animate-fade-in-up-delayed">
          <p className="text-sm text-white/45">
            Showing {filteredMembers.length === 0 ? 0 : startIndex + 1}–
            {Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length} members
            {selectedDepartment !== "All" ? ` in ${selectedDepartment}` : ""}
            {query.trim() ? ` (filtered)` : ""}
          </p>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        :global(.icon-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.65);
          transition: 200ms ease;
        }
        :global(.icon-btn:hover) {
          border-color: rgba(99, 102, 241, 0.35);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
