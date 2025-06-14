import { GeneratedPrompt, PromptConfig } from './promptGenerator';

const STORAGE_KEY = 'promptcraft_history';

export class PromptHistory {
  private static instance: PromptHistory;
  private history: GeneratedPrompt[] = [];

  private constructor() {
    this.loadFromStorage();
  }

  public static getInstance(): PromptHistory {
    if (!PromptHistory.instance) {
      PromptHistory.instance = new PromptHistory();
    }
    return PromptHistory.instance;
  }

  private loadFromStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          this.history = parsed.map((item: { id: string; content: string; config: PromptConfig; timestamp: string }) => ({
            ...item,
            timestamp: new Date(item.timestamp)
          }));
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'historique:', error);
        this.history = [];
      }
    }
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de l\'historique:', error);
      }
    }
  }

  public addPrompt(content: string, config: PromptConfig): GeneratedPrompt {
    const prompt: GeneratedPrompt = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      content,
      config,
      timestamp: new Date()
    };

    this.history.unshift(prompt); // Ajouter au début
    
    // Limiter à 100 prompts max
    if (this.history.length > 100) {
      this.history = this.history.slice(0, 100);
    }

    this.saveToStorage();
    return prompt;
  }

  public getHistory(): GeneratedPrompt[] {
    return [...this.history]; // Retourner une copie
  }

  public getPromptById(id: string): GeneratedPrompt | undefined {
    return this.history.find(prompt => prompt.id === id);
  }

  public deletePrompt(id: string): boolean {
    const index = this.history.findIndex(prompt => prompt.id === id);
    if (index !== -1) {
      this.history.splice(index, 1);
      this.saveToStorage();
      return true;
    }
    return false;
  }

  public clearHistory(): void {
    this.history = [];
    this.saveToStorage();
  }

  public getPromptsByCategory(category: string): GeneratedPrompt[] {
    return this.history.filter(prompt => prompt.config.category === category);
  }

  public getPromptsByDateRange(startDate: Date, endDate: Date): GeneratedPrompt[] {
    return this.history.filter(prompt => 
      prompt.timestamp >= startDate && prompt.timestamp <= endDate
    );
  }

  public exportHistory(): string {
    const exportData = {
      exportDate: new Date().toISOString(),
      version: '1.0',
      prompts: this.history
    };
    return JSON.stringify(exportData, null, 2);
  }

  public importHistory(jsonData: string): boolean {
    try {
      const importData = JSON.parse(jsonData);
      if (importData.prompts && Array.isArray(importData.prompts)) {
        const validPrompts = importData.prompts
          .filter((prompt: { id?: string; content?: string; config?: PromptConfig }) => prompt.id && prompt.content && prompt.config)
          .map((prompt: { id: string; content: string; config: PromptConfig; timestamp: string }) => ({
            ...prompt,
            timestamp: new Date(prompt.timestamp)
          }));
        
        this.history = validPrompts;
        this.saveToStorage();
        return true;
      }
    } catch (error) {
      console.error('Erreur lors de l\'import:', error);
    }
    return false;
  }

  public getStats() {
    const totalPrompts = this.history.length;
    const categoriesCount = this.history.reduce((acc, prompt) => {
      acc[prompt.config.category] = (acc[prompt.config.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const stylesCount = this.history.reduce((acc, prompt) => {
      acc[prompt.config.style] = (acc[prompt.config.style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    const recentPrompts = this.history.filter(prompt => prompt.timestamp >= lastWeek).length;

    return {
      totalPrompts,
      categoriesCount,
      stylesCount,
      recentPrompts
    };
  }
}