

export function splitList(values: number[]):number[][] {
    const firstHalf = Math.ceil(values.length / 2);
    return [values.slice(0,firstHalf), values.slice(firstHalf)];

    // Alternatively
    // return [ values.splice(0,  Math.ceil(values.length/2)), values]
}
