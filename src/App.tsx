import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import CoachingPrograms from './components/CoachingPrograms';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-50 overflow-x-hidden font-['Lexend',_'Noto_Sans',_sans-serif]">
      <div className="flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1 justify-center px-4 md:px-8 lg:px-40">
          <div className="flex flex-col max-w-[960px] flex-1">
            <Hero />
            <TrustedBy />
            <CoachingPrograms />
            <Process />
            <Benefits />
            <Testimonials />
            <About />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App