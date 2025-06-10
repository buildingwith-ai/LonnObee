import React from 'react';

const About = () => {
  return (
    <div id="about" className="scroll-mt-20">
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 self-center md:self-start"
              style={{
                backgroundImage: 'url("/f1a473ed-319f-40dc-9b4a-4f44675e9545-resize.webp")',
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em]">Lonn Obee</p>
              <p className="text-[#4c749a] text-base font-normal leading-normal">Clinical Psychologist</p>
              <p className="text-[#4c749a] text-base font-normal leading-normal mt-2">
                Lonn Obee is a licensed clinical psychologist with over 15 years of experience. He holds a PhD in Clinical Psychology and specializes in integrating
                evidence-based practices with a holistic approach to wellness and leadership development.
              </p>
              <p className="text-[#4c749a] text-base font-normal leading-normal mt-2">
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