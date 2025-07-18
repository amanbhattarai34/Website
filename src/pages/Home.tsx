import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Phone, Mail, Calendar, Award, Building, BookOpen, ExternalLink, Linkedin, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Aman
                  <span className="text-blue-600 block">Bhattarai</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Civil Engineering Graduate | Infrastructure Research Intern | Mathematics Tutor | Technical Writer
                </p>
                <p className="text-lg text-gray-500 max-w-2xl">
                  A passionate 24-year-old engineer and researcher specializing in infrastructure development, 
                  hydropower projects, and educational mentoring. Currently working as an Infrastructure Research 
                  Intern while sharing knowledge through tutoring and technical writing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative z-10">
                  View Projects
                  <BookOpen className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  </span>
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/aman-bhattarai-667298255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-blue-600 group-hover:text-blue-700" size={20} />
                </a>
                <a
                  href="https://amanb34.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Globe className="text-green-600 group-hover:text-green-700" size={20} />
                </a>
                <a
                  href="https://www.goodreads.com/user/show/71923114-aman-bhattarai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <BookOpen className="text-orange-600 group-hover:text-orange-700" size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Civil Engineer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">80%</h3>
              <p className="text-gray-600">Academic Average</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg mb-4">
                <Building size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-lg mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600">Published Articles</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-lg mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
              <p className="text-gray-600">Years Old</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+977 9840185108</p>
                <p className="text-gray-600">+977 9810185108</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">amanbhattarai17@outlook.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need engineering consultation, tutoring services, or project collaboration, 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tutoring"
              className="group inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
              Book a Session
              <Calendar className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 flex items-center">
              Contact Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;