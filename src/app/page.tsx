"use client";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
      <div
        data-aos-easing="ease-out-cubic"
        data-aos-duration="250"
        data-aos-delay="0"
        className="  "
      >
        <Header />

        <Main />

        <Footer />
      </div>
    </>
  );
}
