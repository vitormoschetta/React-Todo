import { User, UserLogin } from "../models/User";
import api from "../services/api";


export default class LoginAux {
    
  userIsLogged(userLocalStorageService: any, setUserContext: any, history: any) {
    let userLocalStorage = userLocalStorageService.getUser()
    if (userLocalStorage as User) {
      setUserContext(userLocalStorage)
      history.push('/todos')
    }
  }


  handleLogin(email: any, password: any, setUserContext: any, userLocalStorageService: any, history: any, setError: any) {

    if (email.trim() === '') {
      return
    }

    let userLogin = new UserLogin(email, password)

    api.post('login', userLogin)
      .then((response) => {
        const { user, accessToken } = response.data
        setUserContext(user)
        userLocalStorageService.setUser(user)
        history.push('/todos')
      })
      .catch((error) => {
        if (error.response) {
          setError({ data: error.response.data, status: error.response.status })
        }
      })
  }

}