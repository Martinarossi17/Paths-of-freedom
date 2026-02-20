import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import DestinationCard from '@/react-app/components/DestinationCard';

export default function Lakes() {
  const destinations = [
    {
      title: 'Lake Wernberg, Austria',
      description: 'Nature and Austrian traditions blend perfectly in this hidden alpine gem.',
      location: 'Austria',
      category: 'Alpine Lake',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/SnapInsta.to_106422298_271698210590457_4162975252088376346_n.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/14/scoprendo-il-lago-wernberg-tra-natura-e-tradizioni-austriache/'
    },
    {
      title: 'Leale Stream, Gemona',
      description: 'An adventure through natural wonders and unique biodiversity.',
      location: 'Gemona, Italy',
      category: 'Mountain Stream',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/leale.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/29/forra-del-torrente-leale-unavventura-tra-meraviglie-naturali-e-biodiversita-unica/'
    },
    {
      title: 'Val Bartolo River, Tarvisio',
      description: 'Crystal-clear mountain waters flowing through pristine alpine valleys.',
      location: 'Tarvisio, Italy',
      category: 'Mountain River',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/val-bartolo.png',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/28/fiume-val-bartolo-a-tarvisio/'
    },
    {
      title: 'Palar Stream, Trasaghis',
      description: 'Nature\'s raw power carved through mountain stone.',
      location: 'Trasaghis, Italy',
      category: 'Alpine Torrent',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/palar.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/28/torrente-palar-a-trasaghis/'
    },
    {
      title: 'Lake Predil, Tarvisio',
      description: 'The hidden gem of Friuli surrounded by majestic mountains and rich history.',
      location: 'Tarvisio, Italy',
      category: 'Alpine Lake',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/trasferimento.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/28/lago-del-predil-la-gemma-nascosta-del-friuli-venezia-giulia/'
    },
    {
      title: 'Lake of Three Municipalities',
      description: 'A corner of natural paradise where three territories meet.',
      location: 'Friuli-Venezia Giulia, Italy',
      category: 'Alpine Paradise',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/tre-comuni.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/28/il-lago-dei-tre-comuni-un-angolo-di-paradiso-naturale/'
    },
    {
      title: 'Lake Jasna, Slovenia',
      description: 'The emerald jewel of Kranjska Gora surrounded by the Julian Alps.',
      location: 'Slovenia',
      category: 'Alpine Beauty',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image6.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/28/lago-jasna-il-gioiello-di-kranjska-gora-%f0%9f%87%b8%f0%9f%87%ae/'
    },
    {
      title: 'Lake Minisini, Ospedaletto',
      description: 'A peaceful mountain lake perfect for quiet reflection and connection with nature.',
      location: 'Ospedaletto, Italy',
      category: 'Tranquil Waters',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/lago-minisini.png',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/27/lago-minisini-di-ospedaletto/'
    },
    {
      title: 'Lakes of Fusine, Tarvisio',
      description: 'Twin glacial lakes offering breathtaking reflections in a dramatic alpine setting.',
      location: 'Tarvisio, Italy',
      category: 'Glacial Lakes',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/lago-di-fusine.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/27/laghi-di-fusine-un-paradiso-tra-le-montagne-del-tarvisio/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Bow-Lake-Parks-Canada.jpeg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            Where Lakes and Rivers Tell Their Tales
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            Discover magical places where water meets silence: hidden alpine lakes, clear rivers, and mountain streams
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Nature's Liquid Poetry
          </h2>
          <p className="text-lg text-slate-700 italic max-w-4xl mx-auto">
            In this section, I share some of the most magical places where water meets silence: hidden alpine lakes, clear rivers, and mountain streams flowing through valleys rich in history and tradition. I explore lakes, rivers, and torrents of Friuli Venezia Giulia, Tarvisio, Austria, and Slovenia, where nature blends with stories of the past. Each destination is not only a landscape to admire, but also a world to understand — through its legends, culture, and natural beauty. These journeys take you beyond the surface, from peaceful waters to ancient towns, where every reflection tells a story and every path invites you to slow down and connect deeply with the world around you.
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
