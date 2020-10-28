export function getSortedElementFrequency(items: any[]) : any[] {

    function frequencyCount(item: any) {
        return items.filter((e: any) => e == item).length;
    }

    return items.sort((a,b) =>
    frequencyCount(a) === frequencyCount(b) ?
            items.indexOf(a) - items.indexOf(b) :
            frequencyCount(b) - frequencyCount(a)
    );
}