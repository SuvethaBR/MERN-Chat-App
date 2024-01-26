import Routes from "./Routes";
import { UserProvider } from "./context/UserContext";


function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default App