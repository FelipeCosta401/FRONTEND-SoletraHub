import { createContext } from "react";

import { UserAuth } from "../Interfaces/User/Auth"

const token = localStorage.getItem("userToken")

const UserContext = createContext<UserAuth>({
    logged: false,
    token,
    info: {
        name: "",   
        nickname: "",
        email: ""        
    }
})

export default UserContext