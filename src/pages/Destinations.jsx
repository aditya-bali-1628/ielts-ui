import React from 'react';

// Destination data
const destinationData = [
  { country: 'AUSTRALIA', isFeatured: true },
  { country: 'CANADA', isFeatured: false },
  { country: 'UK', isFeatured: false },
  { country: 'USA', isFeatured: false },
  { country: 'NEW ZEALAND', isFeatured: false },
];

// Destination card
const DestinationCard = ({ destination }) => {
  const baseClasses = "destination-card relative h-full flex flex-col items-center justify-center p-4 rounded-[30px] shadow-xl transition-all duration-500 ease-in-out cursor-pointer transform";
  
  const featuredClasses = destination.isFeatured 
    ? "bg-gradient-to-br from-red-600 to-red-500 text-white z-10 w-full scale-100"
    : "bg-white border border-red-200 text-red-600 z-0 w-full hover:bg-red-50 hover:shadow-2xl hover:scale-105";

  const textOrientation = destination.isFeatured 
    ? "text-4xl sm:text-5xl font-extrabold tracking-wide rotate-0"
    : "text-lg sm:text-xl font-bold rotate-90 whitespace-nowrap tracking-widest";

  return (
    <div className={`${baseClasses} ${featuredClasses}`}>
      <span className={`${textOrientation}`}>
        {destination.country}
      </span>
      {!destination.isFeatured && (
        <span className="absolute bottom-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
        </span>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50 font-['Inter'] flex flex-col items-center py-20">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-600 to-red-400 clip-path-wave z-0"></div>
      <div className="absolute -left-24 top-20 w-72 h-72 bg-white opacity-20 rounded-full z-0"></div>
      <div className="absolute right-0 top-32 w-56 h-56 bg-white opacity-15 rounded-full z-0"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
          Where IELTS can take you?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-16">
          Your journey to global study and migration starts here.
        </p>

        {/* Destination Cards */}
        <div className="flex justify-center w-full overflow-x-auto py-6 space-x-6 md:space-x-0 md:justify-start md:relative">
          <div className="destination-container flex md:h-96 md:w-full">
            {destinationData.map((destination, index) => (
              <div
                key={destination.country}
                className={`relative md:-ml-12 first:ml-0`}
                style={{
                  zIndex: destination.isFeatured ? 10 : 5 - index,
                  transform: !destination.isFeatured ? `rotate(${index * 6 - 12}deg)` : 'none',
                  width: destination.isFeatured ? '50%' : '15%',
                  transition: 'transform 0.4s ease, z-index 0.4s ease',
                }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .clip-path-wave {
          clip-path: ellipse(150% 100% at 50% 0%);
        }

        .destination-container::-webkit-scrollbar {
          height: 6px;
        }
        .destination-container::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default App;
