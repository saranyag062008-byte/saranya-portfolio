import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0a1628]/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-['Source_Serif_4'] text-blue-400 text-xs uppercase tracking-[0.3em] mb-3">
            Academic Background
          </p>
          <h2 className="font-['Playfair_Display'] text-white text-4xl font-bold mb-4">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm relative">
            <div className="absolute -top-5 left-10 bg-blue-600 p-3">
              <GraduationCap size={24} className="text-white" />
            </div>

            <div className="pt-4">
              <h3 className="font-['Playfair_Display'] text-white text-2xl font-semibold mb-2">
                B.Tech in Computer Science Engineering
              </h3>
              <p className="font-['Source_Serif_4'] text-blue-300 text-base mb-6">
                Santhiram Engineering College
              </p>

              <div className="flex items-center gap-3 bg-blue-600/20 border border-blue-500/30 px-5 py-3 inline-flex">
                <Award size={18} className="text-blue-400" />
                <span className="font-['Source_Serif_4'] text-white text-sm">
                  CGPA: <strong className="text-blue-300">8.5</strong> &nbsp;|&nbsp; First Semester
                </span>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-['Source_Serif_4'] text-gray-500 text-xs uppercase tracking-widest mb-1">
                    Degree
                  </p>
                  <p className="font-['Source_Serif_4'] text-white text-sm">Bachelor of Technology</p>
                </div>
                <div>
                  <p className="font-['Source_Serif_4'] text-gray-500 text-xs uppercase tracking-widest mb-1">
                    Specialisation
                  </p>
                  <p className="font-['Source_Serif_4'] text-white text-sm">Computer Science Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
