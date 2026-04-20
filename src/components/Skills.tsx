import { Code, Globe, MessageSquare, Lightbulb, Users } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Web Development using AI Tools',
    description: 'Leveraging modern AI-powered tools to accelerate development and build intelligent web experiences.',
  },
  {
    icon: Globe,
    title: 'Website Design and Development',
    description: 'Crafting responsive, accessible, and visually compelling websites from concept to deployment.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Skills',
    description: 'Articulating complex ideas clearly in both written and spoken form across diverse audiences.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Approaching technical challenges analytically and devising effective, efficient solutions.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Contributing constructively within teams, balancing individual initiative with collective goals.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#f8f8f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-['Source_Serif_4'] text-blue-600 text-xs uppercase tracking-[0.3em] mb-3">
              Capabilities
            </p>
            <h2 className="font-['Playfair_Display'] text-[#0a1628] text-4xl font-bold mb-6 leading-tight">
              Skills &amp; Expertise
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-8" />
            <p className="font-['Source_Serif_4'] text-gray-600 text-base leading-[1.8] mb-8">
              A blend of technical proficiency and interpersonal strengths, enabling me to build quality software while thriving in collaborative environments.
            </p>

            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Technology and development"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="space-y-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group flex gap-5 bg-white border border-gray-100 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                    <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-[#0a1628] text-base font-semibold mb-1">
                      {skill.title}
                    </h3>
                    <p className="font-['Source_Serif_4'] text-gray-500 text-sm leading-relaxed">
                      {skill.description}
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
