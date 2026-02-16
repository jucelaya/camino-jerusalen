
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
  }

  async getReflectionInsight(userReflection: string, pageTopic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analiza esta reflexión sobre '${pageTopic}' basada en el Capítulo 7 de 'Camino a Jerusalén'. Proporciona un breve comentario pastoral, alentador y profundo de máximo 3 frases: "${userReflection}"`,
        config: {
          temperature: 0.7,
        }
      });
      return response.text || "Gracias por compartir tu reflexión. Sigue adelante en tu camino con Cristo.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Tu reflexión es valiosa. Que el Espíritu te siga guiando.";
    }
  }
}

export const geminiService = new GeminiService();
