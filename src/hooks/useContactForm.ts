import { useState } from 'react';

import { isEmailValid } from '../helpers/isEmailValid';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    country: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    country: '',
    fullName: '',
    termsAccepted: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors({ ...errors, [name]: '' });
    setFormSubmitted(false);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
    setFormSubmitted(false);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      email: '', country: '', fullName: '', termsAccepted: '',
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isEmailValid(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        setFormSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return {
    formData,
    errors,
    formSubmitted,
    handleChange,
    handleSelectChange,
    handleSubmit,
  };
};
