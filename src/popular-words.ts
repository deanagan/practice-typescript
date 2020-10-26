

export class LookUp {
    [key: string]: number;
}


export function popularWords(text: string, words: string[]) {
    let result : LookUp = new LookUp();
    const textList = text.toLowerCase().split(/[\s]+/g);

    words.forEach((word) => {
         result[word] = textList.filter((e) => word == e).length;
    });

    return result;
}
