
export function fromCamelCase(text: string): string {

    return text.charAt(0).toLowerCase() + text.slice(1).replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());

}