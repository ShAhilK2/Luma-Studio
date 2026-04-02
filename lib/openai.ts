import { createOpenAI } from '@ai-sdk/openai';



const openaiApiKey = process.env.OPEN_AI_API_KEY;
if (!openaiApiKey) {
  throw new Error('OPEN_AI_API_KEY is not set');
}


export const openaiprovider = openaiApiKey ? createOpenAI({
  apiKey: openaiApiKey,
}) : null;





