import { useEffect, useState } from "react";

const RESUME_URL = "/Mahammad_Faizal_Resume.pdf";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const HERO_BADGES = ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "JWT", "RAG"];

const SKILLS = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "Python Basics", "SQL"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "JWT Authentication",
      "REST APIs",
      "JPA / Hibernate",
      "Node.js Basics",
    ],
  },
  {
    title: "Frontend",
    items: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite", "Basic MongoDB"],
  },
  {
    title: "AI / RAG",
    items: [
      "LLM Logging",
      "Retrieval-Augmented Generation",
      "Document Chunking",
      "Role-Based Retrieval",
      "Prompt Engineering",
      "Audit Logging",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Railway", "Vercel"],
  },
];

const PROJECTS = [
  {
    title: "Enterprise RAG Intelligence System with RBAC",
    subtitle: "Secure AI-powered document retrieval system",
    description:
      "Upgraded an LLM logging system into a secure enterprise RAG platform with JWT authentication, role-based access control, document upload, chunking, authorized retrieval, citations, and audit logging. The system ensures users can only retrieve document chunks based on their assigned role such as Admin, Finance, HR, Engineering, Compliance, or Employee.",
    stack: ["React", "Express.js", "Node.js", "JWT", "RBAC", "RAG", "Document Chunking", "Audit Logs"],
    highlights: [
      "JWT-based authentication",
      "Role-based document access",
      "Secure retrieval before answer generation",
      "Citations and audit logging",
      "Unauthorized chunks are never passed to the LLM",
    ],
    github: "https://github.com/mfaizalf72",
    live: null,
  },
  {
    title: "Team Task Manager App",
    subtitle: "Full-stack role-based task management system",
    description:
      "Built a full-stack task management application where admins can create projects, assign tasks, manage members, and track progress. Members can view assigned tasks and update task status. Implemented JWT authentication, role-based access, Spring Boot backend, MySQL database, and React frontend.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "React", "Tailwind CSS"],
    highlights: [
      "Admin and Member roles",
      "Project and task management",
      "Secure login and authorization",
      "REST API integration",
      "Responsive dashboard UI",
    ],
    github: "https://github.com/mfaizalf72/team-task-manager-frontend",
    live: "https://team-task-manager-frontend-delta.vercel.app",
  },
  {
    title: "BusLine / BusTrack",
    subtitle: "Local bus timing web application",
    description:
      "Built a clean web application for checking accurate local bus schedules between Paur and Mangalore. The app includes route-wise timings, next-bus information, stop-wise position, and a smart schedule interface for users.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Route-wise bus timings",
      "Next bus display",
      "Stop-based schedule view",
      "Mobile-friendly UI",
    ],
    github: "https://github.com/mfaizalf72/BusLine",
    live: "https://mfaizalf72.github.io/BusLine",
  },
  {
    title: "FoodScribe",
    subtitle: "Food ordering and subscription platform",
    description:
      "Developed a food ordering and subscription platform with user authentication, subscription plans, order management, and backend API support. Designed the system for practical food delivery and recurring meal subscription use cases.",
    stack: ["Java", "Spring Boot", "MySQL", "React", "REST APIs"],
    highlights: [
      "Order management",
      "Subscription plan support",
      "Backend API integration",
      "Clean user interface",
    ],
    github: "https://github.com/mfaizalf72/FoodScribe",
    live: "https://foodscribe-production.up.railway.app",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "ExcelR",
    type: "Internship",
    points: [
      "Developed responsive full-stack web applications using Java, Spring Boot, React.js, and MySQL.",
      "Built REST APIs for authentication, task management, and data handling.",
      "Implemented frontend components using React.js and Tailwind CSS.",
      "Worked with MySQL database integration, CRUD operations, and backend logic.",
      "Tested APIs using Postman and used Git/GitHub for version control.",
      "Gained hands-on experience in the full software development lifecycle.",
    ],
  },
  {
    role: "Project Planning Engineer",
    company: "Saudi Aramco Shutdown Project",
    type: "Contract",
    points: [
      "Tracked daily project progress and prepared detailed progress reports.",
      "Compared planned vs actual progress for variance analysis.",
      "Monitored KPIs, completion percentages, and schedule adherence.",
      "Coordinated with multiple teams across project phases.",
      "Supported planning decisions with data-driven insights.",
    ],
  },
];

const CONTACT_LINKS = [
  { label: "Email", value: "mfaizalf72@gmail.com", href: "mailto:mfaizalf72@gmail.com" },
  { label: "Phone", value: "+91 7353090355", href: "tel:+917353090355" },
  { label: "Location", value: "Mangalore, India" },
  { label: "GitHub", value: "github.com/mfaizalf72", href: "https://github.com/mfaizalf72" },
  { label: "LinkedIn", value: "linkedin.com/in/mfaizalf72", href: "https://www.linkedin.com/in/mfaizalf72" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-400">{children}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/20 ${className}`}>
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
      {children}
    </span>
  );
}

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    NAV_LINKS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setActive(id);
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-sm font-black text-slate-950">
            MF
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-white">Mahammad Faizal</span>
            <span className="block text-xs text-slate-400">Java Full Stack Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                active === id
                  ? "bg-cyan-400/10 text-cyan-200"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href={RESUME_URL}
          download
          className="hidden rounded-md border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950 lg:inline-flex"
        >
          Download Resume
        </a>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md border border-slate-700 px-3 py-2 text-sm font-semibold text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium ${
                  active === id ? "bg-cyan-400/10 text-cyan-200" : "text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href={RESUME_URL}
              download
              className="mt-2 rounded-md border border-cyan-400/40 px-3 py-2 text-sm font-semibold text-cyan-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-slate-950 pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
              Open to Java Full Stack, Backend, and AI Engineer roles
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mahammad Faizal
            </h1>
            <h2 className="mt-5 max-w-4xl text-xl font-semibold leading-8 text-cyan-200 sm:text-2xl">
              Java Full Stack Developer | Spring Boot | React | AI-Powered Applications
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Computer Science Engineering graduate with hands-on experience in building secure full-stack applications
              using Java, Spring Boot, React, MySQL, REST APIs, JWT authentication, and role-based access control. I
              enjoy building scalable backend systems, clean frontend interfaces, and AI-powered applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {HERO_BADGES.map((badge) => (
                <Tag key={badge}>{badge}</Tag>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-300"
              >
                View Projects
              </button>
              <a
                href={RESUME_URL}
                download
                className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Contact Me
              </button>
            </div>
          </div>

          <Card className="p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Profile focus</p>
            <div className="mt-6 grid gap-4">
              {[
                ["Backend", "Spring Boot APIs, authentication, authorization, and database workflows."],
                ["Full Stack", "React interfaces connected to practical REST API products."],
                ["AI Applications", "RAG, document retrieval, logging, audit trails, and secure access control."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="About" title="Focused on secure full-stack and AI-powered apps">
          Practical project experience across backend APIs, React interfaces, authentication, retrieval systems, and
          project coordination.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <Card className="p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                I am a Computer Science Engineering graduate focused on Java full-stack development, backend APIs, and
                AI-powered web applications. I have built projects involving Spring Boot, React, MySQL, JWT
                authentication, role-based access control, document retrieval, and audit logging.
              </p>
              <p>
                My project experience includes task management systems, secure RAG applications, LLM logging systems,
                bus schedule platforms, and food ordering applications. I also worked as a Project Planning Engineer on
                a Saudi Aramco shutdown project, where I handled progress tracking, reporting, KPI monitoring, and team
                coordination.
              </p>
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Education</p>
            <h3 className="mt-4 text-xl font-bold text-white">B.E. in Computer Science</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">Srinivas Institute of Technology, Mangalore</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-500">Graduated</span>
                <span className="font-semibold text-white">2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CGPA</span>
                <span className="font-semibold text-white">7.51</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Skills" title="Technical toolkit">
          Clean categories without artificial percentages, focused on the tools used in real project work.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((category) => (
            <Card key={category.title} className="flex h-full flex-col p-6">
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Projects" title="Featured engineering work">
          Four recruiter-friendly project cards showing backend, full-stack, and AI application experience.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex h-full flex-col overflow-hidden">
              <div className="border-b border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold text-cyan-300">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Experience" title="Professional experience">
          Internship and contract experience with software delivery, reporting, and coordination responsibilities.
        </SectionHeader>

        <div className="mx-auto grid max-w-5xl gap-6">
          {EXPERIENCE.map((item) => (
            <Card key={`${item.role}-${item.company}`} className="p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 font-semibold text-cyan-300">{item.company}</p>
                </div>
                <span className="w-fit rounded-md border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  {item.type}
                </span>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:mfaizalf72@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let us connect">
          Available for fresher and internship opportunities in Java full-stack, backend, and AI application roles.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">Contact details</h3>
            <div className="mt-6 space-y-4">
              {CONTACT_LINKS.map((link) => (
                <div key={link.label} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-1 block break-words text-sm font-semibold text-slate-200 transition hover:text-cyan-200"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-slate-200">{link.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">Send a message</h3>
            {sent ? (
              <div className="mt-6 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="font-semibold text-cyan-100">Your email draft has been opened.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-3 text-sm font-semibold text-cyan-200 hover:text-white"
                >
                  Compose another message
                </button>
              </div>
            ) : (
              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    required
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    required
                    className="w-full resize-none rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    placeholder="Tell me about the role, project, or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Mahammad Faizal. Built with React and Tailwind CSS.</p>
        <div className="flex flex-wrap gap-4">
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} className="transition hover:text-cyan-200">
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #020617;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
