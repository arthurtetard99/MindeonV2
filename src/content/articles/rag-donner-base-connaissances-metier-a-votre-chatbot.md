---
title: "RAG : comment donner à votre chatbot une vraie base de connaissances métier"
description: "Le RAG (Retrieval-Augmented Generation) permet à un LLM de répondre sur VOS documents. Guide pratique pour implémenter un chatbot qui connaît votre entreprise mieux que vos nouvelles recrues."
date: 2025-03-05
author: "David Manscour"
tags: ["RAG", "Chatbot", "IA", "Base de connaissances"]
---

## Le problème que le RAG résout

Claude et GPT-4 sont brillants — mais ils ne savent rien de votre catalogue produit, de vos procédures internes, de vos CGV ou de votre historique client. Un chatbot générique va halluciner ou répondre "je ne sais pas" sur 80% de vos questions métier.

Le **RAG (Retrieval-Augmented Generation)** change ça : avant de générer une réponse, le LLM consulte une base documentaire qui contient VOS données. Il répond sur votre réalité, pas sur ses données d'entraînement.

## Comment ça marche, concrètement

L'architecture se décompose en deux phases :

### Phase 1 : Indexation (faire "ingérer" vos documents)

```
Vos documents (PDF, Word, Notion, web)
    ↓
Découpage en chunks de 500-1000 tokens
    ↓
Transformation en embeddings (vecteurs numériques)
    ↓
Stockage dans une vector database (Supabase, Pinecone, Qdrant)
```

### Phase 2 : Requête (répondre à une question)

```
Question de l'utilisateur
    ↓
Transformation en embedding
    ↓
Recherche de similarité dans la vector DB
    ↓
Récupération des 3-5 chunks les plus pertinents
    ↓
Injection dans le prompt : "Réponds à cette question en te basant sur ces extraits : [chunks]"
    ↓
Réponse du LLM avec les sources citées
```

## Le stack que nous recommandons en 2025

Après avoir testé une dizaine de configurations, voici notre stack de référence :

| Composant | Notre choix | Pourquoi |
|---|---|---|
| LLM | Claude 3.5 Sonnet | Meilleur sur les documents longs et le français |
| Embeddings | text-embedding-3-small (OpenAI) | Excellent rapport qualité/coût |
| Vector DB | Supabase pgvector | Gratuit, simple, SQL natif |
| Orchestration | n8n | Pas de code, visual, maintenable |
| Interface | Widget JS custom | Intégration sans friction |

## La qualité du chunking : le facteur décisif

La plupart des RAG échouent non pas à cause du LLM, mais à cause du chunking. Quelques règles qui changent tout :

**Respectez les unités sémantiques.** Ne coupez pas une phrase ou un paragraphe en plein milieu. Un chunk = une idée complète.

**Ajoutez du contexte dans chaque chunk.** Ne stockez pas "Le délai de livraison est de 5 jours" tout seul. Ajoutez le contexte parent : "CGV — Livraison : Le délai de livraison standard est de 5 jours ouvrés."

**Overlapping.** Prévoyez 10-20% de chevauchement entre les chunks pour ne pas perdre de contexte aux jonctions.

## Exemple : chatbot support pour une doc technique

Voici un cas réel que nous avons déployé. Le client avait 800 pages de documentation technique. Résultat :

- **Avant** : 2 personnes support à plein temps, délai de réponse 4h
- **Après** : 78% des tickets résolus sans intervention humaine, réponse en 8 secondes

Le prompt système critique pour un chatbot support :

```
Tu es l'assistant technique de [Entreprise]. Tu as accès à notre documentation.

Règles :
1. Réponds uniquement sur la base des documents fournis
2. Si tu n'es pas certain, dis-le et propose d'escalader
3. Cite toujours la source (nom du document, section)
4. Ne promets jamais quelque chose qui n'est pas dans la doc

Documents disponibles :
{context}

Question : {question}
```

## Ce que le RAG ne résout pas

Le RAG n'est pas magique. Il ne fonctionne bien que si :

- Vos documents sont à jour et bien structurés
- Le découpage (chunking) est fait intelligemment
- Vos questions utilisateurs sont suffisamment précises

Pour les questions très larges ("explique-moi tout votre produit"), le RAG retourne trop de chunks et la réponse devient brouillonne. Dans ces cas, une FAQ structurée complète le RAG.

---

*Vous voulez déployer un chatbot RAG sur votre documentation ? On l'a fait pour des clients dans la fintech, l'industrie et les services. [Parlons-en](/contact/).*
