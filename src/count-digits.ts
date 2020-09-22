

export function countDigits(text: string): number {
    return text.split('').filter((ch) =>  '0123456789'.indexOf(ch) != -1).length;
}
