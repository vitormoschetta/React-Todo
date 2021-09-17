import { useContext } from "react";
import { AuthContext } from "../App";

export default function Login() {

  const { user, setUser } = useContext(AuthContext)

  function login() {
    setUser({
      id: '1',
      name: 'vitor'
    })
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
          className="uk-button uk-button-primary uk-align-center uk-button-large uk-width-1-4"
          type="submit"
          onClick={login}
        >
          Login
        </button>
      </div>     
    </div>
  );
}
