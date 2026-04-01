---
title: "Agent IA complet de qualification et de génération de devis PDF"
description: "Pipeline end-to-end de qualification des prospects et de génération automatique de devis PDF : du premier contact à l'envoi du devis signable en ligne, sans aucune intervention humaine."
date: 2024-07-20
client: "Société de maintenance industrielle"
tags: ["IA", "Devis PDF", "Qualification", "Pipeline B2B"]
featured: false
results:
  - "-98% délai de création (2h → 5 min)"
  - "+18% taux d'acceptation des devis"
  - "3 commerciaux libérés pour prospecter"
---

## Contexte

Cette société de maintenance industrielle recevait des demandes de devis complexes nécessitant des calculs techniques (surfaces, fréquences d'intervention, coûts matériaux). Chaque devis prenait en moyenne 45 minutes à préparer.

## Architecture de la solution

### Étape 1 : Capture et qualification

Un formulaire intelligent collecte les informations clés. Un agent IA (Claude) analyse la demande, pose des questions de clarification si nécessaire et classe le prospect (chaud/tiède/froid).

### Étape 2 : Calcul du devis

n8n récupère les grilles tarifaires depuis Airtable, applique les règles de calcul (remises volume, majorations urgence, taxes) et structure les données du devis.

### Étape 3 : Génération PDF

Un template HTML/CSS dynamique génère un devis PDF professionnel personnalisé avec :
- Coordonnées client et agence
- Descriptif détaillé des prestations
- Tableau de prix détaillé
- Conditions générales
- QR code pour signature électronique (Yousign)

### Étape 4 : Envoi et suivi

Le devis est envoyé par email avec lien de signature. Un workflow de relance automatique est déclenché si le devis n'est pas ouvert sous 48h, puis si non signé sous 5 jours.

## Résultats

47 devis traités dans le premier mois d'utilisation. Temps moyen de traitement : **4 minutes 30 secondes**.
