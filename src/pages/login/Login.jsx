import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            Nuevo en Netflix? <b>Sign up Ahora.</b>
          </span>
          <small>
            Esta página está protegida por Google reCAPTCHA para garantizar que
            no seas un bot.<b>Aprende más...</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
