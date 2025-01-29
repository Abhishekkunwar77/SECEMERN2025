import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  var [firstName, setFirstname] = useState("");
  var [lastName, setLastname] = useState("");
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    console.log("Event Triggered");
    try {
      const req = await axios.post("https://sece-backend-myk9.onrender.com/signup", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      });
      console.log(req);
      alert(req.data.response);
      if (req.data.signupStatus) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Welcome to Signup Page</h2>
      <form onSubmit={handleSignup}>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <br />
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have account??<a href="/login">Login</a>
      </p>
    </div>
  );
};
export default Signup;