import React from 'react';
import { BookOpen, Award, Image, FileText, Camera, Code, ExternalLink, Globe } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      title: 'Engineering Projects Portfolio',
      description: 'Comprehensive collection of my major engineering projects and designs',
      icon: FileText,
      items: [
        {
          name: 'Prestressed Concrete Bridge Design',
          description: 'Complete design documentation for Maruwa River Bridge',
          image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Project Report'
        },
        {
          name: 'Structural Analysis Collection',
          description: 'Various structural analysis projects and calculations',
          image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Technical Documents'
        },
        {
          name: 'CAD Drawing Portfolio',
          description: 'Professional AutoCAD and Civil 3D drawings',
          image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Technical Drawings'
        }
      ]
    },
    {
      title: 'Academic Achievements',
      description: 'Certificates, awards, and academic recognition',
      icon: Award,
      items: [
        {
          name: 'Full Scholarship Certificate',
          description: 'NPR 1,200,000 scholarship for excellence in academics',
          image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Certificate'
        },
        {
          name: 'College Topper Award',
          description: 'First rank in 2nd Semester Board Examinations',
          image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Award'
        },
        {
          name: 'Coursera Certifications',
          description: 'AI and Disaster Management, Water Resources Management',
          image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Digital Certificates'
        }
      ]
    },
    {
      title: 'Technical Resources',
      description: 'Study materials, guides, and educational resources I\'ve created',
      icon: BookOpen,
      items: [
        {
          name: 'Mathematics Study Guides',
          description: 'Comprehensive guides for calculus and linear algebra',
          image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Study Materials'
        },
        {
          name: 'Engineering Formulas Handbook',
          description: 'Quick reference for structural and hydraulic formulas',
          image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Reference Guide'
        },
        {
          name: 'Python Programming Notes',
          description: 'Beginner-friendly Python programming tutorials',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Programming Guide'
        }
      ]
    },
    {
      title: 'Site Experience Documentation',
      description: 'Photos and documentation from my hydropower project experience',
      icon: Camera,
      items: [
        {
          name: 'Sanjen Hydropower Site Photos',
          description: 'Documentation of tunnel grouting and construction activities',
          image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Site Photography'
        },
        {
          name: 'Construction Process Documentation',
          description: 'Step-by-step documentation of concrete works',
          image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Process Documentation'
        },
        {
          name: 'Equipment and Machinery Photos',
          description: 'Construction equipment and testing apparatus',
          image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Equipment Photography'
        }
      ]
    },
    {
      title: 'Software and Tools Portfolio',
      description: 'Examples of work done using various engineering software',
      icon: Code,
      items: [
        {
          name: 'AutoCAD Design Collection',
          description: 'Professional technical drawings and blueprints',
          image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'CAD Drawings'
        },
        {
          name: 'HEC-RAS Analysis Results',
          description: 'Hydraulic modeling and river flow analysis',
          image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Analysis Reports'
        },
        {
          name: 'GIS Mapping Projects',
          description: 'Spatial analysis and mapping using ArcGIS Pro',
          image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'GIS Maps'
        }
      ]
    },
    {
      title: 'Personal Projects & Interests',
      description: 'Creative projects and hobby-related work',
      icon: Image,
      items: [
        {
          name: '3D Printing Projects',
          description: 'Custom designs and prototypes created with 3D printing',
          image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: '3D Models'
        },
        {
          name: 'Motorcycle Modification Documentation',
          description: 'Technical modifications and improvements',
          image: 'https://images.pexels.com/photos/163407/motorcycles-race-helmets-pilots-163407.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Technical Documentation'
        },
        {
          name: 'Reading List & Book Reviews',
          description: 'Technical books and literature reviews',
          image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Literature Collection'
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: 'Sustainable Infrastructure Development in Nepal',
      date: 'March 2025',
      excerpt: 'Exploring innovative approaches to sustainable infrastructure development in developing countries.',
      link: 'https://amanb34.blogspot.com/',
      category: 'Infrastructure'
    },
    {
      title: 'Hydropower Engineering: Challenges and Solutions',
      date: 'February 2025',
      excerpt: 'A comprehensive analysis of hydropower project challenges and modern engineering solutions.',
      link: 'https://amanb34.blogspot.com/',
      category: 'Hydropower'
    },
    {
      title: 'Mathematics in Civil Engineering Applications',
      date: 'January 2025',
      excerpt: 'How advanced mathematics concepts apply to real-world civil engineering problems.',
      link: 'https://amanb34.blogspot.com/',
      category: 'Education'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive collection of projects, achievements, resources, and experiences 
            that showcase my journey in civil engineering and education.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-16">
          {/* Blog Posts Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-lg mr-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Technical Blog & Articles</h2>
                <p className="text-gray-600 mt-1">Latest insights and knowledge sharing from my technical blog</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center"
                  >
                    Read Article
                    <ExternalLink className="ml-1" size={14} />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="https://amanb34.blogspot.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Visit Full Blog
                <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>

          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <div key={collection.title} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{collection.title}</h2>
                    <p className="text-gray-600 mt-1">{collection.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collection.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Collection Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Engineering Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700">Technical Documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-700">Blog Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-700">Books Read</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading Profile</h3>
                <p className="text-gray-600 mb-4">
                  Passionate reader with interests in engineering, technology, and personal development.
                </p>
                <a 
                  href="https://www.goodreads.com/user/show/71923114-aman-bhattarai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
                >
                  View Goodreads Profile
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Network</h3>
                <p className="text-gray-600 mb-4">
                  Connect with me on LinkedIn for professional networking and collaboration opportunities.
                </p>
                <a 
                  href="https://www.linkedin.com/in/aman-bhattarai-667298255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Access Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Access My Collections
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Many of these collections are available for viewing and download. Whether you're a student 
              looking for study materials, a professional seeking project examples, or simply curious about 
              my work, I'm happy to share these resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">For Students</h3>
                <p className="text-sm text-gray-700">
                  Access study materials, project examples, and learning resources to support your academic journey.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">For Professionals</h3>
                <p className="text-sm text-gray-700">
                  Review project documentation, technical drawings, and professional work samples for collaboration opportunities.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Request Access
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;