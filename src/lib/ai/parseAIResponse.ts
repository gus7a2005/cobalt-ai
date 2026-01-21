import { AIAction } from "./actions";


export function parseAIResponse(raw: string) : { text?: string; action?: AIAction } {
    try {
        const parsed = JSON.parse(raw);

        if (parsed.action && parsed.payload) {
            return {
                action: {
                    type: parsed.action, 
                    payload: parsed.payload
                } as AIAction,
            }
        }
    } catch {
        // Not JSON, return as text
    }

    return { text: raw };
}