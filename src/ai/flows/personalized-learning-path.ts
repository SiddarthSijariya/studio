'use server';

/**
 * @fileOverview Personalized learning path flow for EdifyLearn.
 *
 * - personalizedLearningPath - A function that returns the optimal individualized learning plan.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  usageStatistics: z.string().describe('The user usage statistics from EdifyLearn.'),
  availableTools: z.string().describe('A list of available tools on EdifyLearn.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z.string().describe('The optimal individualized learning plan.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizedLearningPath(input: PersonalizedLearningPathInput): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI learning path generator for EdifyLearn.

  Based on the user's usage statistics and available tools, generate a personalized learning path.

  Usage Statistics: {{{usageStatistics}}}
  Available Tools: {{{availableTools}}}
  `,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
