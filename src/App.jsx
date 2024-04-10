import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ListInfo from "./components/ListInfo";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <div>
      <Header
        toggleMobileNav={toggleMobileNav}
        setToggleMobileNav={setToggleMobileNav}
      />
      <div onClick={() => setToggleMobileNav(false)}>
        <Hero />
        <ListInfo />
        <BottomNav />
        <Footer />
      </div>
    </div>
  );
};

export default App;
