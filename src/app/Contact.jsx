'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('idle');
      alert('Unable to send message. Please email tech@studiovyn.in');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-4">Let’s build something great</h2>
          <p className="text-gray-600 font-primary">Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" name="email" placeholder="Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="company" placeholder="Company (optional)" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="phone" placeholder="Phone (optional)" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <textarea required name="message" placeholder="Tell us about your project" rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex items-center gap-4">
            <button disabled={status==='submitting'} className="btn-primary">
              {status==='submitting' ? 'Sending…' : 'Request a proposal'}
            </button>
            {status==='success' && <span className="text-green-600 font-primary">Thanks! We’ll reach out shortly.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}


