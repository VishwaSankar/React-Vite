import React, { useEffect, useState } from "react";
import Title from "./title";

const Album = () => {
  const [album, setAlbum] = useState([]);
  const [u,setU]=useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setAlbum(res))
      .catch((err) => console.log(err));
  }, [])  ;

  return (
    <div style={{ fontFamily: "monospace", fontSize: "15px" }}>
      <button onClick={()=>{
        setU(!u)
      }}>Click me</button>
      <p>Hello World!!</p>
      {album.map((data) => (
        <div>
          <Title props={data.title} u={u}/>
        </div>
      ))}
    </div>
  );
};

export default Album;
