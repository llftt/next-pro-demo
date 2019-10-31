export function stringify(data: any): string {
    if (typeof data === 'string') {
        return data;
    }
    return JSON.stringify(data, null, 2);
}
