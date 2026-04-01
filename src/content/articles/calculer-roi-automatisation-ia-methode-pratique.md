---
title: "Comment calculer le ROI d'un projet d'automatisation IA (méthode pratique)"
description: "Avant d'investir dans l'automatisation IA, calculez le retour sur investissement attendu. Voici la méthode que nous utilisons avec nos clients pour justifier chaque projet en moins d'une heure."
date: 2025-04-15
author: "Arthur Tetard"
tags: ["ROI", "Automatisation", "IA", "PME", "Stratégie"]
---

## Le problème avec "ça va nous faire gagner du temps"

Quasiment tous les projets d'automatisation se vendent avec cette phrase. Le problème, c'est que "gagner du temps" ne passe pas dans un budget ni dans un comité de direction.

Ce qu'on veut savoir : combien ça coûte, combien ça rapporte, en combien de temps on récupère l'investissement.

Voici la méthode que nous utilisons pour calculer le ROI de nos projets chez Mindeon — adaptable à n'importe quelle automatisation, qu'elle soit basée sur n8n, Claude, ou n'importe quel outil.

## Étape 1 : Identifier et quantifier le problème

Avant de parler de solution, il faut chiffrer la douleur actuelle. Pour chaque processus ciblé, posez ces questions :

**Combien d'heures par semaine y est consacré ?**

Soyez précis. Interrogez les personnes qui font le travail, pas les managers. "Je dirais 2h" devient souvent "en fait 4-5h si je compte les relances et les corrections" quand on creuse.

**Combien de personnes sont impliquées ?**

Un processus qui touche 3 personnes à raison d'une heure chacune = 3h/semaine, pas 1h.

**Quel est le coût horaire chargé ?**

En France, comptez le salaire brut × 1,5 pour obtenir le coût total chargé employeur (salaire + charges + avantages). Un employé à 35k€ brut/an coûte ~53k€/an, soit ~28€/h (1 900h/an).

**Formule de base :**

```
Coût annuel du processus = heures/semaine × 52 × nombre de personnes × coût horaire
```

**Exemple concret — relances factures :**
- 3h/semaine de saisie + relances manuelles
- 1 personne à temps partiel sur ce poste (28€/h)
- Coût : 3 × 52 × 1 × 28 = **4 368€/an**

Mais ce n'est pas tout. Il faut aussi estimer les **coûts indirects** :

- Retards de paiement : si 10 factures de 5k€ sont payées avec 15 jours de retard en moyenne, c'est ~2k€/an de coût financier à votre taux de financement.
- Erreurs manuelles : combien de temps pour corriger une erreur de saisie ? Ça arrive combien de fois par mois ?

## Étape 2 : Définir le gain réel (pas le gain théorique)

L'erreur classique : supposer que 100% du temps libéré devient du profit. Ça n'arrive jamais.

**Règle des 70% :** Appliquez un coefficient de réalité de 0,7 sur les gains de productivité. Le temps libéré sera partiellement absorbé par d'autres tâches, des transitions, de la formation. C'est conservateur, mais c'est ce que nous observons en pratique.

Ensuite, différenciez deux types de gains :

**Gains directs (monétisables immédiatement)**
- Réduction de personnel (rare, et à manier avec précaution)
- Réduction des délais de paiement → amélioration du cash-flow
- Réduction des erreurs → moins de reprises, moins de litiges

**Gains indirects (valeur réelle mais moins visible)**
- Temps commercial libéré → conversations supplémentaires → pipeline
- Qualité d'expérience client → moins de churn
- Capacité de scale sans embauche linéaire

Pour les gains indirects, convertissez-les en euros avec des hypothèses explicites. "Si mes commerciaux récupèrent 3h/semaine et convertissent 1 opportunité de plus par mois à 2k€ de marge..." — c'est une hypothèse, mais elle est traçable.

## Étape 3 : Calculer le coût total du projet

Le coût d'un projet d'automatisation se décompose en :

**Coût initial (one-time)**
- Développement et paramétrage : heures × TJM
- Migration de données si applicable
- Formation de l'équipe (prévoir 0,5-1 jour)

**Coût récurrent (mensuel/annuel)**
- Licences logicielles (n8n Cloud, outils IA)
- Coûts API (Claude, OpenAI — variable selon le volume)
- Maintenance estimée : 10-20% du coût initial par an

**Exemple avec des ordres de grandeur réels :**

| Type | Détail | Coût |
|---|---|---|
| Développement | 3 jours × 800€/j | 2 400€ |
| n8n Cloud | Plan Pro | 50€/mois |
| API Claude | ~500k tokens/mois | ~15€/mois |
| Maintenance | 2h/mois × 80€/h | 160€/mois |
| **Total an 1** | | **~5 100€** |
| **Total an 2+** | | **~2 700€/an** |

## Étape 4 : Calculer le ROI et le payback period

**ROI sur 3 ans :**

```
ROI = (Gains totaux sur 3 ans - Coûts totaux sur 3 ans) / Coûts totaux sur 3 ans × 100
```

**Payback period :**

```
Payback = Coût initial / (Gains mensuels - Coûts récurrents mensuels)
```

**En reprenant notre exemple de relances factures :**

- Gains annuels : 4 368€ (productivité) + 2 000€ (cash-flow) × 0,7 = **4 457€/an**
- Coût an 1 : 5 100€
- Coût an 2+ : 2 700€/an

Payback period : 5 100 / (4 457/12 - 225) ≈ **16 mois**

ROI 3 ans : (4 457×3 - 5 100 - 2 700×2) / (5 100 + 5 400) = **+27%**

Ce n'est pas exceptionnel — mais c'est un cas simple. Sur des projets plus complexes (agent de qualification qui traite 200 leads/mois au lieu de 50), les ratios explosent.

## Les projets à ROI rapide vs les projets à ROI long

**ROI rapide (< 6 mois) :**
- Centralisation des leads et qualification automatique
- Relances automatiques (facturation, devis, suivi)
- Rapport hebdomadaire automatisé
- Réponse automatique aux questions support récurrentes

**ROI plus long (6-18 mois) :**
- Refonte de processus complexes avec formation
- Chatbots avec RAG (coût d'indexation initiale élevé)
- Voice bots (développement + itérations)

Le ROI long ne veut pas dire mauvais investissement — ça veut dire qu'il faut plus de résilience organisationnelle pour l'assumer.

## Un template pour aller vite

Pour vos prochains projets, voici le calcul en 5 minutes :

1. **Heures/semaine économisées** × **52** × **coût horaire chargé** × **0,7** = gains directs/an
2. **Coût développement** + **licences an 1** = coût initial
3. **Payback** = coût initial / (gains directs/an ÷ 12)
4. Si payback < 18 mois → feu vert dans presque tous les cas
5. Si payback > 18 mois → chercher les gains indirects ou revoir le scope

---

*Vous voulez qu'on fasse ce calcul avec vous pour votre prochain projet d'automatisation ? On le fait systématiquement avant chaque engagement. [Prenez 30 minutes avec notre équipe](/contact/) — vous repartez avec une estimation chiffrée.*
