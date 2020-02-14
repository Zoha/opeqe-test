import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
