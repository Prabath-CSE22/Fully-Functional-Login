import React, { useState } from 'react';
import { ChevronRight, Star, Clock, Leaf, User } from 'lucide-react';
import Carousel from '../component/ui/carousel';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    scrollToSection('shop');
  };

  const featuredTeas = [
    { name: "Royal Earl Grey", price: "$24.99", rating: 4.8, image: "https://www.jiomart.com/images/product/600x600/rvr73vsu9b/tea-sampler-pack-32-enveloped-tea-bags-assortment-of-8-fine-black-green-tea-flavors-product-images-orvr73vsu9b-p599892396-1-202303271804.jpg" },
    { name: "Jasmine Pearl", price: "$29.99", rating: 4.9, image: "https://th.bing.com/th/id/OIP.YhmniWUXD5iOi7BMuVhiMwHaE7?w=640&h=426&rs=1&pid=ImgDetMain" },
    { name: "Matcha Supreme", price: "$34.99", rating: 5.0, image: "https://th.bing.com/th/id/OIP.wcq-I44BAgDebS69l89nuwHaFf?rs=1&pid=ImgDetMain" }
  ];

  const categories = [
    { name: "Black Tea", count: 24 },
    { name: "Green Tea", count: 18 },
    { name: "Oolong Tea", count: 12 },
    { name: "Herbal Tea", count: 20 }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg w-full sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className='flex items-center gap-2 text-left justify-start -ml-5 hover:cursor-pointer'>
                  <img src='./logo.png' alt='logo' className='w-10 h-10 md:visible invisible'/>
                  <h1 className='text-xl sm:text-xl lg:text-2xl font-semibold text-gray-900 md:visible invisible'> DewTea </h1>
                </div>
              <div className="hidden md:flex space-x-6">
                <button onClick={() => scrollToSection('shop')} className="text-gray-600 hover:text-emerald-600">Shop</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-emerald-600">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-emerald-600">Contact</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <User className="w-5 h-5 text-gray-500 hover:text-emerald-600 cursor-pointer" onClick={() =>{
                navigate('/home')
              }}/>
            </div>

          </div>
        </div>
      </nav>
      {/* {isMenuOpen && <Dropdown msg={"login"} className="absolute top-10"/>} */}
      {/* Hero Section */}
        <div className='w-full h-96'>
        <Carousel handleClick={handleClick}/>
        </div>
      {/* Featured Products */}
      <section id="shop" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Featured Teas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTeas.map((tea, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img 
                  src={tea.image} 
                  alt={tea.name} 
                  className="w-full h-48 object-cover fit-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{tea.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 font-bold">{tea.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{tea.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            🛍️ Available Products Just for You!
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-lg mb-6">
            Browse through our collection and find what you love. Don’t miss out!
          </p>
          <button
            onClick={() => navigate('/home')}
            className="px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:-translate-y-1 transition-transform duration-300"
          >
            Show Now
          </button>
        </div>
      </section>


      {/* Categories */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Shop by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{category.name}</h4>
                    <p className="text-gray-600">{category.count} varieties</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
              <p className="text-gray-600">Hand-picked and ethically sourced teas</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h4>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">About Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://th.bing.com/th/id/OIP.bZ-wbouQDCxKoLKRkGLcBQHaD4?rs=1&pid=ImgDetMain" 
                alt="Tea Garden" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-emerald-800">Our Story</h4>
              <p className="text-gray-600">At DewTea, we believe in the transformative power of a perfect cup of tea. Founded in 2010, we've dedicated ourselves to sourcing the finest teas from sustainable gardens around the world.</p>
              <p className="text-gray-600">Our expert tea masters carefully select each variety, ensuring that only the highest quality leaves make it to your cup. We take pride in supporting ethical farming practices and maintaining direct relationships with our tea growers.</p>
              <div className="pt-4">
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
                  onClick={() => {
                    const newwindow = window.open('https://www.devagiri-estate.com/story', '_blank');
                    if (newwindow) newwindow.opener = null;
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-emerald-800">Get in Touch</h4>
              <p className="text-gray-600">We'd love to hear from you. Whether you have a question about our products, brewing techniques, or anything else, our team is here to help.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="text-emerald-600">📍</i>
                  </div>
                  <div>
                    <h5 className="font-bold">Address</h5>
                    <p className="text-gray-600">123 Tea Garden Lane, Portland, OR 97201</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="text-emerald-600">📧</i>
                  </div>
                  <div>
                    <h5 className="font-bold">Email</h5>
                    <p className="text-gray-600">contact@dewtea.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="text-emerald-600">📞</i>
                  </div>
                  <div>
                    <h5 className="font-bold">Phone</h5>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <form className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  try{
                    const sendEmails = await axios.post("http://localhost:3001/sendcomplain", {
                      name: e.target[0].value,
                      email: e.target[1].value,
                      message: e.target[2].value
                    });
                    if (sendEmails.status === 200) {
                      console.log("Email sent successfully!");
                      e.target.reset();
                    } else {
                      console.log("Failed to send email. Please try again later.");
                    }
                  }catch(err){
                    console.log(err);
                  }
                }}
              >
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-emerald-500"></textarea>
                </div>
                <button type='submit' className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300 active:bg-emerald-800 active:transform active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-emerald-50 text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Tea Club</h3>
          <p className="mb-8 max-w-2xl mx-auto">Subscribe to receive updates about new teas, brewing tips, and exclusive offers.</p>
          <div className="max-w-md mx-auto flex">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              onChange={(e) => setSubscribeEmail(e.target.value)}
            />
            <button className="bg-emerald-600 px-6 py-2 rounded-r-lg hover:bg-emerald-700 transition duration-300 text-emerald-50 active:bg-emerald-800 active:transform active:scale-95"
              onClick={async () => {
                try{
                  const subscribe = await axios.post("http://localhost:3001/subscribe", {
                    email: subscribeEmail
                  });
                  if (subscribe.status === 200) {
                    console.log("Subscribed successfully!");
                    setSubscribeEmail('');
                    document.getElementById('email').value = '';
                  } else {
                    console.log("Failed to subscribe. Please try again later.");
                  }
                }catch(err){
                  console.log(err);
                }
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 sm:px-12">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between gap-6">
            {/* About Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-lg font-bold text-white mb-4">About Us</h2>
              <p className="text-sm">
                We are a leading e-commerce platform providing the best products at unbeatable prices. Our mission is to deliver quality and satisfaction to our customers.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-white transition duration-200">Home</a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition duration-200">Products</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition duration-200">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition duration-200">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="bx bx-map text-xl mr-2"></i> 123 Main Street, City, Country
                </li>
                <li className="flex items-center">
                  <i className="bx bx-phone text-xl mr-2"></i> +1 (234) 567-890
                </li>
                <li className="flex items-center">
                  <i className="bx bx-envelope text-xl mr-2"></i> support@example.com
                </li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition duration-200">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;