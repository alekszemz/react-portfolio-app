import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* Col 1 */}
            <div className="d-flex">
              <p>City Moscow, Main st. 2021 office #223</p>
            </div>
            {/* Col 2 */}
            <div className="d-flex">
              <a href="tel:555-555-555">+7(960)555-5555</a>
            </div>
            {/* Col 3 */}
            <div className="d-flex">
              <p>some@email.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              {/* Col 1 */}
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>

              {/* Col 2 */}
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              {/* Share button 1 */}
              <FacebookShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              {/* Share button 2 */}
              <TwitterShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              {/* Share button 3 */}
              <RedditShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              {/* Share button 4 */}
              <LinkedinShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
