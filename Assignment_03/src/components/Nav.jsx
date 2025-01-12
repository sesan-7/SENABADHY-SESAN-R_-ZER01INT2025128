const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        width: "100%",
        height: "150px",
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "2rem",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          width: "40%",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <h1>aniMovie</h1>
      </div>
      <div
        className="nav-links"
        style={{
          width: "40%",
          display: "flex",
          // list-style: "none",
          margin: "0",
          padding: "0",
        }}
      >
        <ul
          className="list"
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <li>
            <a href="about">Home</a>
          </li>
          <li>
            <a href="home">Explore</a>
          </li>
          <li>
            <a href="explore">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
