import React, { useEffect, useState } from "react";
import blogMini from "../../Assets/images/blog-mini.jpg";
import '../CardBlog/CardBlog.css';
import axios from "axios";
import { Link } from "react-router-dom";
const imagePerRow = 6;

const CardBlog = () => {
  const [myData, setMyData] = useState([]);
  const [next, setNext] = useState(imagePerRow);
  

  useEffect(() => {
    axios
      .get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
      .then((res) => setMyData(res.data));
  });

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
    <div className="container my-5">
      <div className="row row-flex equal">
      {myData?.slice(0, next)?.map((post) => (
        <div className="col-md-4 col-sm-12 col-lg-4 my-2">
        <div className="card-blog">
        <Link to="/cardDetails">
          <div className="card-blog-image">
            <img className="card-blog-img" src={post.Image} alt="img" />
          </div>
          </Link>
          <div className="card-blog-details">
          <div className="card-blog-title d-flex justify-content-between align-items-center flex-wrap">
            <span>Posted on October 6th 2021</span>
            <span>
              <span>
                <i className="fa-solid fa-eye px-1"></i>
              </span>
              563 views
            </span>
          </div>
          <div className="card-blog-heading">
            <h5>{post.Title .slice(0,40)}</h5>
            <p>{post.Subtitle .slice(0, 250)}</p>
          </div>
          </div>
        </div>
        </div>
         ))}      
      </div>
      {next < myData?.length && (
      <button className="btn btn-button" onClick={() => handleMoreImage()}>Load More</button>
      )}
      </div>
    </>
  );
};

export default CardBlog;
