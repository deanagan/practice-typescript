

export function threeWords(text: string) : boolean {
    return text.split(' ')
        .reduce((total, word) => total + ((Number.isNaN(+word) || total >= 3) ? 1 : -total), 0) >= 3;
}