

export function removeAllBefore(values: number[], b: number): number[] {
    return values.includes(b) ? values.slice(values.indexOf(b)) : values;
}
