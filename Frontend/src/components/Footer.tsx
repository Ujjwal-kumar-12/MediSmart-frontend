import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-2 rounded-full mr-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MediSmart</h3>
                <p className="text-gray-400 text-sm">Smart Healthcare Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in healthcare management. We connect you with the best medical professionals and provide seamless appointment booking services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <div>
                  <p className="font-medium">24/7 Helpline</p>
                  <p className="text-gray-400">+1 (800) MEDISMART</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-400">support@medismart.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-gray-400">123 Healthcare Plaza, Medical District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#book-appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#patient-portal" className="text-gray-400 hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Doctors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Medical Records</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          {/* Emergency & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Emergency & Hours</h4>
            <div className="space-y-4">
              <div className="bg-red-600 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 text-white mr-2" />
                  <span className="font-bold text-white">Emergency: 911</span>
                </div>
                <p className="text-red-100 text-sm">
                  For life-threatening emergencies, call 911 immediately.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="font-medium">Support Hours</span>
                </div>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Mon-Fri: 6:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 8:00 AM - 8:00 PM</p>
                  <p className="text-green-400 font-medium">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediSmart. All rights reserved. | Privacy Policy | Terms of Service | HIPAA Compliance
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-400 text-sm">🟢 All Systems Operational</span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-400 text-sm">Made with ❤️ for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;