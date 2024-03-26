import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ListInfo from "./components/ListInfo";

const App = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <div>
      <Header
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      <Hero setToggleMobileNav={setToggleMobileNav} />
      <ListInfo setToggleMobileNav={setToggleMobileNav} />
    </div>
  );
};

export default App;
