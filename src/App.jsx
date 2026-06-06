import { useState, useEffect } from "react";

// ── Smooth-scroll helper ──────────────────────────────────────────────────────
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];

const SKILLS = {
  Backend: ["Java", "Spring Boot", "REST APIs", "Hibernate", "JPA", "JWT Auth"],
  Frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  Database: ["MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Railway", "Vercel", "IntelliJ IDEA"],
};

const SKILL_ICONS = {
  Java: "☕", "Spring Boot": "🌱", "REST APIs": "🔗", Hibernate: "🗄️",
  JPA: "📦", "JWT Auth": "🔐", "React.js": "⚛️", HTML5: "🌐",
  CSS3: "🎨", JavaScript: "⚡", "Tailwind CSS": "💨", MySQL: "🐬",
  Git: "🔀", GitHub: "🐙", Postman: "📬", Railway: "🚂",
  Vercel: "▲", "IntelliJ IDEA": "🧠",
};

const PROJECTS = [
  {
    title: "Team Task Manager",
    description:
      "Full-stack task management system with role-based JWT authentication. Admin can create projects, assign tasks, manage members and track progress. Members update task status in real time.",
    tags: ["React.js", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/mfaizalf72/team-task-manager-frontend",
    live: "https://team-task-manager-frontend-delta.vercel.app",
    gradient: "from-blue-600 to-cyan-500",
    icon: "✅",
  },
  {
    title: "FoodScribe",
    description:
      "Full-stack food delivery & subscription platform with secure authentication, subscription plans, and order management backed by Spring Boot REST APIs.",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
    github: "https://github.com/mfaizalf72/FoodScribe",
    live: "https://foodscribe-production.up.railway.app",
    gradient: "from-orange-500 to-pink-500",
    icon: "🍽️",
  },
  {
    title: "BusLine",
    description:
      "Local real-time bus timing web app helping users check accurate bus schedules and arrival timings with a clean, intuitive UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mfaizalf72/BusLine",
    live: "https://mfaizalf72.github.io/BusLine",
    gradient: "from-green-500 to-teal-500",
    icon: "🚌",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "ExcelR",
    duration: "Aug 2025",
    type: "internship",
    color: "from-blue-500 to-cyan-400",
    icon: "💻",
    points: [
      "Developed responsive full-stack web applications using Java, Spring Boot, React.js, and MySQL.",
      "Built REST APIs for authentication, task management, and data handling.",
      "Implemented frontend UI components using React.js and Tailwind CSS.",
      "Worked with MySQL database integration, CRUD operations, and backend logic.",
      "Used Git & GitHub for version control and collaborated on team projects.",
      "Tested APIs using Postman; improved performance and responsiveness.",
      "Gained hands-on experience in the full software development lifecycle.",
    ],
  },
  {
    role: "Project Planning Engineer",
    company: "Saudi Aramco Shutdown Project",
    duration: "Contract",
    type: "contract",
    color: "from-violet-500 to-purple-400",
    icon: "📊",
    points: [
      "Tracked daily project progress and prepared detailed project reports.",
      "Compared planned vs actual progress for variance analysis.",
      "Coordinated with multiple teams across project phases.",
      "Analyzed KPIs and overall project performance metrics.",
      "Supported planning decisions with data-driven insights.",
    ],
  },
];

// ── Reusable components ───────────────────────────────────────────────────────

function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">{children}</h2>
      {subtitle && <p className="text-blue-300 text-lg">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/8 hover:shadow-blue-500/10 ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-300">
      {label}
    </span>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setActive(id);
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#050e1f]/95 shadow-lg shadow-black/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("home")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white text-sm shadow-lg shadow-blue-500/30">
            MF
          </div>
          <span className="text-lg font-bold text-white hidden sm:block">Mahammad Faizal</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-1">
          {NAV_LINKS.map((id) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`capitalize px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Mahammad_Faizal_Resume.pdf"
          download
          className="hidden md:flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <span>⬇</span> Download Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050e1f]/98 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="capitalize text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 60% 40%, #0c2a5e 0%, #050e1f 60%, #020812 100%)",
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-400/5 blur-2xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <p className="text-blue-400 font-semibold text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-3">
              Mahammad
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Faizal
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-blue-300 mb-5">
              Java Full Stack Developer
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Computer Science Engineering graduate skilled in building scalable REST APIs,
              authentication systems, and modern responsive web apps using Java, Spring Boot,
              React, and MySQL.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Java", "Spring Boot", "React.js", "MySQL", "JWT"].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-300"
                >
                  {SKILL_ICONS[t] || "🔧"} {t}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
              >
                📁 View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-xl border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:border-blue-400 hover:bg-white/10 active:scale-95"
              >
                ✉️ Contact Me
              </button>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-500/20 overflow-hidden">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/20 overflow-hidden">
  <img src="/me2.jpeg" alt="Mahammad Faizal" className="w-full h-full object-cover" />
</div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-blue-500/20 -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-blue-500/10 -z-10" />
            </div>

            {/* Contact Info Card */}
            <GlassCard className="w-full max-w-sm p-5">
              <div className="space-y-3 text-sm">
                {[
                  { icon: "📍", label: "Mangalore, India" },
                  { icon: "📞", label: "+91 7353090355", href: "tel:+917353090355" },
                  { icon: "✉️", label: "mfaizalf72@gmail.com", href: "mailto:mfaizalf72@gmail.com" },
                  { icon: "🐙", label: "github.com/mfaizalf72", href: "https://github.com/mfaizalf72" },
                  { icon: "💼", label: "linkedin.com/in/mfaizalf72", href: "https://www.linkedin.com/in/mfaizalf72" },
                ].map(({ icon, label, href }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors group"
                    >
                      <span className="text-base w-5 text-center">{icon}</span>
                      <span className="group-hover:underline truncate">{label}</span>
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-slate-300">
                      <span className="text-base w-5 text-center">{icon}</span>
                      <span>{label}</span>
                    </div>
                  )
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-[#070f20]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle subtitle="Get to know me">About Me</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bio */}
          <GlassCard className="lg:col-span-2 p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">👤</span>
              <h3 className="text-xl font-bold text-white">Professional Summary</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a Computer Science Engineering graduate with a strong focus on Java backend and
              full-stack development. I enjoy building scalable, secure, and performant web
              applications from the ground up.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              My experience spans developing REST APIs with Spring Boot, implementing JWT-based
              authentication, and crafting modern React frontends styled with Tailwind CSS. I'm
              passionate about clean architecture and writing maintainable code.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I've also worked as a Project Planning Engineer on a Saudi Aramco shutdown project,
              where I handled KPI tracking, progress monitoring, reporting, and cross-team
              coordination — giving me a unique blend of technical and analytical skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { label: "Projects Built", value: "3+" },
                { label: "Tech Stack", value: "10+" },
                { label: "Experience", value: "Multi-domain" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-blue-400/20 bg-blue-500/5 px-4 py-3 text-center min-w-[100px]">
                  <div className="text-xl font-black text-blue-400">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Education */}
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🎓</span>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="rounded-xl border border-blue-400/20 bg-blue-500/5 p-4 mb-4">
              <h4 className="font-bold text-blue-300 mb-1">B.E. in Computer Science</h4>
              <p className="text-slate-300 text-sm">Srinivas Institute of Technology, Mangalore</p>
              <div className="mt-3 space-y-1 text-sm text-slate-400">
                <p>📅 Graduated: 2024</p>
                <p>⭐ CGPA: 7.51</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Core Strengths</h4>
              <div className="space-y-2">
                {["Backend Architecture", "API Development", "Frontend UI/UX", "Database Design"].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#050e1f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle subtitle="Technologies & tools I work with">Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <GlassCard key={category} className="p-6">
              <h3 className="text-base font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex flex-col items-center rounded-xl border border-white/5 bg-white/3 p-3 text-center transition-all hover:border-blue-400/40 hover:bg-blue-500/10 cursor-default"
                  >
                    <span className="text-xl mb-1 group-hover:scale-110 transition-transform">
                      {SKILL_ICONS[skill] || "🔧"}
                    </span>
                    <span className="text-xs font-medium text-slate-300 leading-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skill bars for key technologies */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-5">Backend Proficiency</h3>
            {[
              { name: "Java", level: 85 },
              { name: "Spring Boot", level: 80 },
              { name: "REST APIs", level: 85 },
              { name: "MySQL", level: 75 },
            ].map(({ name, level }) => (
              <div key={name} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300 font-medium">{name}</span>
                  <span className="text-blue-400 font-semibold">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-5">Frontend Proficiency</h3>
            {[
              { name: "React.js", level: 80 },
              { name: "JavaScript", level: 78 },
              { name: "Tailwind CSS", level: 82 },
              { name: "HTML & CSS", level: 90 },
            ].map(({ name, level }) => (
              <div key={name} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300 font-medium">{name}</span>
                  <span className="text-cyan-400 font-semibold">{level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-400 transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#070f20]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle subtitle="Things I've built">Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <GlassCard key={p.title} className="flex flex-col overflow-hidden group">
              {/* Project banner */}
              <div className={`h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl z-10 group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDYwTDYwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-white/5">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-blue-600/20 border border-blue-400/30 py-2 text-sm font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white/5 border border-white/10 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050e1f]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle subtitle="My professional journey">Experience</SectionTitle>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-0 md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-blue-500/30 hidden md:flex items-center justify-center text-xs`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <GlassCard className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{exp.icon}</span>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      </div>
                      <p className="text-blue-300 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                        {exp.duration}
                      </span>
                      <span className="rounded-full border border-slate-600 bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-400 capitalize">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailto = `mailto:mfaizalf72@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#070f20]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle subtitle="Let's work together">Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="space-y-6">
            <GlassCard className="p-7">
              <h3 className="text-xl font-bold text-white mb-2">Let's Work Together!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                I'm open to new opportunities and exciting projects. Whether it's a full-time
                role, freelance work, or just a chat about tech — feel free to reach out!
              </p>
              <div className="space-y-3">
                {[
                  { icon: "✉️", label: "Email", value: "mfaizalf72@gmail.com", href: "mailto:mfaizalf72@gmail.com" },
                  { icon: "📞", label: "Phone", value: "+91 7353090355", href: "tel:+917353090355" },
                  { icon: "📍", label: "Location", value: "Mangalore, India" },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-lg flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-slate-300 hover:text-blue-300 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard className="p-6">
              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Find me on</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/mfaizalf72"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mfaizalf72"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 py-3 text-sm font-semibold text-blue-300 hover:bg-blue-500 hover:text-white transition-all"
                >
                  💼 LinkedIn
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right: Form */}
          <GlassCard className="p-7">
            <h3 className="text-xl font-bold text-white mb-5">Send a Message</h3>
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-3">✅</div>
                <p className="text-white font-bold text-lg">Message sent!</p>
                <p className="text-slate-400 text-sm mt-1">I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-blue-400 text-sm hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-400/60 focus:outline-none focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-400/60 focus:outline-none focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-400/60 focus:outline-none focus:bg-white/8 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  ✉️ Send Message
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#050e1f] border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white text-xs shadow-lg shadow-blue-500/30">
              MF
            </div>
            <div>
              <p className="font-bold text-white text-sm">Mahammad Faizal</p>
              <p className="text-xs text-slate-500">Java Full Stack Developer</p>
            </div>
          </div>

          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Mahammad Faizal. Built with React & Tailwind CSS.
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/mfaizalf72"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub"
            >
              🐙
            </a>
            <a
              href="https://www.linkedin.com/in/mfaizalf72"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border border-blue-400/20 bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
              title="LinkedIn"
            >
              💼
            </a>
            <a
              href="mailto:mfaizalf72@gmail.com"
              className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              title="Email"
            >
              ✉️
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
          {NAV_LINKS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="capitalize hover:text-slate-400 transition-colors"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #050e1f; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #070f20; }
        ::-webkit-scrollbar-thumb { background: #1e40af; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #2563eb; }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
