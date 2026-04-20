import { Calendar, Languages } from 'lucide-react';

const details = [
  {
    icon: Calendar,
    label: 'Date of Birth',
    value: '04 June 2008',
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'English, Telugu',
  },
];

export default function PersonalDetails() {
  return (
    <section
      id="personal"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0a1628]/88" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Source_Serif_4'] text-blue-400 text-xs uppercase tracking-[0.3em] mb-3">
              Profile
            </p>
            <h2 className="font-['Playfair_Display'] text-white text-4xl font-bold mb-6 leading-tight">
              Personal Details
            </h2>
            <div className="w-12 h-0.5 bg-blue-500 mb-8" />
            <p className="font-['Source_Serif_4'] text-gray-400 text-base leading-[1.8]">
              A dedicated and enthusiastic engineering student, driven by curiosity and a genuine passion for building meaningful digital solutions.
            </p>
          </div>

          <div className="space-y-6">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-['Source_Serif_4'] text-gray-500 text-xs uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="font-['Playfair_Display'] text-white text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
