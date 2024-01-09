export const getKeywordsString = (keyWords: string): string =>
  keyWords.trim().toLowerCase().replace(/\s/g, '%20').replace(/,%20/g, '%20AND%20')
