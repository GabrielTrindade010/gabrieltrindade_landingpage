"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Terminal, Rocket, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-bold mb-6 tracking-wider uppercase">
            <Rocket size={14} /> Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Transformando visões em <br />
            <span className="text-gradient">experiências digitais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
            Desenvolvo sites e aplicativos de alta performance que conectam sua empresa ao público certo e impulsionam seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button variant="primary" href="#contato" className="text-lg whitespace-nowrap cursor-pointer">
              <span className="flex items-center gap-2 whitespace-nowrap">Solicitar orçamento <ArrowRight size={20} /></span>
            </Button>
            <Button variant="outline" href="#servicos" className="text-lg whitespace-nowrap">
              Ver serviços
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60">
              <Terminal size={18} className="text-brand-primary" />
              <span className="text-sm font-medium">Clean Code</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60">
              <Smartphone size={18} className="text-brand-primary" />
              <span className="text-sm font-medium">Mobile First</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-2 rounded-3xl border-white/10 shadow-2xl">
            <div className="rounded-2xl overflow-hidden bg-dark-bg border border-white/5 min-h-[300px] relative group">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="text-[10px] text-white/30 ml-2 font-mono uppercase tracking-widest">project.ts</span>
              </div>
              
              {/* Code Snippet Simulation */}
              <div className="p-8 font-mono text-sm leading-relaxed text-white/50">
                <p><span className="text-brand-primary">const</span> project = {"{"}</p>
                <p className="pl-4">name: <span className="text-brand-accent">"Sua Próxima Grande Ideia"</span>,</p>
                <p className="pl-4">type: <span className="text-brand-accent">"Full-stack Application"</span>,</p>
                <p className="pl-4">status: <span className="text-brand-accent">"Optimized for conversion"</span>,</p>
                <p className="pl-4">features: [<span className="text-brand-accent">"Fast", "Responsive", "Secure"</span>]</p>
                <p>{"}"};</p>
                
                <div className="mt-8 space-y-3">
                  <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                    />
                  </div>
                  <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-5 right-2 glass-card p-4 rounded-2xl border-brand-primary/20 shadow-xl"
              >
                <div className="flex items-center gap-3 ">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Performance</p>
                    <p className="text-sm font-bold text-brand-primary">100 / 100</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

