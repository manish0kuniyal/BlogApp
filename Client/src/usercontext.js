import { Children, createContext, useState } from "react";

export const userContext=createContext()

export function userContextProvider({children}){

    const [userInfo,setUserInfo]=useState({})
return(
<userContext.Provider value={{userInfo,setUserInfo}}>
    {children}
</userContext.Provider>


)
}