import React, { useState } from "react";
import "./report.css";
import Navbar from "../navbar/navbar";
function Search() {
  const [img, setImg] = useState();
  const [cls,setCls] = useState();

  const generateNumber = (min, max) => {
    const num=(Math.floor(Math.random() * (7)));
    setCls(num)
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
        <h3>
          <strong>Upload Image Here 📸</strong>
        </h3>
        <form>
          <input type="file" name="Upload Image" onChange={onImageChange} />
          <button  type="button" onClick={generateNumber}>Search</button>
        </form>
        <img src={img} className='uploadimg' onError={hideImg}/>
      </div>


        <div className="result">
          <h3>Report Details 📜</h3>
          <div className="diacls">
            {cls}

          </div>
        </div>

      </div>
    </>
  );
}

export default Search;

//https://justadudewhohacks.github.io/face-api.js/docs/index.html#getting-started-nodejs
