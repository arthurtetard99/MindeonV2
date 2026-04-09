---
title: "Atmosphere — Automatisation des flux de devis et de fabrication vers un CRM (Axonaut / Trello)"
description: "Pour Atmosphere, nous avons construit un pipeline d'automatisation complet reliant le processus de devis, la planification de fabrication et le suivi CRM dans Axonaut et Trello — éliminant toute double saisie."
date: 2024-04-08
client: "Atmosphere"
tags: ["Automatisation", "n8n", "Axonaut", "Trello", "CRM", "Fabrication"]
featured: false
results:
  - "100% de la double saisie éliminée"
  - "100% visibilité sur le planning de fabrication"
  - "-85% erreurs de production"
---

## Contexte

Atmosphere, spécialiste de la décoration événementielle sur mesure, jonglait entre plusieurs outils sans connexion : Axonaut (CRM/facturation), Trello (planning fabrication) et emails. Chaque devis validé devait être ressaisi manuellement dans Trello, source de nombreuses erreurs et oublis.

![Vue d'ensemble du système Axonaut et Trello avant automatisation](/images/projets/projet-pour-atmosphere-automatisation-des-flux-de-devis-et-de-fabrication-vers-un-crmaxonaut-trello_1.webp)

## Automatisation déployée avec n8n

### Flux devis → fabrication

Quand un devis est marqué "Accepté" dans Axonaut :
1. n8n crée automatiquement une carte Trello dans la liste "À planifier"
2. Les éléments à fabriquer sont extraits du devis et structurés en checklist
3. La date de livraison est ajoutée comme deadline
4. Le responsable de production est notifié par email et Slack

### Suivi bidirectionnel

Quand une carte Trello est déplacée (Ex: "En cours" → "Livré") :
1. Axonaut est mis à jour automatiquement avec le statut de la commande
2. Le commercial reçoit une notification pour déclencher la facturation
3. Une facture est générée automatiquement dans Axonaut

![Synchronisation bidirectionnelle entre Axonaut et Trello via n8n](/images/projets/projet-pour-atmosphere-automatisation-des-flux-de-devis-et-de-fabrication-vers-un-crmaxonaut-trello_2.webp)

### Workflow Make

L'ensemble des automatisations est orchestré dans Make. Le workflow gère les déclencheurs (webhooks Axonaut et Trello), les transformations de données et les actions dans chaque outil — le tout sans ligne de code côté client.

![Workflow n8n — automatisation des flux entre Axonaut, Trello et les notifications](/images/projets/projet-pour-atmosphere-automatisation-des-flux-de-devis-et-de-fabrication-vers-un-crmaxonaut-trello_3-workflow.webp)

### Alertes intelligentes

Un workflow de monitoring vérifie quotidiennement :
- Les commandes en retard sur le planning
- Les devis en attente de validation depuis plus de 5 jours
- Les factures non payées à 30 jours

Pour faciliter la prise en main, nous avons également livré une documentation interactive permettant à l'équipe de comprendre et modifier les règles métier sans intervention technique.

![Documentation et guide de prise en main des automatisations](/images/projets/projet-pour-atmosphere-automatisation-des-flux-de-devis-et-de-fabrication-vers-un-crmaxonaut-trello_4-TUTO.webp)

## Impact mesurable

Lors du premier mois post-déploiement, l'équipe a économisé **8 heures par semaine** en saisies manuelles et n'a enregistré aucun oubli de fabrication (vs 2-3 par mois en moyenne auparavant).
