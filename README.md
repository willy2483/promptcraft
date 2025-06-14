# 🎯 PromptCraft - Générateur de Prompts Intelligent

Générateur de prompts avancé conçu pour les professionnels techniques, avec des templates spécialisés en informatique forensic, recherche scientifique, et formation technique.

## ✨ Fonctionnalités

### 🎮 Générateur Standard
- **5 catégories** : Créatif, Technique, Business, Éducatif, Personnel
- **Templates avancés** respectant les standards du prompt engineering
- **Structures professionnelles** avec rôles, contextes, et contraintes
- **Caractères spéciaux** et délimiteurs (###, ---, <<<>>>)

### 🔧 Générateur Personnalisé
- **Templates spécialisés** pour techniciens forensic
- **Formulaire détaillé** : Rôle, Contexte, Objectif, Contraintes
- **8 domaines** : Forensic, Investigation, Apprentissage, Finance, Santé, Science, Enseignement, Documentation

### 📋 Historique Intelligent
- **Sauvegarde automatique** locale (localStorage)
- **Export/Import** JSON
- **Actions** : Copier, Réutiliser, Supprimer
- **Filtrage** par catégorie et date

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Démarrage rapide
```bash
# Cloner le projet
git clone https://github.com/[votre-username]/promptcraft.git
cd promptcraft

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🛠️ Technologies

- **Next.js 15.3.3** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styling moderne
- **ESLint** - Quality code

## 📖 Utilisation

### Templates Spécialisés Disponibles

#### 🔍 Informatique Forensic
- **Analyse forensic** - Investigation numérique et preuves
- **Investigation technique** - Diagnostic d'incidents
- **Documentation technique** - Rapports professionnels

#### 📚 Formation & Recherche  
- **Apprentissage technique** - Nouvelles technologies
- **Recherche scientifique** - Méthodologie rigoureuse
- **Enseignement** - Vulgarisation de concepts

#### 💰 Domaines Spécialisés
- **Analyse financière** - Concepts financiers
- **Sciences de la santé** - Recherche médicale

### Exemple d'Usage

1. **Onglet "Personnalisé"**
2. **Sélectionner** "Analyse forensic"
3. **Personnaliser** le contexte de votre incident
4. **Générer** → Prompt professionnel prêt !

## 📁 Structure du Projet

```
src/
├── app/
│   ├── page.tsx           # Interface principale
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Styles globaux
├── lib/
│   ├── promptGenerator.ts        # Générateur standard
│   ├── advancedPromptTemplates.ts # Templates avancés
│   ├── customPromptBuilder.ts    # Générateur personnalisé
│   └── promptHistory.ts          # Gestion historique
```

## 🔨 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production  
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Connecter à Vercel
npx vercel

# Ou déployer directement
npm run build
```

### Autres plateformes
Le projet est compatible avec toutes les plateformes supportant Next.js :
- Netlify
- AWS Amplify  
- Railway
- Heroku

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Conçu pour les professionnels techniques
- Optimisé pour l'informatique forensic  
- Templates basés sur les meilleures pratiques du prompt engineering

---

**🎯 PromptCraft - Des prompts professionnels en quelques clics !**
