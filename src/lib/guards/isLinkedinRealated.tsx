export function isLinkedInRelated(text: string) {
  const keywords = [
    'linkedin',
    'perfil',
    'headline',
    'sobre',
    'experiência',
    'vaga',
    'recrutador',
    'networking',
    'currículo',
    'cv',
    'carreira',
    'emprego',
    'trabalho',
  ];

  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}
