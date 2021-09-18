import { FormEvent } from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { IUserService } from "../services/UserService";
import { User } from "../models/User";


export default function Login(props: IUserService) {

  const { userService } = props
  const { user, setUser } = useContext(AuthContext)

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  let history = useHistory()

  function handleLogin(event: FormEvent) {

    event.preventDefault()

    setSubmit(true)

    if (userName.trim() === '') return

    let user = new User('1', userName)

    setUser(user)

    userService.set(user)

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
            onChange={event => setUsername(event.target.value)}
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