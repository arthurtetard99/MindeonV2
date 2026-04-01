---
title: "Agent IA WhatsApp booker et générateur de devis"
description: "Agent conversationnel sur WhatsApp Business qui prend les rendez-vous, collecte les informations client et génère des devis personnalisés — directement dans la messagerie préférée des clients."
date: 2024-09-10
client: "Prestataire de services à domicile"
tags: ["WhatsApp", "Agent conversationnel", "Devis", "Booking"]
featured: false
results:
  - "80% des réservations traitées seul"
  - "-93% temps de devis (30 min → 2 min)"
  - "24/7 sur le canal WhatsApp préféré"
---

## Contexte

Notre client, un prestataire de services à domicile, recevait la majorité de ses demandes via WhatsApp. L'équipe passait des heures à répondre aux mêmes questions et à créer des devis manuellement.

## Solution

Un **agent IA conversationnel** déployé sur **WhatsApp Business API** via Twilio, orchestré par n8n :

- Répond instantanément aux demandes entrantes
- Collecte les informations (type de service, surface, localisation, créneau)
- Génère un devis PDF personnalisé et l'envoie directement dans la conversation
- Propose des créneaux disponibles basés sur l'agenda Google Calendar
- Confirme la réservation et envoie un rappel 24h avant

## Stack technique

- **WhatsApp Business API** (Twilio)
- **Claude 3.5 Sonnet** pour la compréhension et la génération de réponses
- **n8n** pour l'orchestration des workflows
- **Google Calendar API** pour la gestion des disponibilités
- **Pennylane API** pour la génération des devis

## Impact

Le taux de conversion des demandes en réservations confirmées a augmenté de 28%, principalement grâce à la rapidité de réponse et à la disponibilité 24/7.
