import React from 'react';

const About = () => {
  return (
    <div id="about" className="scroll-mt-20 w-full">
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <p className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em]">Lonn Obee</p>
            <p className="text-[#4c749a] text-base font-normal leading-normal">Clinical Psychologist</p>
            <p className="text-[#4c749a] text-sm sm:text-base font-normal leading-normal">
              Lonn Obee is a licensed clinical psychologist with over 15 years of experience. He holds a PhD in Clinical Psychology and specializes in integrating
              evidence-based practices with a holistic approach to wellness and leadership development.
            </p>
            <p className="text-[#4c749a] text-sm sm:text-base font-normal leading-normal">
              His unique methodology combines traditional psychological principles with modern coaching techniques to help clients achieve lasting positive change in both their personal and professional lives.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 shadow-lg"
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

export default About;