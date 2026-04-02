# CLAUDE.md — Mindeon.ai

Référence complète du projet. Lis ce fichier en début de session.

---

## Stack technique

| Élément | Valeur |
|---|---|
| Framework | Astro 5, `output: 'static'` |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Adapter | `@astrojs/cloudflare` (désactivé en dev, actif en prod) |
| CMS | Keystatic (`@keystatic/astro`) |
| Déploiement | Cloudflare Pages |
| Polices | Plus Jakarta Sans (Google Fonts, preload) |
| Icônes | SVG inline Lucide — aucune icon font |
| Images | `<Image />` from `astro:assets`, format WebP, quality 80 (95 pour photos équipe) |
| Analytics | Umami (à intégrer — slot prêt dans BaseLayout) |

---

## Structure des fichiers

```
src/
├── assets/images/          ← images optimisées par Astro (WebP au build)
│   ├── logo.png
│   ├── equipe/             ← arthur.jpeg, cambyse.png, david.jpg
│   └── tools/              ← logos outils (vapi, n8n, retell, notion, drive…)
├── components/
│   ├── layout/
│   │   ├── Navbar.astro    ← logo via <Image />, liens nav, hamburger mobile
│   │   └── Footer.astro
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── LogoBanner.astro     ← marquee infini, import.meta.glob tools
│   │   ├── Solutions.astro      ← 6 cards bg-slate-50, stagger-60
│   │   ├── Testimonials.astro   ← 3 premiers avis, bg-[#f0f4ff]
│   │   ├── FeaturedProject.astro
│   │   ├── Methodology.astro    ← 4 étapes, stagger-100
│   │   ├── SocialProof.astro
│   │   └── CTASection.astro
│   ├── ui/
│   │   ├── TestimonialCard.astro
│   │   ├── Illustration.astro
│   │   ├── SectionHeading.astro
│   │   ├── Badge.astro
│   │   └── Button.astro
│   └── seo/
│       └── SEOHead.astro        ← meta, OG, JSON-LD, canonical
├── content/
│   ├── config.ts                ← schémas Zod (projets + articles)
│   ├── projets/*.md             ← 8 projets
│   └── articles/*.md            ← 8 articles
├── data/
│   ├── team.json                ← David, Cambyse, Arthur
│   ├── tools.json               ← 16 outils avec logo path
│   ├── solutions.json
│   └── testimonials.json
├── layouts/
│   ├── BaseLayout.astro         ← <html>, SEOHead, slot "head", scroll reveal
│   ├── ArticleLayout.astro      ← hero 2-col, breadcrumb, articles similaires, CTA, share
│   └── ProjectLayout.astro      ← hero 2-col, KPI strip, arch diagram, projets similaires, CTA
├── pages/
│   ├── index.astro
│   ├── nos-projets.astro
│   ├── articles.astro
│   ├── equipe.astro
│   ├── tarifs.astro             ← 3 packs pricing + FAQ + CTA
│   ├── contact.astro            ← Calendly embed
│   ├── ressources.astro
│   ├── [mentions-legales|cgv|cgu|politique-de-confidentialite].astro
│   └── [...slug].astro          ← route dynamique projets + articles
└── styles/
    └── global.css               ← Tailwind + animations + classes custom
```

---

## URLs du site (toutes doivent retourner 200)

```
/                     Homepage
/nos-projets/         Liste projets
/articles/            Liste articles
/equipe/              Équipe
/tarifs/              Pricing (3 packs)
/contact/             Contact + Calendly
/ressources/          Hub ressources

# Projets
/voicebot-retell-ai-multi-workflow-pour-parcours-client-creation-de-devis/
/voice-bot-ia-de-qualification-de-leads-pour-agence-immobiliere/
/agent-ia-whatsapp-booker-et-generateur-de-devis/
/automatisation-process-donnees-dune-agence-de-voyage/
/agent-ia-complet-de-qualification-et-de-generation-de-devis-pdf/
/magnolia-implementation-dun-agent-conversationnel-oriente-sales-pour-creation-de-devis/
/webapp-ia-gestion-complete-des-commandes/
/projet-pour-atmosphere-automatisation-des-flux-de-devis-et-de-fabrication-vers-un-crmaxonaut-trello/

# Articles
/5-automatisations-n8n-indispensables-pme-2025/
/calculer-roi-automatisation-ia-methode-pratique/
/make-zapier-n8n-qui-est-le-meilleur/
/mcp-comment-lia-passe-de-assistant-qui-parle-a-collaborateur-qui-agit/
/gemini-3-quand-google-decide-enfin-de-jouer-les-gros-bras/
/rag-donner-base-connaissances-metier-a-votre-chatbot/
/comment-construire-un-agent-ia-qualification-leads/
/vapi-vs-retell-vs-elevenlabs-comparatif-voice-bots-2025/

# Légales
/mentions-legales/ /politique-de-confidentialite/ /cgv/ /cgu/
```

---

## Design system

### Couleurs Tailwind
```
primary        → #2563EB
primary-dark   → #1D4ED8
primary-light  → #EFF6FF
```

### Règles de design
- Cards : `bg-white rounded-3xl shadow-sm border border-slate-100`
- Sections alternées : `bg-white` / `bg-slate-50` / `bg-[#f0f4ff]`
- Pas d'`<img>` en dehors de SVG inline — toujours `<Image />` d'astro:assets
- Zéro `style=` inline — tout dans Tailwind ou `global.css`
- Icônes décoratives : `aria-hidden="true"` systématique

### Classes custom dans `global.css`
```css
.reveal              /* scroll reveal — opacity 0 → 1 + translateY */
.reveal.visible      /* état visible déclenché par IntersectionObserver */
.stagger-60          /* transition-delay auto sur enfants .reveal (60ms × nth-child) */
.stagger-100         /* idem, 100ms */
.dot-pattern-sm      /* radial-gradient dots 24px */
.dot-pattern-lg      /* radial-gradient dots 28px */
.article-banner-blue / -violet / -slate  /* banners articles */
.arch-container      /* dark bg #0d1c2f pour SVG architecture */
.arch-blob           /* blur blob bleu dans arch-container */
.animate-marquee     /* LogoBanner infinite scroll */
```

---

## SEO

### SEOHead.astro — ce qui est généré
- `<title>`, `<meta description>`, canonical, robots
- OG : type, title, description, image (+width/height/alt), url, locale, site_name
- Twitter card : summary_large_image
- JSON-LD : Organization+WebSite (pages standard) ou BlogPosting/Article (contenus)
- Fallback OG image : `/images/logo.png` (remplacer par `/images/og/default.jpg` 1200×630 à créer)

### BreadcrumbList
- Articles : injecté dans `ArticleLayout.astro` via `slot="head"` → `Accueil > Articles > {titre}`
- Projets : injecté dans `ProjectLayout.astro` via `slot="head"` → `Accueil > Nos projets > {titre}`

### Sitemap
Auto-généré par `@astrojs/sitemap` au build. Accessible à `/sitemap-index.xml`.

### À faire
- Créer `/public/images/og/default.jpg` en 1200×630px (logo + branding Mindeon)

---

## Images

### Optimisation
Toutes les images dans `src/assets/` sont converties en WebP au build par `<Image />`.
- `quality: 80` par défaut (défini dans `astro.config.mjs`)
- Photos équipe : `width={256} height={320} quality={95}` (2× Retina)
- Logos tools : `height={64} format="webp"`
- Logo navbar : `format="webp"`, hauteur CSS `h-40`

### Ajout d'un nouveau logo outil
1. Copier l'image dans `public/images/tools/nom.png` ET `src/assets/images/tools/nom.png`
2. Ajouter une entrée dans `src/data/tools.json` : `{ "name": "Nom", "logo": "/images/tools/nom.png" }`
→ La WebP est générée automatiquement au build

### Ajout d'une photo équipe
1. Copier dans `src/assets/images/equipe/prenom.ext`
2. Mettre à jour `src/data/team.json`

---

## Contenus

### Frontmatter projet (src/content/projets/*.md)
```yaml
title: string
description: string
date: YYYY-MM-DD
client: string
tags: [string]
featured: boolean
architectureType: string  # optionnel — "voicebot-retell" déclenche le SVG dans ProjectLayout
results:
  - "+X% ..."   # DOIT commencer par un stat parseable (+/-/chiffre)
```

### Frontmatter article (src/content/articles/*.md)
```yaml
title: string
description: string
date: YYYY-MM-DD
author: string
tags: [string]
```

### Cross-linking automatique
Dans `[...slug].astro`, `getSimilar()` calcule un score par tags communs et passe les 3 plus proches à chaque layout en props plain JSON (slug, title, description, tags). Pas d'objets Astro collection complets.

### Architecture technique SVG
Définie dans `ProjectLayout.astro`, conditionnée par `architectureType === 'voicebot-retell'`. Pour ajouter un nouveau type : ajouter un bloc `{architectureType === 'xxx' && (...)}` dans le layout.

---

## Commandes utiles

```bash
npm run dev      # Dev server (adapter Cloudflare désactivé)
npm run build    # Build statique dans dist/
npm run preview  # Preview du build
```

### Vérifications post-modif
```bash
npm run build    # Doit terminer avec [build] Complete! sans erreur
```

---

## Points d'attention

- **Adapter Cloudflare** désactivé en dev (`NODE_ENV !== 'production'`), actif au build → comportement légèrement différent en dev pour les routes dynamiques
- **`trailingSlash: 'always'`** dans astro.config.mjs — tous les liens internes doivent finir par `/`
- **Pas de `style=` inline** — règle stricte, tout doit être dans Tailwind ou global.css
- **Keystatic** expose `/keystatic/` et `/api/keystatic/` — bloqué dans robots.txt via `Disallow: /api/`
- **OG image** fallback sur logo.png (pas idéal) — créer `public/images/og/default.jpg` 1200×630

---

## Équipe

| Personne | Rôle | LinkedIn |
|---|---|---|
| David Manscour | Co-fondateur & Lead IA | linkedin.com/in/david-manscour |
| Cambyse Daghigh | Co-fondateur & Dev Full-Stack | linkedin.com/in/cambyse-daghigh-6a33b4163 |
| Arthur Tetard | Co-fondateur & Product Manager | linkedin.com/in/arthurtetard |

Contact : contact@mindeon.ai · +33 6 67 69 94 90
Site : https://mindeon.ai
