
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Fuel, Calendar, Users, TrendingUp } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  mpg: number;
  year: number;
  seats: number;
  rating: number;
  type: 'sports' | 'suv' | 'electric' | 'economy';
}

const cars: Car[] = [
  {
    id: 1,
    name: "Audi A3 Sportback",
    price: 299,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0da9?q=80&w=2070&auto=format&fit=crop",
    mpg: 53,
    year: 2023,
    seats: 5,
    rating: 4.8,
    type: 'economy'
  },
  {
    id: 2,
    name: "BMW 4 Series Coupe",
    price: 399,
    image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=2070&auto=format&fit=crop",
    mpg: 42,
    year: 2023,
    seats: 4,
    rating: 4.7,
    type: 'sports'
  },
  {
    id: 3,
    name: "Tesla Model 3",
    price: 449,
    image: "https://images.unsplash.com/photo-1619490608624-7ab7736e64f6?q=80&w=2070&auto=format&fit=crop",
    mpg: 0,
    year: 2023,
    seats: 5,
    rating: 4.9,
    type: 'electric'
  },
  {
    id: 4,
    name: "Range Rover Evoque",
    price: 499,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2160&auto=format&fit=crop",
    mpg: 38,
    year: 2023,
    seats: 5,
    rating: 4.6,
    type: 'suv'
  },
  {
    id: 5,
    name: "Mercedes A-Class",
    price: 329,
    image: "https://images.unsplash.com/photo-1617814076668-021292708f0e?q=80&w=2274&auto=format&fit=crop",
    mpg: 49,
    year: 2023,
    seats: 5,
    rating: 4.5,
    type: 'economy'
  },
  {
    id: 6,
    name: "Nissan Qashqai",
    price: 279,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2664&auto=format&fit=crop",
    mpg: 44,
    year: 2023,
    seats: 5,
    rating: 4.4,
    type: 'suv'
  },
];

const CarShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.type === activeFilter);

  return (
    <section id="cars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-ling-gray text-ling-darkgray mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Latest Models</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of premium vehicles, all available with flexible leasing options.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-ling-gray p-1 rounded-lg">
            {['all', 'economy', 'sports', 'suv', 'electric'].map(filter => (
              <button
                key={filter}
                className={`py-2 px-4 rounded-md text-sm font-medium capitalize transition-all ${
                  activeFilter === filter 
                    ? 'bg-white text-ling-darkgray shadow-sm' 
                    : 'text-gray-600 hover:text-ling-darkgray'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All Cars' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div 
              key={car.id} 
              className="car-card group bg-white rounded-2xl overflow-hidden shadow-smooth hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="car-image w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-ling-darkgray">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-ling-yellow fill-ling-yellow" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center">
                    <Fuel className="h-4 w-4 text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">{car.mpg > 0 ? `${car.mpg} MPG` : 'Electric'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">{car.year}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-4 w-4 text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">{car.seats} Seats</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Monthly from</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-ling-red">£{car.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/mo</span>
                    </div>
                  </div>
                  <button className="shine-effect py-2 px-4 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium transition-all duration-300 text-sm">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#deals" className="flex items-center space-x-2 text-ling-red hover:text-red-600 font-medium transition-all duration-300">
            <span>View all cars</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
