---
title: "Voicebot Retell AI multi-workflow pour parcours client & création de devis"
description: "Déploiement d'un agent vocal multi-workflow capable de qualifier les prospects, collecter les informations nécessaires et générer automatiquement un devis PDF — le tout en moins de 5 minutes d'appel."
date: 2024-11-15
client: "Agence commerciale B2B"
tags: ["Voice Bot", "Retell AI", "n8n", "Devis automatisé"]
featured: true
architectureType: "voicebot-retell"
results:
  - "Temps de création d'un devis réduit de 2h à 4 minutes"
  - "Taux de qualification des leads amélioré de 35%"
  - "Disponibilité 24/7 sans ressource humaine supplémentaire"
---

## Contexte

Notre client, une agence commerciale B2B, traitait des dizaines d'appels entrants par jour pour qualifier les prospects et créer des devis. Ce processus chronophage mobilisait 2 commerciaux à plein temps sur des tâches répétitives.

## Solution déployée

Nous avons conçu un agent vocal basé sur **Retell AI** avec une architecture multi-workflow orchestrée via **n8n** :

1. **Qualification vocale** — L'agent engage la conversation, collecte les besoins du prospect (volume, budget, délai) et évalue sa maturité d'achat.

2. **Enrichissement de données** — Les informations collectées sont envoyées via webhook à n8n, qui enrichit le profil dans le CRM (HubSpot).

3. **Génération de devis** — n8n déclenche automatiquement la création d'un devis PDF personnalisé avec les tarifs appropriés, envoyé par email au prospect.

4. **Notification commerciale** — L'équipe commerciale reçoit une alerte avec le résumé de l'appel et le devis généré.

## Résultats après 30 jours

Le système a traité **847 appels entrants** en 30 jours, avec un taux de succès de 91%. Les commerciaux ont pu se concentrer exclusivement sur les clients chauds, augmentant leur taux de closing de 20%.
