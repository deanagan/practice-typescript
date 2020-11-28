


export function sumByType(values: Array<number | string>): [string, number] {

    return values.reduce((result, e) => {
        let [text, num] = result;

        if (Number.isInteger(e)) {
            num += +e;
        } else {
            text += e;
        }
        return [text, num];
    }, ['', 0]);

}