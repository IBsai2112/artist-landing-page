import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Stairs.css";

const Stairs = ({ children }) => {
  const stairsRef = useRef(null);
  const pageRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairsRef.current, { display: "flex" });

    tl.from(".stair", {
      height: 0,
      stagger: 0.1,
      ease: "power2.inOut",
    });

    tl.to(".stair", {
      y: "100%",
      stagger: 0.1,
      ease: "power2.inOut",
    });

    tl.set(stairsRef.current, { display: "none" });

    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );
  }, [location.pathname]);

  return (
    <>
      {/* STAIRS */}
      <div ref={stairsRef} className="stairs">
        <div className="stair"></div>
        <div className="stair"></div>
        <div className="stair"></div>
        <div className="stair"></div>
        <div className="stair"></div>
      </div>

      {/* PAGE */}
      <div ref={pageRef} className="page-wrapper">
        {children}
      </div>
    </>
  );
};

export default Stairs;
