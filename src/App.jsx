import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const [active, setActive] = useState("Mercury");

  return (
    <>
      <Header active={active} setActive={setActive} />
      <Main active={active} />
      <Footer active={active} />
    </>
  );
}

export default App;
