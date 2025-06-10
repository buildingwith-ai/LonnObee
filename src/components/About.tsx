import React from 'react';

const About = () => {
  return (
    <div id="about" className="scroll-mt-20 w-full">
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 self-center sm:self-start"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/5453773/pexels-photo-5453773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              }}
            ></div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em]">Lonn Obee</p>
              <p className="text-[#4c749a] text-base font-normal leading-normal">Clinical Psychologist</p>
              <p className="text-[#4c749a] text-sm sm:text-base font-normal leading-normal mt-2">
                Lonn Obee is a licensed clinical psychologist with over 15 years of experience. He holds a PhD in Clinical Psychology and specializes in integrating
                evidence-based practices with a holistic approach to wellness and leadership development.
              </p>
              <p className="text-[#4c749a] text-sm sm:text-base font-normal leading-normal mt-2">
                His unique methodology combines traditional psychological principles with modern coaching techniques to help clients achieve lasting positive change in both their personal and professional lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;