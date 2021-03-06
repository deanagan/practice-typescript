

export function betweenMarkers(line: string, left: string, right: string): string {
    return line.slice(line.indexOf(left) + 1, line.indexOf(right))
}

export function betweenWordMarkers(text: string, left: string, right: string): string {
    let begin = text.includes(left) ? text.indexOf(left) + left.length : 0;
    let end = text.includes(right) ? text.indexOf(right) : text.length;

    return text.slice(begin, end)
}
