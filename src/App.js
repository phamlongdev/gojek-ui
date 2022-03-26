import React, { useState, useEffect } from "react";
import { Header, Banner, Section, Footer, Sidebar } from "./components";

function App() {
  const [styleContainer, setStyleContainer] = useState({});

  useEffect(() => {
    setStyleContainer({
      width: "100%",
      display: "flex",
      flexDirection: "column",
    });
  }, []);

  return (
    <div style={styleContainer}>
      <Header />
      <Banner />
      <Section />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
