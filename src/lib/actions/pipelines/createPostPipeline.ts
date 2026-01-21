import { ActionPayLoad } from '../types';
import { generateLinkedinPost } from '../generators/generateLinkedinPost';

export function createPostPipeline(action: ActionPayLoad): string {
  const draft = generateLinkedinPost(action);

  return `
  Rascunho de post para LinkedIn:

${draft}

Deseja editar ou publicar?
  `;
}
