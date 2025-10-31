import React from 'react';
import clsx from 'clsx';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  tags: string[];
  slug: string;
  image?: string;
  className?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  readTime,
  tags,
  slug,
  image,
  className,
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={clsx('article-card group cursor-pointer', className)}>
      {image && (
        <div className="aspect-video overflow-hidden mb-4 rounded-[var(--radius)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <time dateTime={date}>
            {formatDate(date)}
          </time>
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>

        <p className="text-[var(--muted)] leading-relaxed">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
