import { ReactNode, createContext } from "react";
import { Data } from "../hooks/getGituser";

export const UserProfile=createContext<Data>({} as Data);
export function UserProfileProvider({children,data}:{children:ReactNode,data:Data}){
    return <UserProfile.Provider value={data}>
        {children}
    </UserProfile.Provider>
}