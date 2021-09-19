import { FormEvent, useEffect } from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { IUserLocalStorageService } from "../services/UserLocalStorageService";
import { User, UserLogin } from "../models/User";
import api from "../services/api";


export default function Login(props: IUserLocalStorageService) {

  // storage user int the browser and context in memory in the app
  const { userLocalStorageService } = props
  const { setUserContext } = useContext(AuthContext)

  // form control properties
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState({})

  let history = useHistory()

  useEffect(() => {
    userIsLogged(userLocalStorageService, setUserContext, history)
  }, []);

  function login(event: FormEvent) {
    event.preventDefault()
    setSubmit(true)
    handleLogin(email, password, setUserContext, userLocalStorageService, history, setError)
  }

  return (
    <div className="uk-container">
      <form onSubmit={login}>
        <div className="uk-margin">
          <UsernameError submit={submit} username={email.trim()} error={error} />
          <input
            className="uk-input uk-form-width-large uk-form-large"
            type="text"
            placeholder="E-mail"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-form-large"
            type="text"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </div>

        <button
          className="uk-button uk-button-primary uk-button-large uk-width-small"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export function UsernameError(props: any) {

  const { submit, username, error } = props

  if (submit && username === '') {
    return (
      <div className="uk-alert-danger" uk-alert>
        <a className="uk-alert-close" uk-close></a>
        <p>Informe um login!</p>
      </div>
    );
  }

  if (submit && error !== null) {
    return (
      <div className="uk-alert-danger" uk-alert>
        <a className="uk-alert-close" uk-close></a>
        <p>{error.status}: {error.data}</p>
      </div>
    );
  }

  return null;
}


export function userIsLogged(userLocalStorageService: any, setUserContext: any, history: any) {
  let userLocalStorage = userLocalStorageService.getUser()
  if (userLocalStorage as User) {
    setUserContext(userLocalStorage)
    history.push('/todos')
  }
}


export function handleLogin(email: any, password: any, setUserContext: any, userLocalStorageService: any, history: any, setError: any) {

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

