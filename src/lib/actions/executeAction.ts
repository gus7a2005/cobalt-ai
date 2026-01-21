import { ActionPayLoad } from './types';
import { createPostPipeline } from './pipelines';

export function executeAction(action: ActionPayLoad): string {
  switch (action.intent) {
    case 'CREATE_POST':
      return createPostPipeline(action);

    default:
      return 'Ação reconhecida, mas ainda não implementada.';
  }
}
