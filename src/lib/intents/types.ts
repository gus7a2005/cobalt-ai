export type IntentType = 
    | 'CREATE_POST'
    | 'SEARCH_PEOPLE'
    | 'OPTIMIZE_PROFILE'
    | 'NETWORKING_ADVICE'
    | 'JOB_SEARCH'
    | 'CAREER_GUIDANCE'
    | 'IMPROVE_PROFILE'
    | 'GENERAL_CHAT'
    | 'UNKNOWN';

export interface IntentPayload {
    type: IntentType,
    confidence: number,
    data?: Record<string, unknown>;
}