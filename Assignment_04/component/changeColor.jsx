import { useState } from "react";

function ChangeColor() {
 
  const [color, setColor] = useState("black");

  // Function to change the color
  const handleChangeColor = () => {
    
    const colors = ["blue", "green", "red", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);


    if (colors[randomIndex] === color) {
        const nextIndex = (randomIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    } else {
      
      setColor(colors[randomIndex]);
    }
  };

  const handleResetColor = () => {
    setColor("black"); 
  };

  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h1>Color Change</h1>

      <div
        style={{
        
          width: "300px",
          height: "300px",
          backgroundColor: color,
            margin: "0 auto",
          borderRadius: "20px",
          
        }}
      ></div>
      <button
        onClick={handleChangeColor}
        style={{
          marginTop: "20px",
          marginRight: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Change Color
      </button>
      <button
        onClick={handleResetColor}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Reset Color
      </button>
    </div>
  );
}

export default ChangeColor;
