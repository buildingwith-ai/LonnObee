import React from 'react';

const TrustedBy = () => {
  return (
    <div className="py-8 sm:py-12 px-4 w-full">
      <p className="text-center text-[#4c749a] text-xs sm:text-sm mb-6 sm:mb-8">Trusted by professionals from leading companies</p>
      <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12 flex-wrap">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
          alt="IBM"
          className="h-6 sm:h-8 opacity-50 grayscale hover:opacity-75 transition-opacity"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
          alt="Microsoft"
          className="h-6 sm:h-8 opacity-50 grayscale hover:opacity-75 transition-opacity"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="h-5 sm:h-7 opacity-50 grayscale hover:opacity-75 transition-opacity"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
          alt="Tesla"
          className="h-4 sm:h-6 opacity-50 grayscale hover:opacity-75 transition-opacity"
        />
      </div>
    </div>
  );
};

export default TrustedBy;