
import React from 'react';
import { Rocket, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <Car className="h-6 w-6 text-ling-red" />, 
      value: "10,000+", 
      label: "Cars Leased" 
    },
    { 
      icon: <Users className="h-6 w-6 text-ling-blue" />, 
      value: "5,000+", 
      label: "Happy Customers" 
    },
    { 
      icon: <Award className="h-6 w-6 text-ling-yellow" />, 
      value: "15+", 
      label: "Industry Awards" 
    },
    { 
      icon: <Globe className="h-6 w-6 text-ling-green" />, 
      value: "24/7", 
      label: "Customer Support" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-ling-gray text-ling-darkgray mb-4">
              About Ling
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Most Outrageous Car Dealer in the UK</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ling's Cars is not your average car leasing company. Founded by Ling Valentine, 
              we've revolutionized the automotive industry with our unconventional approach 
              and unbeatable deals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is simple: to provide transparent, affordable car leasing options 
              without the usual industry nonsense. We believe in straight talk, great value, 
              and making car leasing fun!
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-ling-gray">
                  <div className="mb-2">{stat.icon}</div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className="py-3 px-6 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium transition-all duration-300 shine-effect">
                Our Story
              </button>
              <button className="py-3 px-6 bg-white text-ling-darkgray rounded-md border border-gray-200 hover:bg-gray-50 font-medium transition-all duration-300">
                Meet the Team
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1543873202-85c370bd90cf?q=80&w=2069&auto=format&fit=crop" 
                alt="Ling Valentine" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-10 w-20 h-20 bg-ling-yellow rounded-full opacity-70 animate-pulse-gentle"></div>
            <div className="absolute bottom-1/4 -left-10 w-16 h-16 bg-ling-blue rounded-full opacity-70 animate-pulse-gentle"></div>
            <div className="absolute -bottom-5 right-1/4 w-24 h-24 bg-ling-pink rounded-full opacity-70 animate-pulse-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import
import { Car } from 'lucide-react';

export default About;
