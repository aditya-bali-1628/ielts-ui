import React from 'react';

// Content data for the four key IELTS resources/essentials cards
const resourceData = [
  {
    id: 1,
    title: 'Exam Format Breakdown',
    description: 'Understand the structure of the Listening, Reading, Writing, and Speaking modules for both Academic and General Training.',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Check Band Scores',
    description: 'Detailed explanation of how scores are calculated and what each band level (0-9) signifies for universities and immigration.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Test Day Checklist',
    description: 'Everything you need to know and bring on your test day, including acceptable ID, timings, and rules.',
    icon: '✅',
  },
  {
    id: 4,
    title: 'IDP vs. British Council',
    description: 'A comparison of the two main organizing bodies for the IELTS exam, helping you choose the best registration platform.',
    icon: '⚖️',
  },
];

// Reusable Benefit Card Component
const BenefitCard = ({ benefit }) => {
  return (
    <div className="unique-card-wrapper">
      <div className="card-red-accent"></div>
      
      {/* Card Content for Glassmorphism effect */}
      <div className="card-content-area p-6 md:p-8 flex flex-col items-start h-full relative z-10">
        <span className="text-4xl mb-4 leading-none relative z-20">{benefit.icon}</span>
        <h3 className="text-xl font-extrabold mb-3 text-gray-900 relative z-20">{benefit.title}</h3>
        <p className="text-base text-gray-700 leading-relaxed relative z-20">{benefit.description}</p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white font-['Inter'] flex justify-center items-center py-20">
      
      {/* Custom CSS for the bold wave graphic and the unique card style */}
      <style jsx="true">{`
        /* Global Background Wave */
        .red-wave {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 400px; /* Made slightly taller */
            background-color: #e31837;
            clip-path: ellipse(150% 100% at 50% 0%); 
            z-index: 1;
        }

        /* --- Unique Card Styling --- */
        .unique-card-wrapper {
            position: relative;
            background-color: rgba(255, 255, 255, 0.7); /* Transparent white */
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease-out;
            backdrop-filter: blur(8px); /* The Glassmorphism blur effect */
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.4); /* Light border for definition */
            
            /* Advanced Hover: Lift and move slightly */
            transform: translateY(0);
        }

        .unique-card-wrapper:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(227, 24, 55, 0.3); /* Red shadow on hover */
        }

        /* Unique Red Angled Accent */
        .card-red-accent {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px; /* Size of the accent */
            height: 100px;
            background-color: #e31837;
            /* Creates an angled shape by cutting off the top-left corner */
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); 
            transform: rotate(35deg) translate(30px, -50px);
            transform-origin: top right;
            z-index: 5;
            opacity: 0.9;
            transition: all 0.4s ease-out;
        }

        .unique-card-wrapper:hover .card-red-accent {
            opacity: 1;
            transform: rotate(35deg) translate(25px, -45px); /* Subtle shift on hover */
        }

        /* Card Grid Layout (Updated to 4 columns for resource data) */
        .card-grid {
            display: grid;
            gap: 30px; /* Increased gap for better visual separation */
            grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (min-width: 1024px) {
            .card-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
      `}</style>
      
      {/* Background Red Wave Element */}
      <div className="red-wave"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16 pt-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-2">
            IELTS Essentials & Resources
          </h2>
          <p className="text-xl text-gray-200">
            Everything you need to know about the test structure and logistics.
          </p>
        </div>

        {/* Card Grid Section */}
        <div className="card-grid">
          {resourceData.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;