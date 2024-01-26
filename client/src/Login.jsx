import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handelLoginSubmit = (e) => {
        e.preventDefault()
        
    }

    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handelLoginSubmit}>
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
                    Login
                </button>
                <div className="text-center mt-2">
                    Don't have an account? 
                    <button>
                        <u>Register</u>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login