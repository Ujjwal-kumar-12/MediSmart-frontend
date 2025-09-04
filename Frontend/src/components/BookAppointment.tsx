import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, Phone } from 'lucide-react';
import { hospitals } from '../utils/constants.ts';
import type { Hospital } from '../types.ts';

const BookAppointment: React.FC = () => {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    specialty: '',
    symptoms: ''
  });
  const [isBooking, setIsBooking] = useState(false);

  const specialties = [
    'General Medicine', 'Cardiology', 'Dermatology', 'Neurology',
    'Orthopedics', 'Pediatrics', 'Radiology', 'Surgery', 'Oncology'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHospital) return;

    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`✅ Appointment booked successfully at ${selectedHospital.name} for ${formData.date} at ${formData.time}`);
    setIsBooking(false);
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', 
      date: '', time: '', specialty: '', symptoms: ''
    });
    setSelectedHospital(null);
  };

  return (
    <section id="book-appointment" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our network of trusted hospitals and schedule your visit with ease.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hospital Selection */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Select Hospital
            </h3>
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  onClick={() => setSelectedHospital(hospital)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedHospital?.id === hospital.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {hospital.name}
                          </h4>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{hospital.address}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{hospital.rating}</span>
                            <span className="text-sm text-gray-500 ml-2">{hospital.distance} away</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-green-600">
                            <Phone className="h-4 w-4 mr-1" />
                            <span className="text-sm">{hospital.phone}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2">
                          {hospital.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Patient Details
            </h3>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select specialty</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms / Reason for Visit
                </label>
                <textarea
                  name="symptoms"
                  rows={4}
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Describe your symptoms or reason for visit"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedHospital || isBooking}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isBooking ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Booking Appointment...
                  </div>
                ) : (
                  <>
                    <Calendar className="h-5 w-5 inline mr-2" />
                    Book Appointment
                  </>
                )}
              </button>

              {!selectedHospital && (
                <p className="text-center text-gray-500 text-sm mt-4">
                  Please select a hospital to proceed with booking
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;