import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith("@gmail.com")) {
      //validation
      setError("Only gmail address are allowed.");
      return;
    }
    if (password.length <= 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");
    alert("Login successful!");
  };

  return (
    <div
      className="lform"
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        backgroundColor: "#f0f0f0",
        borderRadius: "15px",
        fontFamily: "Times New Roman, Times, serif",
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label> <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: "blue" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
