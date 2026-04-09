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

Un **agent IA conversationnel** déployé sur **WhatsApp Business API**, orchestré par n8n, gère l'intégralité du parcours client depuis la première prise de contact.

### Conversation WhatsApp

L'agent répond instantanément aux demandes entrantes, pose les bonnes questions pour qualifier le besoin et guide le client étape par étape — exactement comme le ferait un conseiller humain, mais 24h/24.

![Conversation WhatsApp avec l'agent IA — qualification et collecte des informations](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_whatsapp.webp)

### Connexion Meta Business

L'agent est connecté à l'API officielle WhatsApp Business via Meta. Cette intégration garantit la fiabilité des envois, la conformité RGPD et la gestion des statuts de messages (livré, lu).

![Configuration de l'intégration Meta Business pour WhatsApp](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_meta.webp)

### Workflow d'orchestration

Toute la logique métier est orchestrée via n8n : récupération des disponibilités, calcul du devis, génération du PDF et envoi des confirmations. Chaque étape est traçable et modifiable sans toucher au code.

![Workflow n8n — orchestration complète du parcours client](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_worfklow.webp)

### Prise de rendez-vous

L'agent consulte les disponibilités en temps réel dans Google Calendar, propose des créneaux au client et confirme la réservation directement dans la conversation. Un rappel est automatiquement envoyé 24h avant l'intervention.

![Synchronisation des créneaux disponibles dans Google Calendar](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_calendar.webp)

### Génération du devis PDF

Une fois les informations collectées, un devis personnalisé est généré en quelques secondes et envoyé directement dans la conversation WhatsApp — sans aucune intervention humaine.

![Devis PDF généré et envoyé automatiquement dans WhatsApp](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_devis.webp)

### Confirmation par email

En parallèle du message WhatsApp, le client reçoit un email récapitulatif avec le devis en pièce jointe, les détails du rendez-vous et les informations de contact.

![Email de confirmation envoyé automatiquement au client](/images/projets/agent-ia-whatsapp-booker-et-generateur-de-devis_mail.webp)

## Stack technique

- **WhatsApp Business API** (Meta)
- **Claude 3.5 Sonnet** pour la compréhension et la génération de réponses
- **n8n** pour l'orchestration des workflows
- **Google Calendar API** pour la gestion des disponibilités
- **Pennylane API** pour la génération des devis

## Impact

Le taux de conversion des demandes en réservations confirmées a augmenté de 28%, principalement grâce à la rapidité de réponse et à la disponibilité 24/7.
