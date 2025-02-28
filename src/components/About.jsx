import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import { BsPeople } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative lg:mx-1 bg-white py-12">
      <h1 data-aos="fade-down" className="text-4xl font-bold text-center text-[#2F2165]">
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div data-aos="fade-up" className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
          <img 
            className="w-full h-auto rounded-lg shadow-lg object-cover md:h-80 lg:h-full" 
            src="https://expertizo.pk/assets/img/about.jpg" 
            alt="Professional About Us" 
          />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-[#2F2165] md:text-3xl font-semibold">
              Empowering Careers with Future-Ready Skills
            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
              We are dedicated to bridging the gap between ambition and success
              through expert-led mentorship and technology-driven learning experiences.
            </p>
          </div>

          <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
            <div className="bg-[#2F2165] w-fit p-3 md:p-6 rounded text-white">
              <BsPeople size={32} />
            </div>
            <div className="w-full">
              <h2 className="text-[#2F2165] text-xl font-medium">
                The Vernacular Upskilling Edtech
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Explore Our Courses | Elevate Your Career
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
            <div className="bg-[#2F2165] w-fit p-3 md:p-6 rounded text-white">
              <BsPeople size={32} />
            </div>
            <div className="w-full">
              <h2 className="text-[#2F2165] text-xl font-medium">
                Build Your Career, Your Way
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Our learners work at top global companies & startups.
              </p>
            </div>
          </div>

          <p data-aos="zoom-in" className="text-lg mt-5 text-gray-600 primary-font">
            Gain in-demand skills through our industry-relevant courses.
            Choose your program and unlock new career opportunities.
          </p>
          <div className="flex justify-center sm:justify-start items-center mt-10">
            <a href="/contact" className="">
              <CtaButton name={"Get Started"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;