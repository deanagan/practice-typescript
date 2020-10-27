export function secondIndex(text: string, symbol: string): number | undefined {
    let firstIndex = text.indexOf(symbol) + 1;

    return text.slice(firstIndex).indexOf(symbol) + firstIndex;
}
