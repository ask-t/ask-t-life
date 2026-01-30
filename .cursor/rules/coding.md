# Coding Standards

## TypeScript

### Type Annotations
```typescript
// Good
function fetchData(url: string): Promise<Data> { ... }
const items: Item[] = [];

// Avoid
function fetchData(url: any): any { ... }
```

### React Components
```typescript
// Functional component with proper types
interface Props {
  title: string;
  items: Item[];
  onSelect?: (item: Item) => void;
}

export default function MyComponent({ title, items, onSelect }: Props): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      {items.map((item) => (
        <div key={item.id} onClick={() => onSelect?.(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

## File Naming
- Components: PascalCase (`ProjectCard.tsx`)
- Pages: kebab-case or camelCase (`daily.tsx`, `index.tsx`)
- Utilities: camelCase (`fetchIssues.js`)
- Data: kebab-case (`daily-todos.json`)

## Import Order
1. React and external libraries
2. Docusaurus imports
3. Local components
4. Data and utilities
5. Styles

```typescript
import React, { useState } from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';

import ProjectCard from '@site/src/components/ui/ProjectCard';
import projectsData from '@site/src/data/projects.json';

import styles from './styles.module.css';
```

## Error Handling
```typescript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch data:', error);
  // Provide fallback or user feedback
}
```

## Comments
- Use English for code comments
- Document complex logic
- Add TODO comments for future improvements

```typescript
// Parse markdown checkboxes from issue body
// Format: - [ ] task or - [x] completed task
function parseCheckboxes(body: string): Task[] {
  // TODO: Add support for nested checkboxes
  ...
}
```
