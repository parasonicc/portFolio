# Paras Yadav — Analytics Portfolio (React)

A production-ready portfolio website built with React and CSS Modules.  
Dark editorial aesthetic with amber/gold accents, Playfair Display serif typography, and smooth scroll animations.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

---

## 🌐 Deploy to GitHub Pages (free hosting)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
# Also add: "homepage": "https://parasyadav28.github.io"

npm run deploy
```

Your portfolio will be live at `https://parasyadav28.github.io`

---

## 📁 Project Structure

```
paras-portfolio/
├── public/
│   └── index.html              # HTML shell — Google Fonts loaded here
│
├── src/
│   ├── index.js                # React entry point
│   ├── App.js                  # Root component — assembles all sections
│   │
│   ├── data/
│   │   └── projects.js         # ⭐ ALL your content lives here
│   │                           #    Edit this file to update projects,
│   │                           #    stats, skills, and personal info
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js   # IntersectionObserver for fade-in
│   │                               # useActiveSection for nav highlighting
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mobile hamburger menu
│   │   ├── Navbar.module.css
│   │   │
│   │   ├── Hero.jsx            # Full-height intro — name, bio, stats bar
│   │   ├── Hero.module.css
│   │   │
│   │   ├── Projects.jsx        # Filterable project grid
│   │   ├── Projects.module.css
│   │   │
│   │   ├── ProjectCard.jsx     # Individual project card (expandable)
│   │   ├── ProjectCard.module.css
│   │   │
│   │   ├── CategoryBadge.jsx   # Colour-coded category pill (ML / NLP etc.)
│   │   ├── CategoryBadge.module.css
│   │   │
│   │   ├── Research.jsx        # Publication / conference paper section
│   │   ├── Research.module.css
│   │   │
│   │   ├── Skills.jsx          # Skills grid + education timeline + certs
│   │   ├── Skills.module.css
│   │   │
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   │
│   └── styles/
│       └── globals.css         # Design tokens (CSS variables), resets,
│                               # keyframe animations, scrollbar styling
│
└── package.json
```

---

## ✏️ How to Update Content

All content is centralised in **`src/data/projects.js`**.  
You never need to touch the component files to update your information.

### Update personal info
```js
export const personalInfo = {
  name: 'Paras Yadav',
  email: 'yadavparas.28py@gmail.com',
  linkedin: 'https://www.linkedin.com/in/parasyadav28/',
  github: 'https://github.com/parasyadav28',
  // ...
};
```

### Add a new project
```js
export const projects = [
  {
    id: 'my-new-project',          // unique slug
    title: 'Project Title',
    category: 'ml',                // ml | nlp | seg | viz | big
    categoryLabel: 'Machine Learning',
    module: 'Module name · Course',
    date: 'Jun 2026',
    description: 'One-paragraph description.',
    highlights: [
      'First key finding or method',
      'Second achievement',
    ],
    metrics: [
      { value: '92%', label: 'Accuracy' },
    ],
    tags: ['Python', 'Random Forest'],
    featured: true,               // adds gold top-border accent
  },
  // ... existing projects
];
```

### Add a new skill
```js
export const skills = [
  { name: 'LangChain', icon: '🔗', category: 'library' },
  // ...
];
```

---

## 🎨 Design System

### Fonts (loaded via Google Fonts in public/index.html)
- **Display**: Playfair Display (serif) — headings, name, project titles
- **Body**: Syne (sans-serif) — body text, navigation, labels
- **Mono**: JetBrains Mono — tags, metadata, eyebrow labels, metrics

### Colour Palette (CSS variables in globals.css)
| Variable | Value | Usage |
|---|---|---|
| `--accent` | `#c9a84c` | Gold — active states, highlights, key values |
| `--bg-primary` | `#0d0d0d` | Page background |
| `--bg-card` | `#1a1a1a` | Card backgrounds |
| `--text-primary` | `#f0ece4` | Main text |
| `--text-secondary` | `#a09a8e` | Descriptions, body |
| `--text-muted` | `#5a5550` | Labels, meta, timestamps |

### Category colours
Each project category has its own colour ramp (defined in globals.css):
- `ml` → Blue (`#93c5fd`)
- `nlp` → Green (`#6ee7b7`)
- `seg` → Rose (`#fda4af`)
- `viz` → Amber (`#fcd34d`)
- `big` → Purple (`#c4b5fd`)

To add a new category, add the CSS variables in `globals.css` and a rule in `CategoryBadge.module.css`.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | 18.x | UI framework |
| `react-dom` | 18.x | DOM rendering |
| `react-scripts` | 5.x | Build toolchain (CRA) |
| `lucide-react` | 0.383 | Icons (available if needed) |

No extra CSS frameworks, animation libraries, or UI kits — pure React + CSS Modules.

---

## 📬 Contact

**Paras Yadav**  
MSc Business Analytics · University of Nottingham  
[linkedin.com/in/parasyadav28](https://www.linkedin.com/in/parasyadav28/) · yadavparas.28py@gmail.com
