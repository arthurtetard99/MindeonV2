import { config, collection, fields } from '@keystatic/core';

// En local : storage.kind = 'local'  → édition directe des fichiers
// En production (Vercel) : storage.kind = 'github' → édition via GitHub API
// Passer KEYSTATIC_STORAGE_KIND=github dans les env vars Vercel pour activer le mode CMS hébergé.

const isGitHub = process.env.KEYSTATIC_STORAGE_KIND === 'github';

export default config({
  storage: isGitHub
    ? {
        kind: 'github',
        repo: {
          owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER ?? 'mindeon',
          name: process.env.KEYSTATIC_GITHUB_REPO_NAME ?? 'mindeon-site',
        },
      }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Mindeon CMS' },
  },

  collections: {
    // ─── Articles de blog ────────────────────────────────────────────────
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Titre' },
        }),
        description: fields.text({
          label: 'Description (SEO)',
          description: 'Résumé affiché dans Google et les prévisualisations. 150-160 caractères idéalement.',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Date de publication',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Auteur',
          defaultValue: 'Mindeon.ai',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            description: 'Ex : IA, n8n, Automatisation, Comparatif',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.markdownEditor({
          label: 'Contenu de l\'article',
          components: {},
        }),
      },
    }),

    // ─── Projets / Cas clients ───────────────────────────────────────────
    projets: collection({
      label: 'Projets',
      slugField: 'title',
      path: 'src/content/projets/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Titre du projet' },
        }),
        description: fields.text({
          label: 'Description (SEO)',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Date de livraison',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        client: fields.text({
          label: 'Nom du client',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Technologies utilisées',
            description: 'Ex : Voice Bot, n8n, Claude, VAPI',
            itemLabel: (props) => props.value,
          }
        ),
        featured: fields.checkbox({
          label: 'Mettre en avant sur la homepage',
          defaultValue: false,
        }),
        results: fields.array(
          fields.text({ label: 'Résultat' }),
          {
            label: 'Résultats clés',
            description: 'Les metrics concrètes obtenues pour ce client.',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.markdownEditor({
          label: 'Description détaillée du projet',
          components: {},
        }),
      },
    }),
  },
});
