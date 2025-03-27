
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  comment: string;
  rating: number;
  car: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Teacher",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    comment: "Ling's Cars made leasing my first car so simple! The process was straightforward, and I got an incredible deal on my Audi A3. Ling's customer service team was always helpful and responsive.",
    rating: 5,
    car: "Audi A3"
  },
  {
    id: 2,
    name: "David Thompson",
    position: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    comment: "I was skeptical about car leasing until I found Ling's Cars. The website was fun to use, and the deals were unbeatable. I saved over £2,000 compared to other dealers on my BMW lease.",
    rating: 5,
    car: "BMW 3 Series"
  },
  {
    id: 3,
    name: "Emma Wilson",
    position: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    comment: "As a business owner, I needed a fleet of vehicles quickly. Ling's Cars not only provided competitive rates but handled all the paperwork seamlessly. Our Mercedes vans were delivered ahead of schedule!",
    rating: 4,
    car: "Mercedes Vito"
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "Architect",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    comment: "The attention to detail at Ling's Cars is impressive. They found me the perfect Range Rover with all the specifications I wanted, and at a monthly rate that was surprisingly affordable.",
    rating: 5,
    car: "Range Rover Sport"
  },
  {
    id: 5,
    name: "Jessica Brown",
    position: "Doctor",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    comment: "My schedule is hectic, so I appreciated how Ling's Cars handled everything online. The Tesla I leased was delivered to my home, and the entire process was contactless and efficient.",
    rating: 5,
    car: "Tesla Model 3"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-ling-yellow fill-ling-yellow' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-ling-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-white text-ling-darkgray mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the thousands of happy drivers who leased with Ling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-smooth p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-ling-gray">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600 text-sm mb-3 text-center">{testimonials[activeIndex].position}</p>
                <div className="flex mb-2">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <p className="text-sm text-ling-red font-medium text-center">
                  {testimonials[activeIndex].car}
                </p>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative h-full flex items-center">
                  <div className="text-lg md:text-xl text-gray-700 italic mb-4">
                    "{testimonials[activeIndex].comment}"
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-ling-red scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-ling-gray transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-ling-darkgray" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-ling-gray transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-ling-darkgray" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-smooth">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Car?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered the Ling's Cars difference.
              Browse our selection and find your dream car today.
            </p>
            <button className="shine-effect py-3 px-8 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium transition-all duration-300 text-lg">
              View Current Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
