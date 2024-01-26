import { useContext, useState } from "react"
import api from "./api/users"
import UserContext from "./context/UserContext"

const RegisterAndLoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext)

    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = isLoginOrRegister === 'register' ? 'register' : 'login';
            const response = await api.post(url, {username, password})
            setLoggedInUsername(username)
            setId(response.data.id)
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

    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handelSubmit}>
                <input className="block w-full rounded-sm p-2 mb-2 border"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className="block w-full rounded-sm p-2 mb-2 border"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    {isLoginOrRegister === 'register' && (
                        <div>
                             Already a member?
                            <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                                <u>Login</u>
                            </button>
                        </div>
                    )}

                    {isLoginOrRegister === 'login' && (
                        <div>
                             Dont have an account?
                            <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                                <u>Register</u>
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default RegisterAndLoginForm