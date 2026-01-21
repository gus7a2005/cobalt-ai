import { IntentType } from '@/lib/intents/types';

export type ActionStatus =
  | 'IDLE'
  | 'DRAFT_GENERATED'
  | 'WAITING_CONFIRMATION'
  | 'CONFIRMED'
  | 'CANCELLED';

export interface ActionSession {
  intent: IntentType;
  status: ActionStatus;
  data: Record<string, unknown>;
  updatedAt: Date;
}
