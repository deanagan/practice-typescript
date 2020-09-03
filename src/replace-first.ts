import assert from "assert";

function replaceFirst(values: number[]): number[] {
    return values.length > 0 ? values.slice(1).concat(values[0]) : [];
}

console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));

// These "asserts" are used for self-checking
assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");

class Question {
    constructor(
    public title: string,
    public content: string,
    ){}
};

let questions : Question[] = [
     new Question("Alice in Wonderland", "fox jumped over the lazy dog") ,
     new Question("Jumanji", "fox jumped over the lazy cat") ,
     new Question("Dr Seuss", "fox jumped over the lazy dog")
];
let criteria = "dog"
let result = questions.filter(
    q =>
      q.title.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
      q.content.toLowerCase().indexOf(criteria.toLowerCase()) >= 0
  );

  console.log(result);