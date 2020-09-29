


export function splitPairs(text: string): string[] {

    // if (text.length % 2) {
    //     text = [...text].concat('_').join('');
    // }
    // // slow but convenient
    // return text.split(/(.{1,2})/).filter(empty => empty);

    // Alternatively using recursion
    let [first, second = '_', ...rest] = text;
    return !first ? [] : [first+second, ...splitPairs(rest.join(''))];
}
