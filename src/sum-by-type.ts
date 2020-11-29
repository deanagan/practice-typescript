


export function sumByType(values: Array<number | string>): [string, number] {

    return values.reduce(([num, text], e) =>
        (e === +e) ? [num, text + e] : [num + e, text], ['', 0]);

}