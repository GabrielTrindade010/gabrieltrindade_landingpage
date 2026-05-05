"use client";

import { motion } from "framer-motion";
import { CircleCheck, TrendingUp, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    title: "Mais Clientes",
    description: "Um site bem estruturado é um vendedor que trabalha 24h por dia para você.",
    icon: Users,
  },
  {
    title: "Autoridade Digital",
    description: "Transmita profissionalismo e confiança logo no primeiro clique do seu cliente.",
    icon: ShieldCheck,
  },
  {
    title: "Crescimento Escalonável",
    description: "Soluções que acompanham a evolução da sua empresa sem perder performance.",
    icon: TrendingUp,
  },
];

export const Benefits = () => {
  return (
    <section id="diferenciais" className="py-24 bg-dark-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6"
            >
              Por que investir em um <br />
              <span className="text-gradient">projeto profissional?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed"
            >
              Ter uma presença digital não é mais um diferencial, é uma necessidade. Mas não basta estar online, é preciso ter excelência.
            </motion.p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 text-brand-primary">
                    <CircleCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                    <p className="text-white/50">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border border-white/10 flex items-center justify-center p-12 overflow-hidden">
               {/* Visual representation of results */}
               <div className="w-full space-y-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center px-4 justify-between"
                  >
                    <span className="text-xs font-bold text-white/40 uppercase">Visibilidade</span>
                    <span className="text-brand-primary font-bold">+250%</span>
                  </motion.div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center px-4 justify-between"
                  >
                    <span className="text-xs font-bold text-white/40 uppercase">Conversão</span>
                    <span className="text-brand-accent font-bold">+180%</span>
                  </motion.div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center px-4 justify-between"
                  >
                    <span className="text-xs font-bold text-white/40 uppercase">Velocidade</span>
                    <span className="text-green-400 font-bold">99/100</span>
                  </motion.div>
               </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
