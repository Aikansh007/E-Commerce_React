import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <div   className="font-small lighten-3 pt-4 footer" >
      <div className="text-center container text-md-left">
        <div className=" row my-4">
          <div className="col-md-4 col-lg-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Great Place to shop
            </h5>
            <p>
             Here You can get all shopping material you are intereted in.
            </p>
            <p>
            Shops are necessary places, where people go to buy their necessary things. 
            Shopping is something which is loved by all of us. It is said that many people find shopping relaxing. 
            I too believe that shopping is a relaxing thing as whenever I get too stressed or tensed.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-2 col-lg-2 ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!">PROJECTS</a>
              </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="#!">BLOG</a>
              </p>
              <p>
                <a href="#!">AWARDS</a>
              </p>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-5 col-lg-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-2 col-lg-2 text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <div className="mt-2  col-12" >
              <p type="button" className="btn-floating btn-small btn-fb">
              <FacebookIcon />
              </p>
              <p type="button" className="btn-floating btn-small btn-tw">
                <TwitterIcon />
              </p>
              <p type="button" className="btn-floating btn-small btn-gplus">
               <InstagramIcon />
              </p>
              <p type="button" className="btn-floating btn-small btn-dribbble">
                <LinkedInIcon />
              </p>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none" />
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        <div fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <p style={{display:"inline"}}> IndiaMart.com </p>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;