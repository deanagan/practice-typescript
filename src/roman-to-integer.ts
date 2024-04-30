const romanNumeralLookup: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export function romanToInteger(input: string) {
  let prev: string = ''
  let total: number = 0

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i]
    const currentValue = romanNumeralLookup[currentChar]

    if (
      i < input.length - 1 &&
      currentValue < romanNumeralLookup[input[i + 1]]
    ) {
      prev = currentChar
      continue
    }

    if (prev !== '') {
      total += currentValue - romanNumeralLookup[prev]
      prev = ''
    } else {
      total += currentValue
    }
  }

  return total
}
