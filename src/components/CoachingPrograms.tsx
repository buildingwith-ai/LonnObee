import React from 'react';
import { Check } from 'lucide-react';

const CoachingPrograms = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="scroll-mt-20 w-full">
      <h2 className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">The Programs</h2>
      
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          
          {/* Executive Coaching */}
          <div className="flex h-full flex-1 flex-col rounded-xl bg-white border border-[#e7edf3] shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="flex flex-col p-6 gap-6 h-full">
              {/* Header */}
              <div className="text-center border-b border-[#e7edf3] pb-4">
                <h3 className="text-[#0d151b] text-xl font-bold leading-tight mb-2">Executive Coaching</h3>
                <p className="text-[#4c749a] text-sm font-medium">Leadership excellence development</p>
              </div>
              
              {/* Pricing */}
              <div className="text-center">
                <div className="text-[#0d151b] text-3xl font-black mb-1">$250</div>
                <div className="text-[#4c749a] text-sm font-medium">Per Hour</div>
                <div className="text-[#4c749a] text-xs mt-1">Flexible scheduling available</div>
              </div>
              
              {/* Features */}
              <div className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Advanced leadership skill development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Team communication enhancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Strategic decision-making training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Conflict resolution techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Executive presence building</span>
                  </li>
                </ul>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="truncate">Book Session</span>
              </button>
            </div>
          </div>

          {/* Relationship Coaching */}
          <div className="flex h-full flex-1 flex-col rounded-xl bg-white border border-[#e7edf3] shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="flex flex-col p-6 gap-6 h-full">
              {/* Header */}
              <div className="text-center border-b border-[#e7edf3] pb-4">
                <h3 className="text-[#0d151b] text-xl font-bold leading-tight mb-2">Relationship Coaching</h3>
                <p className="text-[#4c749a] text-sm font-medium">Strengthen personal connections</p>
              </div>
              
              {/* Pricing */}
              <div className="text-center">
                <div className="text-[#0d151b] text-3xl font-black mb-1">$150</div>
                <div className="text-[#4c749a] text-sm font-medium">Per Hour</div>
                <div className="text-[#4c749a] text-xs mt-1">Individual or couples sessions</div>
              </div>
              
              {/* Features */}
              <div className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Communication skills enhancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Conflict resolution strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Emotional intimacy building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Trust and boundary setting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Relationship goal alignment</span>
                  </li>
                </ul>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="truncate">Book Session</span>
              </button>
            </div>
          </div>
          
          {/* Holistic Wellness Program */}
          <div className="flex h-full flex-1 flex-col rounded-xl bg-white border border-[#e7edf3] shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="flex flex-col p-6 gap-6 h-full">
              {/* Header */}
              <div className="text-center border-b border-[#e7edf3] pb-4">
                <h3 className="text-[#0d151b] text-xl font-bold leading-tight mb-2">Holistic Wellness</h3>
                <p className="text-[#4c749a] text-sm font-medium">Complete wellness transformation</p>
              </div>
              
              {/* Pricing */}
              <div className="text-center">
                <div className="text-[#0d151b] text-3xl font-black mb-1">$1,000</div>
                <div className="text-[#4c749a] text-sm font-medium">5 Sessions Total</div>
                <div className="text-[#4c749a] text-xs mt-1">($200 per session)</div>
              </div>
              
              {/* Features */}
              <div className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Comprehensive stress reduction techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Mindfulness and meditation training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Emotional resilience building strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Work-life balance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={16} className="text-[#2a8fed] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4c749a] text-sm font-normal leading-relaxed">Personalized wellness action plan</span>
                  </li>
                </ul>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPrograms;