# 🚀 Guide de Démarrage Rapide

## Installation et premier lancement

### 1. Migrer les images (IMPORTANT - À faire en premier)

```bash
# Créer les dossiers
mkdir public\images\profile
mkdir public\images\stack
mkdir public\images\projects

# Déplacer les images de profil
move assets\img\PXL_20221127_121207383~2.jpg public\images\profile\
move assets\img\PXL_20221127_121352618~2.jpg public\images\profile\

# Déplacer le CV
move "CV - Fenomanjato.pdf" public\

# Déplacer les logos de stack (à faire manuellement ou avec xcopy)
xcopy assets\img\stack\*.* public\images\stack\ /E /I

# Déplacer les images de projets
xcopy projets\img\*.* public\images\projects\ /E /I
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer en mode développement

```bash
npm run dev
```

Ouvrez http://localhost:3000

### 4. Tester le build de production

```bash
npm run build
```

### 5. Déployer sur GitHub

```bash
git add .
git commit -m "Migration vers Next.js"
git push origin main
```

## Configuration GitHub Pages

1. Allez sur GitHub.com → Settings → Pages
2. Source : **GitHub Actions**
3. Le déploiement se fera automatiquement

## Vérifications après installation

- [ ] Le site s'affiche en local
- [ ] Toutes les images sont visibles
- [ ] Les animations fonctionnent
- [ ] Le menu de navigation fonctionne
- [ ] Le formulaire de contact s'affiche
- [ ] Le build de production réussit

## Commandes principales

```bash
npm run dev      # Développement
npm run build    # Build de production
npm run lint     # Vérifier le code
```

## Besoin d'aide ?

Consultez :

- [README.md](README.md) - Documentation complète
- [MAINTENANCE.md](MAINTENANCE.md) - Guide de maintenance
- [walkthrough.md](C:\Users\Fenomanjato.gemini\antigravity\brain\f59b92cf-b007-4578-b2f5-b7491cdb4d8c\walkthrough.md) - Détails de la migration
