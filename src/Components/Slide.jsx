import React, { useState, useEffect } from "react";
import "./Login.css"; // Your CSS file

const images = [
  require("../Assets/potato.avif"),
  require("../Assets/watermelon.avif"),
  require("../Assets/poter1.png"),
];

export default function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="formimage"
      style={{
        backgroundImage: `linear-gradient(rgba(1,135,41,0.8), rgba(1,135,41,0.8)), url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1>Welcome</h1>
      <p>Login to your account</p>
    </div>
  );
}
