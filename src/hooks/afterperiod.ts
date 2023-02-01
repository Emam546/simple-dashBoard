import { useEffect, useState } from "react";

export function useAfterPeriod(time: number) {
    const [state, setState] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setState(true);
        }, time);
        return () => clearTimeout(timeout);
    }, []);
    return state;
}
