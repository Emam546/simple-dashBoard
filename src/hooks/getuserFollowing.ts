import { useEffect, useState } from "react";
export type FollowingData = {
    avatar_url: string;
    html_url: string;
    login: string;
    public_repos: number;
    location: string | null;

}[];
export type ReturnedData = FollowingData | null | undefined;
export function isValidFollowingData(val: unknown): val is FollowingData {
    if (!(val instanceof Array)) return false;
    return true;
}

export function useGitUserFollowersData(name: string) {
    const state = useState<ReturnedData>(undefined);
    const [, setData] = state;
    function getData(numTry = 0) {
        const abort = new AbortController();
        fetch(`https://api.github.com/users/${name}/followers`, {
            signal: abort.signal,
        }).then((res) => {
            if (res.status !== 200) return setData(null);
            res.json()
                .then((data) => {
                    if (isValidFollowingData(data)) setData(data);
                })
                .catch((err) => {
                    if (err.name != "AbortError") return console.error(err);
                    if (numTry < 3) getData(++numTry);
                });
        });
        return abort;
    }
    useEffect(() => {
        const abort = getData();
        return () => abort.abort();
    }, [name]);
    return state;
}
