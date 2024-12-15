import React from "react";

const Hero = () => {
  return (
    <div id="Hero" className="bg-emerald-900 px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where we empower you to embrace your unique personality
          </h1>
          <p className="text-emerald-100 text-lg">
            Our mission is to provide individuals with valuable insights into
            their personality
          </p>
          <div className="space-x-4">
            <button className="bg-yellow-50 text-black px-8 py-3 rounded-full hover:bg-yellow-100 transition">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative">
            <img src="images/makingart.svg" className="w-full h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
