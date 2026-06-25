# Guide de Maintenance du Portfolio

Ce guide vous aidera à maintenir et faire évoluer votre portfolio Next.js facilement.

## 📋 Table des matières

1. [Mise à jour des données](#mise-à-jour-des-données)
2. [Ajout de nouvelles sections](#ajout-de-nouvelles-sections)
3. [Modification du design](#modification-du-design)
4. [Gestion des images](#gestion-des-images)
5. [Mise à jour des dépendances](#mise-à-jour-des-dépendances)
6. [Résolution des problèmes courants](#résolution-des-problèmes-courants)

---

## 📝 Mise à jour des données

### Modifier vos informations personnelles

**Fichier**: `src/data/profile.ts`

```typescript
export const profileData: Profile = {
  name: 'Votre Nom',              // Votre nom complet
  title: 'Votre Titre',           // Votre titre professionnel
  description: '...',             // Votre description
  age: 26,                        // Votre âge
  phone: '+261 34 43 458 15',     // Votre téléphone
  email: 'votre@email.com',       // Votre email
  location: 'Votre Ville',        // Votre localisation
  image: '/images/profile/...',   // Chemin vers votre photo
  cvUrl: '/CV.pdf',               // Chemin vers votre CV
  social: [...]                   // Vos réseaux sociaux
};
```

### Ajouter une nouvelle expérience

**Fichier**: `src/data/experiences.ts`

1. Copiez un objet existant
2. Modifiez les informations
3. Ajustez l'`order` (plus petit = plus récent)

```typescript
{
  id: 'identifiant-unique',           // ID unique (kebab-case)
  title: 'Titre du poste',            // Votre titre
  period: '2024 - Aujourd\'hui',      // Période
  company: 'Nom de l\'entreprise',    // Entreprise (optionnel)
  description: [                      // Liste des tâches/réalisations
    'Tâche 1',
    'Tâche 2',
  ],
  technologies: ['Tech1', 'Tech2'],   // Technologies utilisées
  order: 1,                           // Ordre d'affichage
}
```

### Ajouter une formation

**Fichier**: `src/data/education.ts`

```typescript
{
  id: 'identifiant-unique',
  degree: 'Nom du diplôme',
  period: '2024',
  institution: 'Nom de l\'établissement',
  location: 'Ville - Pays',
  specialization: 'Spécialisation',   // Optionnel
  order: 1,
}
```

### Ajouter une compétence

**Fichier**: `src/data/skills.ts`

1. Ajoutez le logo dans `public/images/stack/`
2. Ajoutez la compétence :

```typescript
{
  id: 'identifiant-unique',
  name: 'Nom de la compétence',
  category: 'languages',              // 'languages', 'frameworks' ou 'tools'
  level: 4,                           // 1 à 5 étoiles
  icon: '/images/stack/logo.png',     // Chemin vers le logo
  order: 1,
}
```

### Ajouter un projet

**Fichier**: `src/data/projects.ts`

1. Ajoutez l'image du projet dans `public/images/projects/`
2. Ajoutez le projet :

```typescript
{
  id: 'identifiant-unique',
  title: 'Titre du projet',
  description: 'Description du projet',
  image: '/images/projects/mon-projet.jpg',
  imageAlt: 'Description de l\'image',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',   // Optionnel
  link: 'https://...',                // Optionnel
  featured: true,                     // Projet mis en avant
  order: 1,
}
```

---

## 🎨 Modification du design

### Changer les couleurs

**Fichier**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... jusqu'à
    950: '#082f49',
  },
}
```

Ou dans `src/app/globals.css` :

```css
:root {
  --primary-color: #0ea5e9;
  --dark-bg: #1a1a1a;
}
```

### Modifier les animations

**Fichier**: `src/app/page.tsx`

```typescript
AOS.init({
  duration: 800, // Durée en ms
  easing: "ease-in-out", // Type d'animation
  once: true, // Une seule fois ou répéter
  mirror: false, // Animation au scroll inverse
});
```

### Ajouter une nouvelle animation

**Fichier**: `tailwind.config.ts`

```typescript
animation: {
  'mon-animation': 'monAnimation 1s ease-in-out',
},
keyframes: {
  monAnimation: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

---

## 🖼️ Gestion des images

### Ajouter une nouvelle image

1. Placez l'image dans `public/images/`
2. Utilisez le composant Next.js Image :

```tsx
import Image from "next/image";

<Image
  src="/images/mon-image.jpg"
  alt="Description"
  width={500}
  height={300}
  // ou fill pour remplir le conteneur
/>;
```

### Optimiser les images

- Utilisez des formats modernes (WebP, AVIF)
- Compressez les images avant de les ajouter
- Outils recommandés : [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

---

## 🔄 Mise à jour des dépendances

### Vérifier les mises à jour disponibles

```bash
npm outdated
```

### Mettre à jour toutes les dépendances

```bash
npm update
```

### Mettre à jour une dépendance spécifique

```bash
npm install package-name@latest
```

### Mettre à jour Next.js

```bash
npm install next@latest react@latest react-dom@latest
```

---

## 🐛 Résolution des problèmes courants

### Erreur : "Module not found"

**Solution** : Vérifiez les imports et les chemins

```typescript
// Utilisez les alias définis dans tsconfig.json
import { profileData } from "@/data/profile";
```

### Erreur de build TypeScript

**Solution** : Vérifiez les types

```bash
# Vérifier les erreurs sans build
npx tsc --noEmit
```

### Images qui ne s'affichent pas

**Vérifications** :

1. Le chemin commence par `/` (ex: `/images/...`)
2. L'image est dans le dossier `public/`
3. Le nom du fichier est correct (sensible à la casse)

### Le site ne se déploie pas

**Vérifications** :

1. Vérifiez les logs dans GitHub Actions
2. Assurez-vous que le build local fonctionne : `npm run build`
3. Vérifiez que GitHub Pages est activé dans les settings

### Problème de performance

**Solutions** :

1. Optimisez les images
2. Utilisez le lazy loading
3. Vérifiez avec Lighthouse :

```bash
npm run build
npm start
# Ouvrez DevTools > Lighthouse
```

---

## 📦 Ajout de nouvelles fonctionnalités

### Ajouter une nouvelle section

1. Créez le composant dans `src/components/sections/`
2. Ajoutez les données dans `src/data/`
3. Importez et utilisez dans `src/app/page.tsx`
4. Ajoutez l'élément de navigation dans `src/data/navigation.ts`

### Ajouter un blog

1. Installez MDX :

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

2. Créez `src/app/blog/` avec vos articles
3. Configurez `next.config.js` pour MDX

### Ajouter un mode sombre

1. Installez next-themes :

```bash
npm install next-themes
```

2. Configurez dans `src/app/layout.tsx`
3. Ajoutez un bouton de toggle

---

## 🔒 Sécurité

### Variables d'environnement

Pour les données sensibles (clés API, etc.) :

1. Créez `.env.local` (déjà dans .gitignore)
2. Ajoutez vos variables :

```env
NEXT_PUBLIC_API_KEY=votre_clé
```

3. Utilisez dans le code :

```typescript
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

---

## 📞 Support

Si vous rencontrez un problème :

1. Consultez la [documentation Next.js](https://nextjs.org/docs)
2. Vérifiez les [issues GitHub](https://github.com/vercel/next.js/issues)
3. Contactez-moi : feno.andriamorasata@gmail.com

---

**Dernière mise à jour** : Février 2026
