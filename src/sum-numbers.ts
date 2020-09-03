
export function sumNumbers(test: string): number {
    return  test.split(' ').map(word => +word || 0).reduce((total, current) => total + current, 0);
}

export function sumNumbersF(test?: string): number | undefined {
  return test?.split(' ').filter(word => !Number.isNaN(word)).map(word => +word || 0).reduce((total, current) => total + current, 0);
}

export function sumNumbersC(test: string | null): number {
  let words = test ?? "";
  return words.split(' ').map(word => +word || 0).reduce((total, current) => total + current, 0);
}



export class Touched {
  [key: string]: boolean;
}