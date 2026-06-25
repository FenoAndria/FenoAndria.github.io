'use client';

import Image from 'next/image';
import { projectsData } from '@/data/projects';

export default function Projects() {
  return (
    <section id="realisation" className="realisation min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="section-title">
          <h2>Projets</h2>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {projectsData.map((project) => (
            <div key={project.id} className="card-realisation">
              <div className="p-4">
                {/* Titre */}
                <div className="realisation-titre">
                  <h4>{project.title}</h4>
                </div>
                <hr />

                {/* Image */}
                <div className="realisation-img">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={400}
                    height={130}
                    className="realisation-img-el"
                    style={{ height: 130, width: '100%', objectFit: 'cover', borderRadius: 6, opacity: 0.85 }}
                  />
                </div>
                <hr />

                {/* Footer avec lien */}
                <div className="flex justify-between items-center">
                  <div />
                  <div className="realisation-lien">
                    {(project.github || project.detailsPage) && (
                      <a
                        href={project.github || project.detailsPage || '#'}
                        target={project.github ? '_blank' : undefined}
                        rel={project.github ? 'noopener noreferrer' : undefined}
                        title="Plus de détails"
                      >
                        Plus...
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
