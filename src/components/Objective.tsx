export default function Objective() {
  return (
    <section id="objective" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Collaboration and ambition"
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-600 translate-x-4 translate-y-4 -z-10" />
        </div>

        <div>
          <p className="font-['Source_Serif_4'] text-blue-600 text-xs uppercase tracking-[0.3em] mb-3">
            About Me
          </p>
          <h2 className="font-['Playfair_Display'] text-[#0a1628] text-4xl font-bold mb-6 leading-tight">
            Career Objective
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 mb-6" />
          <p className="font-['Source_Serif_4'] text-gray-700 text-lg leading-[1.8]">
            Motivated Computer Science Engineering student with strong communication skills and a solid academic record. Interested in web development and AI-based tools, seeking opportunities to apply technical and creative skills in real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}
