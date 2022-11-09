import React, { useState } from "react";
import "./report.css";
import Navbar from "../navbar/navbar";
function Search() {
  const [img, setImg] = useState();
  const [resImg,setRI] = useState();
  const [cls,setCls] = useState();

  const generateNumber = (min, max) => {
    const num=(Math.floor(Math.random() * (7)));
    setCls(num);
    setRI(img);
  };

  const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };

  const INIT_STATE={
      imageURL: img,
      fullDesc: null,

  };

  const hideImg =()=> {
    document.getElementById("uploadimg")
                      .style.display = "none";
   }
  return (
    <>
      <Navbar />
      <div className="reportgen">
      <div className="uploadImageContainer">
        <h2>
          <strong>Enter Details Here 📸</strong>
        </h2>
        <form>
          <input type="file" name="Upload Image" onChange={onImageChange} />
          <button  type="button" onClick={generateNumber}>Search</button>
        </form>
        <img src={img} className='uploadimg' onError={hideImg}/>
      </div>


        <div className="result">
          <h2>Report Details 📜</h2>
          <div className="diacls">
            {cls}
          </div>
          <img src={resImg} className='uploadimg' onError={hideImg}/>
        </div>

      </div>
    </>
  );
}

export default Search;

//https://justadudewhohacks.github.io/face-api.js/docs/index.html#getting-started-nodejs
