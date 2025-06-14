'use client';

import { useState, useEffect } from 'react';
import { generatePrompt, PromptConfig, GeneratedPrompt } from '@/lib/promptGenerator';
import { PromptHistory } from '@/lib/promptHistory';
import { buildCustomPrompt, getBusinessTemplate } from '@/lib/customPromptBuilder';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLength, setSelectedLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [selectedStyle, setSelectedStyle] = useState<'professional' | 'casual' | 'creative' | 'academic'>('professional');
  const [selectedComplexity, setSelectedComplexity] = useState<'beginner' | 'intermediate' | 'advanced' | 'expert'>('intermediate');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'generator' | 'custom' | 'history'>('generator');
  const [history, setHistory] = useState<GeneratedPrompt[]>([]);
  const [historyInstance] = useState(() => PromptHistory.getInstance());

  // États pour le prompt personnalisé
  const [customContext, setCustomContext] = useState('');
  const [customObjective, setCustomObjective] = useState('');
  const [customConstraints, setCustomConstraints] = useState('');
  const [customFormat, setCustomFormat] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [customExample, setCustomExample] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const professionalTemplates = [
    // Templates Forensic spécialisés
    { id: 'browser_analysis', name: 'Analyse de navigation web', description: 'Historique, cookies, téléchargements, onglets' },
    { id: 'internet_search_analysis', name: 'Analyse des recherches internet', description: 'Requêtes de recherche et comportements en ligne' },
    { id: 'event_logs_analysis', name: 'Analyse des journaux d\'événements', description: 'Logs système, sécurité et applications' },
    { id: 'email_analysis', name: 'Analyse d\'emails', description: 'Headers, pièces jointes, métadonnées' },
    { id: 'file_system_analysis', name: 'Analyse du système de fichiers', description: 'Arborescence, fichiers supprimés, timestamps' },
    { id: 'network_analysis', name: 'Analyse réseau', description: 'Trafic, connexions, protocoles' },
    { id: 'mobile_analysis', name: 'Analyse mobile', description: 'SMS, appels, apps, géolocalisation' },
    { id: 'malware_analysis', name: 'Analyse de malware', description: 'Comportement, IOCs, signatures' },
    
    // Templates génériques
    { id: 'learning_tech', name: 'Apprentissage technique', description: 'Formation sur nouvelles technologies' },
    { id: 'financial_analysis', name: 'Analyse financière', description: 'Compréhension concepts financiers' },
    { id: 'health_science', name: 'Sciences de la santé', description: 'Apprentissage médical et recherche santé' },
    { id: 'scientific_research', name: 'Recherche scientifique', description: 'Méthodologie et analyse scientifique' },
    { id: 'teaching_explanation', name: 'Enseignement/Explication', description: 'Expliquer des concepts complexes' },
    { id: 'documentation', name: 'Documentation technique', description: 'Rédaction rapports et documentation' }
  ];

  const categories = [
    { id: 'creative', name: 'Créatif', description: 'Écriture, art, brainstorming' },
    { id: 'technical', name: 'Technique', description: 'Code, analyse, problem-solving' },
    { id: 'business', name: 'Business', description: 'Marketing, stratégie, finance' },
    { id: 'educational', name: 'Éducatif', description: 'Apprentissage, formation, tutorat' },
    { id: 'personal', name: 'Personnel', description: 'Développement, réflexion, coaching' }
  ];

  useEffect(() => {
    setHistory(historyInstance.getHistory());
  }, [historyInstance]);

  const handleGeneratePrompt = async () => {
    if (!selectedCategory) return;
    
    setIsGenerating(true);
    
    // Simulation d'un délai de génération
    setTimeout(() => {
      const config: PromptConfig = {
        category: selectedCategory,
        length: selectedLength,
        style: selectedStyle,
        complexity: selectedComplexity
      };
      
      const prompt = generatePrompt(config);
      setGeneratedPrompt(prompt);
      
      // Ajouter à l'historique
      historyInstance.addPrompt(prompt, config);
      setHistory(historyInstance.getHistory());
      
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = async (text?: string) => {
    const textToCopy = text || generatedPrompt;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
    }
  };

  const deleteFromHistory = (id: string) => {
    historyInstance.deletePrompt(id);
    setHistory(historyInstance.getHistory());
  };

  const reusePrompt = (prompt: GeneratedPrompt) => {
    setSelectedCategory(prompt.config.category);
    setSelectedLength(prompt.config.length);
    setSelectedStyle(prompt.config.style);
    setSelectedComplexity(prompt.config.complexity);
    setGeneratedPrompt(prompt.content);
    setActiveTab('generator');
  };

  const clearHistory = () => {
    historyInstance.clearHistory();
    setHistory([]);
  };

  const exportHistory = () => {
    const data = historyInstance.exportHistory();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `promptcraft-history-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateCustomPrompt = () => {
    if (!customObjective.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      const customPrompt = buildCustomPrompt({
        context: customContext,
        objective: customObjective,
        constraints: customConstraints,
        format: customFormat,
        role: customRole,
        example: customExample,
        template: selectedTemplate
      });

      setGeneratedPrompt(customPrompt);

      // Ajouter à l'historique avec une config spéciale
      const config: PromptConfig = {
        category: 'custom',
        length: 'medium',
        style: 'professional',
        complexity: 'intermediate'
      };

      historyInstance.addPrompt(customPrompt, config);
      setHistory(historyInstance.getHistory());
      setIsGenerating(false);
    }, 1000);
  };

  const loadTemplate = (templateId: string) => {
    const templates = getBusinessTemplate(templateId);
    if (templates) {
      setCustomContext(templates.context);
      setCustomObjective(templates.objective);
      setCustomConstraints(templates.constraints);
      setCustomFormat(templates.format);
      setCustomRole(templates.role);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            PromptCraft
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Générateur intelligent de prompts personnalisés
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex mb-8 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
          <button
            onClick={() => setActiveTab('generator')}
            className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors ${
              activeTab === 'generator'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Générateur
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors ${
              activeTab === 'custom'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Personnalisé
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Historique ({history.length})
          </button>
        </div>

        {activeTab === 'generator' ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Configuration</h2>
            
            {/* Categories */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Catégorie
              </label>
              <div className="grid grid-cols-1 gap-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{category.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parameters */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Longueur
                </label>
                <select
                  value={selectedLength}
                  onChange={(e) => setSelectedLength(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="short">Court (1-2 phrases)</option>
                  <option value="medium">Moyen (1 paragraphe)</option>
                  <option value="long">Long (plusieurs paragraphes)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Style
                </label>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="professional">Professionnel</option>
                  <option value="casual">Décontracté</option>
                  <option value="creative">Créatif</option>
                  <option value="academic">Académique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Complexité
                </label>
                <select
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="beginner">Débutant</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="advanced">Avancé</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGeneratePrompt}
              disabled={!selectedCategory || isGenerating}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              {isGenerating ? 'Génération...' : 'Générer le Prompt'}
            </button>
          </div>

          {/* Result Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Prompt Généré</h2>
            
            {generatedPrompt ? (
              <div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4 min-h-[200px]">
                  <p className="text-gray-900 dark:text-white leading-relaxed">
                    {generatedPrompt}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Copier
                  </button>
                  <button
                    onClick={() => setGeneratedPrompt('')}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Effacer
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Sélectionnez une catégorie et cliquez sur &quot;Générer le Prompt&quot; pour commencer
                </p>
              </div>
            )}
          </div>
        </div>
        ) : activeTab === 'custom' ? (
          /* Custom Prompt Panel */
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Configuration Panel */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Prompt Personnalisé
              </h2>

              {/* Templates spécialisés */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Templates spécialisés (optionnel)
                </label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => {
                    setSelectedTemplate(e.target.value);
                    if (e.target.value) loadTemplate(e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-2"
                >
                  <option value="">Commencer de zéro</option>
                  {professionalTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
                {selectedTemplate && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {professionalTemplates.find(t => t.id === selectedTemplate)?.description}
                  </p>
                )}
              </div>

              {/* Rôle/Persona */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rôle/Persona <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                  placeholder="Ex: Expert forensic, Analyste technique, Chercheur, etc."
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Contexte */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contexte de votre problématique
                </label>
                <textarea
                  value={customContext}
                  onChange={(e) => setCustomContext(e.target.value)}
                  placeholder="Décrivez l'incident, l'environnement technique, les systèmes impliqués..."
                  rows={3}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Objectif */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Objectif précis <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={customObjective}
                  onChange={(e) => setCustomObjective(e.target.value)}
                  placeholder="Que voulez-vous obtenir exactement ? Quel résultat attendez-vous ?"
                  rows={2}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Contraintes */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraintes spécifiques
                </label>
                <textarea
                  value={customConstraints}
                  onChange={(e) => setCustomConstraints(e.target.value)}
                  placeholder="Outils disponibles, contraintes légales, délais, accès limité..."
                  rows={2}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Format souhaité */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Format de réponse souhaité
                </label>
                <input
                  type="text"
                  value={customFormat}
                  onChange={(e) => setCustomFormat(e.target.value)}
                  placeholder="Ex: rapport technique, procédure, analyse, documentation..."
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Exemple/Référence */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Exemple ou référence (optionnel)
                </label>
                <textarea
                  value={customExample}
                  onChange={(e) => setCustomExample(e.target.value)}
                  placeholder="Donnez un exemple de ce que vous cherchez ou une référence..."
                  rows={2}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <button
                onClick={generateCustomPrompt}
                disabled={!customObjective.trim() || isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {isGenerating ? 'Génération...' : 'Générer le Prompt Personnalisé'}
              </button>
            </div>

            {/* Result Panel - Same as generator */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Prompt Généré</h2>
              
              {generatedPrompt ? (
                <div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4 min-h-[200px] max-h-[500px] overflow-y-auto">
                    <pre className="text-gray-900 dark:text-white leading-relaxed whitespace-pre-wrap text-sm">
                      {generatedPrompt}
                    </pre>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyToClipboard()}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Copier
                    </button>
                    <button
                      onClick={() => setGeneratedPrompt('')}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Effacer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center min-h-[200px] flex items-center justify-center">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Remplissez les champs obligatoires et cliquez sur &quot;Générer&quot;
                    </p>
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      <p>✓ Rôle défini</p>
                      <p>✓ Objectif précis</p>
                      <p>• Contexte (recommandé)</p>
                      <p>• Contraintes (si applicable)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* History Panel */
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Historique des Prompts
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={exportHistory}
                  disabled={history.length === 0}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  Exporter
                </button>
                <button
                  onClick={clearHistory}
                  disabled={history.length === 0}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  Vider
                </button>
              </div>
            </div>

            {history.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Aucun prompt généré pour le moment.
                </p>
                <p className="text-gray-400 dark:text-gray-500 mt-2">
                  Utilisez le générateur pour créer vos premiers prompts !
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {history.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                          {categories.find(c => c.id === prompt.config.category)?.name || prompt.config.category}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          {prompt.config.length}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          {prompt.config.style}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          {prompt.config.complexity}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {prompt.timestamp.toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    
                    <p className="text-gray-900 dark:text-white mb-4 leading-relaxed">
                      {prompt.content}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(prompt.content)}
                        className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
                      >
                        Copier
                      </button>
                      <button
                        onClick={() => reusePrompt(prompt)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                      >
                        Réutiliser
                      </button>
                      <button
                        onClick={() => deleteFromHistory(prompt.id)}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
