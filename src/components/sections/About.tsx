'use client';

import Image from 'next/image';
import { profileData } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="about min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-8" style={{ flexDirection: 'row' }}>
          {/* Contenu textuel */}
          <div className="content flex-1 min-w-0" id="about-l" style={{ paddingRight: '1rem' }}>
            <h3
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {profileData.title}
            </h3>
            <hr style={{ borderColor: 'var(--color-gris)', marginBottom: '1rem', marginTop: '0.5rem' }} />

            <p
              className="mb-6 leading-relaxed"
              style={{ color: 'var(--color-gris)' }}
              data-aos="fade"
              data-aos-delay="400"
            >
              {profileData.description}
            </p>

            <hr style={{ borderColor: 'var(--color-gris)', marginBottom: '1rem', opacity: 0.4 }} />

            {/* Informations personnelles en pill badges */}
            <ul>
              <li data-aos="fade-right" data-aos-delay="100">
                <i className="bi bi-person-heart" />
                {profileData.age} ans
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <i className="bi bi-phone-fill" />
                {profileData.phone}
              </li>
              <li data-aos="fade-right" data-aos-delay="700">
                <i className="bi bi-envelope-fill" />
                {profileData.email}
              </li>
              <li data-aos="fade-right" data-aos-delay="1000">
                <i className="bi bi-geo-alt-fill" />
                {profileData.location}
              </li>
            </ul>
          </div>

          {/* Photo de profil */}
          <div
            className="flex-shrink-0"
            style={{ width: '100%', maxWidth: 320 }}
            data-aos="fade-in"
            data-aos-delay="1200"
          >
            <Image
              src="/images/profile/PXL_20221127_121352618~2.jpg"
              alt="Feno Andriamorasata"
              width={320}
              height={400}
              className="shadow"
              style={{ borderRadius: 20, objectFit: 'cover', width: '100%', height: 'auto' }}
            />
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <p style={{ fontSize: 20, color: 'var(--color-gris)', display: 'none' }} className="profile-info-name">
                Feno ANDRIAMORASATA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
