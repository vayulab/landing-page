import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Wind, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-24" />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
            <Button variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5 hover:text-primary">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-8">
                <Wind className="w-4 h-4" />
                <span>{t('hero.badge')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                {t('hero.title_prefix')} <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {t('hero.title_highlight')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 text-lg h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  {t('hero.cta_primary')}
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-border hover:bg-secondary/5">
                  {t('hero.cta_secondary')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
      </section>

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
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
                <Logo className="w-full h-full opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meditary Project Section */}
      <section id="meditary" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl max-w-sm mx-auto">
                <img 
                  src="/meditary-mockup.jpeg" 
                  alt="Meditary App Interface" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            <div className="order-1 md:order-2">
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
              
              <Button size="lg" className="rounded-full px-8 bg-gray-900 text-white hover:bg-gray-800">
                {t('meditary.cta')} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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
                icon: <Brain className="w-8 h-8 text-primary" />
              },
              {
                title: t('philosophy.practice_title'),
                desc: t('philosophy.practice_desc'),
                icon: <Zap className="w-8 h-8 text-secondary" />
              },
              {
                title: t('philosophy.expansion_title'),
                desc: t('philosophy.expansion_desc'),
                icon: <Wind className="w-8 h-8 text-primary" />
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-background/50 backdrop-blur-sm hover:bg-background transition-colors duration-300">
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              <span className="font-bold text-muted-foreground">VayuLab</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {t('footer.rights')}
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/vayulab" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="mailto:diego@vayulab.io" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
