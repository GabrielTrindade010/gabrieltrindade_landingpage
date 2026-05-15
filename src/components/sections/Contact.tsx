"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "../ui/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://gabrieltrindade-landingpage-backend-tawny.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success !== true) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      alert("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-12 md:p-20 rounded-[40px] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -mr-32 -mt-32" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Vamos tirar sua <br />
                <span className="text-gradient">ideia do papel?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                Estou pronto para ajudar sua empresa a alcançar o próximo nível digital. Entre em contato e vamos conversar sobre seu projeto.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:gtrindadedev@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
                    <Mail className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">E-mail</p>
                    <p className="text-lg font-medium">gtrindadedev@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5511959099039" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
                    <MessageCircle className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-lg font-medium">Falar agora</p>
                  </div>
                </a>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">
                    Nome
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">
                    E-mail
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">
                  Mensagem
                </label>

                <textarea
                  name="message"
                  placeholder="Como posso te ajudar?"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full py-4 text-lg cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  {loading ? "Enviando..." : "Enviar mensagem"}

                  <Send size={20} />
                </span>
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
