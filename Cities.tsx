import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import DestinationCard from '@/react-app/components/DestinationCard';

export default function Cities() {
  const destinations = [
    {
      title: 'Vienna, Austria',
      description: 'Whispers through time: art, elegance, and imperial grandeur in Austria\'s magnificent capital.',
      location: 'Austria',
      category: 'Imperial City',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Vienna-City-at-Night.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2025/07/29/whispers-of-vienna-a-journey-through-time-art-and-elegance-%f0%9f%87%a6%f0%9f%87%b9-%f0%9f%8e%a8%f0%9f%8e%bc%f0%9f%8e%bb%f0%9f%93%b8/'
    },
    {
      title: 'Venice, Italy',
      description: 'A journey through history, art, and the magic of carnival in the floating city.',
      location: 'Italy',
      category: 'Unique Architecture',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/_.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2025/05/09/venice-a-journey-through-history-art-and-magic-of-carnival-%f0%9f%8e%ad/'
    },
    {
      title: 'Gemona del Friuli, Italy',
      description: 'Cheese, tradition, and the celebration of local flavors in Friuli\'s charming mountain town.',
      location: 'Friuli-Venezia Giulia',
      category: 'Culinary Heritage',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Gemona.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/11/09/gemona-formaggio-e-dintorni-una-tradizione-casearia-che-celebra-la-terra-e-i-sapori-%f0%9f%8e%89%f0%9f%a7%80%f0%9f%90%ae%f0%9f%90%91%f0%9f%90%87/'
    },
    {
      title: 'Munich, Germany',
      description: 'Culture, history, and Bavarian traditions in the heart of Germany.',
      location: 'Germany',
      category: 'Bavarian Capital',
      imageUrl: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/15/monaco-di-baviera-un-viaggio-nel-cuore-della-cultura-e-della-storia-%f0%9f%87%a9%f0%9f%87%aa%f0%9f%8d%bb/'
    },
    {
      title: 'Berlin, Germany',
      description: 'History, culture, and vibrant street art in Germany\'s dynamic capital.',
      location: 'Germany',
      category: 'Cultural Hub',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Berlin-germany_.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/16/alla-scoperta-di-berlino-storia-cultura-e-street-art-%f0%9f%87%a9%f0%9f%87%aa-%f0%9f%8e%b5%f0%9f%8e%a8/'
    },
    {
      title: 'Friuli-Venezia Giulia, Italy',
      description: 'Gothic shadows and ancient legends in the heart of northeastern Italy.',
      location: 'Italy',
      category: 'Historic Region',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Friuliwebp.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/11/tra-ombre-e-leggende-un-viaggio-gotico-nel-cuore-del-friuli/'
    },
    {
      title: 'Paris, France',
      description: 'The magic of the City of Light: romance, art, and unforgettable experiences.',
      location: 'France',
      category: 'Romantic Capital',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Create-Your-Ultimate-Visit-Paris-Bucket-List-for-Unforgettable-Experiences.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/10/parigi-la-magia-della-citta-delle-luci/'
    },
    {
      title: 'San Marino',
      description: 'History, legends, and the charm of the world\'s oldest republic.',
      location: 'San Marino',
      category: 'Historic Republic',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/san-marino-towers.png',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/07/san-marino-la-storia-le-leggende-e-il-fascino-della-repubblica-piu-antica-del-mondo/'
    },
    {
      title: 'Grosseto, Italy',
      description: 'The heart of Tuscany\'s Maremma region: nature, history, and authentic charm.',
      location: 'Italy',
      category: 'Tuscan Region',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image7.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/06/grosseto-il-cuore-della-maremma-toscana/'
    },
    {
      title: 'Milan, Italy',
      description: 'Fashion capital: where history and modernity blend seamlessly.',
      location: 'Italy',
      category: 'Fashion Hub',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image17.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/05/milano-a-gennaio-la-capitale-della-moda-tra-storia-e-modernita/'
    },
    {
      title: 'Florence & Fiesole, Italy',
      description: 'Art, history, and breathtaking views in Tuscany\'s most beautiful cities.',
      location: 'Italy',
      category: 'Art Capital',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Florence-Italy.jpeg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/04/firenze-e-fiesole-un-viaggio-tra-arte-storia-e-vedute-mozzafiato/'
    },
    {
      title: 'Rome, Italy',
      description: 'The Eternal Wonder: history, beauty, and timeless grandeur.',
      location: 'Italy',
      category: 'Historical Capital',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/The-Coliseum-Rome.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/03/roma-leterna-meraviglia-tra-storia-e-bellezza/'
    },
    {
      title: 'Orvieto, Italy',
      description: 'Exploration of churches and history in Umbria\'s stunning hilltop city.',
      location: 'Italy',
      category: 'Medieval City',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image10.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/30/orvieto-unesplorazione-di-chiese-e-storia/'
    },
    {
      title: 'Ercolano, Pompei & Procida',
      description: 'A journey through ancient history and island beauty in Campania.',
      location: 'Italy',
      category: 'Historical Sites',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image4.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/09/29/ercolano-pompei-e-procida-un-viaggio-tra-storia-e-bellezza/'
    },
    {
      title: 'Carrying the Olympic Flame: Gradisca, Fogliano & Udine',
      description: 'Following the Olympic Flame through Gradisca, Fogliano, and Udine: a day of history, sport, and unforgettable moments.',
      location: 'Italy',
      category: 'Olympic Journey & Cultural Moments',
      imageUrl: 'https://019afef9-f51a-76cb-8e5b-672702aad6e4.mochausercontent.com/Beige-Aesthetic-Moodboard-Photo-Collage-Instagram-Post.png',
      link: 'https://myfreedomtrails.wordpress.com/2026/02/04/my-day-at-tedofora-olimpica-the-fiamma-route-in-friuli🤍🔥🇮🇹/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://mocha-cdn.com/019afef9-f51a-76cb-8e5b-672702aad6e4/Montags-Update-149_-Frohe-Ostern!.jpeg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            City Lights & Timeless Stories
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            Explore both small towns and great cities with unforgettable skylines and unique atmospheres
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Urban Explorations
          </h2>
          <p className="text-lg text-slate-700 italic max-w-4xl mx-auto">
            In this section, I explore both small towns and great cities with unforgettable skylines and unique atmospheres. From charming places like Gemona, San Marino, and Ercolano, to world-famous cities such as Barcelona, Berlin, Florence, Rome, Venice, Munich, and Paris — and beyond, reaching into Slovenia and Austria — each destination tells its own story. I dive into history, culture, legends, traditions, and festivals, revealing the soul of each city through vivid storytelling and captivating landscapes — because every skyline hides memories waiting to be discovered.
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
