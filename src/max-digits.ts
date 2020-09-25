

export function maxDigit(value: number): number {
    // Has to be es6. Otherwise downlevel iterator flag for es3/es5 comes to play
    return Number([...value.toString()].sort().pop());
}
