

export function firstWord(text: string): string {
    // split by ',', spaces, or dots/full stop.
    return text.split(/[\s,.]+/).filter((s) => s)[0];
}

//console.log('Example:');
//console.log(firstWord('Hello world'));

// These "asserts" are used for self-checking
//assert.equal(firstWord('Hello world'), 'Hello');
//assert.equal(firstWord('a word'), 'a');
//assert.equal(firstWord('hi'), 'hi');
