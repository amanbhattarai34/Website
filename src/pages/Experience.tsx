import React from 'react';
import { Briefcase, MapPin, Calendar, Users, Wrench, BookOpen, Building } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my hands-on experience in civil engineering and education, from hydropower projects to tutoring.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {/* Current Role */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Building className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Infrastructure Research Intern</h3>
                  <p className="text-lg text-gray-600">Research & Development</p>
                  <p className="text-green-600 font-semibold">Current Position</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="mr-2" size={16} />
                <span>April 2025 - Present</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities & Research Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Wrench className="text-green-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Conducting research on sustainable infrastructure development and innovative construction methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-green-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Analyzing infrastructure projects for optimization opportunities and environmental impact assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-green-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Preparing technical reports and documentation for research findings and project recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-green-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Collaborating with senior researchers on hydropower and structural engineering projects</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Research Focus:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sustainable construction practices</li>
                    <li>• Infrastructure resilience</li>
                    <li>• Project optimization strategies</li>
                    <li>• Environmental impact studies</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Skills Developed:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Research methodology</li>
                    <li>• Technical writing</li>
                    <li>• Data analysis</li>
                    <li>• Project evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Assistant Site Engineering */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Assistant Site Engineering</h3>
                  <p className="text-lg text-gray-600">Sanjen Hydropower Project, Rasuwa</p>
                  <p className="text-blue-600 font-semibold">Chilime Engineering Services Company</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="mr-2" size={16} />
                <span>April 2024</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-700">
                  <strong>Location:</strong> Sanjen Hydropower Project site in Rasuwa district, a mountainous region of Nepal
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Assisted senior engineers in tunnel grouting operations, ensuring structural integrity of underground passages</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Participated in water pressure testing procedures to verify system reliability and safety standards</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Supported re-concreting activities, gaining hands-on experience with concrete mix design and placement</span>
                  </li>
                  <li className="flex items-start">
                    <Wrench className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Observed and learned hydropower project site operations, including safety protocols and quality control measures</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Skills Developed:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Site safety management</li>
                    <li>• Quality control procedures</li>
                    <li>• Team coordination</li>
                    <li>• Technical documentation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Project Impact:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Power generation capacity: 40 MW</li>
                    <li>• Beneficiary households: 5,000+</li>
                    <li>• Project duration: 4 years</li>
                    <li>• Investment: NPR 8 billion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tutoring Experience */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Mathematics & Analytics Tutor</h3>
                  <p className="text-green-600 font-semibold">Tutors Inc.</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="mr-2" size={16} />
                <span>January 2024 - Present</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Teaching Specializations:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <BookOpen className="text-green-600 mx-auto mb-2" size={24} />
                    <h5 className="font-semibold text-gray-900">Mathematics</h5>
                    <p className="text-sm text-gray-600">Calculus, Algebra, Geometry</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <BookOpen className="text-green-600 mx-auto mb-2" size={24} />
                    <h5 className="font-semibold text-gray-900">Statistics</h5>
                    <p className="text-sm text-gray-600">Probability, Hypothesis Testing</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <BookOpen className="text-green-600 mx-auto mb-2" size={24} />
                    <h5 className="font-semibold text-gray-900">Data Analytics</h5>
                    <p className="text-sm text-gray-600">Python, Excel, Visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Teaching Approach & Methodology:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Conduct personalized one-on-one tutoring sessions tailored to individual learning styles and pace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Serve both bachelor's level university students and high school students preparing for entrance exams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Develop custom study materials and practice problems based on student's curriculum and goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Utilize real-world engineering examples to make mathematical concepts more relatable and practical</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Student Success Metrics:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 95% student satisfaction rate</li>
                    <li>• Average grade improvement: 20%</li>
                    <li>• 50+ students tutored</li>
                    <li>• 100% exam pass rate</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Session Formats:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Individual tutoring sessions</li>
                    <li>• Group study sessions</li>
                    <li>• Online/virtual sessions</li>
                    <li>• Exam preparation intensives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Skills & Competencies Developed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hydropower engineering</li>
                <li>• Concrete technology</li>
                <li>• Structural analysis</li>
                <li>• Quality control</li>
                <li>• Site management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Skills</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Teaching & mentoring</li>
                <li>• Technical documentation</li>
                <li>• Presentation skills</li>
                <li>• Cross-cultural communication</li>
                <li>• Client relationship management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Leadership & Management</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Team coordination</li>
                <li>• Project planning</li>
                <li>• Problem-solving</li>
                <li>• Time management</li>
                <li>• Decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;