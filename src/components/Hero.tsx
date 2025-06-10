import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mt-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex min-h-[400px] sm:min-h-[480px] flex-col lg:flex-row gap-6 lg:gap-12 bg-slate-50 rounded-lg items-center justify-between p-6 sm:p-8 lg:p-10">
          {/* Content Section */}
          <div className="flex flex-col gap-6 text-left flex-1 order-2 lg:order-1 w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0d151b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] animate-fadeIn">
                Empowering You to Thrive
              </h1>
              <h2 className="text-[#4c749a] text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                Lonn Obee is a clinical psychologist specializing in holistic wellness and executive coaching. Discover a path to personal and professional fulfillment.
              </h2>
            </div>
            <button
              onClick={scrollToContact}
              className="flex w-full sm:w-auto min-w-[84px] max-w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
            >
              <span className="truncate">Book a Consultation</span>
            </button>
          </div>
          
          {/* Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto flex justify-center">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-lg transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: 'url("/src/assets/f1a473ed-319f-40dc-9b4a-4f44675e9545-resize.webp")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;