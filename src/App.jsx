import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const RESUME_URL = "/Mahammad_Faizal_Resume.pdf";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const HERO_BADGES = ["Spring Boot", "React", "MySQL", "REST APIs", "JWT", "AI Applications"];

const PROFILE_POINTS = [
  "Computer Science Engineering Graduate",
  "Java Full Stack Developer",
  "Backend-focused developer",
  "React + Spring Boot developer",
  "Freelance, internship, and production project experience",
  "AI/RAG application experience",
];

const SKILLS = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python Basics", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "JWT Authentication", "REST APIs", "JPA / Hibernate", "Node.js Basics"],
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
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Railway", "Vercel"],
  },
];

const PROJECTS = [
  {
    title: "Enterprise RAG Intelligence System with RBAC",
    subtitle: "Secure AI-powered document retrieval system",
    description:
      "Upgraded an LLM logging system into a secure enterprise RAG platform with JWT authentication, role-based access control, document upload, chunking, authorized retrieval, citations, and audit logging. The system ensures users can only retrieve document chunks based on assigned roles such as Admin, Finance, HR, Engineering, Compliance, or Employee.",
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
    subtitle: "Freelance full-stack task management system for a startup team",
    description:
      "Developed as a freelance project for a startup team. Built a full-stack task management application where admins can create projects, assign tasks, manage members, and track progress. Members can view assigned work and update task status through a responsive dashboard.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "React", "Tailwind CSS"],
    highlights: [
      "Admin and Member roles",
      "Project and task management",
      "Secure login and authorization",
      "REST API integration",
      "Responsive dashboard UI",
    ],
    github: "https://github.com/mfaizalf72/team-task-manager-frontend",
    live: null,
  },
  {
    title: "BusLine / BusTrack",
    subtitle: "Freelance local bus timing platform for commuters",
    description:
      "Developed as a freelance project for local commuters traveling between Paur and Mangalore. Built a clean web application with route-wise timings, next-bus information, stop-wise position, and a smart schedule interface for everyday users.",
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
    live: null,
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "ExcelR",
    duration: "Internship",
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
    role: "Freelance Full Stack Developer",
    company: "Client and small business projects",
    duration: "Freelance Projects",
    points: [
      "Worked directly with clients and small businesses to design and develop web applications tailored to operational requirements.",
      "Developed Team Task Manager application for a startup team.",
      "Built BusLine bus schedule platform for local commuters.",
      "Gathered requirements directly from stakeholders.",
      "Designed responsive user interfaces using React.",
      "Integrated backend services and databases.",
      "Deployed and maintained production-ready applications.",
      "Worked independently from planning through deployment.",
    ],
  },
  {
    role: "Project Planning Engineer",
    company: "Saudi Aramco Shutdown Project",
    duration: "Contract",
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

const sectionVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function SpaceBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        size: index % 6 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
        duration: 4 + (index % 5),
        delay: (index % 8) * 0.35,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#07111f_48%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(125,211,252,0.75)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.25, 0.9, 0.25], y: [0, -14, 0] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function AnimatedSection({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

function GlassCard({ children, className = "", index = 0 }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`rounded-xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/35 hover:bg-white/[0.075] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, href, download, external }) {
  const className =
    "inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:shadow-cyan-400/20";

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={className}>
      {children}
    </motion.button>
  );
}

function SecondaryButton({ children, onClick, href, download, external }) {
  const className =
    "inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-950/20";

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={className}>
      {children}
    </motion.button>
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <button onClick={() => handleNav("home")} className="flex items-center gap-3 text-left" aria-label="Go to home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/15 text-sm font-black text-cyan-100 shadow-lg shadow-cyan-950/30">
            MF
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold text-white">Mahammad Faizal</span>
            <span className="block text-xs text-slate-400">Java Full Stack Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                active === id
                  ? "bg-cyan-300/10 text-cyan-100 shadow-inner shadow-cyan-950/20"
                  : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href={RESUME_URL}
          download
          className="hidden rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 lg:inline-flex"
        >
          Download Resume
        </a>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm font-bold text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-semibold ${
                  active === id ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href={RESUME_URL}
              download
              className="mt-2 rounded-md border border-cyan-300/35 px-3 py-2 text-sm font-bold text-cyan-100"
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
    <section id="home" className="scroll-mt-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 shadow-lg shadow-cyan-950/20">
              Backend-focused full-stack developer building production-ready applications
            </p>
            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mahammad Faizal
            </h1>
            <h2 className="mt-5 max-w-4xl text-2xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 sm:text-3xl">
              Java Full Stack Developer
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Computer Science Engineering graduate with practical software development experience across internship,
              freelance client projects, backend systems, React interfaces, Spring Boot APIs, MySQL databases, JWT
              authentication, REST APIs, and AI-powered applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {HERO_BADGES.map((badge) => (
                <Tag key={badge}>{badge}</Tag>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton onClick={() => scrollTo("projects")}>View Projects</PrimaryButton>
              <SecondaryButton href={RESUME_URL} download>
                Download Resume
              </SecondaryButton>
              <SecondaryButton onClick={() => scrollTo("contact")}>Contact Me</SecondaryButton>
            </div>
          </motion.div>

          <GlassCard className="p-6 sm:p-8" index={1}>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Portfolio positioning</p>
            <div className="mt-6 grid gap-3">
              {PROFILE_POINTS.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.06, duration: 0.5 }}
                  className="rounded-lg border border-white/10 bg-slate-950/55 p-4 text-sm font-semibold text-slate-200"
                >
                  {point}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm leading-6 text-cyan-50">
                Positioned for Java Full Stack, Backend Developer, and AI Engineer internship/fresher roles with roughly
                1.5 years of practical exposure through internship, freelance work, and production application delivery.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <AnimatedSection
      id="about"
      eyebrow="About"
      title="Software developer with backend, full-stack, and AI/RAG project depth"
      description="A recruiter-friendly view of practical development experience across secure APIs, client projects, production UI work, and AI-powered applications."
    >
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <GlassCard className="p-6 sm:p-8">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I am a Computer Science Engineering graduate focused on Java full-stack development, backend APIs, and
              AI-powered web applications. I have built projects involving Spring Boot, React, MySQL, JWT
              authentication, role-based access control, document retrieval, and audit logging.
            </p>
            <p>
              My project experience includes secure RAG applications, task management systems, bus schedule platforms,
              LLM logging systems, and food ordering applications. I also worked as a Project Planning Engineer on a
              Saudi Aramco shutdown project, where I handled progress tracking, reporting, KPI monitoring, and
              coordination.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8" index={1}>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Education</p>
          <h3 className="mt-4 text-xl font-black text-white">B.E. in Computer Science</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">Srinivas Institute of Technology, Mangalore</p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-slate-500">Graduated</span>
              <span className="font-bold text-white">2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">CGPA</span>
              <span className="font-bold text-white">7.51</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}

function Skills() {
  return (
    <AnimatedSection
      id="skills"
      eyebrow="Skills"
      title="Recruiter-ready technical toolkit"
      description="A practical stack for Java backend systems, React interfaces, database-backed products, and AI/RAG workflows."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SKILLS.map((category, index) => (
          <GlassCard key={category.title} index={index} className="flex h-full flex-col p-6">
            <h3 className="text-lg font-black text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Projects() {
  return (
    <AnimatedSection
      id="projects"
      eyebrow="Projects"
      title="Modern project showcase"
      description="Selected work across secure AI applications, startup operations tooling, commuter platforms, and food ordering systems."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <GlassCard key={project.title} index={index} className="flex h-full flex-col overflow-hidden">
            <div className="border-b border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-bold text-cyan-300">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{project.title}</h3>
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
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.75)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.live && (
                  <PrimaryButton href={project.live} external>
                    Live Demo
                  </PrimaryButton>
                )}
                <SecondaryButton href={project.github} external>
                  GitHub
                </SecondaryButton>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Experience() {
  return (
    <AnimatedSection
      id="experience"
      eyebrow="Experience"
      title="Practical development experience"
      description="A balanced path through internship, freelance client projects, and production application development."
    >
      <div className="mx-auto grid max-w-5xl gap-6">
        {EXPERIENCE.map((item, index) => (
          <GlassCard key={`${item.role}-${item.company}`} index={index} className="p-6 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black text-white">{item.role}</h3>
                <p className="mt-1 font-bold text-cyan-300">{item.company}</p>
              </div>
              <span className="w-fit rounded-md border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                {item.duration}
              </span>
            </div>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
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
    <AnimatedSection
      id="contact"
      eyebrow="Contact"
      title="Let us connect"
      description="Available for Java full-stack, backend, and AI application opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <GlassCard className="p-6 sm:p-8">
          <h3 className="text-xl font-black text-white">Contact details</h3>
          <div className="mt-6 space-y-4">
            {CONTACT_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{link.label}</p>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-1 block break-words text-sm font-bold text-slate-200 transition hover:text-cyan-200"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-bold text-slate-200">{link.value}</p>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8" index={1}>
          <h3 className="text-xl font-black text-white">Send a message</h3>
          {sent ? (
            <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="font-bold text-cyan-100">Your email draft has been opened.</p>
              <button onClick={() => setSent(false)} className="mt-3 text-sm font-bold text-cyan-200 hover:text-white">
                Compose another message
              </button>
            </div>
          ) : (
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                  placeholder="Tell me about the role, project, or opportunity..."
                />
              </div>
              <PrimaryButton>Send Message</PrimaryButton>
            </form>
          )}
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Mahammad Faizal. Built with React, Tailwind CSS, and Framer Motion.</p>
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
    <div className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100">
      <SpaceBackground />
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
