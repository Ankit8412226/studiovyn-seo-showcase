'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
    if (!validateForm()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || 'Failed to send message');

      setStatus('success');
      setShowModal(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
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
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#34d399]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-secondary mb-2 text-white">Proposal Request Received</h3>
          <p className="text-slate-300 font-primary text-sm mb-6">
            Thanks for reaching out to StudioVyn. Our senior software director will review your requirements and respond within 24 hours.
          </p>
          <Button onClick={() => setShowModal(false)} fullWidth>
            Close
          </Button>
        </div>
      </Modal>

      <section id="contact-form" className="py-24 sm:py-32 bg-[#07090e] bg-grid-pattern relative overflow-hidden border-t border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </div>
              <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Let’s build something <span className="text-gradient-emerald">exceptional together.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-primary max-w-xl mx-auto">
                Tell us about your digital product goals. We'll reply within 24 hours with an itemized scope and proposal.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Contact Cards — 4 COLS */}
              <div className="lg:col-span-4 space-y-4">
                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <Mail className="w-6 h-6 text-[#34d399] mb-3" />
                  <h3 className="font-secondary font-bold text-white text-base mb-1">Direct Email</h3>
                  <a href="mailto:tech@studiovyn.in" className="text-xs font-mono text-slate-300 hover:text-[#34d399] transition-colors">
                    tech@studiovyn.in
                  </a>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-white/10">
                  <Phone className="w-6 h-6 text-[#34d399] mb-3" />
                  <h3 className="font-secondary font-bold text-white text-base mb-1">Direct Phone</h3>
                  <a href="tel:+918529747613" className="text-xs font-mono text-slate-300 hover:text-[#34d399] transition-colors">
                    +91 8529747613
                  </a>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0d121d]">
                  <div className="text-xs font-mono text-slate-400 mb-2">✓ Senior Engineer Audit</div>
                  <div className="text-xs font-mono text-slate-400 mb-2">✓ Fixed Price Guarantee</div>
                  <div className="text-xs font-mono text-slate-400">✓ 100% Core Web Vitals Standard</div>
                </div>
              </div>

              {/* Form — 8 COLS */}
              <div className="lg:col-span-8 glass-card p-8 sm:p-10 rounded-2xl border border-white/15 bg-[#0d121d]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Your Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label="Work Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Company / Brand (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      error={errors.company}
                      placeholder="Your Company Name"
                    />
                    <Input
                      label="Phone Number (Optional)"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <Textarea
                    label="Project Scope & Requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={5}
                    placeholder="Briefly describe your product goals, timeline, and budget constraints..."
                    maxLength={1000}
                  />

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Something went wrong. Please try again or email tech@studiovyn.in directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl font-secondary font-bold text-base text-black bg-[#34d399] hover:bg-[#10b981] shadow-xl shadow-emerald-500/25 transition-all"
                  >
                    {status === 'submitting' ? 'Submitting Proposal Request...' : 'Get Free Proposal & Timeline'}
                  </button>

                  <p className="text-[11px] text-slate-400 font-mono text-center">
                    By submitting this form, you agree to our privacy standards. No spam guarantee.
                  </p>
                </form>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
