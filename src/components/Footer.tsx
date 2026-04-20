import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-['Playfair_Display'] text-white text-2xl font-semibold mb-2">
          G. Saranya
        </p>
        <p className="font-['Source_Serif_4'] text-blue-400 text-sm uppercase tracking-widest mb-6">
          Computer Science Engineering
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="tel:7842311468"
            className="flex items-center gap-2 font-['Source_Serif_4'] text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Phone size={14} />
            7842311468
          </a>
          <a
            href="mailto:saranya062008@gmail.com"
            className="flex items-center gap-2 font-['Source_Serif_4'] text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Mail size={14} />
            saranya062008@gmail.com
          </a>
        </div>

        <div className="w-full h-px bg-white/10 mb-6" />
        <p className="font-['Source_Serif_4'] text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} G. Saranya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
