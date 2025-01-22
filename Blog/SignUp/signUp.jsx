const SignUpForm = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">
          <h1>Sign Up</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="input">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input">
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <input type="text" placeholder="Mobile Number" />
        </div>
        <div className="input">
          <input type="date" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit-container">
          <div className="submit">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;

// firstname, lastname, DOB, mobilenumber, emailid, password
/* <div
      className="container"
      style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>SignUp</h1>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0,0,0,0)",
        }}
      >
        <label htmlFor="firstName">First Name:</label>
        <input type="text" />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" />
        <br />
        <label htmlFor="phone">Phone no:</label>
        <input type="integer" />
        <br /> <label htmlFor="password">Password:</label>
        <input type="password" />
        <br />
        <button>sign-up</button>
      </form>
    </div>*/
