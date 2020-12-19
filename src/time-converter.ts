

export function timeConverter(text: string): string {
    let [hour, minute] = text.split(':');
    return `${ +hour % 12 || 12 }:${minute.padStart(2)} ${+hour >= 12 ? 'p':'a'}.m.`;
}
