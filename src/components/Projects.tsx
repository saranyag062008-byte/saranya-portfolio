import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rural Light Initiative',
    tags: ['Web Development', 'AI Tools', 'UI/UX', 'Accessibility'],
    description:
      'Developed a website focused on promoting rural development and awareness. Used AI tools to design and build a responsive and user-friendly interface. Improved accessibility and usability to reach broader audiences in underserved communities.',
    highlights: [
      'Responsive and mobile-first interface',
      'AI-assisted design and development workflow',
      'Improved accessibility and usability standards',
      'Focused on rural awareness and community impact',
    ],
    image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-['Source_Serif_4'] text-blue-600 text-xs uppercase tracking-[0.3em] mb-3">
            Work
          </p>
          <h2 className="font-['Playfair_Display'] text-[#0a1628] text-4xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 mx-auto" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-72 border border-blue-200 -z-10" />
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Source_Serif_4'] text-blue-700 bg-blue-50 border border-blue-100 text-xs px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-['Playfair_Display'] text-[#0a1628] text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="font-['Source_Serif_4'] text-gray-600 text-base leading-[1.8] mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span className="font-['Source_Serif_4'] text-gray-600 text-sm">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-2 font-['Source_Serif_4'] text-sm text-blue-600 border border-blue-600 px-5 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <ExternalLink size={14} />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
