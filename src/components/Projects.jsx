import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Crabplace",
      badge: "Professional Project",
      description:
        "Support and maintenance of a client web application built with ASP.NET Web API and Angular. Delivered ongoing client change requests and bug fixes, and worked with third-party APIs including Google Analytics (GA4), Yotpo and Facebook Leads.",
      tags: [
        "ASP.NET Web API",
        "Angular",
        "C#",
        "Yotpo",
        "Facebook Leads",
        "GA4",
      ],
      links: [],
    },
    {
      title: "SignFlow",
      badge: "Professional Project",
      description:
        "Multi-portal platform for orders, payments and scheduling with Admin, Office Manager, Agent and Installer portals. Describe at a high level only, no internal details.",
      tags: [
        ".NET 8",
        "ASP.NET Core MVC",
        "EF Core",
        "Dapper",
        "MySQL",
        "Stripe",
        "AWS S3/SES",
      ],
      links: [],
    },
    {
      title: "PocketGoal",
      badge: null,
      description: "Personal savings and expense tracker.",
      tags: ["ASP.NET Core MVC", "Razor", "Bootstrap", "Supabase", "Docker"],
      links: [
        {
          label: "Live Demo →",
          url: "https://pocketgoal.onrender.com/",
        },
      ],
    },
    {
      title: "Subscription Billing Management System",
      badge: null,
      description:
        "Layered .NET solution with API, Application, Domain and Infrastructure projects, frontend and Docker Compose.",
      tags: [".NET", "Clean architecture", "Docker"],
      links: [
        {
          label: "Live Demo →",
          url: "http://subbill.runasp.net/plans",
        },
        {
          label: "GitHub →",
          url: "https://github.com/Dhanush1972/subscription-billing-management-system",
        },
      ],
    },
    {
      title: "IoT Based Waste Management System",
      badge: null,
      description:
        "Monitoring garbage levels in real-time using sensors and sending alerts when bins are full. This prevents overflow, keeps the environment clean, reduces health risks, and improves waste collection efficiency.",
      tags: ["IoT", "Web Technologies", "Sensors"],
      links: [
        {
          label: "View Project →",
          url: "https://github.com/Dhanush1972/Smart-dustbin",
        },
      ],
    },
    {
      title: "Cyber Attack Detection using Optimized Stacked RNN",
      badge: null,
      description:
        "This project uses Recurrent Neural Networks (RNN) to detect and analyze cyberattacks on data transmitted through IoT or embedded devices, ensuring data integrity and device security.",
      tags: ["Python", "Cybersecurity", "RNN", "MatLab"],
      links: [
        {
          label: "View Project →",
          url: "https://github.com/Dhanush1972/Final-Year-Project",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    {project.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
