import React, { useState } from 'react';

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
      
      <div className="max-w-lg mx-auto">
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
          
          <div className="flex py-3 justify-center w-full">
            <button
              type="submit"
              className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#2a8fed] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors transform hover:scale-105 duration-300"
            >
              <span className="truncate">{submitted ? 'Message Sent!' : 'Send Message'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;