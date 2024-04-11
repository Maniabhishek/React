import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "defaultUser",
    dummy: "dummy"
})

export default UserContext