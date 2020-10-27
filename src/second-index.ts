export function secondIndex(text: string, symbol: string): number | undefined {
    let firstIndex = text.indexOf(symbol) + 1;

    return (firstIndex > 0 && text.lastIndexOf(symbol) != (firstIndex - 1))
        ? text.slice(firstIndex).indexOf(symbol) + firstIndex
        : undefined;
}
