import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { useState } from 'react';

export default function Trip() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://019afef9-f51a-76cb-8e5b-672702aad6e4.mochausercontent.com/2.jpg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            A Trip With Me
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            Experience authentic travel with personalized itineraries and unique experiences
          </p>
        </div>
      </section>

      {/* Trip Intro */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Travel Differently
          </h2>
          <p className="text-lg text-slate-700 italic max-w-4xl mx-auto">
            Join me on a journey beyond the typical tourist paths. I create personalized travel experiences that focus on authentic connections, cultural immersion, and sustainable practices. Whether you're interested in exploring hidden gems, learning about local traditions, or simply experiencing a destination through the eyes of a local, I'll design an itinerary that matches your interests and travel style.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-5">🗺️</div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Personalized Itineraries</h3>
            <p className="text-slate-700 italic">
              Each journey is carefully crafted based on your interests, pace, and preferences. No two trips are alike.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-5">🌿</div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Sustainable Travel</h3>
            <p className="text-slate-700 italic">
              We prioritize eco-friendly accommodations, support local businesses, and practice responsible tourism.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-5">📚</div>
            <h3 className="text-2xl font-semibold text-red-900 mb-4">Cultural Immersion</h3>
            <p className="text-slate-700 italic">
              Go beyond sightseeing with authentic experiences that connect you to local traditions and communities.
            </p>
          </div>
        </div>

        {/* Sample Itinerary */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-12">
            Sample Itinerary: Alpine Discovery
          </h2>

          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {['day1', 'day2', 'day3', 'day4'].map((day, index) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeDay === day
                    ? 'bg-red-900 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-red-100'
                }`}
              >
                Day {index + 1}
              </button>
            ))}
          </div>

          {/* Day Content */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            {activeDay === 'day1' && (
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                  Arrival & Mountain Village Immersion
                </h3>
                <ul className="space-y-5">
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Morning:</span>
                    <span className="text-slate-700 italic"> Arrival at the mountain village and welcome meeting. Introduction to the local culture and traditions.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Afternoon:</span>
                    <span className="text-slate-700 italic"> Gentle hike to a nearby alpine lake with stunning views. Picnic lunch with local specialties.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Evening:</span>
                    <span className="text-slate-700 italic"> Dinner at a family-run agriturismo featuring traditional recipes passed down through generations.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeDay === 'day2' && (
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                  Alpine Trails & Local Crafts
                </h3>
                <ul className="space-y-5">
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Morning:</span>
                    <span className="text-slate-700 italic"> Scenic hike through ancient forests to a high-altitude pasture. Learn about alpine flora and fauna.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Afternoon:</span>
                    <span className="text-slate-700 italic"> Visit to a local artisan workshop specializing in traditional woodcarving. Hands-on experience creating a small souvenir.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Evening:</span>
                    <span className="text-slate-700 italic"> Free time to explore the village or relax before a dinner featuring foraged ingredients.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeDay === 'day3' && (
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                  Mountain Passes & Cultural Heritage
                </h3>
                <ul className="space-y-5">
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Morning:</span>
                    <span className="text-slate-700 italic"> Journey across a historic mountain pass with breathtaking views. Stop at a centuries-old refuge.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Afternoon:</span>
                    <span className="text-slate-700 italic"> Explore a remote alpine church with unique frescoes and learn about mountain spirituality.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Evening:</span>
                    <span className="text-slate-700 italic"> Traditional dinner followed by storytelling session with local elders sharing mountain legends.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeDay === 'day4' && (
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
                  Farewell & Future Journeys
                </h3>
                <ul className="space-y-5">
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Morning:</span>
                    <span className="text-slate-700 italic"> Sunrise meditation at a scenic viewpoint. Final hike to a hidden waterfall.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Afternoon:</span>
                    <span className="text-slate-700 italic"> Farewell lunch featuring the best of local cuisine. Exchange contact information and travel tips.</span>
                  </li>
                  <li className="pl-8 relative before:content-['•'] before:absolute before:left-0 before:text-red-900 before:text-2xl before:top-[-4px]">
                    <span className="font-semibold text-red-900">Evening:</span>
                    <span className="text-slate-700 italic"> Departure with memories of an authentic alpine experience and connections that will last beyond the journey.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Ready for Your Journey?
          </h2>
          <p className="text-lg text-slate-700 italic max-w-3xl mx-auto">
            Let's create a unique travel experience together. Contact me to discuss your interests, preferences, and travel dates. I'll design a personalized itinerary that matches your dreams and creates memories that will last a lifetime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
