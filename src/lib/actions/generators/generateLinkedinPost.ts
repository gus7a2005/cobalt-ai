import { ActionPayLoad } from "../types";


export function generateLinkedinPost(action: ActionPayLoad): string {
  const topic =
    typeof action.meta?.topic === 'string'
      ? action.meta.topic
      : 'uma experiência profissional recente';

  return `
🚀 Compartilhando um marco importante da minha jornada profissional

Recentemente, tive a oportunidade de refletir sobre ${topic} e o quanto isso contribuiu para meu crescimento.

Cada desafio trouxe aprendizados valiosos, reforçando a importância de evoluir continuamente e aprender com o processo.

Seguimos em frente, sempre buscando fazer melhor 💪
  `.trim();
}
