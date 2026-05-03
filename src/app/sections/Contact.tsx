"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "New Project Inquiry", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="section-container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-start">
          
          {/* Left Column: Info */}
          <SectionReveal variant="slide-right">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">
                  Let&apos;s Connect
                </span>
              </div>
              <h2 className="heading-2 mb-6">
                Let&apos;s build something <span className="gradient-text">exceptional</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? I&apos;m currently available for new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email Me</h4>
                  <a href="mailto:suryanshsrivastavaa@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    suryanshsrivastavaa@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Pricing Guidelines</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">Web Design</h5>
                    <p className="text-xs text-muted-foreground mb-2">High-performance visuals</p>
                    <span className="text-xs font-mono text-primary-light bg-primary/10 px-2 py-1 rounded">From $1,000</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">Development</h5>
                    <p className="text-xs text-muted-foreground mb-2">Clean, scalable code</p>
                    <span className="text-xs font-mono text-primary-light bg-primary/10 px-2 py-1 rounded">From $2,000</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: Form */}
          <SectionReveal variant="slide-left">
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-surface border border-white/5 shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="form-input"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="form-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Subject</label>
                      <select 
                        className="form-input appearance-none"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option>New Project Inquiry</option>
                        <option>Collaboration</option>
                        <option>Just Saying Hi</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="form-input resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full h-14 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
