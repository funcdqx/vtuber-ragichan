import React from "react";
import MyProfile from "../assets/images/ragichan.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={MyProfile} alt="Profile Youtube" className="images-style lightningSlice" />
      <h2 className="text-title">ラギラギ☆ちゃんねる</h2>

      <div className="row">
        <h4>166</h4>
        <p>Subcriber</p>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <h4>Last Video</h4>
            <Link to={"/last-video"} className="link-card">
              Detail
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h4>Populer Video</h4>
            <Link to={"/populer-video"} className="link-card">
              Detail
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <h4>Gallery</h4>
            <Link to={"/gallery"} className="link-card">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
