// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      // data.message contains the image URL
      if (data && data.message) setImage(data.message);
    }

    fetchData();
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>A lovely Dog for you:</h2>
      <img src={image} alt="A Random Dog" />
    </div>
  );
};

export default App;
