---
title: "Voicebot Retell AI multi-workflow pour parcours client & création de devis"
description: "Déploiement d'un agent vocal multi-workflow capable de qualifier les prospects, collecter les informations nécessaires et générer automatiquement un devis PDF — le tout en moins de 5 minutes d'appel."
date: 2024-11-15
client: "Agence commerciale B2B"
tags: ["Voice Bot", "Retell AI", "n8n", "Devis automatisé"]
featured: true
architectureType: "voicebot-retell"
results:
  - "-96% temps de création de devis (2h → 4 min)"
  - "+35% de leads mieux qualifiés"
  - "24/7 sans ressource humaine supplémentaire"
---

## Contexte

Notre client, une agence commerciale B2B, traitait des dizaines d'appels entrants par jour pour qualifier les prospects et créer des devis. Ce processus chronophage mobilisait 2 commerciaux à plein temps sur des tâches répétitives.

## Solution déployée

Nous avons conçu un agent vocal basé sur **Retell AI** avec une architecture multi-workflow orchestrée via **n8n** :

### 1. Qualification vocale

L'agent engage la conversation, collecte les besoins du prospect (volume, budget, délai) et évalue sa maturité d'achat. La configuration de l'agent dans Retell AI permet de définir précisément le script de qualification, les conditions de transition entre les étapes et la gestion des réponses inattendues.

<div class="img-row">

![Configuration de l'agent vocal dans Retell AI — étape de qualification](/images/projets/voicebot-retell-ai-multi-workflow-pour-parcours-client-creation-de-devis_Setting-Retell1.webp)

![Configuration du workflow de génération de devis dans Retell AI](/images/projets/voicebot-retell-ai-multi-workflow-pour-parcours-client-creation-de-devis_Setting-Retell2.webp)

</div>

### 2. Enrichissement de données

Les informations collectées sont envoyées via webhook à n8n, qui enrichit le profil dans le CRM (HubSpot) et vérifie si le prospect est déjà connu.

### 3. Génération de devis

n8n déclenche automatiquement la création d'un devis PDF personnalisé avec les tarifs appropriés, envoyé par email au prospect dans la foulée de l'appel. Le second workflow Retell gère la confirmation et les éventuelles questions de suivi.

### 4. Notification commerciale

L'équipe commerciale reçoit une alerte avec le résumé de l'appel et le devis généré, prête à relancer les prospects les plus chauds.

## Résultats après 30 jours

Le système a traité **847 appels entrants** en 30 jours, avec un taux de succès de 91%. Les commerciaux ont pu se concentrer exclusivement sur les clients chauds, augmentant leur taux de closing de 20%.

![Tableau de bord des résultats dans Retell AI — appels traités et taux de succès](/images/projets/voicebot-retell-ai-multi-workflow-pour-parcours-client-creation-de-devis_Resultat_Retell.webp)
