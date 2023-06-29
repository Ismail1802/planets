import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [active, setActive] = useState("Mercury");

  return (
    <>
      <Header active={active} setActive={setActive} />
      <Main active={active} />
    </>
  );
}

export default App;
