export interface PromptConfig {
  category: string;
  length: 'short' | 'medium' | 'long';
  style: 'professional' | 'casual' | 'creative' | 'academic';
  complexity: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface GeneratedPrompt {
  id: string;
  content: string;
  config: PromptConfig;
  timestamp: Date;
}

import { generateAdvancedPrompt } from './advancedPromptTemplates';

export function generatePrompt(config: PromptConfig): string {
  return generateAdvancedPrompt(config);
}