import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="contact" className="scroll-mt-20 mt-8 w-full px-4">
      <h2 className="text-[#0d151b] text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Get in Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4 py-3 w-full">
              <label className="flex flex-col w-full">
                <p className="text-[#0d151b] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-[#0d151b] focus:outline-0 focus:ring-1 focus:ring-[#2a8fed] border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4c749a] p-4 text-base font-normal leading-normal transition-all duration-300"
                />
              </label>
            </div>
            
            <div className="flex flex-col gap-4 py-3 w-full">
              <label className="flex flex-col w-full">
                <p className="text-[#0d151b] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  type="email"
                  required
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-[#0d151b] focus:outline-0 focus:ring-1 focus:ring-[#2a8fed] border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4c749a] p-4 text-base font-normal leading-normal transition-all duration-300"
                />
              </label>
            </div>
            
            <div className="flex flex-col gap-4 py-3 w-full">
              <label className="flex flex-col w-full">
                <p className="text-[#0d151b] text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-[#0d151b] focus:outline-0 focus:ring-1 focus:ring-[#2a8fed] border-none bg-[#e7edf3] focus:border-none min-h-36 placeholder:text-[#4c749a] p-4 text-base font-normal leading-normal transition-all duration-300"
                ></textarea>
              </label>
            </div>
            
            <div className="flex py-3 justify-start w-full">
              <button
                type="submit"
                className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2a8fed] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
              >
                <span className="truncate">{submitted ? 'Message Sent!' : 'Send'}</span>
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-[#2a8fed] flex-shrink-0" />
              <h3 className="text-[#0d151b] text-lg font-bold">Schedule a Session</h3>
            </div>
            <p className="text-[#4c749a] text-sm sm:text-base mb-4">
              Ready to take the next step? Schedule a 30-minute complimentary consultation to discuss how our coaching programs can help you achieve your goals.
            </p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="border border-[#e7edf3] rounded-md p-3 hover:border-[#2a8fed] hover:shadow-sm cursor-pointer transition-all">
                <p className="text-[#0d151b] font-medium text-sm">Monday - Friday</p>
                <p className="text-[#4c749a] text-sm">9:00 AM - 5:00 PM</p>
              </div>
              <div className="border border-[#e7edf3] rounded-md p-3 hover:border-[#2a8fed] hover:shadow-sm cursor-pointer transition-all">
                <p className="text-[#0d151b] font-medium text-sm">Saturday</p>
                <p className="text-[#4c749a] text-sm">10:00 AM - 2:00 PM</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#2a8fed] text-slate-50 text-sm font-bold hover:bg-[#1a7fd8] transition-colors">
              Check Availability
            </button>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
            <h3 className="text-[#0d151b] text-lg font-bold mb-2">Contact Information</h3>
            <p className="text-[#4c749a] mb-2 text-sm break-words">Email: info@lonnobee.com</p>
            <p className="text-[#4c749a] mb-2 text-sm">Phone: (555) 123-4567</p>
            <p className="text-[#4c749a] text-sm">Office: 123 Wellness Street, Suite 456, Serenity Hills, CA 94123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;