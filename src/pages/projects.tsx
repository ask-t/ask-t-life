import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ui/ProjectCard';
import projectsData from '@site/src/data/projects.json';

export default function Projects(): JSX.Element {
  const { allProjects } = projectsData;

  return (
    <Layout title="Projects | ask-t" description="A collection of web applications and digital experiences">
      <main>
        {/* Header */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
              Projects
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A collection of web applications and digital experiences that showcase modern development practices and design principles.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24 bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@example.com" className="btn-primary">
                Start a Project
              </a>
              <a href="/blog" className="btn-secondary">
                Read My Articles
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
