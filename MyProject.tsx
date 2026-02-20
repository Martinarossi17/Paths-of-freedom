import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { BookOpen, Compass, Heart, Star } from 'lucide-react';

export default function MyProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://019afef9-f51a-76cb-8e5b-672702aad6e4.mochausercontent.com/.jpg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            My Project: Sentieri di Libertà
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            A journey through words, images, and emotions
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 text-center">
            About Sentieri di Libertà
          </h2>
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-lg text-slate-700 italic">
              Sentieri di Libertà (Paths of Freedom) is more than a travel blog—it's a personal project born from a deep love for exploration, storytelling, and cultural discovery. Through this platform, I share authentic travel narratives that go beyond the surface of tourist destinations.
            </p>
            <p className="text-lg text-slate-700 italic">
              Each story is carefully crafted to transport readers into the heart of a place, revealing its history, traditions, hidden corners, and the emotions that make every journey unforgettable. I believe travel is not just about seeing new places, but about understanding them—and through my writing, I aim to create that connection.
            </p>
            <p className="text-lg text-slate-700 italic">
              The blog is a reflection of my personal philosophy: to travel responsibly, engage authentically with local cultures, and share experiences that inspire curiosity and respect for the world around us.
            </p>
          </div>
        </div>
      </section>

      {/* Project Pillars */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-12">
          The Four Pillars of My Project
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-5">
              <BookOpen className="w-16 h-16 text-red-700" />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-4">Storytelling</h3>
            <p className="text-slate-700 italic">
              Every destination has a story waiting to be told. I craft narratives that bring places to life through vivid descriptions and emotional depth.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-5">
              <Compass className="w-16 h-16 text-red-700" />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-4">Exploration</h3>
            <p className="text-slate-700 italic">
              From alpine lakes to historic cities, I venture beyond the obvious to discover hidden gems and authentic experiences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-5">
              <Heart className="w-16 h-16 text-red-700" />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-4">Cultural Connection</h3>
            <p className="text-slate-700 italic">
              Understanding local traditions, engaging with communities, and respecting cultural heritage are at the core of my travels.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-5">
              <Star className="w-16 h-16 text-red-700" />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-4">Inspiration</h3>
            <p className="text-slate-700 italic">
              My goal is to inspire others to travel mindfully, discover new perspectives, and create their own meaningful journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8 text-center">
            What You'll Find
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-900 mb-3">🏔️ Mountains</h3>
              <p className="text-slate-700 italic">
                Alpine trails, peaceful villages, breathtaking views, and the traditions that thrive in high-altitude landscapes across Italy, Austria, and Slovenia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-900 mb-3">🌊 Sea & Beach</h3>
              <p className="text-slate-700 italic">
                Coastal towns where the sea shapes daily life, from the beaches of Friuli-Venezia Giulia to Mediterranean islands and beyond.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-900 mb-3">🏛️ Cities</h3>
              <p className="text-slate-700 italic">
                Urban explorations through art, history, architecture, and culture—from charming Italian towns to European capitals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-900 mb-3">💧 Lakes</h3>
              <p className="text-slate-700 italic">
                Tranquil alpine lakes, hidden waterways, and the legends and natural beauty that surround these serene landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl shadow-xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Vision for the Future
          </h2>
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-lg">
              Sentieri di Libertà started as a personal passion project, but my vision extends far beyond a blog. I dream of building a career in international tourism and cultural communication—working with travel agencies, tourism boards, museums, and cultural organizations to tell the world's stories.
            </p>
            <p className="text-lg">
              I want to create meaningful itineraries, design travel experiences that leave a positive impact, and contribute to organizations that value authentic storytelling and sustainable tourism.
            </p>
            <p className="text-lg font-semibold">
              One day, I hope to join dynamic networks like Madrid Travel Bloggers, bringing my unique perspective, creativity, and spirit of discovery to a global audience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Join Me on This Journey
          </h2>
          <p className="text-lg text-slate-700 italic max-w-3xl mx-auto mb-8">
            Follow along as I explore new destinations, share travel insights, and continue building this project into something that inspires and connects travelers around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/#contact"
              className="px-8 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="https://www.instagram.com/martina.rossi20/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-2 border-red-900 text-red-900 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
