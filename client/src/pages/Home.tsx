import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Wind, Zap, Github, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function CircuitDivider() {
  return (
    <div className="relative flex items-center py-4 container mx-auto px-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/25" />
      <div className="mx-4 flex items-center gap-1.5 shrink-0">
        <div className="w-1 h-1 rounded-full bg-primary/40" />
        <div className="w-8 h-px bg-primary/30" />
        <div className="w-2 h-2 border border-primary/40 rotate-45" />
        <div className="w-8 h-px bg-primary/30" />
        <div className="w-1 h-1 rounded-full bg-secondary/40" />
        <div className="w-8 h-px bg-secondary/30" />
        <div className="w-2 h-2 border border-secondary/40 rotate-45" />
        <div className="w-8 h-px bg-secondary/30" />
        <div className="w-1 h-1 rounded-full bg-primary/40" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/25" />
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 600], [0, -80]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-24" />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>
              VayuLab
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#meditary" className="hover:text-primary transition-colors">{t('nav.projects')}</a>
            <a href="#philosophy" className="hover:text-primary transition-colors">{t('nav.philosophy')}</a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              className="rounded-full px-6 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section — Asymmetric */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-8">
                  <Wind className="w-4 h-4" />
                  <span>{t('hero.badge')}</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {t('hero.title_prefix')} <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  {t('hero.title_highlight')}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 text-lg h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 animate-breathe"
                  onClick={() => document.getElementById('meditary')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.cta_primary')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-lg h-12 border-border hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300"
                  onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.cta_secondary')}
                </Button>
              </motion.div>
            </div>

            {/* Right: Decorative Visual */}
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 flex items-center justify-center p-16 backdrop-blur-sm">
                <Logo className="w-full h-full opacity-90" />
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-5 -left-5 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
              />
            </motion.div>
          </div>
        </div>

        {/* Parallax Background Blobs */}
        <motion.div
          style={{ y: blobY1 }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"
        />
      </section>

      <CircuitDivider />

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <Trans i18nKey="about.p1" components={[<strong key="0" />]} />
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.p2')}
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 flex items-center justify-center p-12">
                <Logo className="w-full h-full opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Meditary Project Section */}
      <section id="meditary" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Phone fan — 3 screens */}
            <div className="relative order-2 md:order-1 flex items-end justify-center py-10">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />

              {/* Left phone — Progress */}
              <motion.div
                initial={{ opacity: 0, rotate: -12, y: 50 }}
                whileInView={{ opacity: 1, rotate: -12, y: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative z-10 -mr-10 shrink-0"
              >
                <div className="w-36 rounded-[1.5rem] overflow-hidden border-4 border-gray-900 shadow-xl">
                  <img src="/IMG_1466.jpeg" alt="Progress" className="w-full h-auto" />
                </div>
              </motion.div>

              {/* Center phone — Home */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-20 shrink-0"
              >
                <div className="w-52 rounded-[2rem] overflow-hidden border-[6px] border-gray-900 shadow-2xl">
                  <img src="/IMG_1465.jpeg" alt="Home" className="w-full h-auto" />
                </div>
              </motion.div>

              {/* Right phone — History */}
              <motion.div
                initial={{ opacity: 0, rotate: 12, y: 50 }}
                whileInView={{ opacity: 1, rotate: 12, y: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative z-10 -ml-10 shrink-0"
              >
                <div className="w-36 rounded-[1.5rem] overflow-hidden border-4 border-gray-900 shadow-xl">
                  <img src="/IMG_1467.jpeg" alt="History" className="w-full h-auto" />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>{t('meditary.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('meditary.title')}</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('meditary.description')}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('meditary.feature1_title')}</h3>
                    <p className="text-muted-foreground">{t('meditary.feature1_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Wind className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('meditary.feature2_title')}</h3>
                    <p className="text-muted-foreground">{t('meditary.feature2_desc')}</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="rounded-full px-8 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                {t('meditary.cta')} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('philosophy.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('philosophy.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('philosophy.investigation_title'),
                desc: t('philosophy.investigation_desc'),
                icon: <Brain className="w-8 h-8 text-primary" />,
                delay: 0,
              },
              {
                title: t('philosophy.practice_title'),
                desc: t('philosophy.practice_desc'),
                icon: <Zap className="w-8 h-8 text-secondary" />,
                delay: 0.1,
              },
              {
                title: t('philosophy.expansion_title'),
                desc: t('philosophy.expansion_desc'),
                icon: <Wind className="w-8 h-8 text-primary" />,
                delay: 0.2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ y: -6 }}
                style={{ transition: "box-shadow 0.3s ease" }}
              >
                <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm hover:shadow-primary/10 hover:shadow-2xl transition-shadow duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Contact Section — Email only */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('contact.subtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-block"
            >
              <a
                href="mailto:diego@vayulab.io"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/20 text-primary text-lg font-medium hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                diego@vayulab.io
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              <span className="font-bold text-muted-foreground" style={{ fontFamily: "var(--font-display)" }}>VayuLab</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {t('footer.rights')}
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/vayulab" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
