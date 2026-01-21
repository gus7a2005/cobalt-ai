import { IntentType } from "../intents/types";

export type ActionStatus = 'DRAFT' | 'AWAITING_CONFIRMATION' | 'CONFIRMED';

export interface ActionPayLoad {
    id: string,
    intent: IntentType, 
    status: ActionStatus,
    title: string, 
    description: string, 
    preview?: string,
    meta?: Record<string, unknown>,
}