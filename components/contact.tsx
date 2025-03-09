'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ success: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await emailjs.send(
        'service_rsfxvpy', // Thay bằng Service ID từ EmailJS
        'template_tk7a46n', // Thay bằng Template ID từ EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'bRBLPWN36inD5c5Oe' // Thay bằng Public Key từ EmailJS
      );

      if (response.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="p-6 rounded-xl"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-content font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-content focus:ring-2 focus:ring-primary outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-content font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-content focus:ring-2 focus:ring-primary outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-content font-medium mb-2">Your Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-content focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-white font-bold text-lg transition-transform transform hover:scale-105"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status.message && (
            <p className={`mt-4 text-center font-medium ${status.success ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
