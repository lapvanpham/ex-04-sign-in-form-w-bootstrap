import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const signInForm = (
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img
          // className="mb-4"
          src="https://img.indiefolio.com/1200x630/filters:format(webp):fill(transparent)/project/thumb/65b29542bb8d7c490423a2d4737199dc.jpg"
          alt=""
          style={{maxWidth: '100%'}}
        />
        <p>
          New Here? <a href="#">Create an account.</a>
        </p>
        <div className="form-floating">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 1993–2022</p>
      </form>
    </div>
  </div>
);

root.render(<React.StrictMode>{signInForm}</React.StrictMode>);
