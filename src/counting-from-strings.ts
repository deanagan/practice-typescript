

export function countDigits(text: string): number {
    return text.split('').filter((ch) =>  '0123456789'.indexOf(ch) != -1).length;
}

export function mostWanted(text: string): string {

    return [...new Set(text.toLowerCase())]
        .filter((e) => e.match('[a-zA-Z]'))
        .sort((a,b) => {
        const aCount = text.match(RegExp(`${a}`, 'ig'))?.length ?? 0;
        const bCount = text.match(RegExp(`${b}`, 'ig'))?.length ?? 0;
        if (aCount != bCount) {
            return aCount - bCount
        }
        return b.charCodeAt(0) - a.charCodeAt(0);
    }).pop() ?? '';
}
