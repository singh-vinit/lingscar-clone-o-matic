
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ThumbsUp, Zap, Tag } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    
    const moveElements = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const elements = heroRef.current!.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '50');
        const moveX = x * speed;
        const moveY = y * speed;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', moveElements);
    
    return () => {
      window.removeEventListener('mousemove', moveElements);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden bg-ling-gray">
      {/* Abstract design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute top-20 right-[20%] w-64 h-64 rounded-full bg-ling-yellow opacity-10 animate-pulse-gentle" data-speed="20"></div>
        <div className="parallax-element absolute top-[30%] left-[10%] w-96 h-96 rounded-full bg-ling-pink opacity-10 animate-pulse-gentle" data-speed="30"></div>
        <div className="parallax-element absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-ling-blue opacity-10 animate-pulse-gentle" data-speed="25"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="inline-block animate-slide-down">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white text-ling-red mb-6 shadow-sm">
            <span className="flex items-center">
              <Zap className="h-4 w-4 mr-1" /> New Deals Every Day
            </span>
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-slide-down" style={{ animationDelay: '0.1s' }}>
          Drive Away With <br />
          <span className="text-ling-red text-glow">Ling's Amazing Deals</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-ling-darkgray/80 mb-10 animate-slide-down" style={{ animationDelay: '0.2s' }}>
          Find your perfect car lease with the UK's most trusted and outrageous car leasing dealer. 
          No nonsense, just incredible deals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-down" style={{ animationDelay: '0.3s' }}>
          <a href="#cars" className="shine-effect py-3 px-8 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Browse Cars
          </a>
          <a href="#about" className="py-3 px-8 bg-white text-ling-darkgray rounded-md border border-gray-200 hover:bg-gray-50 font-medium text-lg transition-all duration-300">
            About Ling
          </a>
        </div>
        
        <div className="flex items-center space-x-8 animate-slide-down" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center">
            <ThumbsUp className="h-6 w-6 text-ling-blue mb-2" />
            <span className="text-sm text-ling-darkgray">Trusted by 10,000+</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="h-6 w-6 text-ling-yellow mb-2" />
            <span className="text-sm text-ling-darkgray">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <Tag className="h-6 w-6 text-ling-green mb-2" />
            <span className="text-sm text-ling-darkgray">Best Prices</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-ling-darkgray opacity-60" />
      </div>
      
      {/* Main car image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl pointer-events-none animate-float">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop" 
          alt="Luxury car" 
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))" }}
        />
      </div>
    </div>
  );
};

export default Hero;
