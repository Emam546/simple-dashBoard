import { useEffect, useState } from "react";
import { contains, isObject } from "../utils";

export type Data = {
    avatar_url: string;
    html_url: string;
    name: string;
    login: string;
    public_repos: number;
    email: string | null;
    bio: string;
    hirable: null | boolean;
    location: string | null;
    followers: number;
    following: number;
    created_at: string;
};
export type ReturnedData = Data | null | undefined;
export function isValidData(val: unknown): val is Data {
    if (!isObject(val)) return false;
    if (!contains(val, "name") || !contains(val, "avatar_url")) return false;
    return true;
}
export function useGitUserData(name: string) {
    const state = useState<ReturnedData>(undefined);
    const [, setData] = state;
    useEffect(() => {
        const abort = new AbortController();
        fetch(`https://api.github.com/users/${name}`, {
            signal: abort.signal,
        }).then((res) => {
            if (res.status !== 200) return setData(null);
            res.json()
                .then((data) => {
                    if (isValidData(data)) setData(data);
                })
                .catch((err) => {
                    if (err.name == "AbortError") return;
                });
        });
        return () => abort.abort();
    }, [name]);

    return state;
}
