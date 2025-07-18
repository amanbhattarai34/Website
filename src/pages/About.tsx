import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, Star, Trophy, BookOpen, Building, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my educational journey, achievements, and the passion that drives my engineering career.
          </p>
        </div>

        {/* Career Objective */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="mr-3 text-blue-600" size={28} />
            Career Objective
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a dedicated 24-year-old Civil Engineering graduate and current Infrastructure Research Intern, 
            I am passionate about bridging the gap between theoretical knowledge and practical applications. 
            My goal is to contribute to innovative infrastructure projects while continuously learning and 
            growing in the field of civil engineering, particularly in hydropower development, structural 
            design, and sustainable infrastructure solutions. Through my research work and technical writing, 
            I aim to share knowledge and contribute to the advancement of engineering practices.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={28} />
            Education
          </h2>
          
          <div className="space-y-8">
            {/* Bachelor's Degree */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Engineering in Civil Engineering</h3>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Calendar className="mr-2" size={16} />
                  2021 – 2025
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="mr-2 flex-shrink-0" size={16} />
                  <span>Kathmandu Engineering College, Kathmandu (Tribhuvan University Affiliate)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Trophy className="mr-2 flex-shrink-0" size={16} />
                  <span>Aggregate: Projected 80% (Results awaiting for 8th Semester)</span>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Focus Areas:</strong> Structural Engineering, Hydropower Development, 
                    Construction Management, Water Resources Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* A-Levels */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Cambridge GCSE A-levels</h3>
                <div className="flex items-center text-green-600 font-semibold">
                  <Calendar className="mr-2" size={16} />
                  2017 – 2019
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="mr-2 flex-shrink-0" size={16} />
                  <span>Budhanilkantha School, Narayanthan, Kathmandu</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium text-gray-700">Physics</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium text-gray-700">Chemistry</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium text-gray-700">Further Mathematics</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium text-gray-700">English Language</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={28} />
            Academic Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Full Scholarship Holder</h3>
                  <p className="text-gray-600">2021 – 2025</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Awarded full scholarship for 4-year bachelor's degree worth NPR 1,200,000 based on academic excellence and potential.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Value:</strong> NPR 1,200,000 (approximately $9,000 USD)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">College Topper</h3>
                  <p className="text-gray-600">2nd Semester 2022</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Achieved first rank in 2nd Semester Board Examinations, demonstrating exceptional academic performance.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Recognition:</strong> Outstanding performance in core engineering subjects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="mr-3 text-blue-600" size={28} />
            Current Role & Research
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Building className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Infrastructure Research Intern</h3>
                <p className="text-green-600 font-semibold">Current Position</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Currently working as an Infrastructure Research Intern, focusing on sustainable infrastructure 
              development, project analysis, and technical documentation. My research involves studying 
              innovative construction methodologies, environmental impact assessments, and infrastructure 
              optimization strategies.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Research Areas:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sustainable infrastructure development</li>
                <li>• Hydropower project optimization</li>
                <li>• Construction technology innovation</li>
                <li>• Environmental impact assessment</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Writing & Blogging</h3>
                <p className="text-blue-600 font-semibold">Knowledge Sharing</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              I maintain an active technical blog where I share insights on civil engineering, infrastructure 
              development, and educational content. My articles cover topics ranging from structural analysis 
              to project management, aimed at helping fellow engineers and students.
            </p>
            <a 
              href="https://amanb34.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Visit My Blog
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-3 text-blue-600" size={28} />
            My Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engineering Excellence</h3>
              <p className="text-gray-700">
                I believe in the power of engineering to transform communities and improve lives. Every project 
                is an opportunity to create sustainable, innovative solutions that stand the test of time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Sharing</h3>
              <p className="text-gray-700">
                Through tutoring, blogging, and research, I believe in sharing knowledge to elevate the 
                entire engineering community. Learning is most effective when it's collaborative and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;