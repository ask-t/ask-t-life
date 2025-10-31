import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import ProjectCard from '@site/src/components/ui/ProjectCard';
import ArticleCard from '@site/src/components/ui/ArticleCard';
import projectsData from '@site/src/data/projects.json';
import articlesData from '@site/src/data/articles.json';

export default function Home(): JSX.Element {
  const { featuredProjects } = projectsData;
  const { recentArticles } = articlesData;

  return (
    <Layout title="ask-t | Innovative Web Projects" description="Discover cutting-edge web applications and digital solutions that push the boundaries of modern development">
      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--fg)] mb-6">
                  Innovative Web
                  <br />
                  <span className="text-[var(--fg)]">Projects</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover cutting-edge web applications and digital solutions that push the boundaries of modern development.
                  From e-commerce platforms to design systems, explore projects that make a real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/projects" className="btn-primary">
                    Explore Projects
                  </a>
                  <a href="/blog" className="btn-secondary">
                    Technical Insights
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
                Showcasing innovative projects built with cutting-edge technologies. Focus on scalability, performance, and exceptional user experiences.
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

        {/* Recent Articles */}
        <section className="container mx-auto px-4 py-24 bg-[var(--card-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
                Technical Insights
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Technical articles based on real-world project development experience. Deep insights into architecture design, performance optimization, and modern technology implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/blog" className="btn-secondary">
                View All Technical Articles
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6">
              Start Your Next Project
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              Let's build innovative web applications and digital solutions together.
              Creating scalable, high-performance projects that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:projects@ask-t.com" className="btn-primary">
                Discuss Your Project
              </a>
              <a href="/projects" className="btn-secondary">
                View All Projects
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}