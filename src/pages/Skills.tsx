import React from 'react';
import { Code, Wrench, FileText, Award, BookOpen, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "CAD & Modeling",
      icon: Wrench,
      color: "blue",
      skills: [
        { name: "AutoCAD", level: 90, description: "2D drafting and technical drawings" },
        { name: "Autodesk Civil 3D", level: 85, description: "3D modeling and civil engineering design" },
        { name: "Autodesk Fusion 360", level: 80, description: "3D design and mechanical modeling" },
        { name: "SketchUp", level: 75, description: "3D visualization and architectural modeling" }
      ]
    },
    {
      title: "GIS & Mapping",
      icon: Code,
      color: "green",
      skills: [
        { name: "ArcGIS Pro", level: 85, description: "Advanced spatial analysis and mapping" },
        { name: "QGIS", level: 80, description: "Open-source geographic information systems" }
      ]
    },
    {
      title: "Engineering Software",
      icon: Zap,
      color: "purple",
      skills: [
        { name: "HEC-RAS", level: 88, description: "1-D river flow analysis and hydraulic modeling" },
        { name: "midas Civil", level: 70, description: "Structural analysis and design software" },
        { name: "ETABS", level: 75, description: "Building analysis and design" },
        { name: "SAP2000", level: 70, description: "Structural analysis program" }
      ]
    },
    {
      title: "Documentation & Analysis",
      icon: FileText,
      color: "orange",
      skills: [
        { name: "LaTeX", level: 85, description: "Professional technical document preparation" },
        { name: "Microsoft Word", level: 95, description: "Document creation and formatting" },
        { name: "Python", level: 65, description: "Programming and data analysis" },
        { name: "Microsoft Excel", level: 90, description: "Data analysis and calculations" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AI and Disaster Management",
      issuer: "DeepLearning.AI",
      platform: "Coursera",
      date: "Jan 2025",
      description: "Application of artificial intelligence in disaster management and emergency response systems"
    },
    {
      title: "Water Resources Management and Policy",
      issuer: "University of Geneva",
      platform: "Coursera",
      date: "Nov 2024",
      description: "Comprehensive study of water resources management strategies and policy frameworks"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-600",
      green: "bg-green-100 text-green-600 border-green-600",
      purple: "bg-purple-100 text-purple-600 border-purple-600",
      orange: "bg-orange-100 text-orange-600 border-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across engineering software, programming, and documentation tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gray-200">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            category.color === 'blue' ? 'bg-blue-600' :
                            category.color === 'green' ? 'bg-green-600' :
                            category.color === 'purple' ? 'bg-purple-600' :
                            'bg-orange-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={28} />
            Courses & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <BookOpen className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                      <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Platform:</span>
                    <span className="ml-2">{cert.platform}</span>
                  </div>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-3">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reading Books</h3>
              <p className="text-gray-600 text-sm">Technical literature, engineering journals, and fiction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-3">
                <Award className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Freelance Tutoring</h3>
              <p className="text-gray-600 text-sm">Mathematics, statistics, and engineering subjects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 p-3 rounded-lg inline-block mb-3">
                <Zap className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Motorcycle Riding</h3>
              <p className="text-gray-600 text-sm">Adventure touring and mechanical understanding</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-3">
                <Code className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Printing</h3>
              <p className="text-gray-600 text-sm">Prototyping and manufacturing technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-lg inline-block mb-3">
                <Wrench className="text-red-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Startup & Entrepreneurship</h3>
              <p className="text-gray-600 text-sm">Innovation and business development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;