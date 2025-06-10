import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="@container mt-5">
      <div className="@[480px]:p-4">
        <div className="flex min-h-[480px] flex-col lg:flex-row gap-8 bg-slate-50 @[480px]:rounded-lg items-center justify-between px-4 py-10 @[480px]:px-10">
          <div className="flex flex-col gap-6 text-left flex-1 max-w-lg">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0d151b] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] animate-fadeIn">
                Empowering You to Thrive
              </h1>
              <h2 className="text-[#4c749a] text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                Lonn Obee is a clinical psychologist specializing in holistic wellness and executive coaching. Discover a path to personal and professional fulfillment.
              </h2>
            </div>
            <button
              onClick={scrollToContact}
              className="flex min-w-[84px] max-w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
            >
              <span className="truncate">Book a Consultation</span>
            </button>
          </div>
          
          <div className="flex-shrink-0">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-lg w-80 h-80 lg:w-96 lg:h-96 shadow-lg transform transition-transform duration-700 hover:scale-105"
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