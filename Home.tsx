import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Globe, Recycle, Footprints, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[700px] flex items-center justify-center text-white text-center px-5 py-32 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/park-guell.jpg)'
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pink-200 drop-shadow-lg">
            Martina: <span className="text-pink-300">Explorer</span>, <span className="text-red-400">Storyteller</span>, <span className="text-red-500">Freedom Lover</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md max-w-3xl mx-auto">
            Discover the story and philosophy behind Sentieri di libertà, your travel companion to authentic and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-5 py-20">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl grid md:grid-cols-2">
          <img 
            src="https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/photo-1530789253388-582c481c54b0-(1).jpeg"
            alt="Hot air balloons"
            className="w-full h-full object-cover min-h-[500px]"
          />
          <div className="p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">My Story</h2>
            <p className="text-lg text-slate-700 italic mb-4">
              My name is Martina Rossi, I'm 20 years old and I'm an Italian travel writer passionate about storytelling, culture, and discovery.
            </p>
            <p className="text-lg text-slate-700 italic mb-4">
              I believe that every journey—whether to a remote alpine lake or a vibrant European city—is a chance to connect deeply with the world and those who live in it.
            </p>
            <p className="text-lg text-slate-700 italic mb-4">
              Through my blog Sentieri di Libertà, I share authentic travel experiences, focusing on history, local traditions, hidden gems, and emotional moments that define each destination. I write to inspire, inform, and evoke curiosity—blending thoughtful narration with a deep respect for place and people.
            </p>
            <p className="text-lg text-slate-700 italic">
              I am currently studying the Technical Sciences of Tourism course at the University of Udine, with the aim of building a significant career in international tourism and cultural communication.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-12">My Travel Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
            <div className="text-5xl mb-5 text-red-700">
              <Globe className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Authentic Travels</h3>
            <p className="text-slate-700 italic">
              I always seek genuine experiences that allow me to connect with the local culture, avoiding tourist traps and discovering the true essence of each destination.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
            <div className="text-5xl mb-5 text-red-700">
              <Recycle className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Sustainability</h3>
            <p className="text-slate-700 italic">
              I travel responsibly, respecting the environment and local communities. I promote tourism that leaves a positive impact on people and places.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
            <div className="text-5xl mb-5 text-red-700">
              <Footprints className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Spirit of Adventure</h3>
            <p className="text-slate-700 italic">
              I believe the best experiences are found off the beaten path. I love exploring unusual places and creating unique itineraries that inspire curiosity and wonder.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-5 py-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-red-900 text-white p-6">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          </div>
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Email</h3>
                    <a href="mailto:martinarossi948@gmail.com" className="text-slate-700 hover:text-red-900 hover:underline">
                      martinarossi948@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+393791181345" className="text-slate-700 hover:text-red-900 hover:underline">
                      +39 379 118 1345
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-semibold text-red-900 mb-3">Follow Me:</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/martina.rossi20/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-white hover:bg-red-800 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.threads.com/@martina.rossi20" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-white hover:bg-red-800 transition-colors font-bold text-sm"
                      aria-label="Threads"
                    >
                      @
                    </a>
                    <a 
                      href="https://it.pinterest.com/martykrav20/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-white hover:bg-red-800 transition-colors"
                      aria-label="Pinterest"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@martinarossi.20?_r=1&_t=2N-917yEyQiXLy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-white hover:bg-red-800 transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone / WhatsApp"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <textarea 
                    placeholder="Your message..." 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-red-900 mb-4 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Me in Gemona del Friuli
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87517.63024308654!2d13.062089!3d46.275583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a4f8c3e8a8b8b%3A0x8c8a8c8c8c8c8c8c!2sGemona%20del%20Friuli%2C%20UD%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
