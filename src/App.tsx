/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  HardHat, 
  Ruler, 
  Building2, 
  MapPin, 
  Mail, 
  Linkedin, 
  Instagram, 
  ChevronDown,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { useRef } from "react";

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold text-slate-900"
          >
            Ariane<span className="text-brand-primary">.YABI</span>
          </motion.span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {["À propos", "Compétences", "Projets", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-brand-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-secondary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Me contacter
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
            alt="Construction site"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-brand-primary/20 text-brand-primary px-4 py-1.5 rounded-full mb-6 border border-brand-primary/30"
          >
            <HardHat size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Génie Civil & BTP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6"
          >
            Ariane <span className="text-brand-primary">YABI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Étudiante passionnée en Bâtiment et Travaux Publics à Cotonou. 
            Je conçois et supervise des projets d'infrastructure alliant durabilité et esthétique.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-brand-primary text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group">
              Voir mes projets
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Mon parcours
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="à-propos" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/10 rounded-full -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Ariane Yabi"
                className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 -right-8 glass-card p-6 rounded-2xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-primary p-3 rounded-xl text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Formation</p>
                    <p className="font-display font-bold text-slate-900">Licence BTP - Cotonou</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <div>
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                Bâtir l'avenir de <span className="text-brand-primary">Cotonou</span>, brique par brique.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Actuellement étudiante en Génie Civil à Cotonou, je me spécialise dans la conception structurelle et la gestion de chantiers. Mon approche combine les techniques traditionnelles de construction avec les innovations durables adaptées à notre climat tropical.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Rigoureuse et créative, je m'efforce de transformer des plans complexes en réalités tangibles qui améliorent le cadre de vie de mes concitoyens.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-brand-primary mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Analyse Structurelle</h4>
                    <p className="text-sm text-slate-500">Calculs de résistance et stabilité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-brand-primary mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Suivi de Chantier</h4>
                    <p className="text-sm text-slate-500">Coordination et contrôle qualité.</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Expertise Technique</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Un ensemble de compétences solides pour mener à bien des projets de construction de A à Z.</p>
            </FadeInWhenVisible>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Ruler />, title: "Conception 2D/3D", desc: "AutoCAD, Revit, SketchUp pour des plans précis.", color: "bg-blue-500" },
              { icon: <Building2 />, title: "Gros Œuvre", desc: "Maîtrise des structures béton armé et charpentes.", color: "bg-amber-500" },
              { icon: <MapPin />, title: "Topographie", desc: "Levés de terrain et implantations d'ouvrages.", color: "bg-emerald-500" },
              { icon: <Briefcase />, title: "Gestion de Projet", desc: "Planification, devis estimatifs et métrés.", color: "bg-purple-500" }
            ].map((skill, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="glass-card p-8 rounded-3xl hover:translate-y-[-8px] transition-all duration-300 group">
                  <div className={`${skill.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeInWhenVisible>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Projets Réalisés</h2>
              <p className="text-slate-500 mt-4">Une sélection de travaux académiques et stages pratiques.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <button className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Voir tout le portfolio <ArrowRight size={20} />
              </button>
            </FadeInWhenVisible>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                title: "Résidence Moderne Fidjrossè", 
                category: "Conception Architecturale", 
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
                tags: ["AutoCAD", "Béton Armé"]
              },
              { 
                title: "Extension Centre Commercial", 
                category: "Suivi de Chantier", 
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000",
                tags: ["Supervision", "Métré"]
              }
            ].map((project, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.2}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div className="text-white">
                        <p className="text-sm font-medium text-brand-primary mb-1">{project.category}</p>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-brand-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <FadeInWhenVisible>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Prêt à lancer votre <span className="text-brand-primary">chantier</span> ?</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Que ce soit pour une consultation, une étude de projet ou une collaboration, je suis à votre écoute pour donner vie à vos idées architecturales à Cotonou et ses environs.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-slate-900 transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                      <p className="text-xl font-medium">contact@ariane-yabi.bj</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-slate-900 transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Localisation</p>
                      <p className="text-xl font-medium">Cotonou, Bénin</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  {[<Linkedin />, <Instagram />].map((icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                      {icon}
                    </a>
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Nom complet</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Jean Dupont" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="jean@exemple.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Objet</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Étude de projet" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors" placeholder="Décrivez votre projet..."></textarea>
                  </div>
                  <button className="w-full bg-brand-primary text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-brand-primary/20">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-950 text-center border-t border-white/5">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ariane YABI. Tous droits réservés. <br />
          Conçu avec passion pour le développement du Bénin.
        </p>
      </footer>
    </div>
  );
}
