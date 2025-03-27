
import React from 'react';
import { ShieldCheck, Clock, CreditCard, Car, Zap, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-ling-blue" />,
      title: "Secure Leasing",
      description: "All leases are protected with our secure payment system and comprehensive insurance."
    },
    {
      icon: <Clock className="h-8 w-8 text-ling-green" />,
      title: "Quick Approval",
      description: "Get approved within hours, not days. We've streamlined our approval process."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-ling-yellow" />,
      title: "Flexible Payments",
      description: "Choose payment terms that work for you with competitive monthly rates."
    },
    {
      icon: <Car className="h-8 w-8 text-ling-red" />,
      title: "Huge Selection",
      description: "Browse hundreds of vehicles from economy to luxury, all available for lease."
    },
    {
      icon: <Zap className="h-8 w-8 text-ling-pink" />,
      title: "Fast Delivery",
      description: "Get your car delivered to your doorstep within 7 days of approval."
    },
    {
      icon: <Headphones className="h-8 w-8 text-ling-blue" />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist you."
    }
  ];

  return (
    <section id="deals" className="py-20 bg-ling-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white text-ling-darkgray mb-4">
            Why Choose Ling
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Ling's Cars Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just different, we're revolutionizing car leasing with our unique approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-smooth">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking for a Special Deal?</h3>
              <p className="text-gray-600 mb-6">
                Our team can create a custom lease package tailored to your needs and budget. 
                Whether you're a business or individual, we've got you covered.
              </p>
              <button className="shine-effect py-3 px-6 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium transition-all duration-300">
                Request Custom Quote
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -top-6 -right-6 bg-ling-red text-white text-lg font-bold rounded-full w-20 h-20 flex items-center justify-center rotate-12 animate-pulse z-10">
                Save 15%
              </div>
              <img 
                src="https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury car dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
