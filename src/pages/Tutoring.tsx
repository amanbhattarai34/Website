import React, { useState } from 'react';
import { Users, Clock, DollarSign, BookOpen, Calculator, BarChart3, Check, Star } from 'lucide-react';

const Tutoring = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'session-30',
      title: '30-Minute Session',
      price: 'NPR 400',
      duration: '30 minutes',
      description: 'Perfect for quick doubt clearing and concept review',
      features: [
        'One-on-one focused session',
        'Concept clarification',
        'Problem-solving guidance',
        'Study tips and tricks'
      ],
      popular: false
    },
    {
      id: 'session-60',
      title: '60-Minute Session',
      price: 'NPR 800',
      duration: '60 minutes',
      description: 'Comprehensive session for in-depth learning',
      features: [
        'Detailed topic coverage',
        'Practice problems included',
        'Step-by-step explanations',
        'Assignment help',
        'Study material provided'
      ],
      popular: true
    },
    {
      id: 'personalized-plan',
      title: 'Personalized Learning Plan',
      price: 'NPR 14,999',
      duration: 'Monthly',
      description: 'Complete learning solution tailored to your needs',
      features: [
        '20 hours of tutoring (monthly)',
        'Customized study schedule',
        'Progress tracking',
        'Exam preparation',
        'Unlimited doubt clearing',
        'Study materials included'
      ],
      popular: false
    },
    {
      id: 'group-session',
      title: 'Group Study Session',
      price: 'NPR 300',
      duration: '90 minutes',
      description: 'Learn with peers in a collaborative environment',
      features: [
        'Small group (2-4 students)',
        'Interactive discussions',
        'Peer learning benefits',
        'Cost-effective solution',
        'Regular group assignments'
      ],
      popular: false
    },
    {
      id: 'exam-prep',
      title: 'Exam Preparation Intensive',
      price: 'NPR 3,999',
      duration: '2 weeks',
      description: 'Intensive preparation for upcoming exams',
      features: [
        '10 hours of focused study',
        'Mock tests and practice',
        'Weak area identification',
        'Exam strategies',
        'Last-minute revision',
        'Performance analysis'
      ],
      popular: false
    },
    {
      id: 'project-help',
      title: 'Project Assistance',
      price: 'NPR 2,999',
      duration: 'Per project',
      description: 'Complete guidance for academic projects',
      features: [
        'Project planning assistance',
        'Research methodology',
        'Analysis and calculations',
        'Report writing guidance',
        'Presentation preparation',
        'Multiple revision rounds'
      ],
      popular: false
    }
  ];

  const subjects = [
    {
      name: 'Mathematics',
      icon: Calculator,
      topics: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Complex Numbers', 'Probability'],
      levels: ['High School', 'Bachelor\'s Level', 'Engineering Mathematics']
    },
    {
      name: 'Statistics',
      icon: BarChart3,
      topics: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'Regression Analysis'],
      levels: ['Basic Statistics', 'Advanced Statistics', 'Engineering Statistics']
    },
    {
      name: 'Data Analytics',
      icon: BookOpen,
      topics: ['Python Programming', 'Excel Analysis', 'Data Visualization', 'Statistical Modeling'],
      levels: ['Beginner', 'Intermediate', 'Advanced Applications']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      grade: 'Bachelor\'s Student',
      text: 'Aman helped me understand calculus concepts that I was struggling with for months. His teaching style is very clear and patient.',
      rating: 5
    },
    {
      name: 'Padam Karki',
      grade: 'Engineering Student',
      text: 'The statistics sessions were incredibly helpful. I improved my grades significantly after just a few sessions.',
      rating: 5
    },
    {
      name: 'Sita Poudel',
      grade: 'Engineering Student',
      text: 'The personalized learning plan was perfect for my engineering mathematics course. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tutoring Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional one-on-one tutoring in Mathematics, Statistics, and Data Analytics. 
            Personalized learning experiences designed to help you excel.
          </p>
        </div>

        {/* Subjects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Subjects I Teach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <div key={subject.name} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {subject.topics.map((topic) => (
                          <li key={topic} className="flex items-center">
                            <Check className="text-green-600 mr-2" size={14} />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Levels:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.levels.map((level) => (
                          <span key={level} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tutoring Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-200 cursor-pointer ${
                  pkg.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
                } ${selectedPackage === pkg.id ? 'ring-2 ring-blue-400' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-gray-600 mb-3">
                    <Clock className="mr-2" size={16} />
                    {pkg.duration}
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                    Book Now
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            My Teaching Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Personalized Learning</h3>
              <p className="text-gray-700">
                Every student is unique. I adapt my teaching style to match your learning preferences, 
                pace, and goals. Whether you're a visual learner or prefer hands-on practice, 
                I'll customize the approach to help you succeed.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900">Real-World Applications</h3>
              <p className="text-gray-700">
                I connect mathematical concepts to real-world engineering problems, making learning 
                more engaging and relevant. This approach helps you understand not just the "how" 
                but also the "why" behind each concept.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Interactive Sessions</h3>
              <p className="text-gray-700">
                My sessions are interactive and engaging. I encourage questions, provide immediate 
                feedback, and ensure you understand each concept before moving on. 
                Practice problems and examples are integrated throughout.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900">Continuous Support</h3>
              <p className="text-gray-700">
                Learning doesn't stop after the session. I provide additional resources, practice 
                materials, and remain available for quick questions to ensure your continued progress.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.grade}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Take the first step towards academic excellence. Book your first session today 
            and experience personalized learning that makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
