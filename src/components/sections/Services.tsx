"use client";

import { motion } from "framer-motion";
import { LayoutPanelTop, Smartphone, Zap, Globe, Shield, Heart } from "lucide-react";

const services = [
  {
    title: "Criação de Sites",
    description: "Landings pages, sites institucionais e portfólios modernos, rápidos e otimizados para SEO.",
    icon: Globe,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Desenvolvimento de Apps",
    description: "Aplicativos mobile nativos ou híbridos com foco em experiência do usuário e performance.",
    icon: Smartphone,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Sistemas Customizados",
    description: "Soluções de software personalizadas para automatizar processos e resolver dores específicas do seu negócio.",
    icon: LayoutPanelTop,
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    title: "Alta Performance",
    description: "Sites que carregam instantaneamente, garantindo que você não perca nenhum cliente pela demora.",
    icon: Zap,
    color: "bg-amber-500/20 text-amber-400",
  },
  {
    title: "Segurança e Estabilidade",
    description: "Código sólido e infraestrutura robusta para garantir que seu site esteja sempre online e seguro.",
    icon: Shield,
    color: "bg-rose-500/20 text-rose-400",
  },
  {
    title: "Suporte Dedicado",
    description: "Acompanhamento em todas as etapas, desde a concepção até o pós-lançamento do projeto.",
    icon: Heart,
    color: "bg-cyan-500/20 text-cyan-400",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Serviços <span className="text-gradient">Especializados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Soluções digitais completas para elevar o nível do seu negócio e gerar resultados reais.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
