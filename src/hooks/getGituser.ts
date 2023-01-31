import { useEffect, useState } from "react";
import { contains, isObject } from "../utils";
export type Data = {
    avatar_url: string;
    htm_url: string;
    name: string;
    login: string;
    public_repos:number,
    email:string|null,
    bio:string,
    hirable:null|boolean,
};
export type ReturnedData = Data | null | undefined;
export function isValidData(val: unknown): val is Data {
    if (!isObject(val)) return false;
    if (!contains(val, "name") || !contains(val, "avatar_url")) return false;
    return true;
}
export function useGitUserData(name: string) {
    const state = useState<ReturnedData>(undefined);
    const [_, setData] = state;
    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`).then((res) => {
            if (res.status !== 200) return setData(null);
            res.json().then((data) => {
                setData({ ...(data as Data) });
            });
        });
    }, [name]);
    return state;
}
