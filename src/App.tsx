import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const clients = [
    { 
      name: 'Northern Soda Company', 
      logo: 'https://i.hizliresim.com/ej1s137.png'
    },
    { 
      name: 'P&TY Granola Co', 
      logo: 'https://i.hizliresim.com/q22a0v2.png'
    },
    { 
      name: 'Taco Terco', 
      logo: 'https://i.hizliresim.com/tvz3il4.png'
    },
    {
      name: 'JoMamas',
      logo: 'https://i.hizliresim.com/h8v50a9.jpg'
    },
    {
      name: 'Jammin Jimmys',
      logo: 'https://i.hizliresim.com/q3xn7x7.jpg'
    },
    {
      name: 'Sturdiwheat',
      logo: 'https://i.hizliresim.com/d2zwezj.jpg'
    },
    {
      name: 'Big Watt Beverage',
      logo: 'https://i.hizliresim.com/gj0kg4t.jpg'
    },
    {
      name: 'Seven Bridges',
      logo: 'https://i.hizliresim.com/krf2p1g.jpg'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://formsubmit.co/your-email@example.com', {
        method: 'POST',
        body: formData,
      });
      setIsMessageSent(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home">
                <img 
                  src="https://i.hizliresim.com/rm69m47.png" // Use the new URL
                  alt="3 Brothers Marketing"
                  className="h-16 w-16" // Set the size to 64x64 pixels
                />
              </a>
              <a href="#home" className="ml-2 text-xl font-bold text-gray-700">3 Brothers Marketing</a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#clients" className="text-gray-700 hover:text-blue-600">Our Clients</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#clients" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Clients</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              EMPOWERING GROWTH,
              <span className="block">ELEVATING BRANDS</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Strategic marketing solutions for brands ready to shine in Minnesota, North Dakota, and Wisconsin.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <div className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <p>
                At 3 Brothers Marketing, our mission is to provide exceptional sales and account management services with a deep commitment to giving love and attention to the brands that often go unnoticed in the Minnesota, North Dakota, and Wisconsin markets. We strive to elevate these brands by building meaningful relationships with key retailers and distributors, ensuring their products receive the visibility and strategic placement they deserve.
              </p>
              <p className="mt-4">
                Through customized strategies, thoughtful execution, and a focus on driving real growth, we bring passion and care to every partnership. Our approach is rooted in integrity, collaboration, and a genuine dedication to delivering sustainable success for brands that are ready to shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Our Clients
          </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center p-8 bg-white rounded-lg shadow-md h-40">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Let's discuss how we can help your business grow
            </p>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="ml-4 text-gray-600">+1 (651) 491-7345</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="ml-4 text-gray-600">volkan@3brothersmarketing.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="ml-4 text-gray-600">Minneapolis/St.Paul Area</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {isMessageSent ? (
                  <div className="flex items-center justify-center p-4 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-green-800">Message sent successfully!</span>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} 3Brothers Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;