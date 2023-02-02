import { ReactNode, createContext } from "react";
import { FollowingData, ReturnedData, useGitUserFollowersData } from "../hooks/getuserFollowing";

export const FollowerContext=createContext<ReturnedData>(undefined);
export function FollowerProvider({children,name}:{children:ReactNode,name:string}){
    const [data] = useGitUserFollowersData(name);
    return <FollowerContext.Provider value={data}>
        {children}
    </FollowerContext.Provider>
}