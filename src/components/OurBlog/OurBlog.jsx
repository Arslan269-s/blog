import React from "react";
import "../OurBlog/OurBlog.css";
import blogimage from "../../Assets/images/blog.jpg";
import blogMini from "../../Assets/images/blog-mini.jpg";
const OurBlog = () => {
  return (
    <>
      <div className="our-blogs">
        <div className="row equal row-flex">
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <div className="blog-image">
              <img
                src={blogimage}
                className="blogs-img m-auto d-block"
                alt="img"
              />
              <div className="blog-image-text">
                <p>our Blog</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <div className="blog-details">
              <h4>
                Diagnose Car Problems If You <br />
                Don’t Know Much About Cars
              </h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </p>
            </div>
          </div>
        </div>
        <div className="blog-main">
          <div className="container">
            <div className="blog-mini">
              <div className="row equal row-flex">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="blog-mini-image">
                    <img
                      src={blogMini}
                      className="blog-mini-img m-auto d-block"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="blog-mini-detail">
                    <div className="blog-mini-details-text d-flex justify-content-between align-items-center flex-wrap">
                      <div className="blog-mini-text-left">
                        <span>Posted on October 6th 2021</span>
                        <span>
                          <span>
                            <i className="fa-solid fa-eye px-1"></i>
                          </span>
                          563 views
                        </span>
                      </div>
                      <div className="blog-mini-text-right">
                        <span>FEATURED</span>
                      </div>
                    </div>
                    <div className="blog-mini-details-heading">
                        <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
                        <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
                        <a href="#" className="read-more">Read more <i className="fa-solid fa-arrow-right-long px-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
