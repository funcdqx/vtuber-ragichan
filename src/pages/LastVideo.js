import React from "react";
import Back from "../components/Back";
import CharacterProfile from "../assets/images/ragi.png";
import Thumbnail1 from "../assets/images/thumbnail-latest-1.jpg";
import Thumbnail2 from "../assets/images/thumbnail-latest-2.jpg";

function LastVideo() {
  return (
    <div className="content">
      <Back />
      <img src={CharacterProfile} alt="Character Profile" className="image-character" />

      <h1>Latest Video</h1>
      <div className="content-video">
        <div className="content-video-item">
          <a href="https://www.youtube.com/watch?v=Szsb7LPxk9A" target="_blank" className="thumbnail" rel="noreferrer">
            <img src={Thumbnail1} alt="Thumbnail" className="thumbnail-video" />
          </a>
        </div>
        <div className="content-video-item">
          <a href="https://www.youtube.com/watch?v=8AcjyKP9QCU&t=15797s" target="_blank" className="thumbnail" rel="noreferrer">
            <img src={Thumbnail2} alt="Thumbnail" className="thumbnail-video" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastVideo;
