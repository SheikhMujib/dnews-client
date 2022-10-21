import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h4>
        PLEASE READ THESE TERMS CAREFULLY BEFORE USING ANY DNEWS PRODUCTS OR
        SERVICES, AS THESE TERMS AFFECT YOUR LEGAL RIGHTS AND INCLUDE A CLASS
        ACTION WAIVER.
      </h4>
      <h5>
        Go back to <Link to="/register">Register</Link> page
      </h5>
      <p>
        If you choose to use certain DNEWS products or services displaying or
        otherwise governed by these Terms of Service, including dnews.com (the
        “Site”), DNEWS’s mobile sites and applications, and any of the features of
        the Site, including but not limited to RSS feeds, APIs, and Software (as
        defined below) and other downloads (collectively, the "Services"), you
        will be agreeing to abide by all of the terms and conditions of these
        Terms of Service between you and DNEWS.
      </p>
    </div>
  );
};

export default TermsAndConditions;
