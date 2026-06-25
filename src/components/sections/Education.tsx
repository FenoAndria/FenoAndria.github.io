'use client';

import { educationData } from '@/data/education';

export default function Education() {
  return (
    <section id="formations" className="experience min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="section-title">
          <h2>Formations</h2>
        </div>

        <div>
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay={100 * (index + 1)}
            >
              <h4>{edu.degree}</h4>

              <h5>
                <i className="bi bi-calendar3" />
                {edu.period}
              </h5>

              <span className="experience-geo">
                <i className="bi bi-geo-alt" />
                {edu.institution} - {edu.location}
              </span>

              {edu.specialization && (
                <ul className="experience-details">
                  <li>Parcours : {edu.specialization}</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
