import { FormEvent, useEffect } from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { IUserService } from "../services/UserService";
import { User, UserLogin } from "../models/User";
import api from "../services/api";


export default function Login(props: IUserService) {

  const { userService } = props
  const { user, setUser } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  let history = useHistory()

  useEffect(() => {
    let localStorage = userService.get()
    if (localStorage as User) {
      setUser(userService.get())
      history.push('/todos')
    }    
  }, []);

  async function handleLogin(event: FormEvent) {

    event.preventDefault()

    setSubmit(true)

    if (email.trim() === '') return

    let userLogin = new UserLogin(email, password);

    const response = await api.post('login', userLogin);
    const { user, accessToken } = response.data;

    setUser(user)

    userService.set(user)

    history.push('/todos')
  }

  return (
    <div className="uk-container">
      <form onSubmit={handleLogin}>
        <div className="uk-margin">
          <UsernameError submit={submit} username={email.trim()} />
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

  const { submit, username } = props

  if (submit && username === '') {
    return (
      <div className="uk-alert-danger" uk-alert>
        <a className="uk-alert-close" uk-close></a>
        <p>Login inválido!</p>
      </div>
    );
  }

  return null;
}