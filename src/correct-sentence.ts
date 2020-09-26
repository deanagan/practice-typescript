

export function correctSentence(text: string): string {

    return text.charAt(0).toUpperCase() + text.slice(1).replace(/[\sa-zA-Z]$/, (ch) => ch + '.');
}
