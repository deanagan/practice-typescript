

export function wordsOrder(text: string, words: string[]): boolean {

    if ([...new Set(words)].join('').length === words.join('').length) {
        text.split(' ').forEach(t => {
            if (t === words[0]) {
              words.shift();
            }
        });
        return words.length === 0;
    }

    return false;
}
