import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleUserRound,
  Code2,
  Download,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  Radio,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { navItems, portfolio, Project, Skill } from "./portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.header
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.header>
  );
}

function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, index) => ({
        id: index,
        left: (index * 47.3) % 100,
        top: (index * 31.7) % 100,
        size: index % 9 === 0 ? 2 : index % 3 === 0 ? 1.4 : 0.8,
        delay: (index % 12) * 0.35,
        duration: 3 + (index % 7),
      })),
    [],
  );

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <i
          key={star.id}
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
      <span className="shooting-star one" />
      <span className="shooting-star two" />
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="top-nav" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Arjun Mehta home">
        <span className="brand-mark">A</span>
        <span className="brand-text">ARJUN / MEHTA</span>
      </a>
      <div className="desktop-links">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
          >
            <span>0{index + 1}</span>
            {item}
          </a>
        ))}
      </div>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-links"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item, index) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span> {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function OrbitGraphic() {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <svg viewBox="0 0 500 500" role="presentation">
        <defs>
          <linearGradient id="orbitGlow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38bdf8" />
            <stop offset="0.58" stopColor="#38bdf8" stopOpacity=".1" />
            <stop offset="1" stopColor="#facc15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle className="orbit-core" cx="250" cy="250" r="72" />
        <ellipse className="orbit-line orbit-a" cx="250" cy="250" rx="220" ry="88" />
        <ellipse className="orbit-line orbit-b" cx="250" cy="250" rx="190" ry="150" />
        <ellipse className="orbit-line orbit-c" cx="250" cy="250" rx="122" ry="225" />
        <circle className="planet planet-a" cx="457" cy="222" r="6" />
        <circle className="planet planet-b" cx="100" cy="350" r="4" />
        <path className="hud-arc" d="M90 180 A180 180 0 0 1 387 112" />
      </svg>
      <div className="orbit-label label-one">SYSTEM / 01</div>
      <div className="orbit-label label-two">CREATIVE ENGINEER</div>
      <div className="portrait-core">
        <Code2 />
        <span>BUILD</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <Starfield />
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="online"><i /> SYSTEM ONLINE · PORTFOLIO 2026</div>
          <p className="overline">Welcome to my digital universe.</p>
          <h1>
            Building ideas
            <br />
            <span>for what’s next.</span>
          </h1>
          <p className="hero-intro">{portfolio.personal.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore missions <ArrowDown />
            </a>
            <a className="button ghost" href="#contact">
              Establish contact <Radio />
            </a>
          </div>
          <div className="hero-meta">
            <span><MapPin /> {portfolio.personal.location}</span>
            <span><Sparkles /> {portfolio.personal.university} · {portfolio.personal.graduationYear}</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <OrbitGraphic />
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">
        Scroll to initialize <span />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section about-section">
      <SectionHeading
        index="01"
        eyebrow={portfolio.about.eyebrow}
        title={portfolio.about.headline}
      />
      <div className="about-grid">
        <motion.div
          className="profile-card hud-card"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="profile-top">
            <div className="avatar"><CircleUserRound /></div>
            <span>ID / AM-2026</span>
          </div>
          <h3>{portfolio.personal.name}</h3>
          <p>{portfolio.personal.title}</p>
          <dl>
            <div><dt>BASE</dt><dd>{portfolio.personal.location}</dd></div>
            <div><dt>FOCUS</dt><dd>Product engineering</dd></div>
            <div><dt>STATUS</dt><dd className="available">Available for work</dd></div>
          </dl>
        </motion.div>
        <motion.div
          className="about-copy"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolio.about.paragraphs.map((text) => <p key={text}>{text}</p>)}
          <div className="principles">
            {portfolio.about.principles.map((principle, index) => (
              <span key={principle}><b>0{index + 1}</b>{principle}</span>
            ))}
          </div>
          <a className="text-link" href={portfolio.personal.resume} download>
            Download full résumé <Download />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Education() {
  const [selected, setSelected] = useState(0);
  const item = portfolio.education[selected];
  return (
    <section id="education" className="content-section">
      <SectionHeading
        index="02"
        eyebrow="Learning trajectory"
        title="Education & credentials"
        description="A continuing path of technical study, applied research, and independent exploration."
      />
      <div className="education-grid">
        <div className="edu-timeline" role="tablist" aria-label="Education milestones">
          <svg viewBox="0 0 600 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M24 40 C170 4 400 78 576 40" />
          </svg>
          {portfolio.education.map((edu, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? "edu-node selected" : "edu-node"}
              key={edu.id}
              onClick={() => setSelected(index)}
            >
              <i />
              <span>{edu.period}</span>
              <strong>{edu.degree}</strong>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article
            key={item.id}
            className="edu-detail hud-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="card-code">ACADEMIC RECORD / {String(selected + 1).padStart(2, "0")}</div>
            <h3>{item.degree}</h3>
            <h4>{item.university} · {item.period}</h4>
            <p>{item.description}</p>
            <div className="edu-lists">
              <div><span>CORE COURSEWORK</span>{item.coursework.map((x) => <b key={x}>{x}</b>)}</div>
              <div><span>ACHIEVEMENTS</span>{item.achievements.map((x) => <b key={x}>{x}</b>)}</div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-label"><strong>{skill.name}</strong><span>{skill.years} yrs</span></div>
      <svg viewBox="0 0 300 8" preserveAspectRatio="none" aria-label={`${skill.name}, ${skill.level}% proficiency`}>
        <line className="skill-track" x1="2" y1="4" x2="298" y2="4" />
        <motion.line
          className="skill-value"
          x1="2" y1="4" x2="298" y2="4"
          pathLength="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? skill.level / 100 : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <strong className="skill-percent">{skill.level}<small>%</small></strong>
    </div>
  );
}

function Skills() {
  const categories = ["Languages", "Frontend", "Backend", "Tools"] as const;
  const [category, setCategory] = useState<(typeof categories)[number]>("Languages");
  const visible = portfolio.skills.filter((skill) => skill.category === category);
  return (
    <section id="skills" className="content-section skills-section">
      <SectionHeading
        index="03"
        eyebrow="Capability matrix"
        title="Tools for the mission"
        description="A practical toolkit shaped through coursework, personal projects, and real product work."
      />
      <div className="skill-layout">
        <div className="skill-orbit" aria-hidden="true">
          <svg viewBox="0 0 440 440">
            <circle cx="220" cy="220" r="178" />
            <circle cx="220" cy="220" r="126" />
            <circle cx="220" cy="220" r="74" />
            <path d="M55 150 C180 260 260 80 390 250" />
          </svg>
          <div className="skill-core"><Code2 /><span>{category}</span></div>
          {visible.slice(0, 4).map((skill, index) => (
            <span key={skill.name} className={`satellite satellite-${index + 1}`}>{skill.name}</span>
          ))}
        </div>
        <div className="skill-panel">
          <div className="category-tabs" role="tablist" aria-label="Skill categories">
            {categories.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={category === item}
                className={category === item ? "active" : ""}
                key={item}
                onClick={() => setCategory(item)}
              >{item}</button>
            ))}
          </div>
          <div className="skill-list">
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {visible.map((skill) => <SkillBar key={skill.name} skill={skill} />)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article layout className={`project-card hud-card ${open ? "open" : ""}`}>
      <button
        type="button"
        className="project-summary"
        aria-expanded={open}
        onClick={onToggle}
      >
        <div className="mission-id"><span>MISSION</span><strong>{project.id}</strong></div>
        <div className="project-main">
          <div className="project-meta">
            <span className={`status ${project.status === "Deployed" ? "live" : ""}`}>{project.status}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <div className="expand-icon"><ChevronRight /></div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="project-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div>
              <p>{project.longDescription}</p>
              <ul>{project.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul>
            </div>
            <div className="project-links">
              <a className="button ghost" href={project.github} target="_blank" rel="noreferrer"><GitBranch /> Source</a>
              <a className="button primary" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Projects() {
  const [selected, setSelected] = useState("01");
  return (
    <section id="projects" className="content-section">
      <SectionHeading
        index="04"
        eyebrow="Selected missions"
        title="Projects with purpose"
        description="A selection of systems, experiments, and products. Select a mission to inspect the details."
      />
      <div className="project-timeline" aria-label="Project timeline">
        <svg viewBox="0 0 800 28" preserveAspectRatio="none" aria-hidden="true"><path d="M8 14 H792" /></svg>
        {portfolio.projects.map((project) => (
          <button type="button" key={project.id} className={selected === project.id ? "active" : ""} onClick={() => setSelected(project.id)}>
            <i /><span>{project.year}</span>
          </button>
        ))}
      </div>
      <div className="project-list">
        {portfolio.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            open={selected === project.id}
            onToggle={() => setSelected(selected === project.id ? "" : project.id)}
          />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section journey-section">
      <SectionHeading
        index="05"
        eyebrow="Flight record"
        title="The journey so far"
        description="Each stop has sharpened how I think, build, collaborate, and make decisions."
      />
      <div className="journey-map">
        <svg viewBox="0 0 900 300" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M40 230 C170 90 260 260 400 140 S660 35 860 120"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
        {portfolio.experience.map((item, index) => (
          <motion.article
            key={item.year}
            className={`journey-node node-${index + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <i />
            <span>{item.type} / {item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (String(data.get("message") || "").trim().length < 10) next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    if (!Object.keys(next).length) {
      setSent(true);
      event.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="content-section contact-section">
      <div className="contact-shell">
        <div className="contact-copy">
          <div className="section-kicker"><span>06</span><span>Communication channel</span></div>
          <h2>Let’s build something <em>remarkable.</em></h2>
          <p>Have a project, opportunity, or interesting problem? My channel is open.</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.personal.email}`}><Mail /><span><small>EMAIL</small>{portfolio.personal.email}</span><ArrowUpRight /></a>
            <a href={portfolio.personal.github} target="_blank" rel="noreferrer"><GitBranch /><span><small>GITHUB</small>github.com/arjunmehta-dev</span><ArrowUpRight /></a>
            <a href={portfolio.personal.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness /><span><small>LINKEDIN</small>linkedin.com/in/arjunmehta-dev</span><ArrowUpRight /></a>
          </div>
        </div>
        <form className="contact-form hud-card" onSubmit={submit} noValidate>
          <div className="terminal-head"><span>NEW TRANSMISSION</span><i /> SECURE</div>
          <label>
            <span>YOUR NAME</span>
            <input name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="name-error" />
            {errors.name && <small id="name-error">{errors.name}</small>}
          </label>
          <label>
            <span>EMAIL ADDRESS</span>
            <input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-error" />
            {errors.email && <small id="email-error">{errors.email}</small>}
          </label>
          <label>
            <span>MESSAGE</span>
            <textarea name="message" rows={5} aria-invalid={!!errors.message} aria-describedby="message-error" />
            {errors.message && <small id="message-error">{errors.message}</small>}
          </label>
          <button className="button primary send-button" type="submit">
            {sent ? <><Check /> Transmission received</> : <>Send transmission <Send /></>}
          </button>
          {sent && <p className="success" role="status">Signal received. I’ll respond as soon as possible.</p>}
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer>
        <span>© 2026 {portfolio.personal.name}</span>
        <span>DESIGNED & BUILT WITH INTENTION</span>
        <a href="#home">Return to orbit <ArrowUpRight /></a>
      </footer>
    </div>
  );
}
