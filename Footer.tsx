import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sentieri di Libertà</h3>
            <p className="text-pink-200 italic">
              Your travel companion to authentic and unforgettable experiences around the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/mountains" className="text-pink-200 hover:text-white transition-colors">
                  Mountains
                </a>
              </li>
              <li>
                <a href="/sea-beach" className="text-pink-200 hover:text-white transition-colors">
                  Sea & Beach
                </a>
              </li>
              <li>
                <a href="/cities" className="text-pink-200 hover:text-white transition-colors">
                  Cities
                </a>
              </li>
              <li>
                <a href="/lakes" className="text-pink-200 hover:text-white transition-colors">
                  Lakes
                </a>
              </li>
              <li>
                <a href="/cv" className="text-pink-200 hover:text-white transition-colors">
                  CV
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/martina.rossi20/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-red-900 hover:bg-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.threads.com/@martina.rossi20" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-red-900 hover:bg-white transition-colors font-bold text-sm"
                aria-label="Threads"
              >
                @
              </a>
              <a 
                href="https://it.pinterest.com/martykrav20/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-red-900 hover:bg-white transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@martinarossi.20?_r=1&_t=2N-917yEyQiXLy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-red-900 hover:bg-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-200 pt-6">
          {/* Motivational Quotes */}
          <div className="mb-6 space-y-4 text-center">
            <div>
              <p className="text-pink-100 italic text-sm mb-1">🇮🇹 Italiano</p>
              <p className="text-white italic">
                "Non viaggiamo per fuggire dalla vita, viaggiamo perché la vita non ci sfugga."
              </p>
              <p className="text-pink-200 text-sm">— Anonimo</p>
            </div>
            <div>
              <p className="text-pink-100 italic text-sm mb-1">🇬🇧 English</p>
              <p className="text-white italic">
                "We don't travel to escape life, we travel so that life doesn't escape us."
              </p>
              <p className="text-pink-200 text-sm">— Anonymous</p>
            </div>
            <div>
              <p className="text-pink-100 italic text-sm mb-1">🇪🇸 Español</p>
              <p className="text-white italic">
                "No viajamos para escapar de la vida, viajamos para que la vida no se nos escape."
              </p>
              <p className="text-pink-200 text-sm">— Anónimo</p>
            </div>
          </div>
          <p className="text-center text-pink-200">&copy; {new Date().getFullYear()} Sentieri di Libertà - Martina Rossi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
