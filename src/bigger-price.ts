
export interface Stock {
    name: string,
    price: number,
};

export function biggerPrice(limit: number, data: Stock[]): Stock[] {
    return data.sort((a,b) => b.price - a.price).slice(0,limit);
}