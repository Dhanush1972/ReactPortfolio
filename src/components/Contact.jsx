import { RevealOnScroll } from "./RevealOnScroll";

// TODO: replace with real values
const EMAIL = "dhanush.m1907@gmail.com"; // e.g. "yourname@example.com"
const LINKEDIN_URL = "https://www.linkedin.com/in/dhanush-m1907/"; // e.g. "https://linkedin.com/in/username"
const PHONE = "+91 9361331570"; // e.g. "+91 9876543210"
const GITHUB_URL = "https://github.com/Dhanush1972";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently open to .NET, ASP.NET Core, backend, and full-stack
            roles. Feel free to connect or reach out directly!
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="w-full flex items-center justify-center gap-3 bg-blue-500 text-white py-3.5 px-6 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Email Me
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 text-gray-200 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                GitHub
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 text-gray-200 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                LinkedIn
              </a>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-white/10 text-gray-200 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              Phone / Call
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
