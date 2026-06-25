# Portfolio Feno Andriamorasata

Portfolio professionnel développé avec Next.js 14, TypeScript et Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/FenoAndria/FenoAndria.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/FenoAndria/FenoAndria.github.io/actions/workflows/deploy.yml)

## 🚀 Technologies utilisées

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/)
- **Styles**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Icônes**: [Boxicons](https://boxicons.com/)
- **Validation**: [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **Déploiement**: GitHub Pages via GitHub Actions

## 📁 Structure du projet

```
FenoAndria.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de déploiement automatique
├── public/
│   ├── images/                 # Images du portfolio
│   └── CV - Fenomanjato.pdf    # CV téléchargeable
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   └── globals.css         # Styles globaux
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx      # Navigation latérale
│   │   ├── sections/
│   │   │   ├── About.tsx       # Section À propos
│   │   │   ├── Experience.tsx  # Expériences professionnelles
│   │   │   ├── Education.tsx   # Formations
│   │   │   ├── Skills.tsx      # Compétences techniques
│   │   │   ├── Projects.tsx    # Projets réalisés
│   │   │   └── Contact.tsx     # Formulaire de contact
│   │   └── ui/
│   │       └── Preloader.tsx   # Animation de chargement
│   ├── data/                   # Données structurées
│   │   ├── profile.ts          # Informations personnelles
│   │   ├── experiences.ts      # Expériences professionnelles
│   │   ├── education.ts        # Formations académiques
│   │   ├── skills.ts           # Compétences techniques
│   │   ├── projects.ts         # Projets réalisés
│   │   └── navigation.ts       # Éléments de navigation
│   └── types/
│       └── index.ts            # Types TypeScript
├── next.config.js              # Configuration Next.js
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── package.json                # Dépendances du projet
```

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ et npm 9+

### Installation

```bash
# Cloner le repository
git clone https://github.com/FenoAndria/FenoAndria.github.io.git
cd FenoAndria.github.io

# Installer les dépendances
npm install
```

### Développement local

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Créer le build optimisé
npm run build

# Tester le build localement
npm start
```

## 📝 Modification du contenu

### Informations personnelles

Éditez `src/data/profile.ts` :

```typescript
export const profileData: Profile = {
  name: "Votre Nom",
  title: "Votre Titre",
  email: "votre@email.com",
  // ...
};
```

### Ajouter une expérience

Éditez `src/data/experiences.ts` :

```typescript
export const experiencesData: Experience[] = [
  {
    id: "nouvelle-experience",
    title: "Titre du poste",
    period: "2024 - Aujourd'hui",
    company: "Nom de l'entreprise",
    description: ["Description..."],
    technologies: ["Tech1", "Tech2"],
    order: 1, // Plus petit = plus récent
  },
  // ...
];
```

### Ajouter une compétence

Éditez `src/data/skills.ts` :

```typescript
export const skillsData: Skill[] = [
  {
    id: "nouvelle-competence",
    name: "Nom de la compétence",
    category: "languages", // ou 'frameworks' ou 'tools'
    level: 4, // 1 à 5 étoiles
    icon: "/images/stack/logo.png",
    order: 1,
  },
  // ...
];
```

### Ajouter un projet

1. Ajoutez l'image dans `public/images/projects/`
2. Éditez `src/data/projects.ts` :

```typescript
export const projectsData: Project[] = [
  {
    id: "nouveau-projet",
    title: "Titre du projet",
    description: "Description...",
    image: "/images/projects/mon-projet.jpg",
    imageAlt: "Description de l'image",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    featured: true,
    order: 1,
  },
  // ...
];
```

## 🚀 Déploiement

Le déploiement est automatique via GitHub Actions :

1. Poussez vos modifications sur la branche `main`
2. GitHub Actions build et déploie automatiquement
3. Le site est disponible sur `https://fenoandria.github.io`

### Configuration GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Source : **GitHub Actions**
3. Le workflow `deploy.yml` gère le reste

## 🎨 Personnalisation du design

### Couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Couleur principale
    // ...
  },
}
```

### Animations

Les animations sont gérées par AOS. Ajustez dans `src/app/page.tsx` :

```typescript
AOS.init({
  duration: 800, // Durée des animations
  easing: "ease-in-out",
  once: true, // Animation une seule fois
});
```

## 📊 SEO et métadonnées

Éditez `src/app/layout.tsx` pour modifier :

- Titre de la page
- Description
- Mots-clés
- Open Graph (réseaux sociaux)
- Twitter Card

## 🐛 Débogage

### Erreurs de build

```bash
# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Vérifier les erreurs ESLint
npm run lint
```

### Problèmes d'images

- Vérifiez que les chemins commencent par `/`
- Les images doivent être dans `public/`
- Utilisez le composant `next/image` pour l'optimisation

## 📄 Licence

MIT © Feno Andriamorasata

## 👤 Contact

- **Email**: feno.andriamorasata@gmail.com
- **GitHub**: [@FenoAndria](https://github.com/FenoAndria)
- **LinkedIn**: [Fenomanjato Andriamorasata](https://linkedin.com/in/fenomanjato-andriamorasata-29963125b)

---

Développé avec ❤️ par Feno Andriamorasata
