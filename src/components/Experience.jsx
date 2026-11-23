import { RevealOnScroll } from "./RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Tender Software Private India Limited",
      duration: "About 6 months",
      description:
        "Worked on SignFlow (.NET 8 / ASP.NET Core MVC, four portals) and supported and maintained Crabplace (ASP.NET Web API + Angular): bug fixes, client change requests and third-party API integrations.",
      tags: [
        ".NET 8",
        "ASP.NET Core MVC",
        "ASP.NET Web API",
        "Angular",
        "Third-Party APIs",
      ],
    },
    {
      role: "Software Developer Apprentice (under NATS)",
      company: "Tender Software Private India Limited",
      duration: "About 1 year",
      description:
        "Built full-stack features with ASP.NET Core MVC, EF Core, Dapper and MySQL; JWT cookie authentication; AWS S3 uploads and Amazon SES emails.",
      tags: [
        "ASP.NET Core MVC",
        "EF Core",
        "Dapper",
        "MySQL",
        "JWT",
        "AWS S3",
        "Amazon SES",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-blue-400 mt-1 sm:mt-0 font-medium">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-md text-gray-300 font-semibold mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
