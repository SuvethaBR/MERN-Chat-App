import {createContext, useState, useEffect} from "react";
import api from "../api/users"

const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [username, setUsername] = useState(null)
    const [id, setId] = useState(null)

    useEffect( () => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/profile')
                setId(response.data.userId)
                setUsername(response.data.username)
            }catch(err){
                if(err.response){
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                }else{
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchProfile()
    }, [])

    return (
        <UserContext.Provider value={{
            username, setUsername, id, setId
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext