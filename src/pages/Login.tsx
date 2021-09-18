import { FormEvent } from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../models/User";
import { UserService } from "../services/UserService";


export default function Login() {

  let history = useHistory()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  const { user, setUser } = useContext(AuthContext)

  function handleLogin(event: FormEvent) {

    event.preventDefault()

    setSubmit(true)

    if (userName.trim() === '') return

    const userService = new UserService()

    let user = new User('1', userName)

    setUser(user)

    userService.setLocalStorage(user)

    history.push('/todos')
  }

  return (
    <div className="uk-container">
      <form onSubmit={handleLogin}>
        <div className="uk-margin">
          <UsernameError submit={submit} username={userName.trim()} />
          <input
            className="uk-input uk-form-width-large uk-form-large"
            type="text"
            placeholder="Username"
            onChange={event => setUserName(event.target.value)}
            value={userName}
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
          className="uk-button uk-button-primary uk-button-large uk-width-1-5"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export function UsernameError(props: any) {

  if (props.submit && props.username === '') {
    return (
      <div className="uk-alert-danger" uk-alert>
        <a className="uk-alert-close" uk-close></a>
        <p>Nome de usuário inválido!</p>
      </div>
    );
  }

  return null;
}