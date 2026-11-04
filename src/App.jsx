import React, { useState } from 'react';

// Lightweight inline SVG icons
const TerminalIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
);

const PhoneIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MailIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const MapPinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

const CheckCircleIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

const ArrowUpRightIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);

const CloseIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const LayersIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>
);

const BriefcaseIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

const GraduationCapIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const skills = [
    { 
      category: "Backend & Languages", 
      items: ["Java", "Java OOP", "C# (Basic)", "Node.js", "REST APIs", "SOAP / WSDL / XSD"] 
    },
    { 
      category: "Frameworks & Security", 
      items: ["Spring", "Spring Boot", "Spring Security", "Spring JPA / Hibernate", "NestJS", "Next.js", "Angular"] 
    },
    { 
      category: "Databases & Storage", 
      items: ["PostgreSQL", "MySQL", "MS SQL Server", "MongoDB"] 
    },
    { 
      category: "Mobile, Testing & DevOps", 
      items: ["Ionic Mobile Apps", "Kotlin / Android", "JUnit Testing", "Automation / UAT Testing", "Git", "CI/CD Pipeline"] 
    }
  ];

  const projects = [
    {
      id: "points-reward-engine",
      title: "Point Reward & Gift Exchange System",
      company: "Aceplus Solutions",
      summary: "High-security Java backend powering point redemption, gift vouchers, and third-party integration pipelines.",
      impact: "Seamless real-time integration across POS terminals, Top-Up operators, and SMS service gateways.",
      tech: ["Java", "Spring Boot", "Spring Security", "Spring JPA", "PostgreSQL / MySQL", "Ionic"],
      deepDive: {
        problem: "Need for strict transaction isolation, anti-fraud checks, and zero-downtime integration across third-party POS counters and mobile loyalty apps.",
        solution: "Engineered secure REST APIs with Spring Security, robust transactional JPA boundaries for points ledger mutations, and resilient retry logic for external SMS and Top-Up webhooks.",
        architecture: "Ionic Mobile / POS Client → Spring Security Filter → Transactional Point Service → Relational DB → Top-Up & SMS Micro-integrations."
      }
    },
    {
      id: "banking-cbnet",
      title: "Banking CBNet Application Integration",
      company: "Ability Software Services",
      summary: "Mission-critical financial integration platform connecting client systems securely with enterprise banking services.",
      impact: "End-to-end cryptographic trust using public/private certificates and strict WSDL/XSD schema contracts.",
      tech: ["Java", "SOAP", "WSDL / XSD", "Public/Private Keys", "MS SQL / MySQL"],
      deepDive: {
        problem: "Legacy financial protocols required rigid XML structure compliance, strict schema enforcement, and zero margin for payload tampering.",
        solution: "Imported and generated strongly-typed WSDL/XSD clients, configured mutual SSL/TLS and message-level signature encryption using private/public certificates.",
        architecture: "Client Request → SOAP Envelope Signer (Private Key) → Banking Gateway → WSDL Contract Validation → Core Banking Service."
      }
    },
    {
      id: "hospital-edu-apis",
      title: "Hospital & Educational Service Platforms",
      company: "EEAIO Software Services",
      summary: "Modular backend web services serving healthcare appointment portals and interactive educational portals.",
      impact: "High-availability multi-service API delivery supporting concurrent appointments and educational resource delivery.",
      tech: ["Java", "Spring Boot", "Node.js", "NestJS", "Next.js", "PostgreSQL"],
      deepDive: {
        problem: "Managing distinct domain logic for patient scheduling and multi-tenant student courses while maintaining fast response times.",
        solution: "Structured modular micro-APIs combining Spring Boot for high-throughput records and NestJS/Next.js for real-time frontend services.",
        architecture: "Next.js Web / Mobile Client → API Gateway → NestJS / Spring Boot Core Services → PostgreSQL & MongoDB Clusters."
      }
    },
    {
      id: "hr-change-detection",
      title: "Enterprise HR Change Detection & Mobile Engine",
      company: "Bizleap Technology",
      summary: "Automated change detection services for enterprise human resource records and cross-platform mobile sync.",
      impact: "Automated test script coverage and continuous change-tracking for enterprise payroll and attendance records.",
      tech: ["Java", "Ionic Mobile", "Automated Testing Scripts", "SQL", "Agile / Scrum"],
      deepDive: {
        problem: "Detecting incremental employee record modifications without triggering redundant database scans or heavy compute operations.",
        solution: "Built granular audit and diff detection algorithms in Java, accompanied by comprehensive automated testing scripts and Scrum-driven sprint execution.",
        architecture: "Ionic App / Web UI → Change Detection Listener → Core Java Service → Audit Tables & Automated Test Runner."
      }
    }
  ];

  const experience = [
    {
      role: "Senior Java Engineer",
      company: "Aceplus Solutions",
      period: "Nov 2024 — Present",
      achievements: [
        "Develop secure Java APIs for point reward and redeem gift exchange systems.",
        "Oversee Ionic mobile application maintenance and perform API service integrations with Top-Up systems, SMS gateways, and POS hardware.",
        "Implement robust security policies using Spring Security and optimize database transactions."
      ]
    },
    {
      role: "Backend Developer",
      company: "EEAIO Software Services",
      period: "May 2023 — Nov 2024",
      achievements: [
        "Engineered reliable APIs using Java, Node.js, Next.js, and NestJS for hospital management and educational websites.",
        "Handled database schema designs, data modeling, and performance tuning across SQL and NoSQL engines.",
        "Collaborated with cross-functional product teams to deliver modular features on schedule."
      ]
    },
    {
      role: "Backend Developer",
      company: "Ability Software Services",
      period: "Jun 2019 — Dec 2021",
      achievements: [
        "Developed banking CBNet application for secure API integrations with core financial institutions.",
        "Implemented enterprise SOAP integrations via WSDL and XSD imports with strict schema validation.",
        "Configured secure public/private certificate encryption mechanisms between client and server architectures."
      ]
    },
    {
      role: "Programmer",
      company: "Bizleap Technology",
      period: "Jun 2018 — Jun 2019",
      achievements: [
        "Engineered change detection services for enterprise HR software using Java.",
        "Built and maintained cross-platform mobile applications using the Ionic framework.",
        "Authored testing scripts for automated regression and participated actively in Scrum ceremonies."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science (AI & Data Mining Major)",
      institution: "University of Computer Studies, Yangon (UCSY)",
      period: "2013 — 2019",
      details: "In-depth specialization in Artificial Intelligence algorithms, Data Mining, and Enterprise Software Systems."
    },
    {
      degree: "Certification of Android Development",
      institution: "Phandeeyar",
      period: "2017",
      details: "Comprehensive hands-on training developing native mobile applications with Java and Kotlin."
    }
  ];

  const languages = [
    { name: "Burmese", level: "Native" },
    { name: "English", level: "Upper Intermediate" },
    { name: "Japanese", level: "Intermediate" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))]" />

      <div className="relative max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* HERO SECTION */}
     {/* HERO SECTION */}
        <header className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 pt-4">
          
          {/* Text Content */}
          <div className="space-y-6 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Contract ends Dec 2026 • Available January 2027
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Saung Hnin Phyu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Senior Backend Engineer
              </span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
              Senior Java Developer with extensive experience designing resilient RESTful APIs, 
              microservices, and financial/banking integrations. Specialized in Spring Boot, transactional data integrity, 
              and enterprise system security.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><MapPinIcon size={14} className="text-cyan-400" /> Mayanghone, Yangon, Myanmar</span>
              <span>•</span>
              <span>Burmese (Native)</span>
              <span>•</span>
              <span>English (Upper Intermediate)</span>
              <span>•</span>
              <span>Japanese (Intermediate)</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors flex items-center gap-2 text-sm"
              >
                View System Projects
              </a>
              <a 
                href="mailto:shp1821997@gmail.com" 
                className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <MailIcon size={16} /> Contact Me
              </a>
              <a 
                href="tel:+959753444579" 
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors text-sm"
                title="Call +959753444579"
              >
                <PhoneIcon size={18} />
              </a>
            </div>
          </div>

          {/* Profile Photo Avatar */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-lg" />
            <img 
              src="/profile.jpg" 
              alt="Saung Hnin Phyu" 
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950"
            />
          </div>

        </header>

        {/* SKILLS MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-wide">
            <TerminalIcon size={16} /> Technical Expertise & Stack
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((group, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <h3 className="font-semibold text-slate-200 text-sm mb-3">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages & Soft Skills Sub-bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <h4 className="text-xs font-mono text-slate-400 mb-2">LANGUAGES</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((l, i) => (
                  <span key={i} className="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300">
                    <strong className="text-white">{l.name}:</strong> {l.level}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <h4 className="text-xs font-mono text-slate-400 mb-2">CORE ATTRIBUTES</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Problem Solving • High-Stress Execution • API Integrations • Fast Learner • Team Leadership
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-wide">
              <LayersIcon size={16} /> Key Systems & Case Studies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="group relative p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 block mb-3">@ {proj.company}</span>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{proj.summary}</p>
                  
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/60 text-xs font-mono text-cyan-300 mb-5">
                    <strong>Integration Scope:</strong> {proj.impact}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModal(proj)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Architectural Breakdown <ArrowUpRightIcon size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-wide">
            <BriefcaseIcon size={16} /> Career History & Work Experience
          </div>

          <div className="relative pl-6 border-l border-slate-800 space-y-10">
            {experience.map((job, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 border-slate-950" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="font-semibold text-white text-base">
                    {job.role} <span className="text-cyan-400">@ {job.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {job.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="text-sm text-slate-400 flex items-start gap-2">
                      <CheckCircleIcon size={15} className="text-cyan-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-wide">
            <GraduationCapIcon size={16} /> Education & Professional Training
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                <h3 className="text-base font-semibold text-white mt-1">{edu.degree}</h3>
                <p className="text-sm text-slate-300 mb-2">{edu.institution}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REFERENCES & FOOTER */}
        {/* FOOTER & REFERENCES */}
        <footer id="contact" className="pt-12 border-t border-slate-900 space-y-6 text-xs text-slate-500">
         

          {/* BOLD PROFESSIONAL REFERENCES SECTION */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
              Professional References
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-slate-300 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-slate-100">Kaung San Kyaw</span>
                <span className="text-cyan-400 font-medium">(Software Engineer)</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a href="mailto:kaungsankyaw@gmail.com" className="font-semibold text-slate-300 hover:text-cyan-300 underline underline-offset-2 transition-colors">
                  kaungsankyaw@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-slate-100">Khun San Thein</span>
                <span className="text-cyan-400 font-medium">(Project Manager)</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a href="mailto:khunsanthein@gmail.com" className="font-semibold text-slate-300 hover:text-cyan-300 underline underline-offset-2 transition-colors">
                  khunsanthein@gmail.com
                </a>
              </div>
            </div>
          </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-slate-300 font-medium">Saung Hnin Phyu</span> — Senior Backend / Java Engineer
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:shp1821997@gmail.com" className="hover:text-cyan-400 transition-colors">shp1821997@gmail.com</a>
              <span>•</span>
              <a href="tel:+959753444579" className="hover:text-cyan-400 transition-colors">+959753444579</a>
            </div>
          </div>
        </footer>

      </div>

      {/* CASE STUDY MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{activeModal.title}</h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">{activeModal.company} • Architecture Deep Dive</p>
              </div>
              <button 
                onClick={() => setActiveModal(null)} 
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Project Context & Problem</h4>
                <p className="text-slate-400">{activeModal.deepDive.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 mb-1">Technical Solution & Integrations</h4>
                <p className="text-slate-400">{activeModal.deepDive.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 mb-1">System Architecture Flow</h4>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300">
                  {activeModal.deepDive.architecture}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}