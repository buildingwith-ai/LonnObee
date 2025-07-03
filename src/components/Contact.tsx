import React from 'react';

const Contact = () => {
  const handleScheduleCall = () => {
    // In a real application, this would open a scheduling system like Calendly
    // For now, we'll just log the action
    console.log('Schedule a call clicked');
    // You could replace this with a link to your actual scheduling system
    // window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <div id="contact" className="scroll-mt-20 mt-8 w-full px-4">
      <h2 className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Get in Touch</h2>
      
      <div className="max-w-lg mx-auto">
        <div className="flex py-3 justify-center w-full">
          <button
            onClick={handleScheduleCall}
            className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
          >
            <span className="truncate">Schedule A Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;