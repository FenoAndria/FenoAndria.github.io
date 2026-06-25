'use client';

import { experiencesData } from '@/data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="experience min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="section-title">
          <h2>Expériences</h2>
        </div>

        <div>
          {experiencesData.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay={100 * (index + 1)}
            >
              <h4>{exp.title}</h4>

              <h5>
                <i className="bi bi-calendar3" />
                {exp.period}
              </h5>

              {exp.company && (
                <span className="experience-geo">
                  <i className="bi bi-geo-alt" />
                  {exp.company}
                </span>
              )}

              <ul className="experience-details">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
                {exp.technologies.length > 0 && (
                  <li>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="experience-stack">{tech}</span>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
