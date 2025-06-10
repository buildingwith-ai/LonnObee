import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} className="text-[#2a8fed]" fill={i < rating ? '#2a8fed' : 'none'} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Olivia Carter',
      date: 'June 15, 2023',
      rating: 5,
      text: '"Lonn\'s holistic approach helped me find balance and reduce stress. I\'m now more productive and fulfilled both at work and in my personal life."',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Liam Bennett',
      date: 'July 22, 2023',
      rating: 5,
      text: '"The executive coaching sessions were instrumental in developing my leadership style and improving team communication. I\'ve seen significant positive changes in my professional relationships."',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sophia Williams',
      date: 'August 10, 2023',
      rating: 5,
      text: '"Working with Lonn Obee transformed my approach to work-life balance. His guidance was practical and tailored to my specific challenges."',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div id="testimonials" className="scroll-mt-20">
      <h2 className="text-[#0d151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Client Success Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex flex-col gap-3 bg-slate-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url("${testimonial.image}")` }}
              ></div>
              <div className="flex-1">
                <p className="text-[#0d151b] text-base font-medium leading-normal">{testimonial.name}</p>
                <p className="text-[#4c749a] text-sm font-normal leading-normal">{testimonial.date}</p>
              </div>
            </div>
            
            <StarRating rating={testimonial.rating} />
            
            <p className="text-[#0d151b] text-base font-normal leading-normal">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;