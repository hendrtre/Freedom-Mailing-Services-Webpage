import React, { Component } from "react";
import NavigationComponent from "../navigation/navigation-container"
import Footer from "../Footer/footer"
import { faFeatherAlt, faScroll, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
  render() {
    return (
      <div>
      <NavigationComponent />

      <div className="home">
        <div className="home-content-page-wrapper">
          <div className="blank">
            <p>Welcome to Freedom Mailing Services!</p>
            <p>Made By Trent Hendrickson.</p>
            <p>This hidden text is just for fun and to see if anyone can find this on their own ;)</p>
          </div>
          <div className="ribbon">
              <p>We are partnered with:</p>
              <div className="UCP">Upper Case Printing, Ink.</div>
              {/* <p>We can print your custom forms and envelopes in-house!</p> */}
              <p>For Pricing Quotes, contact us at: (801)-373-2131</p> 
          </div>
          <div className="home-page">
            <h1>"From Your Office to the Post Office"</h1>
            <p>Over 32 years of services, ..... </p>
            <div className="para1">
              <p>
                We specialize in providing the
                individualized, detailed attention your
                city/utility company deserves. Time,
                accuracy and image is essential. The faster and more accurate the statement is
                produced and mailed, the sooner the customer receives and pays their bill. We know
                from experience that cities and utility companies want their statement to reflect their
                individuality. Our pricing and services make it possible for cities/utility companies
                to design their statements to best convey their image and information for their
                residents. Using a custom form allows your image to be prominently promoted and
                residents feel more informed and part of the community. Our focus is to lighten your
                work load so your staff can better serve your customers needs.
              </p>
              <h2>We Specialize In Customization</h2>            
            </div>



            <div className="para2Normal">
              <h3>24 Hour Turn Around. <div className="Guaranteed">Guaranteed!</div></h3>
              <p>
                The services we provide include: computer sorting, laser printing, folding, 
                inserting, post office prep, post office delivery, and postage payment. All of our
                services are guaranteed in a 24 hour turn around. (Starting from the time the file
                is verified and permission is given to print). If you would like a 13 month usage
                graph on each account, this can also be done at a minimal additional fee.
              </p>
            </div>
            <div className="para2Resized">
              <p>
                The services we provide include: computer sorting, laser printing, folding, 
                inserting, post office prep, post office delivery, and postage payment. All of our
                services are guaranteed in a 24 hour turn around. (Starting from the time the file
                is verified and permission is given to print). If you would like a 13 month usage
                graph on each account, this can also be done at a minimal additional fee.
              </p>
              <h3>24 Hour Turn Around. <div className="Guaranteed">Guaranteed!</div></h3>
            </div>


            <div className="para3">
              <p>
                The software that is used to sort and optimize postage discounts is approved
                by the Postal Service and is rated among the very best in the mailing industry. With
                this software we can assign the post office automation requirements including the
                Full Service Barcode, carrier routes and optional endorsement line. This information
                will decrease your postage for full page bills and postcards.
              </p>
              <div className="payFee">
                <h4>Your Postage Savings</h4>
                <h4 className="pay">PAYS OUR FEES!</h4>
              </div>
            </div>
            <div className="para4">
              <p>
                Our computer program will print your entire statement, including the automation
                requirement, <u>without altering your calculations or information.</u>
              </p>
            </div>
            <div className="para5">
              <p>
              Freedom Mailing Services can do all or any portion of your mailing requirements.
              We have the facilities and equipment to do the design, layout, and printing of
              your blank bills and envelopes, assist with newsletters, flyers, water quality reports
              and public information letters.
              </p>
            </div>
            
          </div>
          <div className="home-page-images">
              <FontAwesomeIcon icon={faFeatherAlt} className="feather" />
            <div>
              <FontAwesomeIcon icon={faScroll} className="scroll" />
              <div>
                <FontAwesomeIcon icon={faMailBulk} className="mailBulk" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}
