import React from 'react';
import { Heart, Lightbulb, Brain, Award, Compass, Layers } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart size={24} />,
      title: 'Improved Well-being',
      description: 'Reduce stress and anxiety while enhancing overall mental health and emotional balance.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Greater Self-Awareness',
      description: 'Develop deeper insights into your patterns, strengths, and growth opportunities.',
    },
    {
      icon: <Brain size={24} />,
      title: 'Enhanced Resilience',
      description: 'Build mental strength to better navigate challenges and adapt to change.',
    },
    {
      icon: <Award size={24} />,
      title: 'Improved Performance',
      description: 'Achieve greater results in your personal and professional endeavors.',
    },
    {
      icon: <Compass size={24} />,
      title: 'Clear Direction',
      description: 'Gain clarity on your goals and the steps needed to achieve them.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Better Relationships',
      description: 'Develop more meaningful connections with colleagues, friends, and family.',
    },
  ];

  return (
    <div>
      <h2 className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Benefits of Coaching</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex flex-1 gap-3 rounded-lg border border-[#cfdce7] bg-slate-50 p-4 flex-col transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="text-[#2a8fed]">
              {benefit.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#0d151b] text-base font-bold leading-tight">{benefit.title}</h3>
              <p className="text-[#4c749a] text-sm font-normal leading-normal">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;