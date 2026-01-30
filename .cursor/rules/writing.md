# Writing Guide for Notes and Blog

## Frontmatter Template

### Notes
```markdown
---
title: ノートタイトル
tags: [tag1, tag2]
date: 2026-01-30
sidebar_position: 1
---
```

### Blog Posts
```markdown
---
title: 記事タイトル
authors: [ask-t]
tags: [react, typescript]
date: 2026-01-30
---
```

## Structure

### Technical Notes
1. **Overview** - What is this about?
2. **Problem/Context** - Why does this matter?
3. **Solution/Content** - The main content
4. **Examples** - Code or practical examples
5. **References** - Links to resources

### Learning Notes
1. **Topic** - What are you learning?
2. **Key Concepts** - Main takeaways
3. **Notes** - Detailed notes
4. **Questions** - Things to explore further

### Ideas
1. **Idea** - Brief description
2. **Background** - Why this idea?
3. **Details** - Expand on the idea
4. **Next Steps** - How to pursue it

## Formatting

### Code Blocks
Always specify the language:
```typescript
const example = "code";
```

### Callouts (using Docusaurus admonitions)
```markdown
:::note
General information
:::

:::tip
Helpful tip
:::

:::warning
Be careful about this
:::

:::danger
Critical warning
:::
```

### Links
- Internal: `[Link text](/docs/path/to/page)`
- External: `[Link text](https://example.com)`

## Language
- Notes can be in Japanese or English
- Be consistent within a single document
- Technical terms can remain in English
