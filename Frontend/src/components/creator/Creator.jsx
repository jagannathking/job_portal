import React from 'react'
import Navbar from '../components_lite/Navbar'

const About = () => {
  // Dummy data for About page
  const aboutPortal = {
    title: "JobConnect - Your Gateway to Career Success",
    mission: "Connecting talented professionals with their dream careers and helping organizations find their perfect match.",
    established: "2023",
    users: "150,000+",
    companies: "5,000+",
    successRate: "78%",
    activeListings: "12,500+"
  };
  
  const features = [
    {
      id: 1,
      title: "Smart Matching System",
      description: "Our AI-powered algorithm matches candidates with suitable job openings based on skills, experience, and preferences.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Resume Builder",
      description: "Create professional resumes with our easy-to-use builder. Stand out from the crowd with ATS-friendly templates.",
      icon: "📄"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Access mock interviews, common questions, and industry-specific tips to ace your interviews.",
      icon: "🗣️"
    },
    {
      id: 4,
      title: "Career Resources",
      description: "Extensive library of career guides, salary insights, and professional development resources.",
      icon: "📚"
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Software Developer",
      company: "TechSolutions Inc.",
      text: "JobConnect helped me land my dream job in just 2 weeks! The platform is intuitive and the job recommendations were spot-on.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Patel",
      position: "HR Manager",
      company: "Global Innovations",
      text: "As a recruiter, JobConnect has simplified our hiring process. We've found exceptional talent through this platform.",
      rating: 4.5
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Marketing Specialist",
      company: "BrandWave",
      text: "The career resources and resume builder gave me the edge I needed in a competitive job market. Highly recommended!",
      rating: 5
    }
  ];
  
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Amresh Kumar",
      role: "Project Advisor",
      bio: "Ph.D. in Electrical Engineering from Bihar University, Muzaffarpur. Assistant Professor at Rashtrakavi Ramdhari Singh Dinkar College of Engineering (RRSDCE).",
      achievements: "15+ years of academic experience, guided numerous successful student projects."
    },
    {
      id: 2,
      name: "Ankit Pathak",
      role: "Full Stack Developer",
      regNo: "21110125035",
      bio: "Passionate about creating user-friendly web applications. Expertise in MERN stack and modern JavaScript frameworks.",
      achievements: "Developed 10+ successful web applications, open-source contributor."
    },
    {
      id: 3,
      name: "Ritik Shrivastava",
      role: "UI/UX Designer",
      regNo: "21110125043",
      bio: "Creative designer with a keen eye for detail and user experience. Specializes in responsive and accessible web design.",
      achievements: "Designed interfaces for 5+ commercial applications, advocate for inclusive design."
    },
    {
      id: 4,
      name: "Gaurav Kumar",
      role: "Research Analyst",
      regNo: "21110125023",
      bio: "Skilled in market research and data analysis. Focuses on identifying industry trends and user needs.",
      achievements: "Conducted comprehensive research studies on employment trends and user behavior."
    }
  ];
  
  const milestones = [
    {
      id: 1,
      year: "2023",
      title: "Project Inception",
      description: "JobConnect started as a college project under the guidance of Dr. Amresh Kumar."
    },
    {
      id: 2,
      year: "2023",
      title: "Beta Launch",
      description: "First version released to a select group of users and companies for testing."
    },
    {
      id: 3,
      year: "2024",
      title: "Public Release",
      description: "Official launch with enhanced features and improved user interface."
    },
    {
      id: 4,
      year: "2024",
      title: "50,000 Users",
      description: "Reached milestone of 50,000 active users and 1,000 partnered companies."
    },
    {
      id: 5,
      year: "2025",
      title: "Mobile App Launch",
      description: "Expanded platform accessibility with iOS and Android applications."
    }
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">About {aboutPortal.title}</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">{aboutPortal.mission}</p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div className="bg-blue-800 rounded-lg p-5">
              <p className="text-3xl font-bold">{aboutPortal.users}</p>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-5">
              <p className="text-3xl font-bold">{aboutPortal.companies}</p>
              <p className="text-sm">Partner Companies</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-5">
              <p className="text-3xl font-bold">{aboutPortal.successRate}</p>
              <p className="text-sm">Success Rate</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-5">
              <p className="text-3xl font-bold">{aboutPortal.activeListings}</p>
              <p className="text-sm">Job Listings</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Discover what makes JobConnect the preferred platform for job seekers and employers.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.id} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg text-3xl">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Meet the talented individuals behind JobConnect.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <div className="h-40 w-40 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-2xl font-bold text-blue-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="mt-4 text-center text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-center text-blue-600">{member.role}</p>
                    {member.regNo && (
                      <p className="text-center text-sm text-gray-500">Reg No: {member.regNo}</p>
                    )}
                    <p className="mt-4 text-gray-500 text-sm">{member.bio}</p>
                    <p className="mt-2 text-gray-500 text-sm">{member.achievements}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Success stories from job seekers and employers who used our platform.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700">
                      {testimonial.name.split(' ')[0][0]}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(testimonial.rating) ? "★" : i < testimonial.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Key milestones in the development of JobConnect.
            </p>
          </div>
          
          <div className="mt-10 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-between">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="relative">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium mx-auto">
                    {milestone.year}
                  </div>
                  <div className="mt-4 w-32 sm:w-40 text-center">
                    <h4 className="text-lg font-medium text-gray-900">{milestone.title}</h4>
                    <p className="text-sm text-gray-500">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to join JobConnect?</h2>
          <p className="mt-4 text-xl text-blue-100">Start your journey to career success today.</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                Sign Up
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="#" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About