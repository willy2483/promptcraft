import { PromptConfig } from './promptGenerator';


export const advancedPromptTemplates = {
  creative: {
    short: {
      professional: [
        {
          id: 'creative_pro_short_1',
          name: 'Brief Créatif Structuré',
          structure: `# 🎨 BRIEF CRÉATIF PROFESSIONNEL

## CONTEXTE
Vous êtes un **expert créatif senior** avec 10+ années d'expérience dans {topic}.
Votre expertise couvre l'innovation, le design thinking et la résolution créative de problèmes.

## MISSION
> Développer une solution créative originale pour {topic}
> Niveau de complexité: **{complexity_detail}**
> Format attendu: **{length_detail}**

### 📋 CONTRAINTES OPÉRATIONNELLES
- ⏱️ Temps de développement: 45 minutes maximum
- 🎯 Public cible: Professionnels du secteur
- 💡 Approche: Innovation pratique et réalisable
- 📊 Mesure de succès: Impact quantifiable

### 🔍 LIVRABLES REQUIS
1. **Concept central** (1-2 phrases)
2. **Justification créative** (pourquoi cette approche ?)
3. **Plan d'exécution** (3 étapes clés)

---
### 📝 FORMAT DE RÉPONSE OBLIGATOIRE

\`\`\`
CONCEPT: [Votre idée principale en 1-2 phrases]

JUSTIFICATION: [Pourquoi cette approche est innovante]

EXÉCUTION:
1. [Première étape]
2. [Deuxième étape] 
3. [Troisième étape]
\`\`\`

**🚀 COMMENCEZ VOTRE RÉPONSE ICI :**`
        },
        {
          id: 'creative_pro_short_2',
          name: 'Framework SCAMPER Adapté',
          structure: `═══════════════════════════════════════
🧠 FRAMEWORK CRÉATIF PROFESSIONNEL
═══════════════════════════════════════

**RÔLE**: Expert en innovation créative
**DOMAINE**: {topic}
**MÉTHODE**: SCAMPER adapté
**COMPLEXITÉ**: {complexity_detail}

### 🎯 OBJECTIF PRINCIPAL
Appliquer le framework SCAMPER pour générer une solution créative concernant {topic}.

### 📐 PARAMÈTRES D'EXÉCUTION
• **Durée**: 30 minutes
• **Format**: {length_detail}
• **Approche**: Systématique et professionnelle
• **Critère**: Originalité + Faisabilité

### 🔧 INSTRUCTIONS SPÉCIFIQUES
Utilisez au moins 3 des 7 techniques SCAMPER :

**S**ubstituer | **C**ombiner | **A**dapter | **M**odifier | **P**lacer | **E**liminer | **R**éorganiser

---
<<<DÉBUT ANALYSE SCAMPER>>>

**TECHNIQUE 1**: [Nom] - [Application à {topic}]
**TECHNIQUE 2**: [Nom] - [Application à {topic}]  
**TECHNIQUE 3**: [Nom] - [Application à {topic}]

**SYNTHÈSE CRÉATIVE**: [Votre solution finale]

<<<FIN ANALYSE SCAMPER>>>`
        },
        {
          id: 'creative_pro_short_3',
          name: 'Challenge Box Créatif',
          structure: `┌─────────────────────────────────────┐
│        🚀 CHALLENGE BOX CRÉATIF     │
└─────────────────────────────────────┘

## 🎭 VOTRE RÔLE
**Persona**: Consultant créatif senior
**Spécialité**: {topic}
**Mission**: Innovation disruptive

## 📋 BRIEF CLIENT
> **Sujet**: {topic}
> **Niveau**: {complexity_detail}  
> **Contrainte temps**: {length_detail}
> **Budget conceptuel**: Illimité
> **Risque accepté**: Modéré à élevé

### 🎯 DÉFIS À RELEVER
- [ ] **Originalité**: Sortir des sentiers battus
- [ ] **Pertinence**: Répondre au besoin réel
- [ ] **Impact**: Générer une différence mesurable
- [ ] **Faisabilité**: Rester dans le possible

### ⚡ MÉTHODE EXPRESS
1. **DIVERGENCE** (5 min): Générez 5 idées folles
2. **CONVERGENCE** (5 min): Sélectionnez la meilleure
3. **DÉVELOPPEMENT** (15 min): Structurez votre concept

---
**🎨 ZONE DE CRÉATION LIBRE**

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

[ESPACE POUR VOS 5 IDÉES INITIALES]

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

**🏆 CONCEPT FINALREFLEXIONS :**`
        }
      ],
      casual: [
        {
          id: 'creative_casual_short_1',
          name: 'Session Créative Décontractée',
          structure: `# 🎉 SESSION CRÉATIVE COOL !

Salut ! On va faire un brainstorm décontracté sur **{topic}**.

## 🧙‍♂️ TON RÔLE
Tu es le **guru créatif** du moment - celui qui a toujours des idées de ouf !
Niveau de difficulté : {complexity_detail}

## 🎮 LES RÈGLES DU JEU
1. 🚫 **Pas de censure** - toutes les idées sont bonnes
2. 🔥 **Go pour le fun** - {length_detail}
3. 💫 **Assume tes idées folles**
4. 🎨 **Pense comme un artiste rebelle**

### 💭 TA MISSION (si tu l'acceptes)
> Trouve quelque chose de **totalement ouf** avec {topic}
> 
> Genre, le truc auquel personne d'autre a pensé !

### 📝 FORMAT LIBRE
Tu peux répondre comme tu veux :
- En bullet points
- En story
- Avec des émojis
- En mode délire créatif

---
### 🚀 À TOI DE JOUER !

**Ton idée de génie** :`
        },
        {
          id: 'creative_casual_short_2',
          name: 'Brainstorm Entre Potes',
          structure: `🍕 YO ! BRAINSTORM TIME 🍕

On se fait une petite session créative sur **{topic}** ?

**Le deal :** {complexity_detail}
**Le timing :** {length_detail}
**L'ambiance :** Décontract' total

## 🎪 LE PRINCIPE
Imagine qu'on est dans un café, on prend un verre, et on délire sur des idées créatives...

### 🗣️ TON BRIEF (version copain)
"Écoute, j'ai besoin d'aide avec {topic}. T'as pas une idée originale ? 
Un truc qui sortirait de l'ordinaire ?"

### 🤔 QUESTIONS POUR T'INSPIRER
- Et si on faisait complètement l'inverse ?
- Qu'est-ce qui te ferait dire "waouw" ?  
- Comment [ton artiste préféré] aborderait ça ?

---
**💬 TON IDÉE EN MODE DISCUSSION :**

"Alors, j'ai une idée complètement dingue..."

[Continue ta phrase ici]`
        }
      ],
      creative: [
        {
          id: 'creative_creative_short_1',
          name: 'Manifeste Créatif Artistique',
          structure: `✨════════════════════════════════════✨
     🎨 MANIFESTE CRÉATIF ARTISTIQUE 🎨
✨════════════════════════════════════✨

**L'ARTISTE VISIONNAIRE, C'EST VOUS**

### 🌟 VOTRE IDENTITÉ CRÉATIVE
Vous transcendez les limites conventionnelles.
Votre terrain de jeu : **{topic}**
Votre niveau d'expression : **{complexity_detail}**
Votre toile temporelle : **{length_detail}**

### 🎭 L'APPEL DE LA CRÉATION
*Dans le silence de l'inspiration, 
où les idées dansent avec l'impossible,
créez ce que personne n'a osé rêver...*

### 🔮 RITUEL CRÉATIF
1. **INSPIRATION** ∞ Fermez les yeux, visualisez {topic}
2. **TRANSFORMATION** ∞ Laissez l'idée muter, évoluer
3. **MANIFESTATION** ∞ Donnez forme à l'invisible

### 🎪 CONTRAINTES LIBÉRATRICES
- Brisez au moins UNE convention
- Mélangez au moins DEUX univers différents  
- Créez quelque chose qui n'existe PAS encore

---
### 🌈 ESPACE DE CRÉATION PURE

"""
[Ici, laissez parler votre âme créative...]


"""

**🦋 Signez votre œuvre conceptuelle :**`
        }
      ],
      academic: [
        {
          id: 'creative_academic_short_1',
          name: 'Protocole de Recherche Créative',
          structure: `# PROTOCOLE DE RECHERCHE CRÉATIVE

**Référence**: Creative Research Protocol v2.1
**Domaine d'étude**: {topic}
**Niveau méthodologique**: {complexity_detail}
**Contrainte temporelle**: {length_detail}

## I. CADRE THÉORIQUE

### 1.1 Hypothèse de recherche
L'application de méthodes créatives à {topic} peut générer des solutions innovantes reproductibles.

### 1.2 Variables d'étude
- **Variable indépendante**: Approche créative appliquée
- **Variable dépendante**: Niveau d'innovation obtenu
- **Variables contrôlées**: {complexity_detail}

## II. MÉTHODOLOGIE

### 2.1 Approche heuristique
Utilisation du modèle **Divergence-Convergence** (Guilford, 1967)

### 2.2 Protocole d'exécution
1. **Phase exploratoire** (33%)
2. **Phase d'évaluation** (33%)  
3. **Phase de synthèse** (34%)

## III. RÉSULTATS ATTENDUS

### 3.1 Format de présentation
\`\`\`
INNOVATION PROPOSÉE: [Titre descriptif]
JUSTIFICATION THÉORIQUE: [Base scientifique]
APPLICABILITÉ: [Contexte d'usage]
LIMITES IDENTIFIÉES: [Contraintes reconnues]
\`\`\`

### 3.2 Critères d'évaluation
- Originalité (échelle 1-10)
- Faisabilité (échelle 1-10)
- Impact potentiel (échelle 1-10)

---
## IV. DÉVELOPPEMENT DE LA SOLUTION

**Procédez à l'analyse créative selon le protocole défini :**`
        }
      ]
    },
    medium: {
      professional: [
        {
          id: 'creative_pro_medium_1',
          name: 'Workshop Créatif Complet',
          structure: `╔══════════════════════════════════════════════════════════╗
║                 🏢 WORKSHOP CRÉATIF PROFESSIONNEL         ║
╚══════════════════════════════════════════════════════════╝

## 📊 CONTEXTE STRATÉGIQUE
**Client**: Organisation cherchant l'innovation
**Défi**: {topic}
**Consultant**: Expert créatif senior (VOUS)
**Approche**: Design Thinking + Innovation ouverte
**Complexité**: {complexity_detail}

### 🎯 OBJECTIFS SMART
- **S**pécifique: Solution créative pour {topic}
- **M**esurable: 3 concepts minimum avec critères d'évaluation  
- **A**tteignable: {length_detail}
- **R**éaliste: Faisabilité technique et budgétaire
- **T**emporel: Livrable immédiat

## 🔄 PROCESSUS EN 4 PHASES

### PHASE 1: EXPLORATION (25%)
**🔍 ANALYSE DU CONTEXTE**

Répondez aux questions suivantes :
- Quel est le vrai problème derrière {topic} ?
- Quels sont les enjeux cachés ?
- Qui sont les parties prenantes ?

### PHASE 2: IDÉATION (35%)  
**💡 GÉNÉRATION D'IDÉES**

Utilisez 3 techniques complémentaires :
1. **Brainstorming classique** → 10 idées minimum
2. **Technique des 6 chapeaux** (De Bono) → 1 perspective/chapeau
3. **SCAMPER** → 1 idée transformée

### PHASE 3: ÉVALUATION (25%)
**⚖️ MATRICE DE DÉCISION**

Évaluez chaque concept selon :
- Impact business (1-5)
- Faisabilité technique (1-5)  
- Coût d'implémentation (1-5)
- Originalité (1-5)

### PHASE 4: DÉVELOPPEMENT (15%)
**🚀 CONCEPT FINALISÉ**

Développez le concept #1 :

---
## 📋 TEMPLATE DE LIVRABLE

### EXECUTIVE SUMMARY
\`\`\`
CONCEPT: [Nom du concept]
PROBLÈME RÉSOLU: [Description claire]
INNOVATION: [En quoi c'est nouveau]
IMPACT ESTIMÉ: [Bénéfices quantifiés]
\`\`\`

### DÉVELOPPEMENT DÉTAILLÉ

**🔧 FONCTIONNEMENT**
[Comment ça marche concrètement]

**👥 PARTIES PRENANTES**  
[Qui est impliqué et comment]

**📈 PLAN DE DÉPLOIEMENT**
1. Phase pilote (0-3 mois)
2. Extension (3-6 mois)  
3. Généralisation (6-12 mois)

**💰 MODÈLE ÉCONOMIQUE**
[Comment c'est viable financièrement]

**⚠️ RISQUES & MITIGATION**
[Principaux risques et solutions]

---
## 🎨 VOTRE WORKSHOP COMMENCE ICI`
        }
      ]
    },
    long: {
      professional: [
        {
          id: 'creative_pro_long_1',
          name: 'Projet Créatif Complet Enterprise',
          structure: `# 🎯 PROJET CRÉATIF ENTERPRISE - NIVEAU EXPERT

## 📋 BRIEF EXÉCUTIF STRATÉGIQUE
**Commanditaire**: Direction Innovation & Transformation
**Expert créatif**: Consultant senior spécialisé {topic}  
**Niveau d'expertise**: {complexity_detail}
**Livrable attendu**: {length_detail}
**Budget conceptuel**: Investissement stratégique majeur

### 🌟 CONTEXTE STRATÉGIQUE GLOBAL
Dans un environnement concurrentiel en mutation accélérée, l'innovation créative autour de {topic} représente un enjeu critique pour la différenciation et la création de valeur durable.

---
## 🔍 PHASE I - ANALYSE STRATÉGIQUE APPROFONDIE (30%)

### 📊 DIAGNOSTIC 360° 
Réalisez une analyse exhaustive selon les axes suivants :

#### 🎯 ENJEUX BUSINESS
\`\`\`yaml
Marché_actuel:
  taille: "[€M - estimation]"
  croissance: "[% annuel]"
  principaux_acteurs: "[Top 3 concurrents]"
  
Opportunités_identifiées:
  disruption_potentielle: "[Niveau 1-10]"
  barrières_entrée: "[Description]"
  fenêtre_temporelle: "[Urgence/timing]"
\`\`\`

### 📋 VOTRE DÉVELOPPEMENT CRÉATIF COMPLET :

**[Développez ici votre solution créative révolutionnaire selon la méthodologie définie]**

═══════════════════════════════════════════════════════════════
🏆 SIGNATURE CRÉATIVE : Transformons {topic} ensemble !
═══════════════════════════════════════════════════════════════`
        }
      ]
    }
  },
  technical: {
    short: {
      professional: [
        {
          id: 'tech_pro_short_1',
          name: 'Analyse Technique Structurée',
          structure: `# 🔧 ANALYSE TECHNIQUE PROFESSIONNELLE

## CONTEXTE TECHNIQUE
**Rôle**: Architecte logiciel senior / Tech Lead
**Domaine**: {topic}  
**Niveau de complexité**: {complexity_detail}
**Contrainte**: {length_detail}

### 📋 SPÉCIFICATIONS
- **Environnement**: Production-ready
- **Critères**: Performance, Sécurité, Maintenabilité
- **Standards**: Best practices industrielles
- **Documentation**: Obligatoire

## 🎯 MISSION TECHNIQUE

> **Objectif**: Analyser et proposer une solution technique optimale pour {topic}
> 
> **Livrables attendus**:
> 1. Diagnostic technique
> 2. Architecture recommandée  
> 3. Plan d'implémentation

### ⚙️ CONTRAINTES TECHNIQUES
- 🔒 **Sécurité**: OWASP Top 10 compliance
- 📊 **Performance**: SLA 99.9% uptime
- 🔧 **Maintenance**: Code review + Tests automatisés
- 📈 **Scalabilité**: Support croissance 10x

---
## 📊 TEMPLATE D'ANALYSE

### 🔍 DIAGNOSTIC ACTUEL
\`\`\`yaml
État_actuel:
  problème_identifié: "[Description]"
  impact_business: "[Critique/Élevé/Moyen/Faible]"  
  complexité_technique: "{complexity_detail}"
  urgence: "[Immédiate/Court terme/Planifiée]"
\`\`\`

### 🏗️ ARCHITECTURE PROPOSÉE
\`\`\`
┌─────────────────┐
│   [COMPOSANT A] │
├─────────────────┤  
│   [COMPOSANT B] │
├─────────────────┤
│   [COMPOSANT C] │
└─────────────────┘
\`\`\`

### ✅ CHECKLIST TECHNIQUE
- [ ] Architecture scalable
- [ ] Sécurité implémentée
- [ ] Tests couverts (>80%)
- [ ] Documentation complète
- [ ] Monitoring configuré

---
**🚀 VOTRE ANALYSE TECHNIQUE :**`
        },
        {
          id: 'tech_pro_short_2', 
          name: 'Code Review & Optimisation',
          structure: `# 👨‍💻 CODE REVIEW & OPTIMISATION

## PÉRIMÈTRE D'INTERVENTION
**Système**: {topic}
**Expertise requise**: {complexity_detail}
**Temps alloué**: {length_detail}
**Type d'audit**: Performance + Sécurité + Maintenabilité

### 🔍 CHECKLIST D'AUDIT

#### 🏗️ ARCHITECTURE
- [ ] Séparation des responsabilités (SRP)
- [ ] Inversion de dépendances (DIP)
- [ ] Principe ouvert/fermé (OCP)

#### ⚡ PERFORMANCE  
- [ ] Complexité algorithmique (Big O)
- [ ] Gestion mémoire
- [ ] Optimisation base de données

#### 🔐 SÉCURITÉ
- [ ] Validation des entrées
- [ ] Authentification/Autorisation
- [ ] Protection contre injections

---
## 📋 RAPPORT D'AUDIT

### FINDINGS CRITIQUES
\`\`\`diff
! CRITIQUE: [Description du problème]
+ SOLUTION: [Correction proposée]
# IMPACT: [Business/Performance/Sécurité]
\`\`\`

### OPTIMISATIONS PROPOSÉES
\`\`\`javascript
// AVANT (problématique)
[Code actuel problématique]

// APRÈS (optimisé)  
[Code optimisé avec commentaires]
\`\`\`

### MÉTRIQUES D'AMÉLIORATION
- **Performance**: +X% amélioration
- **Maintenabilité**: Complexité cyclomatique réduite
- **Sécurité**: Vulnérabilités corrigées

---
**📊 VOTRE AUDIT COMMENCE :**`
        }
      ],
      long: {
        professional: [
          {
            id: 'tech_pro_long_1',
            name: 'Architecture Technique Enterprise',
            structure: `# 🏗️ ARCHITECTURE TECHNIQUE ENTERPRISE

## CONTEXTE MISSION CRITIQUE
**Rôle**: Architecte Principal / CTO
**Système**: {topic}
**Complexité**: {complexity_detail}
**Livrable**: {length_detail}

### 🎯 OBJECTIFS STRATÉGIQUES
Concevoir une architecture technique robuste, scalable et sécurisée pour {topic}.

## 📋 CAHIER DES CHARGES TECHNIQUE

### 🔧 SPÉCIFICATIONS SYSTÈME
\`\`\`yaml
Performance:
  throughput: "[req/sec]"
  latency: "[ms]" 
  availability: "99.9%"

Sécurité:
  authentification: "[Méthode]"
  chiffrement: "[Standards]"
  audit: "[Logs détaillés]"
\`\`\`

### 🏗️ ARCHITECTURE PROPOSÉE
**Décrivez votre solution technique complète** :

---
**🚀 VOTRE ARCHITECTURE TECHNIQUE :**`
          }
        ]
      }
    }
  },
  business: {
    short: {
      professional: [
        {
          id: 'business_pro_short_1',
          name: 'Business Case Structuré',
          structure: `# 💼 BUSINESS CASE PROFESSIONNEL

## EXECUTIVE SUMMARY
**Projet**: {topic}
**Sponsor**: Direction Générale  
**Business Analyst**: Expert senior (VOUS)
**Complexité**: {complexity_detail}
**Timeline**: {length_detail}

### 🎯 ENJEUX BUSINESS
- **Problématique**: [Défi business à résoudre]
- **Opportunité**: [Potentiel de croissance identifié]  
- **Urgence**: [Contexte concurrentiel/marché]

## 📊 ANALYSE STRATÉGIQUE

### 🔍 SITUATION ACTUELLE (AS-IS)
\`\`\`
┌─ PROBLÈME IDENTIFIÉ ─┐
│ Description:          │
│ Impact financier:     │  
│ Parties prenantes:    │
│ Urgence: [1-5]       │
└──────────────────────┘
\`\`\`

### 🚀 VISION CIBLE (TO-BE)
\`\`\`
┌─ SOLUTION PROPOSÉE ──┐
│ Concept:             │
│ Bénéfices attendus:  │
│ ROI estimé:          │  
│ Timeline: [mois]     │
└──────────────────────┘
\`\`\`

### 💰 BUSINESS MODEL
**Revenus**: [Sources de revenus]
**Coûts**: [Structure de coûts]  
**Proposition de valeur**: [Valeur unique]

---
## 📈 PLAN D'ACTION

### PHASE 1: QUICK WINS (0-3 mois)
- [ ] Action immédiate #1
- [ ] Action immédiate #2

### PHASE 2: DÉVELOPPEMENT (3-6 mois)  
- [ ] Implémentation principale
- [ ] Test & validation

### PHASE 3: DÉPLOIEMENT (6-12 mois)
- [ ] Généralisation
- [ ] Optimisation continue

---
**📋 VOTRE BUSINESS CASE :**`
        }
      ],
      long: {
        professional: [
          {
            id: 'business_pro_long_1',
            name: 'Stratégie Business Enterprise',
            structure: `# 💼 STRATÉGIE BUSINESS ENTERPRISE

## CONTEXTE STRATÉGIQUE
**Mission**: Développement stratégique {topic}
**Complexité**: {complexity_detail}
**Timeline**: {length_detail}

### 🎯 BUSINESS CASE COMPLET
Élaborez une stratégie business exhaustive pour {topic}.

## 📊 ANALYSE BUSINESS

### 💰 MODÈLE ÉCONOMIQUE
\`\`\`yaml
Revenus_projetés:
  année_1: "[€M]"
  année_3: "[€M]"
  année_5: "[€M]"

ROI_estimé: "[%]"
Break_even: "[mois]"
\`\`\`

### 🚀 VOTRE STRATÉGIE BUSINESS COMPLÈTE :

---
**📈 DÉVELOPPEZ VOTRE BUSINESS CASE :**`
          }
        ]
      }
    }
  },
  educational: {
    short: {
      professional: [
        {
          id: 'edu_pro_short_1',
          name: 'Module Pédagogique Structuré',
          structure: `# 📚 MODULE PÉDAGOGIQUE PROFESSIONNEL

## CONTEXTE ÉDUCATIF
**Formateur**: Expert pédagogue certifié
**Sujet**: {topic}
**Public**: Apprenants niveau {complexity_detail}
**Format**: {length_detail}
**Méthode**: Pédagogie active + Digital learning

### 🎯 OBJECTIFS PÉDAGOGIQUES (Taxonomie de Bloom)

#### 📝 CONNAISSANCES (Savoir)
À l'issue de cette formation, l'apprenant sera capable de :
- Identifier les concepts clés de {topic}
- Expliquer les principes fondamentaux
- Reconnaître les applications pratiques

#### 🔧 COMPÉTENCES (Savoir-faire)  
- Appliquer les méthodes apprises
- Analyser des cas concrets
- Résoudre des problèmes types

#### 🎭 COMPORTEMENTS (Savoir-être)
- Adopter une démarche réflexive
- Collaborer efficacement
- Développer son autonomie

## 📋 INGÉNIERIE PÉDAGOGIQUE

### SÉQUENCE D'APPRENTISSAGE

#### 🚀 ACCROCHE (10%)
**Problématique**: Question ouverte sur {topic}
**Enjeu**: Pourquoi c'est important à maîtriser ?

#### 📖 APPORTS (40%)
**Théorie**: Concepts essentiels
**Méthodes**: Outils pratiques  
**Exemples**: Cas d'application

#### 🔬 PRATIQUE (35%)
**Exercices**: Application guidée
**Cas d'étude**: Situation réelle
**Feedback**: Correction personnalisée

#### 🔄 SYNTHÈSE (15%)
**Récapitulatif**: Points clés
**Évaluation**: Quiz/QCM
**Prolongements**: Pour aller plus loin

---
## 🎓 VOTRE MODULE PÉDAGOGIQUE

### 📋 FICHE TECHNIQUE
\`\`\`yaml
Titre_module: "[Nom accrocheur]"
Durée_estimée: "{length_detail}"
Prérequis: "[Connaissances nécessaires]"  
Modalités: "[Présentiel/Distanciel/Hybride]"
Évaluation: "[Type d'évaluation]"
\`\`\`

### 🎯 DÉROULÉ DÉTAILLÉ
**Commencez par concevoir votre module :**`
        }
      ],
      long: {
        professional: [
          {
            id: 'edu_pro_long_1',
            name: 'Programme Éducatif Complet',
            structure: `# 📚 PROGRAMME ÉDUCATIF ENTERPRISE

## CONTEXTE PÉDAGOGIQUE
**Mission**: Conception programme {topic}
**Public**: {complexity_detail}
**Durée**: {length_detail}

### 🎯 OBJECTIFS PÉDAGOGIQUES
Créer un programme éducatif complet et innovant pour {topic}.

## 📋 INGÉNIERIE PÉDAGOGIQUE

### 🏗️ ARCHITECTURE DE FORMATION
\`\`\`yaml
Modules:
  module_1: "[Fondamentaux]"
  module_2: "[Pratique]"
  module_3: "[Expertise]"

Évaluation:
  continue: "[Méthodes]"
  finale: "[Certification]"
\`\`\`

### 🎓 VOTRE PROGRAMME ÉDUCATIF :

---
**📖 DÉVELOPPEZ VOTRE CURRICULUM :**`
          }
        ]
      }
    }
  },
  personal: {
    short: {
      professional: [
        {
          id: 'personal_pro_short_1',
          name: 'Plan de Développement Personnel',
          structure: `# 🚀 PLAN DE DÉVELOPPEMENT PERSONNEL

## PROFIL DU COACHÉ
**Coach**: Expert en développement personnel certifié
**Domaine de développement**: {topic}
**Niveau actuel**: {complexity_detail}  
**Objectif temporel**: {length_detail}
**Approche**: Coaching professionnel + Neurosciences

### 🎯 DIAGNOSTIC INITIAL

#### 🔍 AUTO-ÉVALUATION
Sur une échelle de 1 à 10, où vous situez-vous concernant {topic} ?

\`\`\`
┌─ COMPÉTENCES ACTUELLES ─┐
│ Technique:     [ /10]    │
│ Relationnel:   [ /10]    │  
│ Stratégique:   [ /10]    │
│ Leadership:    [ /10]    │
└─────────────────────────┘
\`\`\`

#### 🎪 ZONE DE DÉVELOPPEMENT
- **Forces actuelles**: [Ce qui fonctionne déjà]
- **Axes d'amélioration**: [Points à développer]
- **Blocages identifiés**: [Freins personnels]

### 📈 OBJECTIFS SMART

#### 🏆 OBJECTIF PRINCIPAL
\`\`\`yaml
Spécifique: "Je veux améliorer [aspect précis] de {topic}"
Mesurable: "Critère de réussite quantifiable"  
Atteignable: "Réaliste par rapport à {complexity_detail}"
Réaliste: "Compatible avec mes contraintes"
Temporel: "À atteindre dans {length_detail}"
\`\`\`

### 🔄 PLAN D'ACTION PERSONNALISÉ

#### ÉTAPE 1: PRISE DE CONSCIENCE (25%)
- [ ] Auto-diagnostic approfondi
- [ ] Identification des patterns limitants
- [ ] Définition des nouvelles habitudes

#### ÉTAPE 2: EXPÉRIMENTATION (50%)  
- [ ] Mise en pratique progressive
- [ ] Sortie de zone de confort contrôlée
- [ ] Feedback régulier et ajustements

#### ÉTAPE 3: ANCRAGE (25%)
- [ ] Validation des acquis
- [ ] Ritualisation des nouvelles habitudes  
- [ ] Plan de maintien long terme

### 📊 OUTILS DE SUIVI
- **Carnet de bord**: Réflexions quotidiennes
- **Métriques**: Indicateurs de progrès
- **Check-points**: Bilans hebdomadaires

---
## 💪 VOTRE PLAN PERSONNEL

**Commencez par définir votre objectif précis :**`
        }
      ],
      long: {
        professional: [
          {
            id: 'personal_pro_long_1',
            name: 'Transformation Personnelle Complète',
            structure: `# 🚀 TRANSFORMATION PERSONNELLE ENTERPRISE

## CONTEXTE DE DÉVELOPPEMENT
**Mission**: Transformation complète {topic}
**Niveau**: {complexity_detail}
**Timeline**: {length_detail}

### 🎯 OBJECTIFS DE TRANSFORMATION
Développer un plan de transformation personnelle complet pour {topic}.

## 📋 PLAN DE DÉVELOPPEMENT

### 🏗️ ARCHITECTURE PERSONNELLE
\`\`\`yaml
Phases:
  diagnostic: "[Auto-évaluation]"
  développement: "[Actions]"
  ancrage: "[Maintien]"

Métriques:
  progression: "[KPIs]"
  succès: "[Critères]"
\`\`\`

### 💪 VOTRE PLAN DE TRANSFORMATION :

---
**📈 DÉVELOPPEZ VOTRE STRATÉGIE PERSONNELLE :**`
          }
        ]
      }
    }
  }
};

export function generateAdvancedPrompt(config: PromptConfig): string {
  const { category, length, style, complexity } = config;
  
  // Sélection du template approprié
  const categoryTemplates = advancedPromptTemplates[category as keyof typeof advancedPromptTemplates];
  if (!categoryTemplates) return "Catégorie non supportée";
  
  const lengthTemplates = categoryTemplates[length];
  if (!lengthTemplates) {
    // Fallback vers "medium" si "long" n'existe pas
    const fallbackLength = categoryTemplates.medium || categoryTemplates.short;
    if (!fallbackLength) return "Longueur non supportée";
    
    const styleTemplates = fallbackLength[style];
    if (!styleTemplates) return "Style non supporté";
    
    // Sélection aléatoire d'un template
    const template = styleTemplates[Math.floor(Math.random() * styleTemplates.length)];
    
    // Sélection du topic et des détails selon la catégorie
    const topics = getTopicsForCategory(category);
    const topic = topics[Math.floor(Math.random() * topics.length)];
    
    const complexityDetail = getComplexityDetail(complexity, category);
    const lengthDetail = getLengthDetail(length);
    
    // Remplacement des placeholders
    return template.structure
      .replace(/{topic}/g, topic)
      .replace(/{complexity_detail}/g, complexityDetail)
      .replace(/{length_detail}/g, lengthDetail)
      .replace(/{complexity_level}/g, getComplexityLevel(complexity));
  }
  
  const styleTemplates = lengthTemplates[style];
  if (!styleTemplates) return "Style non supporté";
  
  // Sélection aléatoire d'un template
  const template = styleTemplates[Math.floor(Math.random() * styleTemplates.length)];
  
  // Sélection du topic et des détails selon la catégorie
  const topics = getTopicsForCategory(category);
  const topic = topics[Math.floor(Math.random() * topics.length)];
  
  const complexityDetail = getComplexityDetail(complexity, category);
  const lengthDetail = getLengthDetail(length);
  
  // Remplacement des placeholders
  return template.structure
    .replace(/{topic}/g, topic)
    .replace(/{complexity_detail}/g, complexityDetail)
    .replace(/{length_detail}/g, lengthDetail)
    .replace(/{complexity_level}/g, getComplexityLevel(complexity));
}

function getTopicsForCategory(category: string): string[] {
  const topics = {
    creative: [
      "l'innovation numérique", "le design d'expérience utilisateur", "la création de contenu viral",
      "l'art génératif par IA", "la gamification d'entreprise", "le storytelling de marque",
      "l'architecture d'information", "la créativité collaborative", "l'innovation frugale"
    ],
    technical: [
      "l'architecture microservices", "l'optimisation des performances web", "la sécurité des APIs",
      "l'intelligence artificielle éthique", "l'infrastructure cloud native", "la DevOps automation",
      "l'analyse de données en temps réel", "la blockchain industrielle", "l'edge computing"
    ],
    business: [
      "la transformation digitale", "l'innovation de business model", "la stratégie omnicanale",
      "l'économie circulaire", "la gestion de l'innovation", "l'expansion internationale",
      "l'intelligence concurrentielle", "la croissance durable", "l'écosystème partenarial"
    ],
    educational: [
      "l'apprentissage adaptatif", "la pédagogie numérique", "l'évaluation par compétences",
      "la formation en réalité virtuelle", "l'intelligence pédagogique", "l'apprentissage collaboratif",
      "la personnalisation éducative", "l'éducation inclusive", "l'évaluation formative"
    ],
    personal: [
      "l'intelligence émotionnelle", "la gestion du stress en entreprise", "le leadership authentique",
      "la communication non-violente", "l'agilité mentale", "la résilience professionnelle",
      "l'efficacité personnelle", "la créativité individuelle", "l'équilibre vie-travail"
    ]
  };
  
  return topics[category as keyof typeof topics] || ["le sujet demandé"];
}

function getComplexityDetail(complexity: string, category: string): string {
  const details = {
    beginner: {
      creative: "niveau débutant avec accompagnement étape par étape",
      technical: "approche accessible avec exemples concrets et documentation",
      business: "méthodes simples avec outils pratiques inclus",
      educational: "progression douce avec supports visuels",
      personal: "démarche bienveillante avec objectifs atteignables"
    },
    intermediate: {
      creative: "niveau intermédiaire avec autonomie partielle",
      technical: "maîtrise des concepts avec application pratique",
      business: "analyse approfondie avec recommandations stratégiques",
      educational: "méthodes variées avec évaluation continue",
      personal: "développement structuré avec défis progressifs"
    },
    advanced: {
      creative: "expertise avancée avec innovation disruptive",
      technical: "architecture complexe avec optimisations pointues",
      business: "stratégie sophistiquée avec analyse multidimensionnelle",
      educational: "pédagogie experte avec personnalisation avancée",
      personal: "transformation profonde avec techniques avancées"
    },
    expert: {
      creative: "maîtrise experte avec création de nouveaux paradigmes",
      technical: "solutions d'architecte avec innovations technologiques",
      business: "vision stratégique avec disruption de marché",
      educational: "recherche pédagogique avec méthodologies révolutionnaires",
      personal: "coaching de haut niveau avec transformation systémique"
    }
  };
  
  return details[complexity as keyof typeof details][category as keyof typeof details.beginner] || "niveau standard";
}

function getLengthDetail(length: string): string {
  const details = {
    short: "réponse concise et actionnable (15-30 minutes)",
    medium: "développement structuré avec exemples (45-90 minutes)",
    long: "analyse complète avec plan d'action détaillé (2-4 heures)"
  };
  
  return details[length as keyof typeof details] || "format standard";
}

function getComplexityLevel(complexity: string): string {
  const levels = {
    beginner: "un projet d'initiation",
    intermediate: "un projet standard",
    advanced: "un projet sophistiqué", 
    expert: "un projet d'expert"
  };
  
  return levels[complexity as keyof typeof levels] || "un projet";
}