---
title: "Voicebot Retell AI multi-workflow pour parcours client & création de devis"
description: "Déploiement d'un agent vocal multi-workflow capable de qualifier les prospects, collecter les informations nécessaires et générer automatiquement un devis PDF — le tout en moins de 5 minutes d'appel."
date: 2024-11-15
client: "Agence commerciale B2B"
tags: ["Voice Bot", "Retell AI", "n8n", "Devis automatisé"]
featured: true
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

## Architecture technique

<div style="background:#0d1c2f;border-radius:1.25rem;padding:2.5rem 2rem;margin:2rem 0;position:relative;overflow:hidden;">
  <div style="position:absolute;right:-60px;bottom:-60px;width:200px;height:200px;background:rgba(37,99,235,0.2);border-radius:50%;filter:blur(60px);pointer-events:none;"></div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" style="width:100%;display:block;" aria-label="Architecture technique : Appel entrant → Retell AI → n8n Workflow → HubSpot + PDF → Email & Slack">

    <!-- Node 1: Appel entrant -->
    <rect x="10" y="60" width="140" height="80" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Phone icon -->
    <path d="M57 82 c-.5 1.1-1.7 3.5-2 4.3-.3.8 0 1.7.8 2.2 1.5 1 3.2 2.2 4.7 3.8 1.6 1.6 2.8 3.3 3.8 4.8.5.8 1.4 1.1 2.2.8.8-.3 3.2-1.5 4.3-2 1.1-.5 1.4-1.8.8-2.8-.8-1.3-1.9-2.8-3.4-4.3-1.5-1.5-3-2.6-4.3-3.4-1-.6-2.3-.3-2.9.6z" fill="none" stroke="#7ca8ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="80" y="155" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">APPEL</text>
    <text x="80" y="168" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">ENTRANT</text>
    <!-- Dot pattern inside node -->
    <circle cx="30" cy="72" r="2" fill="rgba(255,255,255,0.08)"/>
    <circle cx="42" cy="72" r="2" fill="rgba(255,255,255,0.08)"/>

    <!-- Arrow 1 -->
    <path d="M152 100 L178 100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polygon points="178,95 188,100 178,105" fill="rgba(255,255,255,0.2)"/>

    <!-- Node 2: Retell AI -->
    <rect x="190" y="60" width="140" height="80" rx="12" fill="rgba(37,99,235,0.25)" stroke="rgba(37,99,235,0.5)" stroke-width="1"/>
    <!-- Mic icon -->
    <rect x="272" y="77" width="12" height="20" rx="6" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <path d="M265 92 c0 8 14 13 22 8" fill="none" stroke="#7ca8ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="278" y1="102" x2="278" y2="108" stroke="#7ca8ff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="272" y1="108" x2="284" y2="108" stroke="#7ca8ff" stroke-width="1.5" stroke-linecap="round"/>
    <text x="260" y="155" text-anchor="middle" fill="#7ca8ff" font-family="Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="0.05em">RETELL AI</text>
    <text x="260" y="168" text-anchor="middle" fill="#7ca8ff" font-family="Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="0.05em">AGENT</text>

    <!-- Arrow 2 -->
    <path d="M332 100 L358 100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polygon points="358,95 368,100 358,105" fill="rgba(255,255,255,0.2)"/>

    <!-- Node 3: n8n Workflow -->
    <rect x="370" y="60" width="140" height="80" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Workflow icon -->
    <circle cx="430" cy="90" r="5" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <circle cx="450" cy="78" r="5" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <circle cx="450" cy="102" r="5" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <line x1="435" y1="87" x2="445" y2="81" stroke="#7ca8ff" stroke-width="1.5"/>
    <line x1="435" y1="93" x2="445" y2="99" stroke="#7ca8ff" stroke-width="1.5"/>
    <text x="440" y="155" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">N8N</text>
    <text x="440" y="168" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">WORKFLOW</text>

    <!-- Arrow 3 -->
    <path d="M512 100 L538 100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polygon points="538,95 548,100 538,105" fill="rgba(255,255,255,0.2)"/>

    <!-- Node 4: HubSpot + PDF -->
    <rect x="550" y="60" width="140" height="80" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Database icon -->
    <ellipse cx="620" cy="81" rx="12" ry="5" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <path d="M608 81 L608 99 Q608 104 620 104 Q632 104 632 99 L632 81" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <path d="M608 87 Q608 92 620 92 Q632 92 632 87" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <text x="620" y="155" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">HUBSPOT</text>
    <text x="620" y="168" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">+ DEVIS PDF</text>

    <!-- Arrow 4 -->
    <path d="M692 100 L718 100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polygon points="718,95 728,100 718,105" fill="rgba(255,255,255,0.2)"/>

    <!-- Node 5: Email + Slack -->
    <rect x="730" y="60" width="140" height="80" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Bell/notify icon -->
    <path d="M800 77 c-6 0-10 4-10 10 v8 l-3 3 v2 h26 v-2 l-3-3 v-8 c0-6-4-10-10-10z" fill="none" stroke="#7ca8ff" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M797 103 c0 1.7 1.3 3 3 3 s3-1.3 3-3" fill="none" stroke="#7ca8ff" stroke-width="1.5"/>
    <text x="800" y="155" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">EMAIL</text>
    <text x="800" y="168" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter,sans-serif" font-size="10" font-weight="600" letter-spacing="0.05em">+ SLACK</text>
  </svg>
</div>

## Résultats après 30 jours

Le système a traité **847 appels entrants** en 30 jours, avec un taux de succès de 91%. Les commerciaux ont pu se concentrer exclusivement sur les clients chauds, augmentant leur taux de closing de 20%.
