// ContactUs.jsx
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent successfully! 🎉');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-800 text-white font-display">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-6 lg:px-12 overflow-hidden">
        {/* Dark overlay + background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            borderRadius: '0 0 50% 50% / 10% 10% 90% 90%',
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGIRTpEUXYbNHevq0AjTQ6AQZl_5URB2OUq2KhTQRKYKLMiRhgDnzHgri0mcLiANTAnSHp09xV6_RdrrK5HzpWU3RLEELATm4eMPjQkzqITdKLNbJs5bwm5VWvfzUrrcxTXhHh7gjArL6pim53QRDx-e0cI1hm5z9-o7Owlhobv832Yl1IYvsD4E3mgyb59cH_aXdb6VwkqRc32Ry_IV2uwIKOnZiJc8DJ9w53z007-95sUQiVOUdZh391A_bHLZh_Xkph64Xv_p0")'
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto mb-10">
            Have questions about your upcoming adventure? Our team is ready to help you plan the perfect safari experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Phone card */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-700/90 border border-gray-500/70 shadow-lg">
              <div className="w-11 h-11 rounded-xl bg-gray-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-gray-300">
                  Call Us
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  +1 (555) 019-2834
                </p>
              </div>
            </div>

            {/* Email card */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-700/90 border border-gray-500/70 shadow-lg">
              <div className="w-11 h-11 rounded-xl bg-gray-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-gray-300">
                  Email Us
                </p>
                <a
                  href="mailto:hello@junglesafari.com"
                  className="text-sm sm:text-base font-semibold text-white hover:text-gray-200 transition-colors"
                >
                  hello@junglesafari.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 lg:px-12 pb-20 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details */}
            <div className="rounded-3xl bg-gray-900 border border-gray-600 shadow-xl p-7 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Details</h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Visit Us
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                      123 Rainforest Way
                      <br />
                      Canopy District, Amazonia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-600 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Call Us
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      +1 (555) 019-2834
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Mon–Fri, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@junglesafari.com"
                      className="text-sm sm:text-base font-semibold text-white hover:text-gray-200 transition-colors"
                    >
                      hello@junglesafari.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden bg-gray-900 border border-gray-600 shadow-xl">
              <img
                alt="Jungle Safari Location Map"
                className="w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbK0b4TMcT6LdG-w6op8ShQaBdXjPuGFbocDqZZ9eDtVUUNwKM-6BY-7n5U_Uocj1ZNr7yeB3oA003bTuMQdKDS3Y6WlT_6j-uBR2QqHyrzVlBEti7s0lbzrhVPrsWzEythXLX_7znIdNxUU2ZRQGtUfQzQ_CJqEnWKB6SnrZmSE9Eavph7DqUL4T3Aoijvt2Zrqlyuq4xHsTGAg3ZLNV_K-aXgagPLOqqQpDnFPhp8-H6n8jpBsVOW4v0i86wyBFswEv-r9fbv9w"
              />
            </div>
          </div>

          {/* Right Column – Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gray-900 border border-gray-600 shadow-xl p-7 sm:p-9">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Send a Message
                </h3>
                <p className="text-sm sm:text-base text-gray-300/90">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {status && (
                <div
                  className={`mb-6 p-4 rounded-xl text-center text-sm sm:text-base font-semibold ${
                    status.includes('successfully')
                      ? 'bg-green-800 text-green-100 border border-green-500'
                      : 'bg-amber-800 text-amber-50 border border-amber-500'
                  }`}
                >
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-gray-950 border border-gray-600 text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-gray-950 border border-gray-600 text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-gray-950 border border-gray-600 text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-gray-950 border border-gray-600 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>General Inquiry</option>
                      <option>Book a Tour</option>
                      <option>Private Event</option>
                      <option>Press & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] p-4 rounded-xl bg-gray-950 border border-gray-600 text-sm sm:text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                    placeholder="Tell us more about your plans..."
                    required
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center px-8 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-12 py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-600">
              <h4 className="text-lg font-semibold mb-3 text-gray-200">
                What should I pack?
              </h4>
              <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                Light, breathable clothing, sturdy hiking boots, sunscreen, insect repellent, and your camera for unforgettable moments.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-600">
              <h4 className="text-lg font-semibold mb-3 text-gray-200">
                Is it safe for kids?
              </h4>
              <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                Yes, our family-friendly tours are guided by trained experts and designed to keep children safe while they explore and learn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
