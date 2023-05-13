import React from "react";
import "./Footer.css";
import ScrollUpButton from "react-scroll-up-button";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__backToTop">
        <ScrollUpButton />
        Back to top
      </div>
      <div className="footer__linkContainer">
        <div className="footer__links">
          <div className="footer__linksTitle">Get to Know Us</div>
          <a href="#" className="footer__link">
            Careers
          </a>
          <a href="#" className="footer__link">
            Amazon Newsletter
          </a>
          <a href="#" className="footer__link">
            About Amazon
          </a>
          <a href="#" className="footer__link">
            Accessibility
          </a>
          <a href="#" className="footer__link">
            Sustainability
          </a>
          <a href="#" className="footer__link">
            Press Center
          </a>
          <a href="#" className="footer__link">
            Investor Relations
          </a>
          <a href="#" className="footer__link">
            Amazon Devices
          </a>
          <a href="#" className="footer__link">
            Amazon Science
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__linksTitle">Make Money with Us</div>
          <a href="#" className="footer__link">
            Sell products on Amazon
          </a>
          <a href="#" className="footer__link">
            Sell apps on Amazon
          </a>
          <a href="#" className="footer__link">
            Supply to Amazon
          </a>
          <a href="#" className="footer__link">
            Protect & Build Your Brand
          </a>
          <a href="#" className="footer__link">
            Become an Affiliate
          </a>
          <a href="#" className="footer__link">
            Become a Delivery Driver
          </a>
          <p className="footer__link">Start a package delivery business</p>
          <a href="#" className="footer__link">
            Advertise Your Products
          </a>
          <a href="#" className="footer__link">
            Self-Publish with Us
          </a>
          <a href="#" className="footer__link">
            Host an Amazon Hub
          </a>
          <a href="#" className="footer__link">
            See More Ways to make Money{" "}
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__linksTitle">Amazon Payment Products</div>
          <a href="#" className="footer__link">
            Amazon Rewards Visa Signature Cards
          </a>
          <a href="#" className="footer__link">
            Sell under Amazon Accelerator
          </a>
          <a href="#" className="footer__link">
            Amazon Store Card
          </a>
          <a href="#" className="footer__link">
            Amazon Secured Card
          </a>
          <a href="#" className="footer__link">
            Amazon Business Card
          </a>
          <a href="#" className="footer__link">
            Shop with Points
          </a>
          <a href="#" className="footer__link">
            Credit Card Marketplace
          </a>
          <a href="#" className="footer__link">
            Reload Your Balance
          </a>
          <a href="#" className="footer__link">
            Amazon Currency Converter
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__linksTitle">Let Us Help You</div>
          <a href="#" className="footer__link">
            Amazon and COVID-19{" "}
          </a>
          <a href="#" className="footer__link">
            Your Account
          </a>
          <a href="#" className="footer__link">
            Your Orders
          </a>
          <a href="#" className="footer__link">
            Shipping Rates & Politics
          </a>
          <a href="#" className="footer__link">
            Amazon Prime
          </a>

          <a href="#" className="footer__link">
            Returns & Replacements
          </a>
          <a href="#" className="footer__link">
            Manage Your Content & Devices
          </a>
          <a href="#" className="footer__link">
            Your Recalls & Product Safety Alerts
          </a>
          <a href="#" className="footer__link">
            Help
          </a>
        </div>
      </div>
      <div className="navFooterLine navFooterLinkLine navFooterPadItemLine">
        <span>
          <div className="navFooterLine navFooterLogoLine">
            <a aria-label="Amazon US Home" href="/?ref_=footer_logo">
              <div className="nav-logo-base nav-sprite">
                <img
                  class="footer__logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                ></img>
              </div>
            </a>
          </div>
        </span>
        <span className="icp-container-desktop">
          <div className="navFooterLine">
            {/* <style type="text/css"> #icp-touch-link-language {{display: none}} </style> */}
            <a
              href="/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang"
              aria-label="Choose a language for shopping."
              className="icp-button"
              id="icp-touch-link-language"
            >
              <div className="icp-nav-globe-img-2 icp-button-globe-2">
                {/* <LanguageIcon className="icp-nav-globe-img-2 icp-button-globe-2" /> */}
              </div>
              <span className="icp-color-base">English</span>
              <span className="nav-arrow icp-up-down-arrow"></span>
            </a>
            {/* <style type="text/css"> #icp-touch-link-country {{display: none }} </style> */}
            <a
              href="/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_icp_cp"
              aria-label="Choose a country/region for shopping."
              class="icp-button"
              id="icp-touch-link-country"
            >
              <span className="icp-flag-3 icp-flag-3-us"></span>
              <span className="icp-color-base">United States</span>
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
