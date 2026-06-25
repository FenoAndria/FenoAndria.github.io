'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import Header from '@/components/layout/Header';
import Preloader from '@/components/ui/Preloader';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

/**
 * Page d'accueil du portfolio
 * 
 * Cette page affiche toutes les sections du portfolio :
 * - À propos
 * - Expériences professionnelles
 * - Formations académiques
 * - Compétences techniques
 * - Projets réalisés
 * - Contact
 */
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialiser AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Simuler le chargement initial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader affiché pendant le chargement */}
      <Preloader isLoading={loading} />

      {/* Navigation latérale */}
      <Header />

      {/* Contenu principal */}
      <main id="main" className="lg:ml-[300px]">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
