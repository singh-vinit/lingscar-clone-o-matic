
import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone, CreditCard, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/80 backdrop-blur-xl shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="relative z-10">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-ling-red" />
            <span className="text-xl font-bold tracking-tight">
              LING'S <span className="text-ling-red">CARS</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#cars" text="Browse Cars" />
          <NavLink href="#deals" text="Hot Deals" />
          <NavLink href="#about" text="About Ling" />
          <NavLink href="#testimonials" text="Reviews" />
          <NavLink href="#contact" text="Contact" isButton />
        </nav>

        <button 
          className="md:hidden relative z-10 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-ling-darkgray" />
          ) : (
            <Menu className="h-6 w-6 text-ling-darkgray" />
          )}
        </button>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-white z-[5] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="container mx-auto px-4 py-20">
            <nav className="flex flex-col space-y-6 items-center">
              <MobileNavLink href="#cars" text="Browse Cars" icon={<Car className="h-5 w-5" />} />
              <MobileNavLink href="#deals" text="Hot Deals" icon={<CreditCard className="h-5 w-5" />} />
              <MobileNavLink href="#about" text="About Ling" icon={<MessageSquare className="h-5 w-5" />} />
              <MobileNavLink href="#testimonials" text="Reviews" icon={<MessageSquare className="h-5 w-5" />} />
              <MobileNavLink href="#contact" text="Contact" icon={<Phone className="h-5 w-5" />} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, text, isButton = false }: { href: string; text: string; isButton?: boolean }) => {
  return (
    <a
      href={href}
      className={`relative transition-all duration-300 ${
        isButton
          ? 'py-2 px-4 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium'
          : 'text-ling-darkgray hover:text-ling-red after:content-[""] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-ling-red after:transition-all after:duration-300 hover:after:w-full'
      }`}
    >
      {text}
    </a>
  );
};

const MobileNavLink = ({ href, text, icon }: { href: string; text: string; icon: React.ReactNode }) => {
  return (
    <a href={href} className="w-full flex items-center py-3 px-4 space-x-3 text-xl font-medium text-ling-darkgray rounded-md hover:bg-ling-gray transition duration-200">
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Navbar;
