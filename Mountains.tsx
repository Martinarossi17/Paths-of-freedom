import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import DestinationCard from '@/react-app/components/DestinationCard';

export default function Mountains() {
  const destinations = [
    {
      title: 'The Night of the Devils, Tarvisio',
      description: 'Experience the mystical night of devils with stunning alpine peaks and ancient traditions.',
      location: 'Tarvisio, Italy',
      category: 'Cultural Festival',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/temp-002.jpg',
      link: 'https://myfreedomtrails.wordpress.com/2024/12/08/la-notte-dei-diavoli-con-pelo-ispido-corna-imponenti-campanacci-assordanti-fruste-e-volti-inquietanti/'
    },
    {
      title: 'Deer Trail, Tarvisio',
      description: 'Walk the deer trails of Tarvisio during autumn\'s golden season for unforgettable mountain experiences.',
      location: 'Tarvisio, Italy',
      category: 'Alpine Trails',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/image-21.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/20/autunno-a-tarvisio-un-viaggio-sul-sentiero-dei-cervi/'
    },
    {
      title: 'Gothic Shadows, Friuli',
      description: 'Discover the gothic shadows and ancient legends hidden in the heart of Friuli\'s mountains.',
      location: 'Friuli, Italy',
      category: 'Gothic Heritage',
      imageUrl: 'https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Friuliwebp.webp',
      link: 'https://myfreedomtrails.wordpress.com/2024/10/11/tra-ombre-e-leggende-un-viaggio-gotico-nel-cuore-del-friuli/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://mocha-cdn.com/019afd87-3b0d-7ec3-a838-3763587ca0ca/Download-Mountain-Covered-in-Clouds-Under-Cloudy-Sky-for-free.jpeg)'
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            Mountain Adventures
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            Discover alpine trails, peaceful villages, and breathtaking views where the sky feels closer and freedom feels real
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-5">
            Between Trails, Villages, and Alpine Silence
          </h2>
          <p className="text-lg text-slate-700 italic max-w-4xl mx-auto">
            This section is dedicated to mountain landscapes where nature embraces tradition and time slows down. From Gemona del Friuli to nearby gems like Tarvisio and the borderlands of Austria and Slovenia, I explore alpine trails, small villages, and peaceful valleys. Through these stories, I bring you into the heart of the mountains — places filled with natural beauty, rural culture, quiet rituals, and breathtaking views — where the sky feels closer and freedom feels real.
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
