import React, { useState } from "react";
import "./report.css";
import Navbar from "../navbar/navbar";
function Search() {
  const [img, setImg] = useState();

  const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };

  const INIT_STATE={
      imageURL: img,
      fullDesc: null,

  };
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
          <button>Search</button>
        </form>
        <img src={img} alt="Input" className='uploadimg'/>
      </div>


        <div className="result">
          <h3>Report Details 📜</h3>
        </div>

      </div>
    </>
  );
}

export default Search;

//https://justadudewhohacks.github.io/face-api.js/docs/index.html#getting-started-nodejs
