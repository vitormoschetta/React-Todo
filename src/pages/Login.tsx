import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../models/User";
import { UserService } from "../services/UserService";


export default function Login() {

  const { user, setUser } = useContext(AuthContext)
  let history = useHistory()
  const userSerice = new UserService()

  function login() {
    let user = new User('1', 'Vitor')
    setUser(user)
    userSerice.setLocalStorage(user)
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
