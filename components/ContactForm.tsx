// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // We'll implement the submission logic in the next step
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-md">
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="phone">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Services Checkbox Group */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Services <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            'Pico Laser & PRF (Vampire Facial)',
            'Threading',
            'Dermal Fillers',
            'Anti-Wrinkle Injections'
          ].map(service => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={`service-${service.replace(/\s+/g, '-').toLowerCase()}`}
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`service-${service.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 block text-gray-700">
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
      >
        Submit
      </button>
    </form>
  );
}
