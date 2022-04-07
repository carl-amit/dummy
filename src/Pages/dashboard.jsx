import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer";

function Dashboard(props) {
  return (
    <>
      <div>This is dashboard page...</div>
      <Link to="/about">About</Link>
      <Footer />
    </>
  );
}

export default Dashboard;
