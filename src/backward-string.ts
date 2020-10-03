

export function backwardString(value: string): string {
    // spread operator requires es6 or es2015
    return [...value].reverse().join('');

}
