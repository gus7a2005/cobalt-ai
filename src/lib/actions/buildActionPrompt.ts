import { ActionPayLoad } from "./types";


export function buildActionPrompt(action: ActionPayLoad): string {
  switch (action.intent) {
    case 'CREATE_POST':
      return `
Posso te ajudar a criar uma nova publicação no LinkedIn.

📝 O que vou fazer:
- Gerar um rascunho de post
- Ajustar o tom (profissional, inspirador, técnico)
- Adaptar ao seu objetivo

Quer que eu continue?
      `.trim();

    case 'SEARCH_PEOPLE':
      return `
Posso buscar perfis no LinkedIn com base no que você descreveu.

O que posso considerar:
- Cargo
- Área
- Tipo de empresa
- Região

Quer que eu prossiga com essa busca?
      `.trim();

    default:
      return 'Posso te ajudar com isso. Quer que eu continue?';
  }
}
