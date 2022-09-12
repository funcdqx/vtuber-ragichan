import React from "react";
import CharacterProfile from "../assets/images/ragi.png";
import Thumbnail1 from "../assets/images/thumbnail-populer-1.jpg";
import Thumbnail2 from "../assets/images/thumbnail-populer-2.jpg";
import Back from "../components/Back";

function PopulerVideo() {
  return (
    <div className="content">
      <Back />

      <img src={CharacterProfile} alt="Character Profile" className="image-character" />

      <h1>Populer Video</h1>
      <div className="content-video">
        <div className="content-video-item">
          <a href="https://www.youtube.com/watch?v=mLwagfQdO38&t=4s" target="_blank" className="thumbnail" rel="noreferrer">
            <img src={Thumbnail1} alt="Thumbnail" className="thumbnail-video" />
          </a>
        </div>
        <div className="content-video-item">
          <a href="https://www.youtube.com/watch?v=Te7SUdoUb8c" target="_blank" className="thumbnail" rel="noreferrer">
            <img src={Thumbnail2} alt="Thumbnail" className="thumbnail-video" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopulerVideo;
