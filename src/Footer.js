import React from "react";
import "./Footer.css";
import ScrollUpButton from "react-scroll-up-button";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__backToTop">
        <ScrollUpButton />
        <span className="navFooterBackToTopText">Back to top</span>
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
          <a href="#" className="footer__link">
            Start a package delivery business
          </a>
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
                  className="footer__logo"
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
              className="icp-button"
              id="icp-touch-link-country"
            >
              <span className="icp-flag-3 icp-flag-3-us"></span>
              <span className="icp-color-base">United States</span>
            </a>
          </div>
        </span>
      </div>
      <div
        className="navFooterLine navFooterLinkLine navFooterDescLine"
        role="navigation"
        aria-label="More on Amazon"
      >
        <table
          className="navFooterMoreOnAmazon"
          cellSpacing="0"
          summary="More on Amazon"
        >
          <tbody>
            <tr>
              <td className="navFooterDescItem">
                <a
                  href="https://music.amazon.com?ref=dm_aff_amz_com"
                  className="nav_a"
                >
                  Amazon Music
                  <br />
                  <span className="navFooterDescText">
                    Stream millions
                    <br />
                    of songs
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com"
                  className="nav_a"
                >
                  Amazon Advertising
                  <br />
                  <span className="navFooterDescText">
                    Find, attract, and
                    <br />
                    engage customers
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.6pm.com" className="nav_a">
                  6pm
                  <br />
                  <span className="navFooterDescText">
                    Score deals
                    <br />
                    on fashion brands
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.abebooks.com" className="nav_a">
                  AbeBooks
                  <br />
                  <span className="navFooterDescText">
                    Books, art
                    <br />
                    &amp; collectibles
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.acx.com/" className="nav_a">
                  ACX <br />
                  <span className="navFooterDescText">
                    Audiobook Publishing
                    <br />
                    Made Easy
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://sell.amazon.com/?ld=AZUSSOA-footer-aff&amp;ref_=footer_sell"
                  className="nav_a"
                >
                  Sell on Amazon
                  <br />
                  <span className="navFooterDescText">Start a Selling Account</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="navFooterDescItem">
                <a href="/business?ref_=footer_retail_b2b" className="nav_a">
                  Amazon Business
                  <br />
                  <span className="navFooterDescText">
                    Everything For
                    <br />
                    Your Business
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&amp;ref_=footer_aff_fresh"
                  className="nav_a"
                >
                  Amazon Fresh
                  <br />
                  <span className="navFooterDescText">
                    Groceries &amp; More
                    <br />
                    Right To Your Door
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/gp/browse.html?node=230659011&amp;ref_=footer_amazonglobal"
                  className="nav_a"
                >
                  AmazonGlobal
                  <br />
                  <span className="navFooterDescText">
                    Ship Orders
                    <br />
                    Internationally
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="/services?ref_=footer_services" className="nav_a">
                  Home Services
                  <br />
                  <span className="navFooterDescText">
                    Experienced Pros
                    <br />
                    Happiness Guarantee
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://ignite.amazon.com/?ref=amazon_footer_ignite"
                  className="nav_a"
                >
                  Amazon Ignite
                  <br />
                  <span className="navFooterDescText">
                    Sell your original
                    <br />
                    Digital Educational
                    <br />
                    Resources
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=amazonfooter"
                  className="nav_a"
                >
                  Amazon Web Services
                  <br />
                  <span className="navFooterDescText">
                    Scalable Cloud
                    <br />
                    Computing Services
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="navFooterDescItem">
                <a href="https://www.audible.com" className="nav_a">
                  Audible
                  <br />
                  <span className="navFooterDescText">
                    Listen to Books &amp; Original
                    <br />
                    Audio Performances
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.bookdepository.com" className="nav_a">
                  Book Depository
                  <br />
                  <span className="navFooterDescText">
                    Books With Free
                    <br />
                    Delivery Worldwide
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr"
                  className="nav_a"
                >
                  Box Office Mojo
                  <br />
                  <span className="navFooterDescText">
                    Find Movie
                    <br />
                    Box Office Data
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.comixology.com" className="nav_a">
                  ComiXology
                  <br />
                  <span className="navFooterDescText">
                    Thousands of
                    <br />
                    Digital Comics
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.dpreview.com" className="nav_a">
                  DPReview
                  <br />
                  <span className="navFooterDescText">
                    Digital
                    <br />
                    Photography
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.fabric.com" className="nav_a">
                  Fabric
                  <br />
                  <span className="navFooterDescText">
                    Sewing, Quilting
                    <br />
                    &amp; Knitting
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="navFooterDescItem">
                <a href="https://www.goodreads.com" className="nav_a">
                  Goodreads
                  <br />
                  <span className="navFooterDescText">
                    Book reviews
                    <br />
                    &amp; recommendations
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.imdb.com" className="nav_a">
                  IMDb
                  <br />
                  <span className="navFooterDescText">
                    Movies, TV
                    <br />
                    &amp; Celebrities
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://pro.imdb.com?ref_=amzn_nav_ftr"
                  className="nav_a"
                >
                  IMDbPro
                  <br />
                  <span className="navFooterDescText">
                    Get Info Entertainment
                    <br />
                    Professionals Need
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://kdp.amazon.com" className="nav_a">
                  Kindle Direct Publishing
                  <br />
                  <span className="navFooterDescText">
                    Indie Digital &amp; Print Publishing
                    <br />
                    Made Easy
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/gp/browse.html?node=13234696011&amp;ref_=_gno_p_foot"
                  className="nav_a"
                >
                  Amazon Photos
                  <br />
                  <span className="navFooterDescText">
                    Unlimited Photo Storage
                    <br />
                    Free With Prime
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://videodirect.amazon.com/home/landing"
                  className="nav_a"
                >
                  Prime Video Direct
                  <br />
                  <span className="navFooterDescText">
                    Video Distribution
                    <br />
                    Made Easy
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="navFooterDescItem">
                <a href="https://www.shopbop.com" className="nav_a">
                  Shopbop
                  <br />
                  <span className="navFooterDescText">
                    Designer
                    <br />
                    Fashion Brands
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/gp/browse.html?node=10158976011&amp;ref_=footer_wrhsdls"
                  className="nav_a"
                >
                  Amazon Warehouse
                  <br />
                  <span className="navFooterDescText">
                    Great Deals on
                    <br />
                    Quality Used Products{" "}
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.wholefoodsmarket.com" className="nav_a">
                  Whole Foods Market
                  <br />
                  <span className="navFooterDescText">
                    America’s Healthiest
                    <br />
                    Grocery Store
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.woot.com/" className="nav_a">
                  Woot!
                  <br />
                  <span className="navFooterDescText">
                    Deals and <br />
                    Shenanigans
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.zappos.com" className="nav_a">
                  Zappos
                  <br />
                  <span className="navFooterDescText">
                    Shoes &amp;
                    <br />
                    Clothing
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://ring.com" className="nav_a">
                  Ring
                  <br />
                  <span className="navFooterDescText">
                    Smart Home
                    <br />
                    Security Systems
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td className="navFooterDescItem">
                <a href="https://eero.com/" className="nav_a">
                  eero WiFi
                  <br />
                  <span className="navFooterDescText">
                    Stream 4K Video
                    <br />
                    in Every Room
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://blinkforhome.com/?ref=nav_footer"
                  className="nav_a"
                >
                  Blink
                  <br />
                  <span className="navFooterDescText">
                    Smart Security
                    <br />
                    for Every Home
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="https://shop.ring.com/pages/neighbors-app"
                  className="nav_a"
                >
                  Neighbors App <br />
                  <span className="navFooterDescText">
                    {" "}
                    Real-Time Crime
                    <br />
                    &amp; Safety Alerts
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/gp/browse.html?node=14498690011&amp;ref_=amzn_nav_ftr_swa"
                  className="nav_a"
                >
                  Amazon Subscription Boxes
                  <br />
                  <span className="navFooterDescText">
                    Top subscription boxes – right to your door
                  </span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a href="https://www.pillpack.com" className="nav_a">
                  PillPack
                  <br />
                  <span className="navFooterDescText">Pharmacy Simplified</span>
                </a>
              </td>
              <td className="navFooterDescSpacer"></td>
              <td className="navFooterDescItem">
                <a
                  href="/gp/browse.html?node=12653393011&amp;ref_=footer_usrenew"
                  className="nav_a"
                >
                  Amazon Renewed
                  <br />
                  <span className="navFooterDescText">
                    Like-new products
                    <br />
                    you can trust
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright">
        <ul>
          <li className="nav_first">
            <a
              href="/gp/help/customer/display.html?nodeId=508088&amp;ref_=footer_cou"
              className="nav_a"
            >
              Conditions of Use
            </a>
          </li>
          <li>
            <a
              href="/gp/help/customer/display.html?nodeId=468496&amp;ref_=footer_privacy"
              className="nav_a"
            >
              Privacy Notice
            </a>
          </li>
          <li className="nav_last">
            <a href="/privacyprefs?ref_=footer_iba" className="nav_a">
              Your Ads Privacy Choices
            </a>
          </li>
        </ul>
        <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
      </div>
    </footer>
  );
};

export default Footer;
