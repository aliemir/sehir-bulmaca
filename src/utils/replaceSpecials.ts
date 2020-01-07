const replaceSpecials = (str: string): string => {
  return str
    .replace(/ş/gi, 's')
    .replace(/ö/gi, 'o')
    .replace(/ü/gi, 'u')
    .replace(/ı/gi, 'i')
    .replace(/ç/gi, 'c')
    .replace(/ğ/gi, 'g')
    .replace(/İ/gi, 'i')
    .toLowerCase()
}

export default replaceSpecials
