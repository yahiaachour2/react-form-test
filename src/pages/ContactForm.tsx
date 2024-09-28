import '../pages/contactForm.css';
import '../Components/input/input.css';
import '../Components/select/select.css';
import '../Components/button/button.css';

import { Button } from '../Components/button/Button';
import { Input } from '../Components/input/Input';
import { Select } from '../Components/select/Select';
import { useContactForm } from '../hooks/useContactForm';
import { Country } from '../types/common';

function ContactForm() {
  const {
    formData,
    errors,
    formSubmitted,
    handleChange,
    handleSelectChange,
    handleSubmit,
  } = useContactForm();

  const countries: Country[] = [
    { code: '', name: 'Select your country' },
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
  ];

  return (
    <div className="container">
      <div className="triangle-top-right"></div>
      <div className="triangle-bottom-left"></div>

      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Contact Form</h2>
        {formSubmitted && (
          <div className="success-message-box">
            <p>Success! Your contact information has been submitted.</p>
          </div>
        )}
        <Input
          id="email"
          name="email"
          type="text"
          label="Email *"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <Input
          id="fullName"
          name="fullName"
          type="text"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <Select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleSelectChange}
          countries={countries}
        />

        <div className="terms-section">
          <input
            type="checkbox"
            id="terms-section"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label className="terms-label">
            I agree to the <span className="highlight">
              <a href="/terms-and-conditions">terms and conditions</a>
            </span>
          </label>
          {errors.termsAccepted && <p className="error-message">{errors.termsAccepted}</p>}
        </div>

        <Button content="Submit" style={{ backgroundColor: '#007BFF', padding: '6px 15px', fontSize: '13px' }} />
      </form>
    </div>
  );
}

export default ContactForm;
