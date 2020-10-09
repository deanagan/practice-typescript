import { isConstructorDeclaration } from "typescript";


export function isStressful(subj: string) : boolean {
    if (subj.endsWith('!!!') || (subj == subj.toUpperCase())) {
        return true;
    }
    const redWords = ["help", "urgent", "asap"];

    let clean_subject = [...subj.toLowerCase()].reduce((g, c) => {
        return  (g.charAt(g.length - 1) != c) ? g + c : g;
    });

    return redWords.some( e => {
        return clean_subject.includes(e);
    });

}
