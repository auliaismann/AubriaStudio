import React from "react";

const About = () => {
    return (
      <div className="bg-white py-16 px-6" id="About">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Our Mission</h3>
              <p className="text-emerald-800">
                To empower individuals to embrace their boldness and live authentically
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Experience</h3>
              <p className="text-emerald-800">
                Years of experience in the field of personality development and self-improvement
              </p>
            </div>
            <div className="bg-emerald-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Approach</h3>
              <p className="text-emerald-800">
                We take a holistic approach to help individuals embrace their boldness
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;