import React from 'react';
import { Search, Users, LineChart } from 'lucide-react';

const Process = () => {
  return (
    <div>
      <h2 className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-1 gap-4 bg-slate-50 p-6 flex-col items-center text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg">
          <div className="text-[#2a8fed] mb-2">
            <Search size={48} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0d151b] text-lg font-bold leading-tight">Assessment</h2>
            <p className="text-[#4c749a] text-sm font-normal leading-normal">
              We begin with a thorough assessment to understand your unique needs and goals.
            </p>
          </div>
        </div>
        
        <div className="flex flex-1 gap-4 bg-slate-50 p-6 flex-col items-center text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg">
          <div className="text-[#2a8fed] mb-2">
            <Users size={48} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0d151b] text-lg font-bold leading-tight">Collaboration</h2>
            <p className="text-[#4c749a] text-sm font-normal leading-normal">
              We work closely with you to develop a personalized coaching plan.
            </p>
          </div>
        </div>
        
        <div className="flex flex-1 gap-4 bg-slate-50 p-6 flex-col items-center text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 rounded-lg">
          <div className="text-[#2a8fed] mb-2">
            <LineChart size={48} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0d151b] text-lg font-bold leading-tight">Growth</h2>
            <p className="text-[#4c749a] text-sm font-normal leading-normal">
              We track progress and adapt strategies to ensure continuous growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;