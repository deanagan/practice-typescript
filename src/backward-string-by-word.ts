
export function backwardStringByWord(text: string): string {
    return text.split(' ').map( (word) => [...word].reverse().join('')).join(' ');
}