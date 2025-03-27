
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-ling-gray text-ling-darkgray mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Ling's Cars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your leasing journey? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-ling-gray rounded-2xl p-8 shadow-smooth">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ling-red"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ling-red"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ling-red"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ling-red"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="shine-effect py-3 px-6 bg-ling-red text-white rounded-md hover:bg-opacity-90 font-medium transition-all duration-300 w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ling-red bg-opacity-10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-ling-red" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-1">Mon-Fri: 9AM - 6PM</p>
                  <a href="tel:+441912989824" className="text-ling-red hover:underline">+44 (0) 191 298 9824</a>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ling-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-ling-blue" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-1">We'll respond within 24 hours</p>
                  <a href="mailto:info@lingscars.com" className="text-ling-blue hover:underline">info@lingscars.com</a>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ling-green bg-opacity-10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-ling-green" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-600 mb-1">Our Headquarters</p>
                  <address className="not-italic text-ling-green">
                    Lingscars HQ, Gateshead, UK
                  </address>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ling-yellow bg-opacity-10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-ling-yellow" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Live Chat</h4>
                  <p className="text-gray-600 mb-1">Chat with our team</p>
                  <button className="text-ling-yellow hover:underline">Start Live Chat</button>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-ling-gray rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
