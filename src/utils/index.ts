export function contains(val: Object, name: string): val is { name: unknown } {
    return val.hasOwnProperty(name);
}
export function isObject(val: unknown): val is Object {
    return typeof val === "object" && !Array.isArray(val) && val !== null;
}
export function Date2String(date:Date){
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

}
