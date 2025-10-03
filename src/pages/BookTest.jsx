import React from 'react';

// Data for the feature cards
const featureData = [
  {
    title: 'Global Trust',
    subtitle: 'Setting the benchmark for 35 years',
    description: 'Trusted by over 11,000 organizations and universities worldwide.',
  },
  {
    title: 'Fast Results',
    subtitle: 'Available in just 1-5 days',
    description: 'Get your scores quickly with computer-delivered testing options.',
  },
  {
    title: 'Computer Test',
    subtitle: 'Flexible date and time slots',
    description: 'Experience the test digitally for accuracy and comfort.',
  },
  {
    title: 'Wider Acceptance',
    subtitle: 'Accepted in 140+ countries',
    description: 'Open doors to study, work, and migration globally.',
  },
];

// Data for student reviews
const reviewsData = [
  {
    name: "Aarav Sharma",
    course: "IELTS Preparation",
    review: "This test prep really helped me improve my scores and boosted my confidence!",
  },
  {
    name: "Maya Patel",
    course: "TOEFL Prep",
    review: "Highly recommend for anyone looking to study abroad. Excellent guidance and resources.",
  },
  {
    name: "Rohan Gupta",
    course: "General English",
    review: "The online platform is easy to use and the support is fantastic.",
  },
];

// Reusable Feature Card Component
const FeatureCard = ({ feature }) => {
  const CheckIcon = (
    <div className="flex items-center justify-center w-12 h-12 rounded-full 
      bg-gradient-to-tr from-red-600 to-red-400 shadow-lg">
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white">
        <path d="M16 9L11 14L8 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  return (
    <div className="relative group rounded-3xl p-8 
      bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl 
      hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
      
      {/* Glowing border animation on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/30 via-transparent to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full">
        <p className="text-gray-700 text-base mb-6">{feature.description}</p>
        <div className="flex items-center space-x-4">
          {CheckIcon}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Student Review Card Component
const ReviewCard = ({ review }) => {
  return (
    <div className="relative group rounded-3xl p-6 bg-white/80 backdrop-blur-md border border-white/30 shadow-lg 
      hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <p className="text-gray-800 mb-4">&quot;{review.review}&quot;</p>
      <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
      <p className="text-sm text-gray-500">{review.course}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-['Inter']">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 z-0"></div>

      {/* Floating blurred blobs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-1/3 w-[400px] h-[400px] bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      {/* Subtle radial gradient to focus center */}
      <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-20 leading-tight text-gray-900">
          <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Leading English test
          </span>{" "}
          for 
          <br className="hidden sm:block" />
          study, work, or migration abroad
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Student Reviews Section */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
