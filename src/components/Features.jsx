import React from 'react';
import "../App.css"; // Assuming App.css contains base styles

const IELTSRegistration = () => {
  // SVG for the custom leaf/sprout icon (high-fidelity replacement)
  const SproutIcon = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#E31837" opacity="0.1"/>
      <path d="M14 10C16.2091 10 18 8.20914 18 6C18 3.79086 16.2091 2 14 2C11.7909 2 10 3.79086 10 6C10 8.20914 11.7909 10 14 10Z" fill="#E31837"/>
      <path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="#E31837"/>
      <path d="M14 14L10 10" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="registration-container-unique">
      {/* Custom CSS for the unique UI design */}
      <style jsx="true">{`
        .registration-container-unique {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f7f7f7; /* Off-white background */
          font-family: 'Poppins', 'Arial Black', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        /* --- Graphics (Abstract Shapes) --- */
        .abstract-shape {
          position: absolute;
          background-color: #e31837; /* Bright Red */
          border-radius: 50%;
          opacity: 0.8;
          filter: blur(50px); /* Soft glow effect */
          z-index: 1;
        }

        .shape-top-left {
          width: 350px;
          height: 350px;
          top: -100px;
          left: -100px;
          transform: rotate(30deg);
          border-radius: 40% 60% 70% 30% / 50% 50% 50% 50%; /* Organic shape */
          animation: float 6s ease-in-out infinite alternate;
        }

        .shape-bottom-right {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: -50px;
          border-radius: 60% 40% 30% 70% / 60% 40% 60% 40%; /* Organic shape */
          animation: float 8s ease-in-out infinite alternate-reverse;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(30deg); }
          100% { transform: translate(15px, 15px) rotate(35deg); }
        }

        /* --- Registration Card (Unique Style) --- */
        .registration-card-unique {
          position: relative;
          z-index: 10;
          background-color: #ffffff;
          padding: 50px 40px;
          max-width: 480px;
          border-radius: 40px; /* Highly rounded corners */
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15); /* Stronger shadow for floating effect */
          border: 1px solid rgba(227, 24, 55, 0.1); /* Subtle red border */
          transition: transform 0.3s ease-in-out;
        }
        
        .registration-card-unique:hover {
            transform: translateY(-5px); /* Lift on hover */
        }
        
        .card-header-icon-unique {
            position: absolute;
            top: -25px;
            right: 40px;
            width: 50px;
            height: 50px;
            background-color: white;
            padding: 5px;
            border-radius: 50%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .main-title-unique {
          font-size: 3rem;
          line-height: 1;
          margin-bottom: 5px;
          color: #1f2937; /* Dark text */
          font-weight: 900;
          letter-spacing: -1px;
        }

        .title-bold-unique {
            color: #e31837; /* Red accent on key words */
        }

        .card-description-unique {
          margin-bottom: 30px;
          font-size: 1rem;
          line-height: 1.4;
          color: #6b7280;
        }

        /* --- Form Elements --- */
        .registration-form-unique {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .select-dropdown-unique select {
            width: 100%;
            padding: 15px 20px;
            border: 1px solid #d1d5db;
            border-radius: 15px;
            background-color: #fff;
            font-size: 1rem;
            color: #1f2937;
            appearance: none;
            cursor: pointer;
            transition: border-color 0.2s;
        }
        .select-dropdown-unique select:focus {
            outline: none;
            border-color: #e31837;
            box-shadow: 0 0 0 3px rgba(227, 24, 55, 0.2);
        }

        .input-group-unique {
            display: flex;
            gap: 15px;
        }

        .text-input-unique {
            flex-grow: 1;
            padding: 15px 4px;
            border: 1px solid #d1d5db;
            border-radius: 15px;
            font-size: 1rem;
            color: #1f2937;
            transition: border-color 0.2s;
        }
        .text-input-unique:focus {
            outline: none;
            border-color: #e31837;
            box-shadow: 0 0 0 3px rgba(227, 24, 55, 0.2);
        }

        .register-button-unique {
          background-color: #e31837;
          color: white;
          padding: 18px 25px;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          margin-top: 10px;
          transition: background-color 0.3s, transform 0.2s;
          box-shadow: 0 10px 20px rgba(227, 24, 55, 0.4);
        }

        .register-button-unique:hover {
          background-color: #c0142b;
          transform: translateY(-2px);
        }
        
        .sr-only { display: none; } /* Hide visually hidden element for cleanliness */
      `}</style>

      {/* Background Abstract Shapes */}
      <div className="abstract-shape shape-top-left"></div>
      <div className="abstract-shape shape-bottom-right"></div>

      <div className="registration-card-unique">
        
        {/* Card Header Icon (Custom SVG) */}
        <div className="card-header-icon-unique">
          {SproutIcon}
        </div>

        <h1 className="main-title-unique">
          Register <br />
          for <span className="title-bold-unique">IELTS exam</span>
        </h1>

        <p className="card-description-unique">
          Most reliable English proficiency test. IELTS on Computer results in just 1 day.
          <br />
          140+ test locations near you.
        </p>

        <form className="registration-form-unique">
          <label htmlFor="test-type" className="sr-only">Type Test</label>
          <div className="select-dropdown-unique">
            <select id="test-type" name="testType" defaultValue="">
              <option value="" disabled>Select Test Type</option>
              <option value="academic">Academic Module</option>
              <option value="general">General Training Module</option>
            </select>
          </div>

          <div className="input-group-unique">
            <input type="text" placeholder="Enter City or Pin Code" className="text-input-unique" />
            {/* Input type date is tricky to style, but we'll use it for functionality */}
            <input type="date" className="text-input-unique" />
          </div>

          <button type="submit" className="register-button-unique">
            Find Test Dates
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default IELTSRegistration;