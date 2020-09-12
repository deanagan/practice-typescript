

export function threeWords(texts: string) : boolean {
    return texts.split(' ').reduce((total, word) => total + (Number.isNaN(+word) ? 1 : -total), 0) >= 3;
}