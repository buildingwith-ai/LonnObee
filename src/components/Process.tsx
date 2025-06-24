import React from 'react';
import { Search, Users, LineChart } from 'lucide-react';

const Process = () => {
  return (
    <div className="w-full">
      <h2 className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">The Process</h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4">
        <div className="flex flex-1 gap-3 bg-slate-50 p-3 sm:p-4 flex-row sm:flex-col items-center sm:text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg w-full">
          <div className="text-[#2a8fed] flex-shrink-0">
            <Search size={32} className="sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col gap-1 flex-1 sm:flex-none">
            <h3 className="text-[#0d151b] text-base sm:text-lg font-bold leading-tight">Assessment</h3>
            <p className="text-[#4c749a] text-xs sm:text-sm font-normal leading-normal">
              I begin with a thorough assessment to understand your unique needs and goals.
            </p>
          </div>
        </div>
        
        <div className="flex flex-1 gap-3 bg-slate-50 p-3 sm:p-4 flex-row sm:flex-col items-center sm:text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg w-full">
          <div className="text-[#2a8fed] flex-shrink-0">
            <Users size={32} className="sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col gap-1 flex-1 sm:flex-none">
            <h3 className="text-[#0d151b] text-base sm:text-lg font-bold leading-tight">Collaboration</h3>
            <p className="text-[#4c749a] text-xs sm:text-sm font-normal leading-normal">
              I work closely with you to develop a personalized coaching plan.
            </p>
          </div>
        </div>
        
        <div className="flex flex-1 gap-3 bg-slate-50 p-3 sm:p-4 flex-row sm:flex-col items-center sm:text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg w-full">
          <div className="text-[#2a8fed] flex-shrink-0">
            <LineChart size={32} className="sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col gap-1 flex-1 sm:flex-none">
            <h3 className="text-[#0d151b] text-base sm:text-lg font-bold leading-tight">Growth</h3>
            <p className="text-[#4c749a] text-xs sm:text-sm font-normal leading-normal">
              I track progress and adapt strategies to ensure continuous growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;