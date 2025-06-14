interface CustomPromptInput {
  context: string;
  objective: string;
  constraints: string;
  format: string;
  role: string;
  example: string;
  template: string;
}

interface BusinessTemplate {
  context: string;
  objective: string;
  constraints: string;
  format: string;
  role: string;
}

export function buildCustomPrompt(input: CustomPromptInput): string {
  const {
    context,
    objective,
    constraints,
    format,
    role,
    example
  } = input;

  // Construction du prompt structuré
  let promptStructure = `# 🎯 MISSION SPÉCIALISÉE

## 👤 VOTRE RÔLE
**Expertise**: ${role || 'Expert spécialisé'}
**Responsabilité**: Répondre avec précision et professionnalisme à la demande spécifique

`;

  // Ajout du contexte si fourni
  if (context.trim()) {
    promptStructure += `## 📋 CONTEXTE DE LA MISSION
${context}

`;
  }

  // Objectif principal (obligatoire)
  promptStructure += `## 🎯 OBJECTIF PRINCIPAL
${objective}

`;

  // Contraintes si fournies
  if (constraints.trim()) {
    promptStructure += `## ⚠️ CONTRAINTES À RESPECTER
${constraints}

`;
  }

  // Format de réponse si fourni
  if (format.trim()) {
    promptStructure += `## 📊 FORMAT DE RÉPONSE ATTENDU
Structurez votre réponse selon le format suivant : **${format}**

`;
  }

  // Exemple/référence si fourni
  if (example.trim()) {
    promptStructure += `## 💡 EXEMPLE/RÉFÉRENCE
${example}

`;
  }

  // Instructions finales
  promptStructure += `---
## 🚀 INSTRUCTIONS D'EXÉCUTION

### ✅ CRITÈRES DE QUALITÉ
- [ ] Réponse complète et structurée
- [ ] Respect des contraintes mentionnées
- [ ] Format de sortie approprié
- [ ] Niveau d'expertise adapté au contexte

### 📝 VOTRE RÉPONSE
**Commencez votre analyse/solution ici :**

`;

  // Ajout d'une signature professionnelle
  promptStructure += `---
*💼 Réponse attendue : Professionnelle, actionnable et adaptée au contexte spécifique*`;

  return promptStructure;
}

export function getBusinessTemplate(templateId: string): BusinessTemplate | null {
  const templates: Record<string, BusinessTemplate> = {
    forensic_analysis: {
      role: 'Expert en informatique forensic et investigation numérique',
      context: 'Vous menez une investigation forensic sur un incident de sécurité ou une affaire nécessitant l\'analyse de preuves numériques. Les enjeux juridiques et techniques sont importants.',
      objective: 'Conduire une analyse forensic rigoureuse pour identifier, préserver et analyser les preuves numériques tout en respectant les procédures légales.',
      constraints: 'Chaîne de custody à respecter, contraintes temporelles judiciaires, outils spécialisés requis, documentation légale obligatoire.',
      format: 'Rapport d\'expertise forensic avec méthodologie, preuves analysées et conclusions techniques'
    },
    technical_investigation: {
      role: 'Expert technique en diagnostic et résolution d\'incidents',
      context: 'Vous devez investiguer un incident technique complexe (panne système, problème de sécurité, dysfonctionnement) qui impacte les opérations.',
      objective: 'Diagnostiquer la cause racine de l\'incident, comprendre la chronologie des événements et proposer des solutions de remédiation.',
      constraints: 'Système en production critique, logs partiels disponibles, pression temporelle, multiples hypothèses à tester.',
      format: 'Rapport d\'investigation avec timeline, analyse technique et plan de remédiation'
    },
    learning_tech: {
      role: 'Formateur technique expert et pédagogue spécialisé',
      context: 'Vous souhaitez apprendre une nouvelle technologie, framework ou concept technique pour rester à jour dans votre domaine d\'expertise.',
      objective: 'Acquérir une compréhension approfondie et pratique de la technologie ciblée avec une approche structurée et progressive.',
      constraints: 'Temps d\'apprentissage limité, besoin d\'application pratique immédiate, niveau technique élevé requis.',
      format: 'Plan d\'apprentissage avec théorie, pratique, ressources et exercices progressifs'
    },
    financial_analysis: {
      role: 'Expert en analyse financière et économie appliquée',
      context: 'Vous devez comprendre ou analyser des concepts financiers, des investissements ou des mécanismes économiques pour votre développement professionnel.',
      objective: 'Acquérir une compréhension claire des mécanismes financiers et leur application pratique dans des contextes réels.',
      constraints: 'Complexité des marchés financiers, terminologie spécialisée, besoin de vulgarisation technique.',
      format: 'Analyse financière structurée avec définitions, exemples pratiques et applications'
    },
    health_science: {
      role: 'Expert en sciences de la santé et recherche médicale',
      context: 'Vous explorez des concepts médicaux, des avancées en santé ou des recherches scientifiques pour votre culture générale ou formation continue.',
      objective: 'Comprendre les mécanismes biologiques, les innovations médicales ou les protocoles de recherche en santé.',
      constraints: 'Littérature scientifique complexe, terminologie médicale spécialisée, besoin de sources fiables.',
      format: 'Synthèse scientifique avec explications claires, références et implications pratiques'
    },
    scientific_research: {
      role: 'Chercheur scientifique et méthodologue expert',
      context: 'Vous menez ou analysez une recherche scientifique nécessitant une approche méthodologique rigoureuse et une analyse critique.',
      objective: 'Développer une méthodologie de recherche solide, analyser des données scientifiques et formuler des conclusions valides.',
      constraints: 'Exigences de rigueur scientifique, peer review, reproductibilité des résultats, contraintes éthiques.',
      format: 'Protocole de recherche avec méthodologie, analyse statistique et conclusions scientifiques'
    },
    teaching_explanation: {
      role: 'Expert pédagogue et vulgarisateur scientifique',
      context: 'Vous devez expliquer des concepts techniques complexes à un public non expert ou former des collaborateurs sur des sujets spécialisés.',
      objective: 'Rendre accessible des concepts complexes en utilisant des analogies, exemples concrets et une progression pédagogique adaptée.',
      constraints: 'Niveau technique du public variable, temps de formation limité, besoin de maintenir l\'engagement.',
      format: 'Module pédagogique avec progression, exercices pratiques et évaluations'
    },
    documentation: {
      role: 'Expert en documentation technique et rédaction professionnelle',
      context: 'Vous devez rédiger une documentation technique, un rapport d\'expertise ou une procédure dans le cadre de votre activité professionnelle.',
      objective: 'Produire une documentation claire, complète et utilisable qui répond aux besoins des utilisateurs cibles.',
      constraints: 'Audience technique variée, standards de documentation à respecter, maintien à jour nécessaire.',
      format: 'Documentation structurée avec guides d\'utilisation, procédures et exemples pratiques'
    }
  };

  return templates[templateId] || null;
}