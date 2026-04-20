import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="font-['Source_Serif_4'] text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            Computer Science Engineering
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            G. Saranya
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mb-6" />
          <p className="font-['Source_Serif_4'] text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
            Motivated CSE student passionate about web development and AI-based tools, building real-world solutions with creativity and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:7842311468"
              className="flex items-center gap-2 font-['Source_Serif_4'] text-gray-300 hover:text-blue-400 transition-colors text-sm"
            >
              <Phone size={16} className="text-blue-400" />
              7842311468
            </a>
            <a
              href="mailto:saranya062008@gmail.com"
              className="flex items-center gap-2 font-['Source_Serif_4'] text-gray-300 hover:text-blue-400 transition-colors text-sm"
            >
              <Mail size={16} className="text-blue-400" />
              saranya062008@gmail.com
            </a>
          </div>

          <a
            href="#objective"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-['Source_Serif_4'] text-sm px-8 py-3 tracking-wide transition-colors duration-200"
          >
            View Portfolio
          </a>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative">
            <div className="w-72 h-80 border border-blue-500/30 absolute -top-4 -left-4" />
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional portrait"
              className="w-72 h-80 object-cover relative z-10 grayscale"
            />
            <div className="absolute -bottom-4 -right-4 w-72 h-80 border border-blue-500/20" />
          </div>
        </div>
      </div>

      <a
        href="#objective"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
