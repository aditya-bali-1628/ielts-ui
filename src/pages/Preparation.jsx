import React from 'react';

// Data for the preparation resources
const preparationResources = [
  {
    icon: '📚',
    title: 'Official Practice Tests',
    description: 'Free, full-length tests to simulate the real exam experience and timing.',
    linkText: 'Start Practice Test',
    color: 'bg-red-500',
  },
  {
    icon: '📖',
    title: 'Study Guides & Tips',
    description: 'Detailed guides for each module: Listening, Reading, Writing, and Speaking.',
    linkText: 'Explore Guides',
    color: 'bg-indigo-500',
  },
  {
    icon: '🗣️',
    title: 'Speaking Mock Exam',
    description: 'Book a one-on-one session with an expert to practice the Speaking test.',
    linkText: 'Book Mock Exam',
    color: 'bg-green-500',
  },
  {
    icon: '🎓',
    title: 'Online Video Courses',
    description: 'Structured video lessons covering essential grammar, vocabulary, and exam strategies.',
    linkText: 'View Courses',
    color: 'bg-yellow-500',
  },
];

// Reusable Preparation Card Component
const PreparationCard = ({ resource }) => {
  return (
    <div className="prep-card bg-white p-6 rounded-3xl border border-gray-100 shadow-xl flex flex-col transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="text-5xl mb-4">{resource.icon}</div>
      <h3 className="text-xl font-extrabold text-gray-900 mb-2">{resource.title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{resource.description}</p>
      <button className={`w-full py-3 rounded-xl text-white font-bold transition duration-200 ${resource.color} hover:opacity-90`}>
        {resource.linkText}
      </button>
    </div>
  );
};


const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50 font-['Inter'] py-20">
      
      {/* Custom CSS for the bold visual background */}
      <style jsx="true">{`
        /* --- Background Red Wave/Shape --- */
        .background-shape {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #e31837; /* Base Red Color */
          z-index: 1;
          /* Use a large, organic clip-path to create the swooping effect */
          clip-path: polygon(0 0, 100% 0, 100% 40%, 60% 60%, 0% 50%);
          opacity: 0.85;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .background-shape {
                clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 30%, 0% 25%);
            }
        }
      `}</style>

      {/* Background Graphic */}
      <div className="background-shape"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        
        {/* Header Section */}
        <header className="text-center mb-16 pt-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight shadow-text">
            Master Your IELTS Prep
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Access official practice materials and expert resources to ensure you score your best.
          </p>
        </header>

        {/* Preparation Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {preparationResources.map((resource, index) => (
            <PreparationCard key={index} resource={resource} />
          ))}
        </div>
        
        {/* Additional Section (Optional, using the same card style) */}
        <section className="mt-20 p-8 bg-white rounded-3xl border-2 border-red-700 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl font-extrabold text-red-700 mb-4">Need Personalized Help?</h2>
            <p className="text-lg text-gray-700 mb-6">
                Our certified tutors can review your practice essays and speaking recordings, giving you feedback tailored to the official IELTS criteria.
            </p>
            <div className="flex justify-center">
                <button className="bg-red-700 text-white py-3 px-8 rounded-xl text-lg font-bold transition hover:bg-red-800 shadow-lg">
                    Find an IELTS Tutor
                </button>
            </div>
        </section>

      </div>
    </div>
  );
};

export default App;
