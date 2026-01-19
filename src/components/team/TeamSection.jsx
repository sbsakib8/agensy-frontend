"use client";
import React from 'react';
import { Linkedin, Twitter, Github, Mail, MapPin, Calendar } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Co-Founder",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Visionary leader with 10+ years in tech innovation. Passionate about building solutions that transform businesses and empower teams to achieve their full potential.",
      location: "San Francisco, CA",
      joinDate: "Jan 2020",
      skills: ["Strategic Planning", "Leadership", "Business Development"],
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@bdstacksolutions.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO & Co-Founder",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Full-stack architect specializing in scalable systems and AI integration. Led development teams at Fortune 500 companies before co-founding BD Stack Solutions.",
      location: "Austin, TX",
      joinDate: "Jan 2020",
      skills: ["System Architecture", "AI/ML", "Team Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen",
        email: "michael@bdstacksolutions.com"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead UI/UX Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Creative designer with expertise in user-centered design and modern web interfaces. Specializes in creating intuitive experiences that delight users.",
      location: "New York, NY",
      joinDate: "Mar 2021",
      skills: ["UI/UX Design", "Prototyping", "User Research"],
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilydesigns",
        email: "emily@bdstacksolutions.com"
      }
    },
    {
      id: 4,
      name: "David Kim",
      position: "Senior Full-Stack Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Passionate developer with expertise in React, Node.js, and cloud technologies. Loves building robust applications and mentoring junior developers.",
      location: "Seattle, WA",
      joinDate: "Jul 2021",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim",
        email: "david@bdstacksolutions.com"
      }
    },
    {
      id: 5,
      name: "Aisha Patel",
      position: "AI/ML Engineer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80",
      bio: "Machine learning specialist focused on developing intelligent systems and AI-powered solutions. PhD in Computer Science with publications in top-tier conferences.",
      location: "Boston, MA",
      joinDate: "Sep 2022",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      social: {
        linkedin: "https://linkedin.com/in/aishapatel",
        github: "https://github.com/aishapatel",
        email: "aisha@bdstacksolutions.com"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Mobile App Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Mobile development expert specializing in React Native and Flutter. Creates seamless cross-platform experiences with focus on performance and user engagement.",
      location: "Los Angeles, CA",
      joinDate: "Nov 2022",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      social: {
        linkedin: "https://linkedin.com/in/jameswilson",
        github: "https://github.com/jameswilson",
        email: "james@bdstacksolutions.com"
      }
    },
    {
      id: 7,
      name: "Alex Thompson",
      position: "Frontend Development Intern",
      department: "Intern",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Computer Science student passionate about web development and user interfaces. Currently learning React and modern JavaScript frameworks while contributing to real-world projects.",
      location: "Chicago, IL",
      joinDate: "Jan 2024",
      skills: ["React", "JavaScript", "CSS", "Git"],
      social: {
        linkedin: "https://linkedin.com/in/alexthompson",
        github: "https://github.com/alexthompson",
        email: "alex.intern@bdstacksolutions.com"
      }
    },
    {
      id: 8,
      name: "Maya Singh",
      position: "UX Design Intern",
      department: "Intern",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Design student with a keen eye for user experience and visual aesthetics. Exploring the intersection of design and technology through hands-on internship experience.",
      location: "Portland, OR",
      joinDate: "Jun 2024",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/mayasingh",
        github: "https://github.com/mayasingh",
        email: "maya.intern@bdstacksolutions.com"
      }
    },
    {
      id: 9,
      name: "Daniel Rodriguez",
      position: "Data Science Intern",
      department: "Intern",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Statistics major with strong analytical skills and interest in machine learning. Working on data analysis projects and learning AI/ML techniques from experienced mentors.",
      location: "Denver, CO",
      joinDate: "Sep 2024",
      skills: ["Python", "SQL", "Data Analysis", "Machine Learning"],
      social: {
        linkedin: "https://linkedin.com/in/danielrodriguez",
        github: "https://github.com/danielrodriguez",
        email: "daniel.intern@bdstacksolutions.com"
      }
    }
    
  ];


  const departments = [
    { name: "All", count: teamMembers.length },
    { name: "Leadership", count: teamMembers.filter(m => m.department === "Leadership").length },
    { name: "Engineering", count: teamMembers.filter(m => m.department === "Engineering").length },
    { name: "Design", count: teamMembers.filter(m => m.department === "Design").length },
    { name: "Intern", count: teamMembers.filter(m => m.department === "Intern").length },
  ];

  const [selectedDepartment, setSelectedDepartment] = React.useState("All");
  const [currentPage, setCurrentPage] = React.useState(1);
  const membersPerPage = 9;

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  // Calculate pagination
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  // Reset to first page when department changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <span>Meet Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Minds Behind
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BD Stack Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a diverse team of passionate professionals dedicated to delivering exceptional 
            digital solutions. Get to know the experts who make innovation happen.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.name}
              onClick={() => setSelectedDepartment(dept.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDepartment === dept.name
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {dept.name} ({dept.count})
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6">
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 group-hover:border-cyan-500/50 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-1">{member.position}</p>
                  <p className="text-sm text-gray-400">{member.department}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    {member.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                    Joined {member.joinDate}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-slate-700 text-gray-300 rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 text-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 text-gray-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 text-gray-400 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-slate-700 text-gray-400 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length} team members
            {selectedDepartment !== "All" && ` in ${selectedDepartment}`}
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We are always looking for talented individuals who share our passion for innovation and excellence. 
              Check out our open positions and become part of our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-slate-600 text-gray-300 font-semibold rounded-full hover:border-cyan-500 hover:text-white transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;