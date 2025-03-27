
import React from 'react';
import { Car, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-ling-darkgray text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Car className="h-8 w-8 text-ling-red" />
                <span className="text-xl font-bold tracking-tight">
                  LING'S <span className="text-ling-red">CARS</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                The UK's favorite car leasing dealer, offering unbeatable deals and an unforgettable experience.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <FooterLink href="#cars" text="Browse Cars" />
                <FooterLink href="#deals" text="Special Offers" />
                <FooterLink href="#about" text="About Ling" />
                <FooterLink href="#testimonials" text="Customer Stories" />
                <FooterLink href="#contact" text="Contact Us" />
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Car Categories</h4>
              <ul className="space-y-3">
                <FooterLink href="#" text="Electric Cars" />
                <FooterLink href="#" text="SUVs & Crossovers" />
                <FooterLink href="#" text="Luxury Vehicles" />
                <FooterLink href="#" text="Economy Cars" />
                <FooterLink href="#" text="Business Leasing" />
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <address className="not-italic space-y-3 text-gray-400">
                <p>Lingscars HQ, Gateshead, UK</p>
                <p>
                  <a href="tel:+441912989824" className="hover:text-white transition-colors">
                    +44 (0) 191 298 9824
                  </a>
                </p>
                <p>
                  <a href="mailto:info@lingscars.com" className="hover:text-white transition-colors">
                    info@lingscars.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ling's Cars Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 w-12 h-12 bg-ling-red rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ling-red transition-colors duration-300"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {text}
      </a>
    </li>
  );
};

export default Footer;
