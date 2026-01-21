export function isActionConfirmation(text: string): boolean {
  const normalized = text.toLowerCase().trim();

  return [
    'sim',
    'ok',
    'pode',
    'pode continuar',
    'claro',
    'confirmo',
    'prosseguir',
    'vamos',
  ].some((keyword) => normalized.includes(keyword));
}
