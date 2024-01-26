import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import UserContext from "./context/UserContext";
import Chatting from './Chatting'

const Routes = () => {
    const {username, id} = useContext(UserContext)

    if(username){
        return <Chatting />
    }

  return (
    <RegisterAndLoginForm />
  )
}

export default Routes