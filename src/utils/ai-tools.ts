import {createOpenAI} from '@ai-sdk/openai';
import {createAnthropic} from '@ai-sdk/anthropic';
import {createGoogleGenerativeAI} from '@ai-sdk/google';
import {createDeepSeek} from '@ai-sdk/deepseek';
import {createGroq} from '@ai-sdk/groq';
import {LanguageModelV1} from 'ai';
// import { createDeepSeek } from '@ai-sdk/deepseek';

export type ApiKey = {
    service: string;
    key: string;
    addedAt: string;
};

export type AIConfig = {
    model: string;
    apiKeys: Array<ApiKey>;
};

/**
 * Initializes an AI client based on the provided configuration
 * Falls back to default OpenAI configuration if no config is provided
 */
export function initializeAIClient(config?: AIConfig, isPro?: boolean, useThinking?: boolean) {
    // If no specific configuration is provided, default to gemini-2.0-flash
    if (!config) {
        if (!process.env.GEMINI_API_KEY) throw new Error('Google API key not found');
        return createGoogleGenerativeAI({
            apiKey: process.env.GEMINI_API_KEY,
        })('gemini-2.0-flash') as LanguageModelV1;
    }

    const {model, apiKeys} = config;

    void useThinking;
    //


    // Default to gemini-2.0-flash for Pro users as well
    if (isPro) {
        // Handle Pro-specific configurations
        if (model.startsWith('claude')) {
            if (!process.env.ANTHROPIC_API_KEY) throw new Error('Anthropic API key not found');
            return createAnthropic({apiKey: process.env.ANTHROPIC_API_KEY})(model) as LanguageModelV1;
        }

        if (model.startsWith('deepseek')) {
            if (!process.env.DEEPSEEK_API_KEY) throw new Error('DeepSeek API key not found');
            return createDeepSeek({apiKey: process.env.DEEPSEEK_API_KEY})(model) as LanguageModelV1;
        }

        if (model.startsWith('gemma')) {
            if (!process.env.GROQ_API_KEY) throw new Error('Groq API key not found');
            return createGroq({apiKey: process.env.GROQ_API_KEY})(model) as LanguageModelV1;
        }

        // Fall back to `gemini-2.0-flash` for Pro users
        if (!process.env.GEMINI_API_KEY) throw new Error('Google API key not found');
        return createGoogleGenerativeAI({
            apiKey: process.env.GEMINI_API_KEY,
        })('gemini-2.0-flash') as LanguageModelV1;
    }

    // Handle non-Pro users: Use gemini-2.0-flash by default
    if (!model || model === 'gemini-2.0-flash') {
        const googleKey = apiKeys.find(k => k.service === 'google')?.key || process.env.GEMINI_API_KEY;
        if (!googleKey) throw new Error('Google API key not found');
        return createGoogleGenerativeAI({apiKey: googleKey})('gemini-2.0-flash') as LanguageModelV1;
    }

    // Handle any specific model configuration by users
    if (model.startsWith('claude')) {
        const anthropicKey = apiKeys.find(k => k.service === 'anthropic')?.key;
        if (!anthropicKey) throw new Error('Anthropic API key not found');
        return createAnthropic({apiKey: anthropicKey})(model) as LanguageModelV1;
    }

    if (model.startsWith('gemini')) {
        const googleKey = apiKeys.find(k => k.service === 'google')?.key;
        if (!googleKey) throw new Error('Google API key not found');
        return createGoogleGenerativeAI({apiKey: googleKey})(model) as LanguageModelV1;
    }

    if (model.startsWith('deepseek')) {
        const deepseekKey = apiKeys.find(k => k.service === 'deepseek')?.key;
        if (!deepseekKey) throw new Error('DeepSeek API key not found');
        return createDeepSeek({apiKey: deepseekKey})(model) as LanguageModelV1;
    }

    if (model.startsWith('gemma')) {
        const groqKey = apiKeys.find(k => k.service === 'groq')?.key;
        if (!groqKey) throw new Error('Groq API key not found');
        return createGroq({apiKey: groqKey})(model) as LanguageModelV1;
    }

    // OpenAI fallback for unsupported models
    const openaiKey = apiKeys.find(k => k.service === 'openai')?.key;
    if (!openaiKey) throw new Error('OpenAI API key not found');
    return createOpenAI({apiKey: openaiKey})(model) as LanguageModelV1;
}

