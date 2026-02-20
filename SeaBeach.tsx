import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import DestinationCard from '@/react-app/components/DestinationCard';

export default function SeaBeach() {
  const destinations = [
    {
      title: 'Bibione, Italy',
      description: 'Between sea and wonder: discover relaxation, history, and fun on Italy\'s most charming beach.',
      location: 'Veneto, Italy',
      category: 'Beach Resort',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image13.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2025/06/08/%f0%9f%8c%8a-bibione-between-sea-and-wonder-diary-of-a-journey-between-relaxation-history-and-fun/'
    },
    {
      title: 'Lignano Sabbiadoro, Italy',
      description: 'History and golden beaches blend in this beloved coastal destination surrounded by pine forests.',
      location: 'Friuli-Venezia Giulia',
      category: 'Coastal Town',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image9.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/08/lignano-sabbiadoro-tra-storia-e-spiagge-dorate/'
    },
    {
      title: 'Barcelona, Spain',
      description: 'Where Mediterranean beaches meet Gaudí\'s architecture in the heart of Catalonia.',
      location: 'Catalonia, Spain',
      category: 'City & Beach',
      imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/10/barcellona-un-viaggio-estivo-tra-architettura-spiagge-e-arte-nel-cuore-della-catalogna-%f0%9f%87%aa%f0%9f%87%b8/'
    },
    {
      title: 'Procida, Italy',
      description: 'The colorful island paradise in the Bay of Naples with authentic Mediterranean charm.',
      location: 'Campania, Italy',
      category: 'Island Paradise',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/procida.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/29/ercolano-pompei-e-procida-un-viaggio-tra-storia-e-bellezza/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://mocha-cdn.com/019afef9-f51a-76cb-8e5b-672702aad6e4/3-2.jpg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            Sea & Coastal Towns
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            Discover stories written by the waves, where the sea blends with life, history, and celebration
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Stories Written by the Waves
          </h2>
          <p className="text-lg text-slate-700 italic max-w-4xl mx-auto">
            Here, I tell stories of seaside towns and coastal landscapes where the sea blends with life, history, and celebration. From Bibione and Lignano Sabbiadoro, to magical places like Barcelona and Procida, each destination offers more than just beaches — it offers culture, legends, local traditions, and seasonal festivals that reveal the soul of each community. I dive into the rhythm of each town, walking through its old streets and watching how the sea becomes part of the people's everyday life — shaping not only the view, but also the identity of the place.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
