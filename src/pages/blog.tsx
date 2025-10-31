import React, { JSX, useState } from 'react';
import Layout from '@theme/Layout';
import Button from '@site/src/components/ui/Button';
import { Card } from '@site/src/components/ui/Card';

export default function Blog(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', slug: 'all', count: 6 },
    { name: 'Frontend Development', slug: 'frontend-development', count: 1 },
    { name: 'Design Systems', slug: 'design-systems', count: 1 },
    { name: 'Architecture', slug: 'architecture', count: 1 },
    { name: 'Performance', slug: 'performance', count: 1 },
    { name: 'AI & ML', slug: 'ai-ml', count: 1 },
    { name: 'Career', slug: 'career', count: 1 },
  ];

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and organize React applications for long-term maintainability and team collaboration.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Frontend Development',
      categorySlug: 'frontend-development',
      slug: 'building-scalable-react-applications',
      image: '/img/blog/react-architecture.jpg',
    },
    {
      title: 'Design Systems in Practice',
      excerpt: 'A deep dive into creating and maintaining design systems that actually work for development teams.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Design Systems',
      categorySlug: 'design-systems',
      slug: 'design-systems-in-practice',
      image: '/img/blog/design-systems.jpg',
    },
    {
      title: 'Microservices Architecture: Best Practices',
      excerpt: 'Exploring the principles and practices for building scalable microservices architectures.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Architecture',
      categorySlug: 'architecture',
      slug: 'microservices-architecture',
      image: '/img/blog/microservices.jpg',
    },
    {
      title: 'Web Performance Optimization Techniques',
      excerpt: 'Essential techniques for optimizing web application performance, from bundle size to runtime optimization.',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Performance',
      categorySlug: 'performance',
      slug: 'web-performance-optimization',
      image: '/img/blog/performance-optimization.jpg',
    },
    {
      title: 'AI in Web Development: Current Trends and Future',
      excerpt: 'Exploring how artificial intelligence is transforming web development and what the future holds.',
      date: '2024-01-20',
      readTime: '12 min read',
      category: 'AI & ML',
      categorySlug: 'ai-ml',
      slug: 'ai-in-web-development',
      image: '/img/blog/ai-web-development.jpg',
    },
    {
      title: 'Frontend Developer Career Path: A Complete Guide',
      excerpt: 'A comprehensive guide to building a successful career as a frontend developer.',
      date: '2024-01-25',
      readTime: '15 min read',
      category: 'Career',
      categorySlug: 'career',
      slug: 'frontend-developer-career-path',
      image: '/img/blog/career-path.jpg',
    },
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.categorySlug === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <Layout title="Blog | ask-t" description="Thoughts on web development, design, and technology">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
              Technical Blog
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Insights on web development, architecture, and technology.
              Explore articles across different categories and skill levels.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Featured Post</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-64 lg:h-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400 dark:text-gray-600">📝</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-[var(--muted)] bg-[var(--hover-bg)] px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-[var(--muted)]">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--muted)]">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Button variant="primary">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.slug
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">
              {selectedCategory === 'All' ? 'All Posts' : `${categories.find(c => c.slug === selectedCategory)?.name} Posts`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-[var(--muted)] bg-[var(--hover-bg)] px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--fg)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Button variant="ghost" className="text-sm">
                      Read →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-4">
                Stay Updated
              </h2>
              <p className="text-[var(--muted)] mb-8">
                Get the latest posts and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                />
                <Button variant="primary" className="px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}