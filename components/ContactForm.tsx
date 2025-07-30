// components/ContactForm.tsx
"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  services: string[];
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    services: [],
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
    // Submit logic here - can be the same as your current form action
    try {
      const response = await fetch('https://convertopages.com/forms/process?formId=32045', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formbuilder-form">
      {/* Form fields matching your current structure */}
    </form>
  );
};
