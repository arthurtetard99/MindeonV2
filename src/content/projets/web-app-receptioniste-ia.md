---
title: "Réceptionniste IA — Automatisation des prises de rendez-vous."
description: "Développement d'un standard téléphonique intelligent permettant de qualifier les appels, gérer les urgences et automatiser la prise de rendez-vous — une solution full-stack déployée pour la startup Agent Smart System."
date: 2026-04-03
client: "Agent Smart System"
tags: ["Voice AI", "Automatisation", "Téléphonie", "n8n", "SaaS"]
featured: true
results:
  - "-77% d'appels manqués|"
  - "+ de 3h d'appels | traités par semaine sans interventions humaines"
  - "Réduction du temps opérationnel"
---

## Contexte

Agent Smart System développe une solution SaaS permettant d'automatiser la gestion des appels entrants pour les professionnels terrain — serruriers, plombiers, électriciens.

Le besoin : capter 100% des appels, qualifier les demandes et déclencher la bonne action sans intervention humaine, même en dehors des heures de bureau.

---

## VAPI comme cerveau vocal de la solution

L'agent vocal est construit sur **VAPI**, une plateforme de Voice AI qui va bien au-delà de la simple synthèse vocale. Grâce à son **serveur MCP (Model Context Protocol)**, VAPI peut appeler des outils externes en temps réel pendant la conversation — sans rupture, sans délai perceptible pour l'appelant.

Concrètement, pendant un appel, l'agent peut :
- Lire et écrire dans le CRM client
- Consulter et créer des événements dans Google Calendar
- Envoyer des emails et SMS via Brevo
- Vérifier si un contact existe, et le créer à la volée si besoin

![Workflow VAPI — 5 étapes du parcours d'appel](/images/projets/web-app-receptioniste-ia_vapi-workflow.svg)

---

## Parcours d'un appel type

Voici comment se déroule un appel entrant standard, de la première sonnerie à la confirmation du rendez-vous.

### 1. Identification du contact

Dès que l'appel est décroché, l'agent récupère le numéro de l'appelant et interroge le CRM en temps réel. Si le contact est connu, il est accueilli par son prénom. S'il est inconnu, l'agent collecte les informations essentielles (nom, adresse, type d'intervention) et crée automatiquement une fiche client.

### 2. Qualification de la demande

L'agent pose les bonnes questions pour comprendre la nature de l'intervention : type de problème, niveau d'urgence, localisation précise. Ces informations structurent la suite du traitement et permettent d'orienter vers la bonne action.

![Log d'appel et résumé structuré généré par l'IA après qualification](/images/projets/web-app-receptioniste-ia_call-log.webp)

### 3. Gestion des urgences

Si la demande est critique (porte claquée, fuite d'eau, panne électrique), l'agent ne propose pas de rendez-vous — il déclenche immédiatement une alerte. Un email d'urgence est envoyé au professionnel avec toutes les informations de l'appelant et un bouton de rappel en un clic.

![Email d'urgence avec bouton de rappel direct](/images/projets/web-app-receptioniste-ia_email-urgent.webp)

### 4. Vérification des disponibilités et validation

Pour les demandes standards, l'agent consulte en direct le Google Calendar du professionnel, propose des créneaux disponibles à l'appelant et confirme le choix retenu — le tout dans le fil naturel de la conversation.

### 5. Création du rendez-vous et confirmations

Une fois le créneau validé, l'agent crée simultanément l'événement dans le calendrier du serrurier et dans celui du client (si une adresse email a été fournie). Un SMS et un email de confirmation sont envoyés au client immédiatement.

![Création automatique du rendez-vous dans Google Calendar](/images/projets/web-app-receptioniste-ia_booking.webp)

---

## Orchestration via workflow n8n

L'ensemble de la logique métier — création de contact, envoi d'alertes, génération de rendez-vous, SMS et emails — est orchestré par un workflow n8n déclenché par les webhooks VAPI. Chaque action est tracée et vérifiable.

![Workflow n8n orchestrant toutes les actions post-appel](/images/projets/web-app-receptioniste-ia_workflow.webp)

---

## Stack technique

- **Agent vocal** : VAPI + MCP Server
- **Orchestration** : n8n
- **CRM** : Supabase
- **Planning** : Google Calendar API
- **Email & SMS** : Brevo
- **Téléphonie** : Twilio

---

## Résultats

La solution permet :

- de traiter 100% des appels entrants, y compris la nuit et le week-end
- d'éliminer les appels manqués et les rendez-vous oubliés
- de réduire le temps de traitement administratif de plus de 3h par semaine
- d'améliorer la réactivité client et le taux de conversion

L'agent IA agit comme un standard téléphonique autonome, capable de gérer l'intégralité du parcours client sans intervention humaine.
