import { useState } from "react";
import axios from "axios";
import "./login.css";

const url =
  "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      login_id: email,
      password,
    };

    setEmail("");
    setPassword("");

    const response = await axios.post(url, data, { withCredentials: true });
    console.log(response);
  };
  return (
    <>
      <div className="hero">
        <div className="container">
          <h2>login Page</h2>
          <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
