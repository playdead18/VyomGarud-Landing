// src/components/Contact.tsx

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold font-inter">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Ready to <span className="text-primary">Deploy</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Contact our team to discuss your mission requirements and discover how VyomGarud can support your operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6">Contact Information</h3>
              <p className="text-gray-400 font-inter mb-8">
                Our team is available to answer your questions and provide detailed technical specifications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 font-poppins">Email</div>
                  <a href="mailto:info@vyomgarud.com" className="text-gray-400 hover:text-primary transition-colors font-inter">
                    info@vyomgarud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 font-poppins">Phone</div>
                  <a href="tel:+918881444693" className="text-gray-400 hover:text-primary transition-colors font-inter">
                    +91 8881444693
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1 font-poppins">Address</div>
                  <p className="text-gray-400 font-inter">
                    Defense Technology Hub<br />
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal border border-charcoal-light p-6 rounded-lg mt-8">
              <h4 className="font-semibold mb-3 font-poppins">Business Hours</h4>
              <div className="space-y-2 text-gray-400 font-inter">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal border border-charcoal-light p-8 rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 font-inter">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-charcoal-light rounded-md focus:outline-none focus:border-primary transition-colors text-white font-inter"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 font-inter">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-charcoal-light rounded-md focus:outline-none focus:border-primary transition-colors text-white font-inter"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 font-inter">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark border border-charcoal-light rounded-md focus:outline-none focus:border-primary transition-colors text-white font-inter resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {formStatus && (
                <div className="bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded-md font-inter">
                  {formStatus}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-4 rounded-md font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;