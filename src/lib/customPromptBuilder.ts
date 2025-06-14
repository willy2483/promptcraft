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
    browser_analysis: {
      role: 'Expert forensic spécialisé en analyse de navigation web',
      context: 'Investigation forensic nécessitant l\'analyse complète de l\'activité de navigation web d\'un utilisateur. Les données incluent historique de navigation, cookies, cache, téléchargements, et sessions.',
      objective: 'Analyser l\'historique de navigation pour reconstituer les activités web, identifier les sites visités, les téléchargements effectués, et établir une chronologie des actions utilisateur.',
      constraints: 'Données fragmentées possibles, navigation privée non trackée, cache vidé, formats de données spécifiques aux navigateurs (Chrome, Firefox, Safari, Edge).',
      format: 'Rapport d\'analyse avec timeline détaillée, liste des sites visités, téléchargements, et analyse comportementale'
    },
    internet_search_analysis: {
      role: 'Expert forensic en analyse des recherches et comportements en ligne',
      context: 'Analyse forensic des requêtes de recherche effectuées par un utilisateur sur différents moteurs de recherche et plateformes. Investigation des patterns de recherche et intentions.',
      objective: 'Reconstituer les recherches effectuées, analyser les patterns de recherche, identifier les intentions utilisateur et établir des liens avec l\'enquête en cours.',
      constraints: 'Recherches effacées, navigation privée, utilisation de VPN/Tor, multiples moteurs de recherche, recherches vocales non loggées.',
      format: 'Analyse comportementale avec catégorisation des recherches, timeline, et corrélations avec autres activités'
    },
    event_logs_analysis: {
      role: 'Expert forensic en analyse de journaux d\'événements système',
      context: 'Investigation forensic nécessitant l\'analyse des logs Windows Event Logs, Syslog, journaux d\'applications et logs de sécurité pour identifier des activités suspectes ou reconstituer une chronologie.',
      objective: 'Analyser les journaux d\'événements pour identifier les anomalies, reconstituer la chronologie des événements, détecter les intrusions et analyser les actions utilisateur/système.',
      constraints: 'Logs volumineux, rotation des logs, événements manquants, formats propriétaires, corrélation entre multiple sources de logs.',
      format: 'Rapport d\'analyse avec timeline des événements critiques, anomalies détectées, et recommandations sécurité'
    },
    email_analysis: {
      role: 'Expert forensic en analyse d\'emails et communications électroniques',
      context: 'Investigation forensic d\'emails suspects, analyse de headers, pièces jointes, métadonnées, et reconstruction de conversations. Analyse anti-phishing et détection de malware.',
      objective: 'Analyser les emails pour authentifier l\'expéditeur, examiner les pièces jointes, extraire les métadonnées, et identifier les indicateurs de compromission ou d\'activité malveillante.',
      constraints: 'Emails chiffrés, headers falsifiés, pièces jointes corrompues, multiples formats de messagerie (PST, EML, MBOX), authentification SPF/DKIM.',
      format: 'Rapport technique avec analyse de headers, métadonnées extraites, résultats antivirus, et évaluation des risques'
    },
    file_system_analysis: {
      role: 'Expert forensic en analyse de système de fichiers et récupération de données',
      context: 'Investigation forensic du système de fichiers pour analyser l\'arborescence, récupérer des fichiers supprimés, analyser les timestamps, et identifier les modifications système.',
      objective: 'Analyser la structure du système de fichiers, récupérer les données supprimées, examiner les métadonnées des fichiers, et reconstituer l\'activité utilisateur basée sur les fichiers.',
      constraints: 'Fichiers fragmentés, overwriting des données, chiffrement, systèmes de fichiers multiples (NTFS, FAT32, ext4, APFS), timestamps modifiés.',
      format: 'Rapport d\'analyse avec arborescence reconstituée, fichiers récupérés, timeline des modifications, et hash des fichiers critiques'
    },
    network_analysis: {
      role: 'Expert forensic en analyse de trafic réseau et communications',
      context: 'Investigation forensic du trafic réseau pour analyser les communications, identifier les connexions suspectes, examiner les protocoles utilisés et détecter les exfiltrations de données.',
      objective: 'Analyser les captures réseau pour identifier les communications malveillantes, reconstituer les sessions, examiner les protocoles, et détecter les transferts de données non autorisés.',
      constraints: 'Trafic chiffré (HTTPS/TLS), captures volumineuses, protocoles propriétaires, analyse en temps réel vs post-incident, corrélation multi-sources.',
      format: 'Rapport d\'analyse avec mapping des communications, protocoles identifiés, IOCs réseau, et recommandations de sécurité'
    },
    mobile_analysis: {
      role: 'Expert forensic en analyse d\'appareils mobiles et données associées',
      context: 'Investigation forensic d\'appareils mobiles (iOS/Android) incluant l\'extraction de SMS, historique d\'appels, applications, données de géolocalisation, et artefacts système.',
      objective: 'Extraire et analyser les données mobiles pour reconstituer les activités utilisateur, communications, déplacements, et usage des applications.',
      constraints: 'Chiffrement des appareils, verrouillage d\'activation, données cloud synchronisées, applications tierces, formats propriétaires iOS/Android.',
      format: 'Rapport d\'extraction mobile avec timeline des activités, données de géolocalisation, communications, et analyse comportementale'
    },
    malware_analysis: {
      role: 'Expert forensic en analyse de malware et détection de menaces',
      context: 'Investigation forensic d\'un échantillon de malware suspecté pour analyser son comportement, identifier ses capacités, extraire les IOCs, et évaluer l\'impact sur le système.',
      objective: 'Analyser le malware pour comprendre son fonctionnement, identifier ses vecteurs d\'attaque, extraire les indicateurs de compromission, et évaluer les dommages potentiels.',
      constraints: 'Malware polymorphe, techniques d\'évasion, analyse en sandbox, environnement sécurisé requis, évolution constante des menaces.',
      format: 'Rapport d\'analyse de malware avec IOCs, TTPs identifiées, recommandations de mitigation, et signatures de détection'
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