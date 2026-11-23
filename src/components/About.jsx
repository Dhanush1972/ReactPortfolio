import { RevealOnScroll } from "./../components/RevealOnScroll";


export const About = () => {
  const languages = [
    "C#",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const frameworksAndTools = [
    ".NET 8",
    "ASP.NET Core MVC",
    "ASP.NET Web API",
    "Entity Framework Core",
    "Dapper",
    "Angular",
    "ReactJS",
    "REST APIs",
    "Hangfire",
    "JWT",
    "Stripe",
  ];

  const dataAndCloud = [
    "SQL Server",
    "MySQL",
    "AWS RDS",
    "AWS S3 and SES (basic)",
    "Docker (learning)",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-stack developer with about 1.5 years of experience building and
              maintaining production web apps with C#, .NET 8, ASP.NET Core MVC and
              ASP.NET Web API, with Angular and JavaScript front ends and SQL databases.
              Based in Cuddalore, Tamil Nadu. Open to .NET, ASP.NET Core, backend and
              full-stack roles in Chennai, Coimbatore, Bangalore, Hyderabad and remote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-5 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3 text-white">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-5 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3 text-white">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksAndTools.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-5 border border-white/5 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3 text-white">Data & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {dataAndCloud.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Information Technology</strong> - Velammal Institute of Technology (Anna University)
                </li>
                <li className="text-gray-400">
                  2020 – 2024 | CGPA: 8.52
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Training</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Java Full Stack Training (2024-2025)
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Completed comprehensive Java Full Stack training covering core concepts and web application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
