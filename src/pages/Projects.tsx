import React from 'react';
import { Grid as Bridge, MapPin, Calendar, FileText, Users, Wrench } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my major academic projects showcasing engineering design, analysis, and problem-solving skills.
          </p>
        </div>

        {/* Main Project */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Bridge className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Prestressed Concrete Girder Bridge Design</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="mr-2" size={16} />
                  <span>Maruwa River, Sindhuli District, Nepal</span>
                </div>
              </div>
            </div>
            <div className="flex items-center text-blue-600 font-semibold">
              <Calendar className="mr-2" size={16} />
              <span>May 2024 – March 2025</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
              <p className="text-gray-700 leading-relaxed">
                This capstone project involves the comprehensive design and analysis of a prestressed concrete girder bridge 
                crossing the Maruwa River in Sindhuli District. The project serves as the fulfillment requirement for my 
                Bachelor's degree in Civil Engineering, demonstrating the application of theoretical knowledge to real-world 
                infrastructure challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Technical Scope</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Limit state design and analysis of bridge superstructure components including girders, deck slabs, and cross-beams</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Comprehensive substructure design including abutments, piers, and foundation systems</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Application of Indian Road Congress (IRC) design codes and specifications</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Detailed hydrological and hydraulic analysis of the Maruwa River site</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Design Considerations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Seismic analysis considering Nepal's high seismic activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Environmental impact assessment and mitigation measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cost optimization and material selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Construction methodology and sequencing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Technical Specifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">Bridge Length</h5>
                  <p className="text-2xl font-bold text-blue-600">120 m</p>
                  <p className="text-sm text-gray-600">Total span length</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">Girder Type</h5>
                  <p className="text-2xl font-bold text-blue-600">PSC I</p>
                  <p className="text-sm text-gray-600">Prestressed Concrete</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-900 mb-2">Design Load</h5>
                  <p className="text-2xl font-bold text-blue-600">IRC-6</p>
                  <p className="text-sm text-gray-600">Vehicle loading</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Project Outcomes & Learning</h4>
              <div className="space-y-3">
                <p className="text-gray-700">
                  This project has provided extensive hands-on experience in structural engineering design, 
                  reinforcing theoretical concepts with practical application. Key learning outcomes include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Advanced structural analysis techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Prestressed concrete design principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Hydraulic engineering applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Project management and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Technical documentation and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Cost estimation and economic analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Other Academic Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FileText className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Structural Analysis Projects</h3>
                  <p className="text-gray-600">Various semesters</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Multi-story building analysis using matrix methods</li>
                <li>• Truss design and optimization</li>
                <li>• Reinforced concrete frame design</li>
                <li>• Steel structure connection design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Water Resources Projects</h3>
                  <p className="text-gray-600">6th & 7th Semester</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Irrigation system design</li>
                <li>• Flood modeling and mitigation</li>
                <li>• Watershed management plan</li>
                <li>• Water treatment plant design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Wrench className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Geotechnical Projects</h3>
                  <p className="text-gray-600">5th & 6th Semester</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Slope stability analysis</li>
                <li>• Foundation design studies</li>
                <li>• Soil investigation reports</li>
                <li>• Retaining wall design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Bridge className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Transportation Projects</h3>
                  <p className="text-gray-600">7th Semester</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Highway geometric design</li>
                <li>• Traffic flow analysis</li>
                <li>• Pavement design and materials</li>
                <li>• Intersection design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software and Tools Used */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Software & Tools Used in Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Design & Modeling</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AutoCAD for 2D drafting</li>
                <li>• Autodesk Civil 3D for 3D modeling</li>
                <li>• SketchUp for visualization</li>
                <li>• Autodesk Fusion 360 for 3D design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis Software</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• HEC-RAS for hydraulic analysis</li>
                <li>• midas Civil for structural analysis</li>
                <li>• ETABS for building analysis</li>
                <li>• SAP2000 for structural modeling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• LaTeX for technical reports</li>
                <li>• Microsoft Word for documentation</li>
                <li>• Excel for calculations</li>
                <li>• Python for data analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;