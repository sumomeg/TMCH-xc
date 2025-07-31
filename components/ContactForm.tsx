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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

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
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const submissionData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      'id-2602-services': formData.services,
      message: formData.message,
      '__email__': ''
    };

    console.log('Submitting data:', submissionData); // Add this line
    console.log('Formatted data:', new URLSearchParams(submissionData as any).toString()); // Add this line

    const response = await fetch('https://convertopages.com/forms/process?formId=32045', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(submissionData as any).toString()
    });

    console.log('Response status:', response.status); // Add this line
    // ... rest of your code

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          services: [],
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

       {/* Status Message */}
      {submitStatus && (
        <div className={`mb-4 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
