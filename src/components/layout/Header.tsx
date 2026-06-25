'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { navigationItems } from '@/data/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Bouton toggle menu mobile */}
      <button
        className="mobile-nav-toggle fixed top-4 right-4 z-50 lg:hidden text-white p-2 rounded-full shadow-lg"
        style={{ background: 'var(--color-tomato)', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-list-ul'} text-2xl`} />
      </button>

      {/* Header / Sidebar */}
      <header
        id="header"
        className={`
          fixed top-0 left-0 h-screen w-[300px] z-40
          flex flex-col justify-between py-6 px-4
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ background: 'var(--color-dark)' }}
      >
        <div>
          {/* Profil */}
          <div className="profile text-center mb-6">
            <div className="relative mx-auto mb-3" style={{ width: 120, height: 120 }} data-aos="fade-down" data-aos-delay="600">
              <Image
                src={profileData.image}
                alt={profileData.imageAlt}
                fill
                className="rounded-full object-cover"
                style={{ border: '3px solid var(--color-blue)' }}
                priority
              />
            </div>

            <h1 data-aos="fade-down" data-aos-delay="200">
              <Link href="/" style={{ color: 'var(--color-gris)', fontSize: 20, fontWeight: 400 }}>
                {profileData.name}
              </Link>
            </h1>

            {/* Réseaux sociaux - boutons circulaires */}
            <div className="social-links" data-aos="fade" data-aos-delay="600">
              {profileData.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={`bx ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav id="navbar" className="nav-menu">
            <ul>
              {navigationItems.map((item, index) => (
                <li
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-delay={100 + index * 200}
                >
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    <i className={`bx ${item.icon}`} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer avec bouton CV */}
        <div className="footer text-center">
          <div className="mb-2">
            <a
              href={profileData.cvUrl}
              download
              className="print-cv"
            >
              <i className="bi bi-printer" />
              Télécharger
            </a>
          </div>
          <p style={{ color: 'var(--color-gris)', fontSize: 14 }}>
            {profileData.name} - {new Date().getFullYear()}
          </p>
        </div>
      </header>

      {/* Overlay mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
