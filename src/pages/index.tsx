import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ui/ProjectCard';
import projectsData from '@site/src/data/projects.json';

export default function Home(): JSX.Element {
  const { featuredProjects } = projectsData;

  return (
    <Layout title="ask-t | Personal Knowledge Hub" description="Personal knowledge hub - projects, notes, and daily logs">
      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--fg)] mb-6">
                  Personal
                  <br />
                  <span className="text-[var(--fg)]">Knowledge Hub</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
                  Projects, notes, and daily logs.
                  A personal space for organizing and tracking development work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/projects" className="btn-primary">
                    Projects
                  </a>
                  <a href="/docs/notes" className="btn-secondary">
                    Notes
                  </a>
                  <a href="/daily" className="btn-secondary">
                    Daily TODO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Showcasing projects built with modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/projects" className="btn-secondary">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="container mx-auto px-4 py-24 bg-[var(--card-bg)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/daily"
                className="p-6 bg-[var(--bg)] rounded-lg hover:shadow-lg transition-shadow text-center"
                style={{ textDecoration: 'none' }}
              >
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  Daily TODO
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  GitHub Issues で管理する日々のタスク
                </p>
              </a>
              
              <a
                href="/docs/notes"
                className="p-6 bg-[var(--bg)] rounded-lg hover:shadow-lg transition-shadow text-center"
                style={{ textDecoration: 'none' }}
              >
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  Notes
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  技術メモ、学習記録、アイデア
                </p>
              </a>
              
              <a
                href="/profile"
                className="p-6 bg-[var(--bg)] rounded-lg hover:shadow-lg transition-shadow text-center"
                style={{ textDecoration: 'none' }}
              >
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  Profile
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  経歴とスキル
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
