'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Card from '@/components/ui/Card';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Optional field
    return /^[\d\s\-\+\(\)]+$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setStatus('error');
      console.error('Contact form error:', error);
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <>
      {/* Success Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setStatus('idle');
        }}
        title=""
        size="sm"
        showCloseButton={true}
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold font-secondary mb-2 text-gray-900">
            Thank You!
          </h3>
          <p className="text-gray-600 font-primary mb-6">
            Thanks for contacting StudioVyn. We'll get back to you within 24 hours!
          </p>
          <Button onClick={() => setShowModal(false)} fullWidth>
            Close
          </Button>
        </div>
      </Modal>

      <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-4 text-gray-900">
                Let's Build Something Great
              </h2>
              <p className="text-lg text-gray-600 font-primary max-w-2xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <Card variant="elevated" padding="md" className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold font-secondary text-gray-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:tech@studiovyn.in"
                    className="text-blue-600 hover:text-blue-700 font-primary text-sm"
                  >
                    tech@studiovyn.in
                  </a>
                </Card>

                <Card variant="elevated" padding="md" className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Phone className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold font-secondary text-gray-900 mb-2">Call Us</h3>
                  <a
                    href="tel:+918529747613"
                    className="text-blue-600 hover:text-blue-700 font-primary text-sm"
                  >
                    +91 8529747613
                  </a>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card variant="elevated" padding="lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                        placeholder="John Doe"
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        placeholder="john@example.com"
                        icon={<Mail className="w-4 h-4" />}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Company (Optional)"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        error={errors.company}
                        placeholder="Your Company"
                      />
                      <Input
                        label="Phone (Optional)"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+91 9876543210"
                        icon={<Phone className="w-4 h-4" />}
                      />
                    </div>

                    <Textarea
                      label="Project Details"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                      rows={6}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      showCount
                      maxLength={1000}
                      helperText="Minimum 10 characters required"
                    />

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-sm text-red-600 font-primary">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'submitting'}
                      loading={status === 'submitting'}
                      fullWidth
                      size="lg"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Request a Proposal'}
                    </Button>

                    <p className="text-xs text-gray-500 font-primary text-center">
                      By submitting this form, you agree to our privacy policy. We'll never spam you.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
