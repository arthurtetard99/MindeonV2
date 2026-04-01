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

### Alertes intelligentes

Un workflow de monitoring vérifie quotidiennement :
- Les commandes en retard sur le planning
- Les devis en attente de validation depuis plus de 5 jours
- Les factures non payées à 30 jours

## Impact mesurable

Lors du premier mois post-déploiement, l'équipe a économisé **8 heures par semaine** en saisies manuelles et n'a enregistré aucun oubli de fabrication (vs 2-3 par mois en moyenne auparavant).
