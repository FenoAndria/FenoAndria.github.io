'use client';

import { profileData } from '@/data/profile';

export default function Contact() {
  return (
    <section id="contact" className="contact min-h-screen flex items-center pb-20">
      <div className="container mx-auto px-6">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div data-aos="fade-right" data-aos-delay="1000">
                <div className="contact-container">
                  <i className="bi bi-phone" />
                  <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-delay="500">
                <div className="contact-container">
                  <i className="bi bi-envelope" />
                  <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-delay="100">
                <div className="contact-container">
                  <i className="bi bi-facebook" />
                  <a href="https://facebook.com/feno.randriamorasata" target="_blank" rel="noopener noreferrer">
                    Feno Andriamorasata
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
