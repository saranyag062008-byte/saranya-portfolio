import { ShieldCheck } from 'lucide-react';

export default function Declaration() {
  return (
    <section id="contact" className="py-24 bg-[#f8f8f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Source_Serif_4'] text-blue-600 text-xs uppercase tracking-[0.3em] mb-3">
              Statement
            </p>
            <h2 className="font-['Playfair_Display'] text-[#0a1628] text-4xl font-bold mb-6 leading-tight">
              Declaration
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-8" />

            <div className="bg-white border border-gray-100 p-8 shadow-sm relative">
              <ShieldCheck
                size={40}
                className="text-blue-100 absolute top-6 right-6"
              />
              <p className="font-['Source_Serif_4'] text-gray-700 text-base leading-[1.9] italic mb-10">
                "I hereby declare that the above information is true and correct to the best of my knowledge."
              </p>

              <div className="border-t border-gray-100 pt-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-['Source_Serif_4'] text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Place
                  </p>
                  <div className="w-28 h-0.5 bg-gray-200" />
                </div>
                <div>
                  <p className="font-['Source_Serif_4'] text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Date
                  </p>
                  <div className="w-28 h-0.5 bg-gray-200" />
                </div>
              </div>

              <div className="mt-8">
                <p className="font-['Source_Serif_4'] text-gray-400 text-xs uppercase tracking-widest mb-3">
                  Signature
                </p>
                <p className="font-['Playfair_Display'] text-[#0a1628] text-2xl italic font-semibold">
                  G. Saranya
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional commitment"
              className="w-full h-96 object-cover"
            />
            <div className="absolute -top-4 -left-4 w-full h-96 border border-blue-200 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
