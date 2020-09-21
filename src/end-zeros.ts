import { createPrinter, isConstructorDeclaration } from "typescript";

export function endZeros(value: number): number {
    let endZeroCount = 0;

    const numbers = [...value.toString()];

    for(let n = numbers.length - 1; n >= 0; n--) {
        if (numbers[n] !== '0') {
            break;
        } else {
            endZeroCount++;
        }
    }

    // Alternate solution
    // s.length - s.replace(/0*$/, '').length);

    return endZeroCount;
}
