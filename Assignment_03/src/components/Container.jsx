const Container = () => {
  return (
    <div
      className="container"
      style={{
        margin: "auto",
        width: "100%",
        height: "auto",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        className="intro"
        style={{
          fontFamily: "Cursive, system-ui, Avenir, Helvetica, Arial, sans-seri",
          fontSize: "1rem",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to the animation world!</h1>
      </div>
      <div
        className="para"
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          margin: "0",
          padding: "0",
          alignContent: "center",
        }}
      >
        <p
          className="para1"
          style={{
            fontSize: "1.5rem",
            color: "white",
            margin: "0",
            padding: "0",
            width: "80%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Welcome to aniMovie, the home of extraordinary animated movies! Here,
          creativity takes center stage, and every frame tells a story that
          captivates hearts and imaginations. Whether you’re a fan of
          adventurous tales, heartfelt journeys, or visually stunning
          experiences, our collection of animated masterpieces is crafted to
          inspire and entertain audiences of all ages. Step into a world where
          stories come to life, one animation at a time.
        </p>
      </div>
      <div
        className="phcontent"
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
          fontFamily: "cursive",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        <div
          className="image"
          style={{
            width: "50%",
            height: "fit-content",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "70px",
          }}
        >
          <img
            src="/src/assets/image1.jpeg"
            style={{
              width: "50%",
              height: "fit-content",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0)",
              padding: "20px",
              margin: "20px",
              border: "1px solid #f0f0f0",
            }}
            alt="Birds"
          />
        </div>
        <div
          className="imgcont"
          style={{
            width: "50%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            padding: "20px",
            marginRight: "40px",
          }}
        >
          <p>
            The Lion King is a timeless animated classic by Disney, released in
            1994. It follows Simba, a lion cub destined to become king, as he
            learns about responsibility, courage, and the circle of life.
            Featuring unforgettable music and stunning visuals, it’s a tale of
            family, loss, and triumph over adversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
