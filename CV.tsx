import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Mail, Phone } from 'lucide-react';
export default function CV() {
  return <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white text-center px-5 py-24 bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://mocha-cdn.com/019afef9-f51a-76cb-8e5b-672702aad6e4/image19.jpg)'
    }}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-red-400 drop-shadow-lg">
            Curriculum Vitae
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-pink-200 drop-shadow-md">
            My professional journey in tourism and travel writing
          </p>
        </div>
      </section>

      {/* CV Content */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-xl p-8 h-fit">
            <div className="text-center mb-8">
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-red-900 shadow-lg">
                <img src="https://019afef9-f51a-76cb-8e5b-672702aad6e4.mochausercontent.com/IMG_1803-4.JPG" alt="Martina Rossi" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-red-900 mb-2">Martina Rossi</h2>
              <p className="text-slate-700 italic">Travel Writer & Tourism Student</p>
              <p className="text-slate-700 italic">Udine, Italy</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4 pb-2 border-b border-red-900">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900 text-sm">Email</p>
                    <a href="mailto:martinarossi948@gmail.com" className="text-slate-700 text-sm hover:text-red-900 hover:underline break-all">
                      martinarossi948@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900 text-sm">Phone / WhatsApp</p>
                    <a href="tel:+393791181345" className="text-slate-700 text-sm hover:text-red-900 hover:underline">
                      +39 379 118 1345
                    </a>
                  </div>
                </div>
                <div className="pt-3">
                  <a href="https://flowcv.com/resume/sdd940tees5c" target="_blank" rel="noopener noreferrer" className="block text-center bg-red-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-800 transition-colors">
                    📥 Download CV (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4 pb-2 border-b border-red-900">Languages</h3>
              <ul className="space-y-2">
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Italian -Native/Bilingual
              </li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">English-Certificate A2</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Spanish (A2)
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4 pb-2 border-b border-red-900">Skills</h3>
              <ul className="space-y-2">
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Eyewear assembly and adjustment</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Precision, manual dexterity, and attention to detail</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Independent task management
                </li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Experience with optical tools and instruments
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4 pb-2 border-b border-red-900">Personal Skills & Interests</h3>
              <ul className="space-y-2">
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Travel writing & blogging</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Strong curiosity & cultural awareness</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Organizational skills & attention to detail</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Teamwork & reliability</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Traveling & discovering new cultures</li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Music (pop & rap) and running & outdoor activities with my dog</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            {/* Education */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6 pb-3 border-b-2 border-red-900">Education</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  ISIS Paolino D'Aquileia - Cividale del Friuli (UD)
                </h3>
                <p className="text-red-900 font-medium italic mb-3">2018 – 2024
 </p>
                <p className="text-slate-700 italic mb-2">Diploma in Optical Technology, 2024
              </p>
                <p className="text-slate-700 italic">Trained in vision care, eyewear production, contact lens techniques, and optical laboratory management.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  The Technical Sciences of Tourism
                </h3>
                <p className="text-red-900 font-medium italic mb-3">2025 - Present | Udine</p>
                <p className="text-slate-700 italic mb-2">University of Udine</p>
                <p className="text-slate-700 italic">Focus on tourism management, cultural heritage, marketing, hospitality, and sustainable destination development.
Gaining skills in tourism planning, communication, and territorial enhancement.
Applying a practical and innovative approach to projects and field opportunities.</p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6 pb-3 border-b-2 border-red-900">Professional Experience</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Optical Intern - Ottica 10 Decimi</h3>
                <p className="text-red-900 font-medium italic mb-3">01/2024 - 02/2024 | Cividale del Friuli</p>
                <ul className="space-y-2">
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Facilitated customer selection of lenses and frames, ensuring optimal fit and style.
                </li>
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Coordinated product orders and organised inventory effectively.
                </li>
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Exercised meticulous attention to detail while executing daily tasks with efficiency.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Optical Intern - Megavision</h3>
                <p className="text-red-900 font-medium italic mb-3">05/2023 - 06/2023 | Reana del Rojale (UD)</p>
                <ul className="space-y-2">
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Constructed and categorised lenses within the warehouse, optimizing storage efficiency.
                </li>
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">﻿﻿Executed tasks autonomously with minimal supervision.
                </li>
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">﻿﻿Ensured precision in operations by adhering closely to instructions.
                </li>
                  <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">Thrived in high-pressure environments while consistently meeting deadlines.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6 pb-3 border-b-2 border-red-900">Projects</h2>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Travel blogger, Sentieri di libertà</h3>
                <p className="text-red-900 font-medium italic mb-3">09/2024</p>
                <p className="text-slate-700 italic mb-3">Create and maintain a travel blog sharing authentic experiences, local traditions, and hidden gems.
              </p>
                <p className="text-slate-700 italic mb-3">Focus on storytelling, cultural discovery, and engaging readers through history and emotional moments.

              </p>
                <p className="text-slate-700 italic">Develop skills in writing, content creation, and digital communication.</p>
              </div>
            </div>

            {/* Certificates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6 pb-3 border-b-2 border-red-900">Certificates</h2>
              <ul className="space-y-2">
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Volunteering with the Aracon association
                </li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Olympic Torch Bearer - Milano Cortina 2026
                </li>
                <li className="text-slate-700 italic pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-900">
                  Cambridge English A2
                </li>
              </ul>
            </div>

            {/* Future Goals */}
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6 pb-3 border-b-2 border-red-900">Future Goals</h2>
              <p className="text-slate-700 italic">
                My dream is to live and work abroad, collaborating with international travel agencies, tourism boards, and museums — telling the world's stories through projects, itineraries, and meaningful experiences.
              </p>
              <p className="text-slate-700 italic mt-4">
                One day, I hope to contribute to dynamic organizations like Madrid Travel Bloggers, bringing my passion, creativity, and spirit of discovery to every adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}