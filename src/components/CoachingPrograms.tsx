import React from 'react';

const CoachingPrograms = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="scroll-mt-20">
      <h2 className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Our Coaching Programs</h2>
      
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-4 w-full">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-slate-50 shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("/ChatGPT Image Jun 10, 2025, 12_32_13 AM.png")',
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-[#0d151b] text-lg font-bold leading-tight mb-3">Mind-Body Wellness Program</p>
                <ul className="text-[#4c749a] text-sm font-normal leading-normal space-y-2">
                  <li>• Stress reduction and anxiety management</li>
                  <li>• Mindfulness and meditation techniques</li>
                  <li>• Emotional resilience building</li>
                  <li>• Work-life balance strategies</li>
                  <li>• Personalized wellness plans</li>
                </ul>
              </div>
              <button
                onClick={scrollToContact}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2a8fed] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
              >
                <span className="truncate">Start Now</span>
              </button>
            </div>
          </div>
          
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-slate-50 shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-[#0d151b] text-lg font-bold leading-tight mb-3">Executive Leadership Mastery</p>
                <ul className="text-[#4c749a] text-sm font-normal leading-normal space-y-2">
                  <li>• Advanced leadership skill development</li>
                  <li>• Team communication enhancement</li>
                  <li>• Strategic decision-making training</li>
                  <li>• Conflict resolution techniques</li>
                  <li>• Executive presence building</li>
                </ul>
              </div>
              <button
                onClick={scrollToContact}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2a8fed] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPrograms;