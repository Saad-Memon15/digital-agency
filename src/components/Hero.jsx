import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/hero-img.svg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const Hero = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 4,
      y: -80,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    }, []);

  useEffect(() => {
    AOS.init();
  });

  // const [show, setShow] = useState(false);

  // const videoStartHandler = () => {
  //   const video = document.querySelector("#video");
  //   video.currentTime = 0;
  //   video.load();
  //   setShow(true);
  // };

  // const clickHandler = () => {
  //   const video = document.querySelector("#video");
  //   video.pause();
  //   setShow(false);
  // };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#2F2165] md:text-5xl text-3xl font-semibold">
          Empower Your Business with Cutting-Edge Digital Solutions{" "}
        </h1>
        <p className="text-xl mt-5 text-gray-600 primary-font">
          In today’s fast-paced digital world, a strong online presence isn’t
          just an option—it’s a necessity. We specialize in custom website
          development, high-converting eCommerce solutions, and data-driven
          digital marketing to elevate your brand. Whether you need a visually
          stunning website, a Shopify or WordPress store, or a strategic
          marketing campaign, we deliver tailored solutions designed to drive
          growth and maximize ROI. Take the lead in your industry with a
          powerful, conversion-focused online presence.
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#contact" className="">
            <CtaButton name={"Get Started Today"} />
          </a>
          {/* <div
            onClick={() => videoStartHandler()}
            className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
          >
            <VideoBtn name={"Watch Video"} />
          </div> */}
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img ref={myElement} className="w-full animate" src="./images/image.avif" alt="img" />
      </div>

      {/* Adding video */}
      {/* 
      <div className={`${show ? "block" : "hidden"} absolute lg:w-full lg:m-5 lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}>
        <div onClick={()=> clickHandler()} className="absolute lg:right-10 right-2 lg:top-6 top-2 lg:px-3 px-[0.6rem] rounded-s-full lg:text-3xl text-xl font-light bg-zinc-700 rounded-full text-white cursor-pointer">
          x
        </div>
        <video id="video" muted controls autoPlay className="w-[800px] rounded" src={video}></video>
      </div> */}
    </div>
  );
};

export default Hero;
