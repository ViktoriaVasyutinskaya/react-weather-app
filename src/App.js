import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
export default function App() {
  return (
    <div>
      <h1 className="mb-1">Weather APP</h1>
      <Weather defaultCity="Amsterdam" />
      <Footer />
    </div>
  );
}
