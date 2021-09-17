import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../App";

export default function Login() {

  const { user, setUser } = useContext(AuthContext)
  let history = useHistory()

  function login() {
    setUser({ id: '1', name: 'vitor' })
    history.push('/todos')
  }

  return (
    <div className="uk-container">
      <div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-form-large uk-align-center"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large uk-form-large uk-align-center"
            type="text"
            placeholder="Password"
          />
        </div>

        <button
          className="uk-button uk-button-primary uk-align-center uk-button-large uk-width-1-5"
          type="submit"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
