import React from "react";
import ComingSoon from "../component/commingsoon";
import { Navbar2 } from "../component/Navbar/Navbar2";
import Footer2 from "../component/Footer/Footer2";

function page() {
  return (
    <div className="font-poppins">
      <Navbar2 />
      <ComingSoon />
      <Footer2 />
    </div>
  );
}

export default page;
